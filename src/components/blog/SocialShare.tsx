'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Share2, 
  Copy, 
  Check, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Mail, 
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { BlogPost } from '@/types/blog';
import { trackBlogShare } from '@/lib/analytics';

interface SocialShareProps {
  post: BlogPost;
  className?: string;
}

const SocialShare = ({ post, className = '' }: SocialShareProps) => {
  const [copied, setCopied] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const postUrl = typeof window !== 'undefined' ? window.location.href : '';
  const postTitle = post.meta.title;
  const postDescription = post.meta.description;

  const shareData = {
    title: postTitle,
    text: postDescription,
    url: postUrl,
  };

  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'hover:bg-blue-500 hover:text-white',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}&quote=${encodeURIComponent(postTitle)}`,
    },
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'hover:bg-sky-500 hover:text-white',
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(postTitle)}&url=${encodeURIComponent(postUrl)}`,
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'hover:bg-blue-600 hover:text-white',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`,
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'hover:bg-green-500 hover:text-white',
      href: `https://wa.me/?text=${encodeURIComponent(`${postTitle} ${postUrl}`)}`,
    },
    {
      name: 'Email',
      icon: Mail,
      color: 'hover:bg-gray-500 hover:text-white',
      href: `mailto:?subject=${encodeURIComponent(postTitle)}&body=${encodeURIComponent(`${postDescription}\n\nRead more: ${postUrl}`)}`,
    },
  ];

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.log('Error sharing:', error);
        setShowShareMenu(true);
      }
    } else {
      setShowShareMenu(true);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(postUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.log('Error copying to clipboard:', error);
    }
  };

  const handleSocialShare = (href: string, platform: string) => {
    window.open(href, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');
    trackBlogShare(platform, postTitle);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Main Share Button */}
      <Button
        onClick={handleNativeShare}
        variant="outline"
        className="flex items-center gap-2 font-noto-sans"
        aria-label="Share this post"
      >
        <Share2 className="h-4 w-4" />
        Share
      </Button>

      {/* Share Menu */}
      {showShareMenu && (
        <Card className="absolute top-full left-0 mt-2 w-64 z-50 shadow-lg border-gray-200">
          <CardContent className="p-4">
            <div className="space-y-3">
              {/* Social Platforms */}
              <div className="grid grid-cols-3 gap-2">
                {socialPlatforms.map((platform) => (
                  <Button
                    key={platform.name}
                    variant="ghost"
                    size="sm"
                    className={`flex flex-col items-center gap-1 p-2 h-auto ${platform.color} transition-colors`}
                    onClick={() => handleSocialShare(platform.href, platform.name)}
                    aria-label={`Share on ${platform.name}`}
                  >
                    <platform.icon className="h-4 w-4" />
                    <span className="text-xs font-noto-sans">{platform.name}</span>
                  </Button>
                ))}
              </div>

              {/* Copy Link */}
              <div className="pt-2 border-t border-gray-200">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full flex items-center gap-2 justify-start"
                  onClick={handleCopyLink}
                  aria-label="Copy link to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-green-500 font-noto-sans">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span className="font-noto-sans">Copy Link</span>
                    </>
                  )}
                </Button>
              </div>

              {/* Direct Link */}
              <div className="pt-2 border-t border-gray-200">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full flex items-center gap-2 justify-start"
                  onClick={() => window.open(postUrl, '_blank')}
                  aria-label="Open link in new tab"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="font-noto-sans">Open Link</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Backdrop to close menu */}
      {showShareMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowShareMenu(false)}
        />
      )}
    </div>
  );
};

export default SocialShare;
