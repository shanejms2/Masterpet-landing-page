'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// Simple avatar component since it's not available in the UI library
const Avatar = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-primary/10 text-primary text-sm font-medium ${className}`}>
    {children}
  </div>
);
import { MessageCircle, Send } from 'lucide-react';
import { BlogPost } from '@/types/blog';
import { trackBlogComment } from '@/lib/analytics';

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
  postSlug: string;
}

interface CommentSystemProps {
  post: BlogPost;
  className?: string;
}

const CommentSystem = ({ post, className = '' }: CommentSystemProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Load comments from localStorage
    const storageKey = `blog_comments_${post.slug}`;
    const storedComments = localStorage.getItem(storageKey);
    const storedAuthor = localStorage.getItem('blog_comment_author');
    
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
    
    if (storedAuthor) {
      setAuthorName(storedAuthor);
    }
  }, [post.slug]);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.trim() || !authorName.trim()) return;
    
    setIsSubmitting(true);
    
    const comment: Comment = {
      id: Date.now().toString(),
      author: authorName,
      content: newComment.trim(),
      date: new Date().toISOString(),
      postSlug: post.slug,
    };
    
    const updatedComments = [comment, ...comments];
    setComments(updatedComments);
    setNewComment('');
    
    // Save to localStorage
    const storageKey = `blog_comments_${post.slug}`;
    localStorage.setItem(storageKey, JSON.stringify(updatedComments));
    localStorage.setItem('blog_comment_author', authorName);
    
    setIsSubmitting(false);
    
    // Track comment event for analytics
    trackBlogComment(post.meta.title);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="flex items-center gap-2">
        <MessageCircle className="h-5 w-5 text-gray-600" />
        <h3 className="font-lora text-xl font-semibold text-gray-900">
          Comments ({comments.length})
        </h3>
      </div>

      {/* Comment Form */}
      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle className="font-noto-sans text-lg">Leave a Comment</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmitComment} className="space-y-4">
            <div>
                          <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1 font-noto-sans">
              Name *
            </label>
              <input
                type="text"
                id="author"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-noto-sans"
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
                          <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1 font-noto-sans">
              Comment *
            </label>
              <Textarea
                id="comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Share your thoughts..."
                className="min-h-[100px] resize-none font-noto-sans"
                required
              />
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting || !newComment.trim() || !authorName.trim()}
              className="flex items-center gap-2 font-noto-sans"
            >
              <Send className="h-4 w-4" />
              {isSubmitting ? 'Posting...' : 'Post Comment'}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Comments List */}
      {comments.length > 0 ? (
        <div className="space-y-4">
          {comments.map((comment) => (
            <Card key={comment.id} className="border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Avatar>
                    {comment.author.charAt(0).toUpperCase()}
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-noto-sans font-semibold text-gray-900">
                        {comment.author}
                      </span>
                      <span className="text-xs text-gray-500">
                        {formatDate(comment.date)}
                      </span>
                    </div>
                    <p className="font-noto-sans text-gray-700 leading-relaxed">
                      {comment.content}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="border-gray-200">
          <CardContent className="p-6 text-center">
            <MessageCircle className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="font-noto-sans text-gray-500">
              No comments yet. Be the first to share your thoughts!
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CommentSystem;
