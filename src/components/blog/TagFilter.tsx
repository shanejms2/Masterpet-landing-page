'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TagFilterProps {
  tags: string[];
  selectedTags?: string[];
  onTagChange: (tags: string[]) => void;
  className?: string;
}

const TagFilter = ({ 
  tags, 
  selectedTags = [], 
  onTagChange, 
  className = '' 
}: TagFilterProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagChange(selectedTags.filter(t => t !== tag));
    } else {
      onTagChange([...selectedTags, tag]);
    }
  };

  const clearAllTags = () => {
    onTagChange([]);
  };

  const removeTag = (tagToRemove: string) => {
    onTagChange(selectedTags.filter(tag => tag !== tagToRemove));
  };

  if (tags.length === 0) return null;

  return (
    <div className={cn('space-y-4', className)}>
      {/* Selected Tags Display */}
      {selectedTags.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">
              Active Filters ({selectedTags.length})
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllTags}
              className="text-gray-500 hover:text-gray-700"
            >
              Clear all
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedTags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 cursor-pointer"
              >
                {tag}
                <button
                  onClick={() => removeTag(tag)}
                  className="ml-1 hover:bg-primary/20 rounded-full p-0.5"
                  aria-label={`Remove ${tag} filter`}
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Tag Filter Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">
              Filter by Tags
            </span>
          </div>
          {tags.length > 8 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-500 hover:text-gray-700"
            >
              {isExpanded ? 'Show less' : `Show all (${tags.length})`}
            </Button>
          )}
        </div>

        <div className={cn(
          'flex flex-wrap gap-2',
          !isExpanded && tags.length > 8 && 'max-h-20 overflow-hidden'
        )}>
          {tags.slice(0, isExpanded ? tags.length : 8).map((tag) => (
            <Badge
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              className={cn(
                'cursor-pointer transition-colors hover:bg-primary/10',
                selectedTags.includes(tag) 
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                  : 'hover:border-primary/50'
              )}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TagFilter;
