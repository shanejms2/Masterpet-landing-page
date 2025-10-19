"use client"

import { useState, KeyboardEvent } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Bot, User, Send, Trash2, Code, Database, AlertCircle } from "lucide-react"
import ReactMarkdown from "react-markdown"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
  sql?: string
  sqlExplanation?: string
  tablesUsed?: string[]
  data?: Record<string, unknown>[]
  columns?: string[]
  error?: boolean
}

export default function AskAIPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const pollJobStatus = async (jobId: string, processingMessageId: string) => {
    const maxAttempts = 30 // 30 attempts * 2 seconds = 60 seconds max
    let attempts = 0

    const poll = async () => {
      try {
        const response = await fetch(`/api/ai/status?job_id=${jobId}`)
        
        if (!response.ok) {
          throw new Error(`Status check failed with status ${response.status}`)
        }

        const data = await response.json()
        
        if (data.status === "completed" && data.result) {
          // Job completed successfully - replace the processing message
          const aiMessage: Message = {
            id: processingMessageId, // Use the same ID to replace the processing message
            role: "assistant",
            content: data.result.analysis || "Query executed successfully.",
            timestamp: new Date(),
            sql: data.result.generated_sql,
            sqlExplanation: data.result.sql_explanation,
            tablesUsed: data.result.tables_used,
            data: data.result.data,
            columns: data.result.execution?.columns,
          }
          setMessages((prev) => prev.map(msg => msg.id === processingMessageId ? aiMessage : msg))
          setIsLoading(false)
          return
        } else if (data.status === "failed") {
          // Job failed - replace the processing message
          const errorMessage: Message = {
            id: processingMessageId, // Use the same ID to replace the processing message
            role: "assistant",
            content: "Sorry, your query failed to process. Please try again with a different question.",
            timestamp: new Date(),
            error: true,
          }
          setMessages((prev) => prev.map(msg => msg.id === processingMessageId ? errorMessage : msg))
          setIsLoading(false)
          return
        } else if (attempts >= maxAttempts) {
          // Timeout after max attempts - replace the processing message
          const timeoutMessage: Message = {
            id: processingMessageId, // Use the same ID to replace the processing message
            role: "assistant",
            content: "Your query is taking longer than expected. Please try again with a simpler question.",
            timestamp: new Date(),
            error: true,
          }
          setMessages((prev) => prev.map(msg => msg.id === processingMessageId ? timeoutMessage : msg))
          setIsLoading(false)
          return
        }

        // Still processing, poll again in 2 seconds
        attempts++
        setTimeout(poll, 2000)
        
      } catch (error) {
        console.error("Error polling job status:", error)
        const errorMessage: Message = {
          id: processingMessageId, // Use the same ID to replace the processing message
          role: "assistant",
          content: `Sorry, I encountered an error checking your query status: ${error instanceof Error ? error.message : "Unknown error"}.`,
          timestamp: new Date(),
          error: true,
        }
        setMessages((prev) => prev.map(msg => msg.id === processingMessageId ? errorMessage : msg))
        setIsLoading(false)
      }
    }

    // Start polling
    poll()
  }

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    const userPrompt = input.trim()
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/ai/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: userPrompt,
          execute: true,
          analyze: true,
          include_data: true,
          max_rows: 10,
        }),
      })

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
      }

      const data = await response.json()

      // Check if we got a job ID for background processing
      if (data.job_id) {
        // Show processing message with just dots
        const processingMessageId = (Date.now() + 1).toString()
        const processingMessage: Message = {
          id: processingMessageId,
          role: "assistant",
          content: "",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, processingMessage])
        
        // Start polling for results
        pollJobStatus(data.job_id, processingMessageId)
        return
      }

      // Handle fallback response
      if (data.fallback_response) {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: data.fallback_response.analysis,
          timestamp: new Date(),
          sql: data.fallback_response.generated_sql,
          sqlExplanation: data.fallback_response.sql_explanation,
          tablesUsed: data.fallback_response.tables_used,
          data: data.fallback_response.data,
          columns: data.fallback_response.columns,
        }
        setMessages((prev) => [...prev, aiMessage])
        setIsLoading(false)
        return
      }

      // Create AI message with the response (immediate response)
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.analysis || data.execution?.message || "Query executed successfully.",
        timestamp: new Date(),
        sql: data.generated_sql,
        sqlExplanation: data.sql_explanation,
        tablesUsed: data.tables_used,
        data: data.data,
        columns: data.execution?.columns,
      }

      setMessages((prev) => [...prev, aiMessage])
      setIsLoading(false)
    } catch (error) {
      console.error("Error querying AI:", error)
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `Sorry, I encountered an error processing your request: ${error instanceof Error ? error.message : "Unknown error"}. Please make sure the API server is running.`,
        timestamp: new Date(),
        error: true,
      }
      setMessages((prev) => [...prev, errorMessage])
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleClearMessages = () => {
    setMessages([])
    setInput("")
  }

  return (
    <div className="flex flex-col h-[calc(100vh-3rem)] bg-gray-900 text-white p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-white">Ask AI</h1>
        {messages.length > 0 && (
          <Button
            onClick={handleClearMessages}
            variant="outline"
            size="sm"
            className="border-gray-700 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Clear Chat
          </Button>
        )}
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto mb-4 space-y-4 pr-2">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-400">
            <Bot className="w-16 h-16 mb-4 opacity-50" />
            <p className="text-lg">Ask me anything to get started!</p>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.role === "assistant" && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
              )}
              <div
                className={`max-w-[85%] rounded-lg p-4 ${
                  message.role === "user"
                    ? "bg-blue-600 text-white"
                    : message.error
                    ? "bg-red-900/30 text-red-200 border border-red-700"
                    : "bg-gray-800 text-gray-100 border border-gray-700"
                }`}
              >
                {message.error && (
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <span className="font-semibold text-red-400">Error</span>
                  </div>
                )}
                
                {/* Analysis/Main Content */}
                {message.content ? (
                  <div className="text-sm leading-relaxed text-gray-100 prose prose-invert prose-sm max-w-none">
                    <ReactMarkdown
                      components={{
                        h1: ({ children }) => <h1 className="text-lg font-bold text-white mb-2">{children}</h1>,
                        h2: ({ children }) => <h2 className="text-base font-bold text-white mb-2">{children}</h2>,
                        h3: ({ children }) => <h3 className="text-sm font-bold text-white mb-2">{children}</h3>,
                        p: ({ children }) => <p className="mb-2 text-gray-100">{children}</p>,
                        strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
                        ul: ({ children }) => <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>,
                        ol: ({ children }) => <ol className="list-decimal list-inside mb-2 space-y-1">{children}</ol>,
                        li: ({ children }) => <li className="text-gray-100">{children}</li>,
                        code: ({ children }) => <code className="bg-gray-700 px-1 py-0.5 rounded text-green-400 text-xs">{children}</code>,
                      }}
                    >
                      {message.content}
                    </ReactMarkdown>
                  </div>
                ) : (
                  // Show only animated dots for processing
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300" />
                  </div>
                )}

                {/* SQL Query Section */}
                {message.sql && (
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                      <Code className="w-4 h-4" />
                      <span>Generated SQL</span>
                    </div>
                    <pre className="bg-gray-900 border border-gray-700 rounded p-3 text-xs overflow-x-auto whitespace-pre-wrap">
                      <code className="text-green-400">{message.sql}</code>
                    </pre>
                    {message.sqlExplanation && (
                      <p className="text-xs text-gray-400 mt-1">{message.sqlExplanation}</p>
                    )}
                    {message.tablesUsed && message.tablesUsed.length > 0 && (
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Database className="w-3 h-3" />
                        <span>Tables: {message.tablesUsed.join(", ")}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Data Table Section */}
                {message.data && message.data.length > 0 && message.columns && (
                  <div className="mt-4 space-y-2">
                    <div className="text-xs font-semibold text-gray-400">Query Results</div>
                    <div className="overflow-x-auto max-h-96 overflow-y-auto">
                      <table className="w-full text-xs border border-gray-700 rounded">
                        <thead className="bg-gray-900 sticky top-0">
                          <tr>
                            {message.columns.map((col, idx) => (
                              <th key={idx} className="px-3 py-2 text-left text-gray-400 font-semibold border-b border-gray-700">
                                {col}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {message.data.map((row, rowIdx) => (
                            <tr key={rowIdx} className="border-b border-gray-700 hover:bg-gray-900/50">
                              {message.columns!.map((col, colIdx) => (
                                <td key={colIdx} className="px-3 py-2 text-gray-300">
                                  {row[col] !== null && row[col] !== undefined ? String(row[col]) : "-"}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                <span className="text-xs opacity-70 mt-3 block">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
              {message.role === "user" && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
          ))
        )}
        {isLoading && (
          <div className="flex gap-3 justify-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
        <div className="flex gap-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything... (Press Enter to send, Shift+Enter for new line)"
            className="min-h-[60px] max-h-[200px] resize-none bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-blue-600"
            disabled={isLoading}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!input.trim() || isLoading}
            className="self-end bg-blue-600 hover:bg-blue-700 text-white"
            size="icon"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Press <kbd className="px-1.5 py-0.5 text-xs font-semibold text-gray-400 bg-gray-900 border border-gray-700 rounded">Enter</kbd> to send, <kbd className="px-1.5 py-0.5 text-xs font-semibold text-gray-400 bg-gray-900 border border-gray-700 rounded">Shift + Enter</kbd> for new line
        </p>
      </div>
    </div>
  )
}
