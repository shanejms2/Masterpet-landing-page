'use client';

import React, { useCallback, useState } from 'react';
import { useDropzone, FileRejection, DropzoneOptions } from 'react-dropzone';
import Image from 'next/image';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Move } from 'lucide-react';

interface ImageUploadProps {
  currentImage: string;
  petName: string;
  petParent: string;
  onImageChange: (imageUrl: string) => void;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ currentImage, petName, petParent, onImageChange }) => {
  const [objectPosition, setObjectPosition] = useState({ x: 50, y: 50 });
  const [isAdjusting, setIsAdjusting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(currentImage || null);
  const [objectFit, setObjectFit] = useState<'contain' | 'cover'>('cover');

  const handleUpload = useCallback(async (file: File) => {
    try {
      setIsUploading(true);
      
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

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to upload image');
      }

      setPreview(data.imageUrl);
      onImageChange(data.imageUrl);
      toast.success('Image uploaded successfully');
    } catch (error) {
      console.error('Upload error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to upload image');
    } finally {
      setIsUploading(false);
    }
  }, [onImageChange, petName, petParent]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'image/webp': ['.webp']
    },
    maxSize: 5 * 1024 * 1024, // 5MB
    multiple: false,
    onDrop: async (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        await handleUpload(acceptedFiles[0]);
      }
    },
    onDropRejected: (fileRejections: FileRejection[]) => {
      const error = fileRejections[0]?.errors[0];
      if (error) {
        switch (error.code) {
          case 'file-too-large':
            toast.error('File is too large. Maximum size is 5MB');
            break;
          case 'file-invalid-type':
            toast.error('Invalid file type. Only JPEG, PNG and WebP images are allowed');
            break;
          default:
            toast.error('Error uploading file');
        }
      }
    }
  } as DropzoneOptions);

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`
          border-2 border-dashed rounded-lg p-6 text-center cursor-pointer
          transition-colors duration-200 ease-in-out
          ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}
          ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        <input {...getInputProps()} />
        {isUploading ? (
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            <p className="text-sm text-gray-500">Uploading...</p>
          </div>
        ) : preview ? (
          <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden">
            <Image
              src={preview}
              alt="Preview"
              fill
              className={`rounded-full transition-all duration-200 object-${objectFit}`}
              style={{ objectPosition: `${objectPosition.x}% ${objectPosition.y}%` }}
              sizes="(max-width: 768px) 192px, 192px"
            />
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-sm text-gray-500">
              {isDragActive
                ? 'Drop the image here'
                : 'Drag and drop an image here, or click to select'}
            </p>
            <p className="text-xs text-gray-400">
              Supported formats: JPEG, PNG, WebP (max 5MB)
            </p>
          </div>
        )}
      </div>

      {preview && (
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
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-gray-700">Image Fit</label>
                  <Button
                    type="button"
                    onClick={() => setObjectFit(prev => prev === 'contain' ? 'cover' : 'contain')}
                    variant="outline"
                    size="sm"
                    className="text-xs"
                  >
                    {objectFit === 'contain' ? 'Show All' : 'Fill Space'}
                  </Button>
                </div>
              </div>
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
}; 