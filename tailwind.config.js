module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Gliker', 'sans-serif'],
        body: ['Fractul', 'sans-serif'],
        fractul: ['Fractul', 'sans-serif'],
        // Blog-specific fonts
        'noto-sans': ['Noto Sans', 'Arial', 'sans-serif'],
        'lora': ['Lora', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          blue: '#06018D',
          green: '#A2ED4A',
        },
        // Semantic color for the main background, uses CSS variable for easy theming
        background: 'var(--background)',
        // Semantic color for special sections, uses CSS variable for easy theming
        'section-background': 'var(--section-background)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#333', // Dark gray for body text
            lineHeight: '1.6',
            fontSize: '16px', // 16px base size
            
            // Headings - Lora font
            h1: {
              fontFamily: 'Lora, Georgia, serif',
              color: '#222', // Dark neutral for headings
              fontWeight: '700',
              fontSize: '42px', // 42px for H1
              lineHeight: '1.2',
              marginTop: '2.5em',
              marginBottom: '1.2em',
              borderBottom: 'none',
              paddingBottom: '0',
            },
            h2: {
              fontFamily: 'Lora, Georgia, serif',
              color: '#222',
              fontWeight: '600',
              fontSize: '32px', // 32px for H2
              lineHeight: '1.25',
              marginTop: '2.5em',
              marginBottom: '1em',
            },
            h3: {
              fontFamily: 'Lora, Georgia, serif',
              color: '#222',
              fontWeight: '600',
              fontSize: '24px', // 24px for H3
              lineHeight: '1.3',
              marginTop: '2.5em',
              marginBottom: '0.75em',
            },
            h4: {
              fontFamily: 'Lora, Georgia, serif',
              color: '#222',
              fontWeight: '600',
              fontSize: '20px',
              lineHeight: '1.3',
              marginTop: '2em',
              marginBottom: '0.5em',
            },
            
            // Paragraphs - Noto Sans font
            p: {
              fontFamily: 'Noto Sans, Arial, sans-serif',
              marginTop: '0',
              marginBottom: '1.2em', // 1.2em spacing after paragraphs
              lineHeight: '1.6',
              fontSize: '16px',
              fontWeight: '400',
              color: '#333',
            },
            
            // Lists - Noto Sans font
            ul: {
              fontFamily: 'Noto Sans, Arial, sans-serif',
              listStyleType: 'disc',
              paddingLeft: '2rem',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            ol: {
              fontFamily: 'Noto Sans, Arial, sans-serif',
              listStyleType: 'decimal',
              paddingLeft: '2rem',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            li: {
              fontFamily: 'Noto Sans, Arial, sans-serif',
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
              lineHeight: '1.6',
              color: '#333',
            },
            'li::marker': {
              color: '#3b82f6', // Brand accent color
            },
            
            // Links
            a: {
              color: '#3b82f6', // Brand accent color
              textDecoration: 'none',
              fontWeight: '400',
              '&:hover': {
                textDecoration: 'underline',
                textDecorationThickness: '1px',
              },
            },
            
            // Strong and emphasis
            strong: {
              fontFamily: 'Noto Sans, Arial, sans-serif',
              color: '#222',
              fontWeight: '600',
            },
            em: {
              fontFamily: 'Lora, Georgia, serif',
              color: '#222',
              fontStyle: 'italic',
            },
            
            // Blockquotes - Noto Sans for pull quotes
            blockquote: {
              fontFamily: 'Noto Sans, Arial, sans-serif',
              borderLeftWidth: '4px',
              borderLeftColor: '#3b82f6',
              backgroundColor: '#f8fafc',
              padding: '1.5rem',
              borderRadius: '0 0.5rem 0.5rem 0',
              fontStyle: 'normal',
              marginTop: '2rem',
              marginBottom: '2rem',
              color: '#333',
              fontSize: '18px', // Slightly larger for pull quotes
              fontWeight: '600',
            },
            
            // Code
            code: {
              fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
              backgroundColor: '#f1f5f9',
              color: '#222',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              fontSize: '14px',
              fontWeight: '400',
            },
            pre: {
              backgroundColor: '#1e293b',
              color: '#f8fafc',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              overflowX: 'auto',
              marginTop: '2rem',
              marginBottom: '2rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            },
            
            // Images
            img: {
              borderRadius: '0.5rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              marginTop: '2rem',
              marginBottom: '2rem',
              border: '1px solid #e2e8f0',
            },
            
            // Horizontal rules
            hr: {
              borderColor: '#e2e8f0',
              marginTop: '3rem',
              marginBottom: '3rem',
              borderWidth: '1px',
            },
            
            // Tables
            table: {
              fontFamily: 'Noto Sans, Arial, sans-serif',
              borderCollapse: 'collapse',
              width: '100%',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            th: {
              fontFamily: 'Noto Sans, Arial, sans-serif',
              border: '1px solid #cbd5e1',
              backgroundColor: '#f8fafc',
              padding: '0.75rem',
              textAlign: 'left',
              fontWeight: '600',
              color: '#222',
            },
            td: {
              fontFamily: 'Noto Sans, Arial, sans-serif',
              border: '1px solid #cbd5e1',
              padding: '0.75rem',
              color: '#333',
            },
            
            // Definition lists
            dl: {
              fontFamily: 'Noto Sans, Arial, sans-serif',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            dt: {
              fontFamily: 'Noto Sans, Arial, sans-serif',
              fontWeight: '600',
              color: '#222',
              marginBottom: '0.5rem',
            },
            dd: {
              fontFamily: 'Noto Sans, Arial, sans-serif',
              color: '#333',
              marginLeft: '1rem',
              marginBottom: '1rem',
            },
            
            // Captions and small text
            small: {
              fontFamily: 'Noto Sans, Arial, sans-serif',
              fontSize: '14px',
              lineHeight: '1.4',
              color: '#666',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}; 