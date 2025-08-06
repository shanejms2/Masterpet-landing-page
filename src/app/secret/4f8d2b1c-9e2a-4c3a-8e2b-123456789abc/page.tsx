"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

// Types
interface Service {
  name: string;
  item_name: string;
  description: string;
  rate: number;
  amount: number;
  pet_name: string;
  pet_breed: string;
  pet_age: string;
  pet_gender: string;
}

interface CustomerPet {
  name: string;
  pet_name: string;
  breed_name: string;
  pet_gender: string;
  pet_age: string;
  pet_birthday?: string;
}

interface CustomerDetails {
  customer_name: string;
  mobile_no: string;
  custom_google_maps_link?: string;
  pets?: CustomerPet[];
}

interface Session {
  name: string;
  scheduled_date: string;
  scheduled_date_start: string;
  scheduled_date_end: string;
  status: string;
  customer_details: CustomerDetails;
  services: Service[];
  parking: string;
  electricity: string;
  water: string;
  living_space: string;
  amount_after_discount: number;
  payment_mode: string;
  assigned_truckstore: string;
  assigned_truckstore_google_map_location?: string;
  driver: string | null;
  groomer: string | null;
  user_notes: string | null;
  driver_notes: string | null;
  service_notes: string | null;
  groomingForm?: any;
  groomingForms?: Record<string, any>;
}

// Add a local type for editing services
type EditService = Omit<Service, 'amount'> & { amount: string | number };

// Helper: Get yesterday and today in IST (YYYY-MM-DD)
const getISTDate = (offsetDays = 0) => {
  const now = new Date();
  // Convert to IST
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const istOffset = 5.5 * 60 * 60000;
  const ist = new Date(utc + istOffset);
  ist.setDate(ist.getDate() + offsetDays);
  return ist.toISOString().slice(0, 10);
};

const today = getISTDate(0);
const yesterday = getISTDate(-1);

// Helper for color indicator
const getIndicatorColor = (value: string) => {
  if (value === 'Yes') return 'bg-green-500';
  if (value === 'No') return 'bg-red-500';
  return 'bg-gray-400';
};

// Service options for dropdown
const SERVICE_OPTIONS = [
  "At-Home Full Groom Package",
  "At-Home Mini Groom Package",
  "At-Home Hygiene Package",
  "At-Home Zero Trim Package",
  "At-Home Medicated Bath Add-On",
  "At-Home Teeth Brushing Add-On",
  "At-Home Detangling/Dematting Add-On",
  "Traveling Expense",
  "Spot On",
];

// Default rupees amount for each service
const SERVICE_DEFAULT_AMOUNTS: Record<string, string> = {
  "At-Home Full Groom Package": "2599",
  "At-Home Mini Groom Package": "1599",
  "At-Home Hygiene Package": "1999",
  "At-Home Zero Trim Package": "2299",
  "At-Home Medicated Bath Add-On": "200",
  "At-Home Teeth Brushing Add-On": "200",
  "At-Home Detangling/Dematting Add-On": "200",
  "Traveling Expense": "100",
  "Spot On": "400",
};

// Grooming form options
const GROOMER_OPTIONS = ["Horam", "Prabin"];
const COAT_SKIN_OPTIONS = ["Healthy", "Dry", "Hair Loss", "Rashes", "Infection", "Sensitive"];
const EARS_OPTIONS = ["Healthy", "Excessive Wax", "Infection", "Redness", "Sensitive"];
const EYES_OPTIONS = ["Healthy", "Discolored", "Redness", "Discharge"];
const TEETH_OPTIONS = ["Healthy", "Tartar", "Broken", "Discolored"];
const TICKS_OPTIONS = ["None", "Few", "Infestation"];
const FLEAS_OPTIONS = ["None", "Few", "Infestation"];
const WEIGHT_OPTIONS = ["Ideal", "Overweight", "Underweight"];

const SecretTestPage = () => {
  const [fromDate, setFromDate] = useState(today);
  const [toDate, setToDate] = useState(today);
  const [selectedDay, setSelectedDay] = useState<'today' | 'yesterday'>('today');
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [editSessionId, setEditSessionId] = useState<string | null>(null);
  const [editValues, setEditValues] = useState<{ parking: string; electricity: string; water: string; driver: string; groomer: string }>({ parking: '', electricity: '', water: '', driver: '', groomer: '' });
  const [localSessions, setLocalSessions] = useState<Session[]>([]);
  const [editServices, setEditServices] = useState<EditService[]>([]);
  const [editPets, setEditPets] = useState<CustomerPet[]>([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [groomingFormSessionId, setGroomingFormSessionId] = useState<string | null>(null);
  const [groomingFormValues, setGroomingFormValues] = useState<any>({});
  const [editModalSessionId, setEditModalSessionId] = useState<string | null>(null);
  const [editModalCustomer, setEditModalCustomer] = useState<any>({});
  const [editModalSelectedPet, setEditModalSelectedPet] = useState<string>('');
  const [editModalPetInfo, setEditModalPetInfo] = useState<any>({});
  const [editModalPetServices, setEditModalPetServices] = useState<any[]>([]);

  // Define isEditing as a boolean
  const isEditing = !!editSessionId;

  // Fetch sessions
  useEffect(() => {
    const fetchSessions = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `/api/proxy-grooming?from_date=${fromDate}&to_date=${toDate}`
        );
        if (!res.ok) throw new Error("Failed to fetch sessions");
        const data = await res.json();
        setSessions(data.message?.data || []);
      } catch (err: unknown) {
        let errorMessage = 'Unknown error';
        if (err && typeof err === 'object' && 'message' in err && typeof (err as { message?: unknown }).message === 'string') {
          errorMessage = (err as { message: string }).message;
        }
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };
    fetchSessions();
  }, [fromDate, toDate]);

  // Keep localSessions in sync with sessions
  useEffect(() => {
    setLocalSessions(sessions);
  }, [sessions]);

  // Group sessions by date
  const grouped = sessions.reduce<Record<string, Session[]>>((acc, session) => {
    const date = session.scheduled_date;
    if (!acc[date]) acc[date] = [];
    acc[date].push(session);
    return acc;
  }, {});

  // Sort date keys ascending
  const sortedDates = Object.keys(grouped).sort((a, b) => a.localeCompare(b));

  // Sort sessions within each date by scheduled_date_start ascending
  sortedDates.forEach(date => {
    grouped[date].sort((a, b) => {
      if (!a.scheduled_date_start || !b.scheduled_date_start) return 0;
      return a.scheduled_date_start.localeCompare(b.scheduled_date_start);
    });
  });

  const handleOpenGroomingForm = (session: Session) => {
    setGroomingFormSessionId(session.name);
    // Default to first pet if available
    const pets = session.customer_details.pets || [];
    const firstPetName = pets.length > 0 ? pets[0].pet_name : '';
    const found = localSessions.find(s => s.name === session.name);
    const groomingForms = found && found.groomingForms ? found.groomingForms : {};
    setGroomingFormValues({
      pet_name: firstPetName,
      ...(groomingForms[firstPetName] || {
        groomer: '',
        coat_skin: [],
        ears: [],
        eyes: [],
        teeth: [],
        ticks: '',
        fleas: '',
        weight: '',
        comments: '',
      })
    });
  };

  const handleGroomingFormPetChange = (petName: string) => {
    setGroomingFormValues((prev: any) => {
      const found = localSessions.find(s => s.name === groomingFormSessionId);
      const groomingForms = found && found.groomingForms ? found.groomingForms : {};
      return {
        pet_name: petName,
        ...(groomingForms[petName] || {
          groomer: '',
          coat_skin: [],
          ears: [],
          eyes: [],
          teeth: [],
          ticks: '',
          fleas: '',
          weight: '',
          comments: '',
        })
      };
    });
  };

  const handleGroomingFormChange = (field: string, value: any) => {
    setGroomingFormValues((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleGroomingFormMultiSelect = (field: string, option: string) => {
    setGroomingFormValues((prev: any) => {
      const arr = prev[field] || [];
      if (arr.includes(option)) {
        return { ...prev, [field]: arr.filter((o: string) => o !== option) };
      } else {
        return { ...prev, [field]: [...arr, option] };
      }
    });
  };

  const handleSaveGroomingForm = () => {
    setLocalSessions(sessions => sessions.map(s => {
      if (s.name === groomingFormSessionId) {
        const prevForms = s.groomingForms || {};
        return {
          ...s,
          groomingForms: {
            ...prevForms,
            [groomingFormValues.pet_name]: groomingFormValues
          }
        };
      }
      return s;
    }));
    setGroomingFormSessionId(null);
  };

  const handleCancelGroomingForm = () => {
    setGroomingFormSessionId(null);
  };

  const handleOpenEditModal = (session: Session) => {
    setEditModalSessionId(session.name);
    setEditModalCustomer({
      name: (session.customer_details as any).customer_name || '',
      phone: (session.customer_details as any).phone || '',
      address: (session.customer_details as any).address || '',
      // Add more fields as needed
    });
    const pets = session.customer_details.pets || [];
    const firstPetName = pets.length > 0 ? (pets[0] as any).pet_name : '';
    setEditModalSelectedPet(firstPetName);
    const pet = pets.find((p: any) => p.pet_name === firstPetName) || {};
    setEditModalPetInfo({
      pet_name: (pet as any).pet_name || '',
      breed_name: (pet as any).breed_name || '',
      pet_gender: (pet as any).pet_gender || '',
      pet_age: (pet as any).pet_age || '',
      pet_birthday: (pet as any).pet_birthday || '',
      // Add more fields as needed
    });
    // Filter services for this pet
    setEditModalPetServices((session.services || []).filter((s: any) => s.pet_name === firstPetName));
  };

  const handleEditModalPetChange = (petName: string, session: Session) => {
    setEditModalSelectedPet(petName);
    const pet = (session.customer_details.pets || []).find((p: any) => p.pet_name === petName) || {};
    setEditModalPetInfo({
      pet_name: (pet as any).pet_name || '',
      breed_name: (pet as any).breed_name || '',
      pet_gender: (pet as any).pet_gender || '',
      pet_age: (pet as any).pet_age || '',
      pet_birthday: (pet as any).pet_birthday || '',
    });
    setEditModalPetServices((session.services || []).filter((s: any) => s.pet_name === petName));
  };

  const handleSaveEditModal = () => {
    setLocalSessions(sessions => sessions.map(s => {
      if (s.name === editModalSessionId) {
        // Update customer info
        const updatedCustomer = { ...s.customer_details, ...editModalCustomer };
        // Update pet info
        const updatedPets = (s.customer_details.pets || []).map((p: any) =>
          p.pet_name === editModalSelectedPet ? { ...p, ...editModalPetInfo } : p
        );
        // Update services for this pet
        const updatedServices = (s.services || []).map((svc: any) =>
          svc.pet_name === editModalSelectedPet
            ? { ...svc, ...editModalPetServices.find((es: any) => es.name === svc.name) }
            : svc
        );
        return {
          ...s,
          customer_details: { ...updatedCustomer, pets: updatedPets },
          services: updatedServices,
        };
      }
      return s;
    }));
    setEditModalSessionId(null);
  };

  const handleCancelEditModal = () => {
    setEditModalSessionId(null);
  };

  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-100 to-purple-200 py-8 overflow-x-auto">
      <section
        className="bg-white rounded-xl shadow-lg sm:p-6 p-2 w-full max-w-3xl border border-blue-200 mb-6"
        tabIndex={0}
        aria-label="Grooming Sessions Page"
      >
        <h1 className="text-2xl font-bold text-blue-900 mb-2 text-center">Grooming Sessions</h1>
        <div className="flex gap-4 items-center justify-center mb-4">
          <button
            className={`min-w-[100px] px-4 py-2 rounded font-semibold border focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors ${selectedDay === 'yesterday' ? 'bg-blue-600 text-white border-blue-700' : 'bg-white text-blue-700 border-blue-300 hover:bg-blue-100'}`}
            tabIndex={0}
            aria-label="Show yesterday's sessions"
            onClick={() => {
              setFromDate(yesterday);
              setToDate(yesterday);
              setSelectedDay('yesterday');
            }}
          >
            Yesterday
          </button>
          <button
            className={`min-w-[100px] px-4 py-2 rounded font-semibold border focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors ${selectedDay === 'today' ? 'bg-blue-600 text-white border-blue-700' : 'bg-white text-blue-700 border-blue-300 hover:bg-blue-100'}`}
            tabIndex={0}
            aria-label="Show today's sessions"
            onClick={() => {
              setFromDate(today);
              setToDate(today);
              setSelectedDay('today');
            }}
          >
            Today
          </button>
        </div>
        {loading && (
          <div className="flex justify-center items-center py-8">
            <span className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mr-2"></span>
            <span className="text-blue-700 text-base">Loading sessions...</span>
          </div>
        )}
        {error && (
          <div className="text-red-600 text-center py-4 text-base">{error}</div>
        )}
        {!loading && !error && sortedDates.length === 0 && (
          <div className="text-gray-500 text-center py-8 text-base">No sessions found for the selected dates.</div>
        )}
        {!loading && !error && sortedDates.map(date => (
          <div key={date} className="mb-8">
            <h2 className="text-lg font-semibold text-purple-700 mb-3">{date}</h2>
            <div className="flex flex-col gap-4">
              {grouped[date].map((session, idx) => {
                const isEditing = editSessionId === session.name;
                const localSession = localSessions.find(s => s.name === session.name) || session;
                return (
                  <article
                    key={session.name + idx}
                    className="border border-gray-200 rounded-lg sm:p-4 p-2 bg-gray-50 shadow-sm focus-within:ring-2 focus-within:ring-blue-400"
                    tabIndex={0}
                    aria-label={`Session for ${session.customer_details.customer_name}`}
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 gap-2">
                      <div>
                        <span className="font-bold text-blue-800 text-base">{session.customer_details.customer_name}</span>
                        <span className="ml-2 text-gray-600 text-sm">({session.customer_details.mobile_no})</span>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${session.status === "Scheduled" ? "bg-blue-200 text-blue-800" : session.status === "Completed" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}>{session.status}</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-8 gap-2 mb-2">
                      <div className="flex-1">
                        <div className="text-sm text-gray-700 mb-1">
                          <span className="font-medium">Time:</span> {session.scheduled_date_start?.slice(11, 16)} - {session.scheduled_date_end?.slice(11, 16)}
                        </div>
                        <div className="text-sm text-gray-700 mb-1">
                          <span className="font-medium">Location:</span> {session.customer_details.custom_google_maps_link ? (
                            <a
                              href={session.customer_details.custom_google_maps_link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 underline"
                              tabIndex={0}
                              aria-label="Open location in Google Maps"
                            >
                              Google Maps
                            </a>
                          ) : "N/A"}
                        </div>
                        <div className="text-sm text-gray-700 mb-1 flex items-center gap-2">
                          <span className="font-medium">Parking:</span>
                          <span
                            className={`inline-block w-3 h-3 rounded-full ${getIndicatorColor(isEditing ? editValues.parking : localSession.parking || '')}`}
                            aria-label={`Parking: ${isEditing ? editValues.parking || 'Unknown' : localSession.parking || 'Unknown'}`}
                          ></span>
                          {isEditing ? (
                            <select
                              className="min-w-[100px] border rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                              value={editValues.parking}
                              onChange={e => setEditValues(v => ({ ...v, parking: e.target.value }))}
                              aria-label="Edit parking"
                            >
                              <option value="">Unknown</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          ) : (
                            <span className="text-base">{localSession.parking || "N/A"}</span>
                          )}
                        </div>
                        <div className="text-sm text-gray-700 mb-1 flex items-center gap-2">
                          <span className="font-medium">Electricity:</span>
                          <span
                            className={`inline-block w-3 h-3 rounded-full ${getIndicatorColor(isEditing ? editValues.electricity : localSession.electricity || '')}`}
                            aria-label={`Electricity: ${isEditing ? editValues.electricity || 'Unknown' : localSession.electricity || 'Unknown'}`}
                          ></span>
                          {isEditing ? (
                            <select
                              className="min-w-[100px] border rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                              value={editValues.electricity}
                              onChange={e => setEditValues(v => ({ ...v, electricity: e.target.value }))}
                              aria-label="Edit electricity"
                            >
                              <option value="">Unknown</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          ) : (
                            <span className="text-base">{localSession.electricity || "N/A"}</span>
                          )}
                        </div>
                        <div className="text-sm text-gray-700 mb-1 flex items-center gap-2">
                          <span className="font-medium">Water:</span>
                          <span
                            className={`inline-block w-3 h-3 rounded-full ${getIndicatorColor(isEditing ? editValues.water : localSession.water || '')}`}
                            aria-label={`Water: ${isEditing ? editValues.water || 'Unknown' : localSession.water || 'Unknown'}`}
                          ></span>
                          {isEditing ? (
                            <select
                              className="min-w-[100px] border rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                              value={editValues.water}
                              onChange={e => setEditValues(v => ({ ...v, water: e.target.value }))}
                              aria-label="Edit water"
                            >
                              <option value="">Unknown</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          ) : (
                            <span className="text-base">{localSession.water || "N/A"}</span>
                          )}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-700 mb-1">
                          <span className="font-medium">Payment:</span> ₹{session.amount_after_discount} ({session.payment_mode})
                        </div>
                        <div className="text-sm text-gray-700 mb-1 flex items-center gap-2">
                          <span className="font-medium">Driver:</span>
                          {isEditing ? (
                            <input
                              type="text"
                              className="min-w-[100px] border rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                              value={editValues.driver}
                              onChange={e => setEditValues(v => ({ ...v, driver: e.target.value }))}
                              aria-label="Edit driver"
                              placeholder="Driver name"
                            />
                          ) : (
                            <span className="text-base">{localSession.driver || "N/A"}</span>
                          )}
                        </div>
                        <div className="text-sm text-gray-700 mb-1 flex items-center gap-2">
                          <span className="font-medium">Groomer:</span>
                          {isEditing ? (
                            <input
                              type="text"
                              className="min-w-[100px] border rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                              value={editValues.groomer}
                              onChange={e => setEditValues(v => ({ ...v, groomer: e.target.value }))}
                              aria-label="Edit groomer"
                              placeholder="Groomer name"
                            />
                          ) : (
                            <span className="text-base">{localSession.groomer || "N/A"}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="font-medium text-gray-800 text-base">Services</div>
                      {isEditing ? (
                        <ul className="list-none text-sm text-gray-700 p-0 m-0">
                          {editServices.map((service, i) => {
                            const petNames = session.customer_details.pets ? session.customer_details.pets.map(pet => pet.pet_name) : [];
                            const isOther = !petNames.includes(service.pet_name);
                            const isInList = SERVICE_OPTIONS.includes(service.item_name);
                            return (
                              <li key={service.name + i} className="mb-2 border-b border-gray-200 pb-2 last:border-b-0 last:pb-0 flex flex-col gap-1 relative">
                                <div className="flex flex-col gap-1">
                                  <label className="font-medium">Package/Service Name
                                    <select
                                      className="block w-full border rounded px-2 py-1 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                      value={service.item_name}
                                      onChange={e => {
                                        const val = e.target.value;
                                        setEditServices(services => services.map((s, idx) => idx === i ? { ...s, item_name: val, amount: SERVICE_DEFAULT_AMOUNTS[val] ?? '' } : s));
                                      }}
                                      aria-label="Edit package/service name"
                                    >
                                      {!isInList && (
                                        <option value={service.item_name} disabled>{service.item_name}</option>
                                      )}
                                      {SERVICE_OPTIONS.map(opt => (
                                        <option key={opt} value={opt}>{opt}</option>
                                      ))}
                                    </select>
                                  </label>
                                  <label className="font-medium">Amount
                                    <input
                                      type="number"
                                      inputMode="numeric"
                                      min={0}
                                      className="block w-full border rounded px-2 py-1 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                      value={service.amount === '' ? '' : service.amount}
                                      onChange={e => {
                                        const val = e.target.value;
                                        if (/^\d*$/.test(val)) {
                                          setEditServices(services => services.map((s, idx) => idx === i ? { ...s, amount: val } : s));
                                        }
                                      }}
                                      onBlur={e => {
                                        if (e.target.value === '') {
                                          setEditServices(services => services.map((s, idx) => idx === i ? { ...s, amount: '0' } : s));
                                        }
                                      }}
                                      aria-label="Edit amount"
                                    />
                                  </label>
                                  <label className="font-medium">Pet Name
                                    <select
                                      className="block w-full border rounded px-2 py-1 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                      value={isOther ? "Other" : service.pet_name}
                                      onChange={e => {
                                        const val = e.target.value;
                                        if (val === "Other") {
                                          setEditServices(services => services.map((s, idx) => idx === i ? { ...s, pet_name: "" } : s));
                                        } else {
                                          setEditServices(services => services.map((s, idx) => idx === i ? { ...s, pet_name: val } : s));
                                        }
                                      }}
                                      aria-label="Edit pet name"
                                    >
                                      {petNames.map(name => (
                                        <option key={name} value={name}>{name}</option>
                                      ))}
                                      <option value="Other">Other</option>
                                    </select>
                                    {isOther && (
                                      <input
                                        type="text"
                                        className="block w-full border rounded px-2 py-1 mt-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        value={service.pet_name}
                                        onChange={e => setEditServices(services => services.map((s, idx) => idx === i ? { ...s, pet_name: e.target.value } : s))}
                                        aria-label="Custom pet name"
                                        placeholder="Enter custom pet name"
                                      />
                                    )}
                                  </label>
                                </div>
                                {editServices.length > 1 && (
                                  <button
                                    type="button"
                                    className="absolute top-0 right-0 mt-1 mr-1 px-2 py-1 text-xs bg-red-100 text-red-700 rounded border border-red-300 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-400"
                                    aria-label="Remove service"
                                    onClick={() => setEditServices(services => services.filter((_, idx) => idx !== i))}
                                  >
                                    Remove
                                  </button>
                                )}
                              </li>
                            );
                          })}
                          <li>
                            <button
                              type="button"
                              className="mt-2 px-3 py-1 text-xs bg-green-100 text-green-700 rounded border border-green-300 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                              aria-label="Add service"
                              onClick={() => setEditServices(services => [
                                ...services,
                                {
                                  name: `new-${Date.now()}`,
                                  item_name: '',
                                  description: '',
                                  rate: 0,
                                  amount: 0,
                                  pet_name: '',
                                  pet_breed: '',
                                  pet_age: '',
                                  pet_gender: '',
                                },
                              ])}
                            >
                              Add Service
                            </button>
                          </li>
                        </ul>
                      ) : (
                        <ul className="list-disc list-inside text-sm text-gray-700">
                          {localSession.services.map((service, i) => (
                            <li key={service.name + i} className="mb-1">
                              <span className="font-semibold">{service.item_name}</span> (₹{service.amount}) for <span className="font-medium">{service.pet_name}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="mb-2">
                      <div className="font-medium text-gray-800 text-base">Pets</div>
                      {isEditing ? (
                        <ul className="list-none text-sm text-gray-700 p-0 m-0">
                          {editPets.map((pet, i) => (
                            <li key={pet.name + i} className="mb-2 border-b border-gray-200 pb-2 last:border-b-0 last:pb-0">
                              <div className="flex flex-col gap-1">
                                <label className="font-medium">Pet Name
                                  <input
                                    type="text"
                                    className="block w-full border rounded px-2 py-1 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    value={pet.pet_name}
                                    onChange={e => setEditPets(pets => pets.map((p, idx) => idx === i ? { ...p, pet_name: e.target.value } : p))}
                                    aria-label="Edit pet name"
                                  />
                                </label>
                                <label className="font-medium">Breed
                                  <input
                                    type="text"
                                    className="block w-full border rounded px-2 py-1 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    value={pet.breed_name}
                                    onChange={e => setEditPets(pets => pets.map((p, idx) => idx === i ? { ...p, breed_name: e.target.value } : p))}
                                    aria-label="Edit breed"
                                  />
                                </label>
                                <label className="font-medium">Gender
                                  <select
                                    className="block w-full border rounded px-2 py-1 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    value={pet.pet_gender}
                                    onChange={e => setEditPets(pets => pets.map((p, idx) => idx === i ? { ...p, pet_gender: e.target.value } : p))}
                                    aria-label="Edit gender"
                                  >
                                    <option value="">Unknown</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                  </select>
                                </label>
                                <label className="font-medium">Age
                                  <input
                                    type="text"
                                    className="block w-full border rounded px-2 py-1 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    value={pet.pet_age}
                                    onChange={e => setEditPets(pets => pets.map((p, idx) => idx === i ? { ...p, pet_age: e.target.value } : p))}
                                    aria-label="Edit age"
                                  />
                                </label>
                                <label className="font-medium">Birthday
                                  <input
                                    type="text"
                                    className="block w-full border rounded px-2 py-1 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    value={pet.pet_birthday || ''}
                                    onChange={e => setEditPets(pets => pets.map((p, idx) => idx === i ? { ...p, pet_birthday: e.target.value } : p))}
                                    aria-label="Edit birthday"
                                  />
                                </label>
                              </div>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        Array.isArray(localSession.customer_details.pets) && localSession.customer_details.pets.length > 0 ? (
                          <ul className="list-disc list-inside text-sm text-gray-700">
                            {localSession.customer_details.pets.map((pet, i) => (
                              <li key={pet.name + i} className="mb-1">
                                <span className="font-semibold">{pet.pet_name}</span> <span className="text-gray-500">[{pet.breed_name}, {pet.pet_gender}, {pet.pet_age} yrs{pet.pet_birthday ? `, Birthday: ${pet.pet_birthday}` : ''}]</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div className="text-gray-500 text-sm">No pets found for this customer.</div>
                        )
                      )}
                    </div>
                    {(session.service_notes || session.driver_notes || session.user_notes) && (
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-2 rounded text-sm text-yellow-800 mt-2">
                        {session.service_notes && <div><span className="font-medium">Service Notes:</span> {session.service_notes}</div>}
                        {session.driver_notes && <div><span className="font-medium">Driver Notes:</span> {session.driver_notes}</div>}
                        {session.user_notes && <div><span className="font-medium">User Notes:</span> {session.user_notes}</div>}
                      </div>
                    )}
                    <div className="flex flex-row items-center mt-4">
                      <button
                        type="button"
                        className="min-w-[100px] px-2 py-1 text-xs bg-yellow-200 text-yellow-900 rounded border border-yellow-400 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        aria-label="Edit session"
                        onClick={() => handleOpenEditModal(session)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="min-w-[100px] px-2 py-1 text-xs bg-green-200 text-green-900 rounded border border-green-400 hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 ml-2"
                        aria-label="Open grooming form"
                        onClick={() => handleOpenGroomingForm(session)}
                      >
                        Grooming Form
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </section>
      {/* Grooming Form Modal */}
      {groomingFormSessionId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
          onClick={handleCancelGroomingForm}
        >
          <div
            className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-lg relative max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 focus:outline-none"
              aria-label="Close grooming form"
              onClick={handleCancelGroomingForm}
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4">Grooming Form</h2>
            <form className="flex flex-col gap-4">
              <label className="font-medium">Groomer Name
                <select
                  className="block w-full border rounded px-2 py-1 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={groomingFormValues.groomer}
                  onChange={e => handleGroomingFormChange('groomer', e.target.value)}
                  aria-label="Select groomer name"
                >
                  <option value="">Select Groomer</option>
                  {GROOMER_OPTIONS.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </label>
              <label className="font-medium">Pet Name
                <select
                  className="block w-full border rounded px-2 py-1 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={groomingFormValues.pet_name}
                  onChange={e => handleGroomingFormPetChange(e.target.value)}
                  aria-label="Select pet name"
                >
                  <option value="">Select Pet</option>
                  {(localSessions.find(s => s.name === groomingFormSessionId)?.customer_details.pets || []).map((pet: any) => (
                    <option key={pet.pet_name} value={pet.pet_name}>{pet.pet_name}</option>
                  ))}
                </select>
              </label>
              <label className="font-medium">Coat/Skin
                <div className="flex flex-wrap gap-2 mt-1">
                  {COAT_SKIN_OPTIONS.map(opt => (
                    <button
                      key={opt}
                      type="button"
                      className={`px-3 py-1 rounded border ${groomingFormValues.coat_skin.includes(opt) ? 'bg-green-200 border-green-400 text-green-900' : 'bg-gray-100 border-gray-300 text-gray-700'}`}
                      onClick={() => handleGroomingFormMultiSelect('coat_skin', opt)}
                      aria-pressed={groomingFormValues.coat_skin.includes(opt)}
                      aria-label={opt}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </label>
              <label className="font-medium">Ears
                <div className="flex flex-wrap gap-2 mt-1">
                  {EARS_OPTIONS.map(opt => (
                    <button
                      key={opt}
                      type="button"
                      className={`px-3 py-1 rounded border ${groomingFormValues.ears.includes(opt) ? 'bg-green-200 border-green-400 text-green-900' : 'bg-gray-100 border-gray-300 text-gray-700'}`}
                      onClick={() => handleGroomingFormMultiSelect('ears', opt)}
                      aria-pressed={groomingFormValues.ears.includes(opt)}
                      aria-label={opt}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </label>
              <label className="font-medium">Eyes
                <div className="flex flex-wrap gap-2 mt-1">
                  {EYES_OPTIONS.map(opt => (
                    <button
                      key={opt}
                      type="button"
                      className={`px-3 py-1 rounded border ${groomingFormValues.eyes.includes(opt) ? 'bg-green-200 border-green-400 text-green-900' : 'bg-gray-100 border-gray-300 text-gray-700'}`}
                      onClick={() => handleGroomingFormMultiSelect('eyes', opt)}
                      aria-pressed={groomingFormValues.eyes.includes(opt)}
                      aria-label={opt}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </label>
              <label className="font-medium">Teeth
                <div className="flex flex-wrap gap-2 mt-1">
                  {TEETH_OPTIONS.map(opt => (
                    <button
                      key={opt}
                      type="button"
                      className={`px-3 py-1 rounded border ${groomingFormValues.teeth.includes(opt) ? 'bg-green-200 border-green-400 text-green-900' : 'bg-gray-100 border-gray-300 text-gray-700'}`}
                      onClick={() => handleGroomingFormMultiSelect('teeth', opt)}
                      aria-pressed={groomingFormValues.teeth.includes(opt)}
                      aria-label={opt}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </label>
              <label className="font-medium">Ticks
                <select
                  className="block w-full border rounded px-2 py-1 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={groomingFormValues.ticks}
                  onChange={e => handleGroomingFormChange('ticks', e.target.value)}
                  aria-label="Select ticks status"
                >
                  <option value="">Select</option>
                  {TICKS_OPTIONS.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </label>
              <label className="font-medium">Fleas
                <select
                  className="block w-full border rounded px-2 py-1 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={groomingFormValues.fleas}
                  onChange={e => handleGroomingFormChange('fleas', e.target.value)}
                  aria-label="Select fleas status"
                >
                  <option value="">Select</option>
                  {FLEAS_OPTIONS.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </label>
              <label className="font-medium">Weight
                <select
                  className="block w-full border rounded px-2 py-1 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={groomingFormValues.weight}
                  onChange={e => handleGroomingFormChange('weight', e.target.value)}
                  aria-label="Select weight status"
                >
                  <option value="">Select</option>
                  {WEIGHT_OPTIONS.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </label>
              <label className="font-medium">Groomer Comments
                <textarea
                  className="block w-full border rounded px-2 py-1 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={groomingFormValues.comments}
                  onChange={e => handleGroomingFormChange('comments', e.target.value)}
                  aria-label="Groomer comments"
                  rows={3}
                  placeholder="Enter comments"
                />
              </label>
              <div className="flex gap-4 mt-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                  onClick={handleSaveGroomingForm}
                  aria-label="Save grooming form"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  onClick={handleCancelGroomingForm}
                  aria-label="Cancel grooming form"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Edit Modal */}
      {editModalSessionId && (() => {
        const session = localSessions.find(s => s.name === editModalSessionId);
        if (!session) return null;
        const pets = session.customer_details.pets || [];
        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
            onClick={handleCancelEditModal}
          >
            <div
              className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-2xl relative max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 focus:outline-none"
                aria-label="Close edit session"
                onClick={handleCancelEditModal}
              >
                ×
              </button>
              <h2 className="text-xl font-bold mb-4">Edit Session</h2>
              {/* Customer Info */}
              <div className="mb-4">
                <div className="font-semibold mb-2">Customer Information</div>
                <label className="block mb-2 font-medium">Name
                  <input
                    type="text"
                    className="block w-full border rounded px-2 py-1 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={editModalCustomer.name ?? ''}
                    onChange={e => setEditModalCustomer((c: any) => ({ ...c, name: e.target.value }))}
                    aria-label="Edit customer name"
                  />
                </label>
                <label className="block mb-2 font-medium">Phone
                  <input
                    type="text"
                    className="block w-full border rounded px-2 py-1 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={editModalCustomer.phone}
                    onChange={e => setEditModalCustomer((c: any) => ({ ...c, phone: e.target.value }))}
                    aria-label="Edit customer phone"
                  />
                </label>
                <label className="block mb-2 font-medium">Address
                  <textarea
                    className="block w-full border rounded px-2 py-1 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={editModalCustomer.address}
                    onChange={e => setEditModalCustomer((c: any) => ({ ...c, address: e.target.value }))}
                    aria-label="Edit customer address"
                    rows={2}
                  />
                </label>
              </div>
              {/* Pet Selector */}
              <div className="mb-4">
                <div className="font-semibold mb-2">Select Pet</div>
                <select
                  className="block w-full border rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={editModalSelectedPet}
                  onChange={e => handleEditModalPetChange(e.target.value, session)}
                  aria-label="Select pet"
                >
                  {pets.map((pet: any) => (
                    <option key={pet.pet_name} value={pet.pet_name}>{pet.pet_name}</option>
                  ))}
                </select>
              </div>
              {/* Pet Info */}
              <div className="mb-4">
                <div className="font-semibold mb-2">Pet Information</div>
                <label className="block mb-2 font-medium">Pet Name
                  <input
                    type="text"
                    className="block w-full border rounded px-2 py-1 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={editModalPetInfo.pet_name}
                    onChange={e => setEditModalPetInfo((p: any) => ({ ...p, pet_name: e.target.value }))}
                    aria-label="Edit pet name"
                  />
                </label>
                <label className="block mb-2 font-medium">Breed
                  <input
                    type="text"
                    className="block w-full border rounded px-2 py-1 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={editModalPetInfo.breed_name}
                    onChange={e => setEditModalPetInfo((p: any) => ({ ...p, breed_name: e.target.value }))}
                    aria-label="Edit breed"
                  />
                </label>
                <label className="block mb-2 font-medium">Gender
                  <select
                    className="block w-full border rounded px-2 py-1 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={editModalPetInfo.pet_gender}
                    onChange={e => setEditModalPetInfo((p: any) => ({ ...p, pet_gender: e.target.value }))}
                    aria-label="Edit gender"
                  >
                    <option value="">Unknown</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
                <label className="block mb-2 font-medium">Age
                  <input
                    type="text"
                    className="block w-full border rounded px-2 py-1 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={editModalPetInfo.pet_age}
                    onChange={e => setEditModalPetInfo((p: any) => ({ ...p, pet_age: e.target.value }))}
                    aria-label="Edit age"
                  />
                </label>
                <label className="block mb-2 font-medium">Birthday
                  <input
                    type="text"
                    className="block w-full border rounded px-2 py-1 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={editModalPetInfo.pet_birthday}
                    onChange={e => setEditModalPetInfo((p: any) => ({ ...p, pet_birthday: e.target.value }))}
                    aria-label="Edit birthday"
                  />
                </label>
              </div>
              {/* Pet Services */}
              <div className="mb-4">
                <div className="font-semibold mb-2">Services for {editModalSelectedPet}</div>
                <ul className="list-none text-sm text-gray-700 p-0 m-0">
                  {editModalPetServices.map((service: any, i: number) => (
                    <li key={service.name + i} className="mb-2 border-b border-gray-200 pb-2 last:border-b-0 last:pb-0 flex flex-col gap-1 relative">
                      <label className="font-medium">Service Name
                        <input
                          type="text"
                          className="block w-full border rounded px-2 py-1 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                          value={service.item_name}
                          onChange={e => setEditModalPetServices(services => services.map((s: any, idx: number) => idx === i ? { ...s, item_name: e.target.value } : s))}
                          aria-label="Edit service name"
                        />
                      </label>
                      <label className="font-medium">Amount
                        <input
                          type="number"
                          inputMode="numeric"
                          min={0}
                          className="block w-full border rounded px-2 py-1 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                          value={service.amount === '' ? '' : service.amount}
                          onChange={e => setEditModalPetServices(services => services.map((s: any, idx: number) => idx === i ? { ...s, amount: e.target.value } : s))}
                          aria-label="Edit amount"
                        />
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4 mt-4 justify-end">
                <button
                  type="button"
                  className="min-w-[100px] px-2 py-1 text-xs bg-yellow-200 text-yellow-900 rounded border border-yellow-400 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  aria-label="Save changes"
                  onClick={handleSaveEditModal}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="min-w-[100px] px-2 py-1 text-xs bg-gray-300 text-gray-800 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  aria-label="Cancel editing"
                  onClick={handleCancelEditModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </main>
  );
};

export default SecretTestPage; 