import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Upload, Move } from 'lucide-react';

interface ImageUploadProps {
  currentImage: string;
  petName: string;
  petParent: string;
  onImageChange: (imageUrl: string) => void;
}

export function ImageUpload({ currentImage, petName, petParent, onImageChange }: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [objectPosition, setObjectPosition] = useState({ x: 50, y: 50 });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isAdjusting, setIsAdjusting] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      await handleImageUpload(file);
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await handleImageUpload(file);
    }
  };

  const handleImageUpload = async (file: File) => {
    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const sanitizedPetName = petName.replace(/[^a-zA-Z0-9]/g, '');
      const sanitizedParentName = petParent.replace(/[^a-zA-Z0-9]/g, '');
      const fileName = `${sanitizedPetName}_${sanitizedParentName}_${timestamp}${file.name.substring(file.name.lastIndexOf('.'))}`;

      const formData = new FormData();
      formData.append('file', file);
      formData.append('fileName', fileName);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');

      const data = await response.json();
      onImageChange(data.imageUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
      // You might want to show a toast notification here
    }
  };

  return (
    <div className="space-y-4">
      <div
        className={`relative w-48 h-48 rounded-full overflow-hidden border-2 ${
          isDragging ? 'border-[#1b1582] bg-[#bfe5fb]/50' : 'border-[#bfe5fb]'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {currentImage ? (
          <img
            src={currentImage}
            alt="Pet Photo"
            className="absolute w-full h-full object-cover"
            style={{ 
              objectPosition: `${objectPosition.x}% ${objectPosition.y}%`,
              cursor: isAdjusting ? 'move' : 'pointer'
            }}
            onClick={() => fileInputRef.current?.click()}
            crossOrigin="anonymous"
          />
        ) : (
          <div 
            className="w-full h-full flex flex-col items-center justify-center text-[#1b1582] cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="w-8 h-8 mb-2" />
            <p className="text-sm text-center">
              Click or drag image<br />to upload
            </p>
          </div>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileSelect}
        />
      </div>

      {currentImage && (
        <div className="space-y-2">
          <Button
            type="button"
            onClick={() => setIsAdjusting(!isAdjusting)}
            variant="outline"
            className="w-full text-[#1b1582]"
          >
            <Move className="w-4 h-4 mr-2" />
            {isAdjusting ? 'Done Adjusting' : 'Adjust Image Position'}
          </Button>

          {isAdjusting && (
            <div className="space-y-4 p-4 bg-white rounded-lg">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Horizontal Position</label>
                <Slider
                  value={[objectPosition.x]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={([value]) => setObjectPosition(prev => ({ ...prev, x: value }))}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Vertical Position</label>
                <Slider
                  value={[objectPosition.y]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={([value]) => setObjectPosition(prev => ({ ...prev, y: value }))}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
} 