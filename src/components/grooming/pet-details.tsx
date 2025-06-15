'use client';

import Image from 'next/image';

type DetailItemProps = {
  label: string;
  value: string;
  className?: string;
};

function DetailItem({ label, value, className = '' }: DetailItemProps) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <span className="text-[#1b1582] text-xl md:text-2xl font-bold break-words w-full">{value}</span>
      <span className="text-[#6d76c3] text-sm mt-1">{label}</span>
    </div>
  );
}

type PetDetailsProps = {
  details: {
    petName: string;
    petParent: string;
    breed: string;
    gender: string;
    age: string;
    birthday?: string;
    package: string;
    imageUrl: string;
  };
};

export function PetDetails({ details }: PetDetailsProps) {
  // Format the birthday if it exists
  const formattedBirthday = details.birthday
    ? new Date(details.birthday).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    : 'Not provided';

  return (
    <div className="w-full max-w-4xl mx-auto mb-8 pet-details-card">
      <div className="relative flex flex-col md:flex-row items-center gap-8 bg-[#bfe5fb] rounded-lg shadow-md p-6">
        {/* Pet Image */}
        <div className="w-48 h-48 relative rounded-full flex-shrink-0">
          <Image
            src={details.imageUrl}
            alt={`${details.petName}'s Photo`}
            width={192}
            height={192}
            className="absolute w-full h-full object-cover rounded-full"
            crossOrigin="anonymous"
            loading="lazy"
          />
        </div>

        {/* Pet Details Grid */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full">
          <DetailItem
            label="Pet Parent"
            value={details.petParent}
          />
          <DetailItem
            label="Breed"
            value={details.breed}
          />
          <DetailItem
            label="Gender"
            value={details.gender}
          />
          <DetailItem
            label="Age"
            value={details.age}
          />
          <DetailItem
            label="Birthday"
            value={formattedBirthday}
          />
          <DetailItem
            label="Package"
            value={details.package}
          />
        </div>
      </div>
    </div>
  );
} 