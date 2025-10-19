'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

interface BlogNewsletterProps {
  className?: string;
}

const BlogNewsletter = ({ className = '' }: BlogNewsletterProps) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically make an API call to your newsletter service
      // For now, we'll simulate success
      setStatus('success');
      setMessage('Thank you for subscribing! Check your email for confirmation.');
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <Card className={`bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 ${className}`}>
      <CardHeader className="text-center">
        <div className="flex justify-center mb-2">
          <Mail className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-2xl">Stay Updated</CardTitle>
        <p className="text-muted-foreground">
          Get the latest pet grooming tips, customer stories, and exclusive offers delivered to your inbox.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-center"
              disabled={status === 'loading'}
            />
            {status === 'error' && (
              <div className="flex items-center gap-2 text-sm text-destructive">
                <AlertCircle className="h-4 w-4" />
                {message}
              </div>
            )}
            {status === 'success' && (
              <div className="flex items-center gap-2 text-sm text-green-600">
                <CheckCircle className="h-4 w-4" />
                {message}
              </div>
            )}
          </div>
          
          <Button 
            type="submit" 
            className="w-full" 
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe to Newsletter'}
          </Button>
          
          <div className="text-xs text-muted-foreground text-center space-y-1">
            <p>✓ Weekly pet care tips</p>
            <p>✓ Exclusive grooming offers</p>
            <p>✓ Customer success stories</p>
            <p>✓ No spam, unsubscribe anytime</p>
          </div>
        </form>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge variant="outline" className="text-xs font-noto-sans">5,000+ subscribers</Badge>
            <Badge variant="outline" className="text-xs font-noto-sans">Weekly updates</Badge>
            <Badge variant="outline" className="text-xs font-noto-sans">Free content</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogNewsletter;
