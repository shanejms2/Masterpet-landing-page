'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import html2canvas from 'html2canvas';
import { Button } from '@/components/ui/button';
import { Download, Edit2, Save, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { GroomingForm } from '@/components/grooming/grooming-form';
import { LoyaltyPoints } from '@/components/grooming/loyalty-points';
import { PetDetails } from '@/components/grooming/pet-details';
import { Footer } from '@/components/grooming/footer';
import { ImageUpload } from '@/components/grooming/image-upload';

// Types for our form data
export type PetDetailsType = {
  petName: string;
  petParent: string;
  breed: string;
  gender: string;
  age: string;
  birthday?: string;
  package: string;
  imageUrl: string;
};

export type LoyaltyPointsType = {
  currentPoints: number;
  lifetimePoints: number;
};

export default function GroomingCheckPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [reportDate, setReportDate] = useState(new Date().toISOString().split('T')[0]);
  const popupRef = useRef<HTMLDivElement | null>(null);
  
  // Example initial data - this could come from an API or form submission
  const [petDetails, setPetDetails] = useState<PetDetailsType>({
    petName: "Chacko",
    petParent: "Ammini",
    breed: "Beagle",
    gender: "Male",
    age: "5 years",
    birthday: "",
    package: "Mini groom",
    imageUrl: "/pet-image.jpg"
  });

  const [loyaltyPoints, setLoyaltyPoints] = useState<LoyaltyPointsType>({
    currentPoints: 150,
    lifetimePoints: 1240
  });

  const [selectedOptions, setSelectedOptions] = useState<Record<string, string | string[]>>({
    'Coat/Skin': ['healthy'],
    'Ears': ['healthy'],
    'Eyes': ['healthy'],
    'Teeth': ['healthy'],
    'Ticks': 'none',
    'Fleas': 'none'
  });
  const [groomerComments, setGroomerComments] = useState('');

  // Format the report date
  const formattedReportDate = new Date(reportDate).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const isFormValid = () => {
    return Object.entries(selectedOptions).every(([, value]) => {
      if (Array.isArray(value)) {
        return value.length > 0;
      }
      return value !== '';
    });
  };

  const handleDownloadImage = useCallback(async () => {
    const element = document.getElementById('grooming-report');
    if (!element) return;

    try {
      // Wait for all images to load
      const images = element.getElementsByTagName('img');
      await Promise.all(Array.from(images).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
        });
      }));

      const canvas = await html2canvas(element, {
        scale: 4,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#d9eefd',
        logging: true,
        imageTimeout: 0,
        width: element.offsetWidth,
        height: element.offsetHeight,
        windowWidth: element.offsetWidth,
        windowHeight: element.offsetHeight,
        onclone: (clonedDoc) => {
          const clonedElement = clonedDoc.getElementById('grooming-report');
          if (clonedElement) {
            clonedElement.style.width = `${element.offsetWidth}px`;
            clonedElement.style.height = `${element.offsetHeight}px`;
          }
        },
        x: 0,
        y: 0,
        scrollX: 0,
        scrollY: 0,
        foreignObjectRendering: false,
        removeContainer: true
      });

      const link = document.createElement('a');
      link.download = `${petDetails.petName}-grooming-report-${reportDate}.png`;
      link.href = canvas.toDataURL('image/png', 1.0);
      link.click();
    } catch (error) {
      console.error('Error generating image:', error);
    }
  }, [petDetails.petName, reportDate]);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsEditing(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Keyboard shortcut handler
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 's') {
        event.preventDefault();
        if (isEditing) {
          setIsEditing(false);
        } else if (isFormValid()) {
          handleDownloadImage();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isEditing, isFormValid, handleDownloadImage]);

  const handleFormChange = (options: Record<string, string | string[]>, comments: string) => {
    setSelectedOptions(options);
    setGroomerComments(comments);
  };

  const handlePetDetailsChange = (field: keyof PetDetailsType, value: string) => {
    setPetDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLoyaltyPointsChange = (field: keyof LoyaltyPointsType, value: string) => {
    setLoyaltyPoints(prev => ({
      ...prev,
      [field]: parseInt(value) || 0
    }));
  };

  return (
    <main className="min-h-screen bg-[#d9eefd] pb-20">
      {isEditing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div ref={popupRef} className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#1b1582]">Edit Details</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">
                  Press {navigator.platform.includes('Mac') ? '⌘' : 'Ctrl'}+S to save
                </span>
                <button onClick={() => setIsEditing(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg text-[#1b1582] mb-2">Pet Image</h3>
              <div className="flex flex-col items-center gap-2">
                <p className="text-sm text-gray-500 mb-2">
                  Click the image or drag a new photo to upload
                </p>
                <ImageUpload
                  currentImage={petDetails.imageUrl}
                  petName={petDetails.petName}
                  petParent={petDetails.petParent}
                  onImageChange={(imageUrl) => handlePetDetailsChange('imageUrl', imageUrl)}
                />
              </div>

              <h3 className="font-bold text-lg text-[#1b1582] mb-2">Report Date</h3>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">
                  Report Date
                </label>
                <Input
                  type="date"
                  value={reportDate}
                  onChange={(e) => setReportDate(e.target.value)}
                  className="border-gray-300"
                />
              </div>

              <h3 className="font-bold text-lg text-[#1b1582] mt-6 mb-2">Pet Details</h3>
              {Object.entries(petDetails)
                .filter(([key]) => key !== 'imageUrl')
                .map(([key, value]) => (
                <div key={key} className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                    {key === 'birthday' && ' (Optional)'}
                  </label>
                  {key === 'birthday' ? (
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Input
                          type="text"
                          onFocus={(e) => e.target.type = 'date'}
                          onBlur={(e) => {
                            if (!e.target.value) {
                              e.target.type = 'text'
                            }
                          }}
                          value={value}
                          onChange={(e) => handlePetDetailsChange(key as keyof PetDetailsType, e.target.value)}
                          className="border-gray-300 w-full text-gray-500"
                          placeholder="mm/dd/yyyy"
                        />
                      </div>
                      <Button
                        type="button"
                        onClick={() => handlePetDetailsChange('birthday', '')}
                        variant="outline"
                        className="px-3 text-gray-500 hover:text-gray-700"
                      >
                        Clear
                      </Button>
                    </div>
                  ) : (
                    <Input
                      type="text"
                      value={value}
                      onChange={(e) => handlePetDetailsChange(key as keyof PetDetailsType, e.target.value)}
                      className="border-gray-300"
                    />
                  )}
                </div>
              ))}

              <h3 className="font-bold text-lg text-[#1b1582] mt-6 mb-2">Loyalty Points</h3>
              {Object.entries(loyaltyPoints).map(([key, value]) => (
                <div key={key} className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </label>
                  <Input
                    type="number"
                    value={value}
                    onChange={(e) => handleLoyaltyPointsChange(key as keyof LoyaltyPointsType, e.target.value)}
                    className="border-gray-300"
                  />
                </div>
              ))}
            </div>

            <Button
              onClick={() => setIsEditing(false)}
              className="mt-6 w-full bg-[#1b1582] hover:bg-[#1b1582]/90 text-white"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      )}

      <div id="grooming-report" className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <img
            src="/MP_Wordmark_Primary.png"
            alt="MasterPet Logo"
            width="250"
            height="100"
            className="mx-auto"
            crossOrigin="anonymous"
          />
          <h1 className="text-5xl font-bold text-[#1b1582] mt-4">
            {petDetails.petName}&apos;s Spa Day
          </h1>
          <p className="text-xl text-[#1b1582] mt-6 mb-2">
            {formattedReportDate}
          </p>
        </div>
        
        <PetDetails details={petDetails} />
        <GroomingForm 
          selectedOptions={selectedOptions}
          comments={groomerComments}
          onChange={handleFormChange}
        />
        <LoyaltyPoints points={loyaltyPoints} />
        <Footer 
          mascotImage="/MP_bothwaving.png"
          disclaimer="The health checkup was conducted by skilled groomers trained to observe visible signs, but they are not veterinarians. For health concerns or symptoms post-grooming, consult veterinary doctor for expert advice and care. Loyalty points earned can be used for Masterpet grooming and health services as per our program terms and are subject to change. Contact customer service for more details."
        />
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 z-50">
        <div className="container mx-auto flex flex-col md:flex-row gap-2 md:justify-end max-w-7xl">
          <Button
            onClick={() => setIsEditing(true)}
            className="w-full md:w-auto bg-[#1b1582] hover:bg-[#1b1582]/90 text-white shadow-lg"
          >
            <Edit2 className="w-5 h-5 mr-2" />
            Edit Details
          </Button>
          <Button
            onClick={handleDownloadImage}
            className="w-full md:w-auto bg-[#1b1582] hover:bg-[#1b1582]/90 text-white shadow-lg"
            disabled={!isFormValid()}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Report {navigator.platform.includes('Mac') ? '⌘' : 'Ctrl'}+S
          </Button>
        </div>
      </div>
    </main>
  );
} 