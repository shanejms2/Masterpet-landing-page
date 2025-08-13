'use client';

import Image from 'next/image';
import { BlogPost } from '@/types/blog';

interface SocialMediaPreviewProps {
  post: BlogPost;
  className?: string;
}

const SocialMediaPreview = ({ post, className = '' }: SocialMediaPreviewProps) => {
  return (
    <div className={`relative w-full max-w-[1200px] h-[630px] bg-gradient-to-br from-brand-blue to-brand-green rounded-lg overflow-hidden shadow-xl ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/brand_assets/Pattern/MP_Artboard%201.png')] bg-repeat opacity-20" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/brand_assets/Logo-Mark/White(black_shadow)/MP_LogoMark_white.png"
              alt="Masterpet Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <div>
              <h2 className="font-fractul text-white text-lg font-bold">Masterpet Blog</h2>
              <p className="font-body text-white/80 text-sm">Pet Care, Mastered.</p>
            </div>
          </div>
          
          <div className="text-right">
            <p className="font-noto-sans text-white/80 text-sm">
              {new Date(post.meta.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 flex items-center">
          <div className="max-w-3xl">
            <h1 className="font-lora text-white text-4xl md:text-5xl font-bold leading-tight mb-6">
              {post.meta.title}
            </h1>
            <p className="font-noto-sans text-white/90 text-xl leading-relaxed">
              {post.meta.description}
            </p>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="font-noto-sans text-white text-sm font-medium">
                  {post.meta.author.charAt(0).toUpperCase()}
                </span>
              </div>
              <span className="font-noto-sans text-white/90">{post.meta.author}</span>
            </div>
            
            {post.meta.tags && post.meta.tags.length > 0 && (
              <div className="flex items-center gap-2">
                <span className="font-noto-sans text-white/70 text-sm">Tags:</span>
                <div className="flex gap-1">
                  {post.meta.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/20 rounded-full text-white text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="text-right">
            <p className="font-noto-sans text-white/70 text-sm">
              Read more at masterpet.co.in
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-8 right-8 opacity-20">
        <Image
          src="/brand_assets/Mascot/bothwaving/MP_Mascot_bothwaving_white.png"
          alt="Masterpet Mascots"
          width={120}
          height={60}
          className="w-30 h-15"
        />
      </div>
    </div>
  );
};

export default SocialMediaPreview;
