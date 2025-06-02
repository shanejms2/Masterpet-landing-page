'use client';

import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

type Option = {
  label: string;
  value: string;
};

type Category = {
  title: string;
  options: Option[];
  isMultiSelect: boolean; // Whether the category allows multiple selections
};

const categories: Category[] = [
  {
    title: 'Coat/Skin',
    isMultiSelect: true,
    options: [
      { label: 'Healthy', value: 'healthy' },
      { label: 'Dry', value: 'dry' },
      { label: 'Hair Loss', value: 'hair-loss' },
      { label: 'Rashes', value: 'rashes' },
      { label: 'Infection', value: 'infection' },
      { label: 'Sensitive', value: 'sensitive' },
    ],
  },
  {
    title: 'Ears',
    isMultiSelect: true,
    options: [
      { label: 'Healthy', value: 'healthy' },
      { label: 'Excessive Wax', value: 'excessive-wax' },
      { label: 'Infection', value: 'infection' },
      { label: 'Redness', value: 'redness' },
      { label: 'Sensitive', value: 'sensitive' },
    ],
  },
  {
    title: 'Eyes',
    isMultiSelect: true,
    options: [
      { label: 'Healthy', value: 'healthy' },
      { label: 'Discolored', value: 'discolored' },
      { label: 'Redness', value: 'redness' },
      { label: 'Discharge', value: 'discharge' },
    ],
  },
  {
    title: 'Teeth',
    isMultiSelect: true,
    options: [
      { label: 'Healthy', value: 'healthy' },
      { label: 'Tartar', value: 'tartar' },
      { label: 'Broken', value: 'broken' },
      { label: 'Discolored', value: 'discolored' },
    ],
  },
  {
    title: 'Ticks',
    isMultiSelect: false,
    options: [
      { label: 'None', value: 'none' },
      { label: 'Few', value: 'few' },
      { label: 'Infestation', value: 'infestation' },
    ],
  },
  {
    title: 'Fleas',
    isMultiSelect: false,
    options: [
      { label: 'None', value: 'none' },
      { label: 'Few', value: 'few' },
      { label: 'Infestation', value: 'infestation' },
    ],
  },
  {
    title: 'Weight',
    isMultiSelect: false,
    options: [
      { label: 'Ideal', value: 'ideal' },
      { label: 'Overweight', value: 'overweight' },
      { label: 'Underweight', value: 'underweight' },
    ],
  },
];

type GroomingFormProps = {
  selectedOptions: Record<string, string | string[]>;
  comments: string;
  onChange: (options: Record<string, string | string[]>, comments: string) => void;
};

export function GroomingForm({ selectedOptions, comments, onChange }: GroomingFormProps) {
  const handleOptionSelect = (category: Category, optionValue: string) => {
    const currentValue = selectedOptions[category.title] || (category.isMultiSelect ? [] : '');
    let newValue: string | string[];

    if (category.isMultiSelect) {
      const valueArray = Array.isArray(currentValue) ? currentValue : [currentValue];
      if (valueArray.includes(optionValue)) {
        // If option already selected, remove it
        newValue = valueArray.filter(v => v !== optionValue);
      } else {
        // Add the new option
        newValue = [...valueArray, optionValue];
      }
    } else {
      newValue = optionValue;
    }

    const newOptions = {
      ...selectedOptions,
      [category.title]: newValue,
    };
    onChange(newOptions, comments);
  };

  const handleCommentsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(selectedOptions, e.target.value);
  };

  const isOptionSelected = (category: Category, optionValue: string) => {
    const value = selectedOptions[category.title];
    if (Array.isArray(value)) {
      return value.includes(optionValue);
    }
    return value === optionValue;
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-[#bfe5fb] rounded-lg p-6 mb-8 grooming-form-table">
      <table className="w-full border-collapse">
        <tbody>
          {categories.map((category) => (
            <tr key={category.title} className="border-b-2 border-[#1b1582]">
              <th className="py-3 px-4 text-left font-bold text-[#1b1582] w-1/4">
                {category.title}
              </th>
              <td className="py-3 px-4">
                <div className="flex flex-wrap gap-2">
                  {category.options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleOptionSelect(category, option.value)}
                      className={`px-3 py-1 rounded-md font-bold transition-all duration-200
                        ${
                          isOptionSelected(category, option.value)
                            ? 'bg-[#caf857] text-[#1b1582]'
                            : 'text-[#6d76c3] hover:bg-[#caf857] hover:text-[#1b1582]'
                        }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-10 text-center">
        <Label htmlFor="groomer-comments" className="inline-block font-bold text-[#1b1582] mb-2 text-lg">
          Groomer Comments:
        </Label>
        <Textarea
          id="groomer-comments"
          placeholder="Write any additional notes or observations here..."
          value={comments}
          onChange={handleCommentsChange}
          className="w-full h-32 border-2 border-[#1b1582] rounded-md p-3 resize-y bg-[#bfe5fb] text-[#1b1582] placeholder:text-[#1b1582]/60"
        />
      </div>
    </div>
  );
} 