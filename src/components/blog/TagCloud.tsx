'use client';

import { Badge } from '@/components/ui/badge';
import { TagCloudProps } from '@/types/blog';

const TagCloud = ({ tags, selectedTags = [], onTagClick, className = '' }: TagCloudProps) => {
  if (tags.length === 0) {
    return null;
  }

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => {
        const isSelected = selectedTags.includes(tag);
        
        return (
          <Badge
            key={tag}
            variant={isSelected ? "default" : "outline"}
            className={`cursor-pointer text-xs font-noto-sans ${
              isSelected 
                ? 'bg-primary text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => onTagClick(tag)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onTagClick(tag);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`${isSelected ? 'Remove' : 'Add'} tag: ${tag}`}
          >
            {tag}
          </Badge>
        );
      })}
    </div>
  );
};

export default TagCloud;
