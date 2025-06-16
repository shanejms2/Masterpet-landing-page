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
                          {editServices.map((service, i) => (
                            <div key={service.name + i} className="mb-6 p-6 rounded-xl border border-gray-300 bg-white shadow-lg relative">
                              <div className="font-semibold mb-2">Service {i + 1}</div>
                              <div className="flex flex-col gap-1">
                                <label className="font-medium">Package/Service Name
                                  <input
                                    type="text"
                                    className="block w-full border rounded px-2 py-1 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    value={service.item_name}
                                    onChange={e => setEditServices(services => services.map((s, idx) => idx === i ? { ...s, item_name: e.target.value } : s))}
                                    aria-label="Edit package/service name"
                                  />
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
                                  <input
                                    type="text"
                                    className="block w-full border rounded px-2 py-1 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    value={service.pet_name}
                                    onChange={e => setEditServices(services => services.map((s, idx) => idx === i ? { ...s, pet_name: e.target.value } : s))}
                                    aria-label="Edit pet name"
                                  />
                                </label>
                              </div>
                              {editServices.length > 1 && (
                                <button
                                  type="button"
                                  className="absolute top-2 right-2 px-2 py-1 text-xs bg-red-100 text-red-700 rounded border border-red-300 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-400"
                                  aria-label="Remove service"
                                  onClick={() => setEditServices(services => services.filter((_, idx) => idx !== i))}
                                >
                                  Remove
                                </button>
                              )}
                            </div>
                          ))}
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
                            <div key={pet.name + i} className="mb-6 p-6 rounded-xl border border-gray-300 bg-white shadow-lg">
                              <div className="font-semibold mb-2">Pet {i + 1}</div>
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
                            </div>
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
                    {/* Edit button at bottom right */}
                    {!isEditing && (
                      <div className="flex justify-end mt-4">
                        <button
                          className="min-w-[100px] px-2 py-1 text-xs bg-yellow-200 text-yellow-900 rounded border border-yellow-400 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                          tabIndex={0}
                          aria-label="Edit session details"
                          onClick={() => {
                            setEditSessionId(session.name);
                            setEditValues({
                              parking: localSession.parking || '',
                              electricity: localSession.electricity || '',
                              water: localSession.water || '',
                              driver: localSession.driver || '',
                              groomer: localSession.groomer || '',
                            });
                            setEditServices(localSession.services.map(s => ({ ...s })));
                            setEditPets(Array.isArray(localSession.customer_details.pets) ? localSession.customer_details.pets.map(p => ({ ...p })) : []);
                            setEditModalOpen(true);
                          }}
                        >
                          Edit
                        </button>
                      </div>
                    )}
                    {/* Edit Modal */}
                    <Dialog open={isEditing && editModalOpen} onOpenChange={open => {
                      if (!open) {
                        setEditSessionId(null);
                        setEditServices([]);
                        setEditPets([]);
                        setEditModalOpen(false);
                      } else {
                        setEditModalOpen(true);
                      }
                    }}>
                      <DialogContent className="max-w-2xl w-full">
                        <div className="overflow-y-auto max-h-[80vh] p-2">
                          <DialogHeader>
                            <DialogTitle>Edit Session Details</DialogTitle>
                          </DialogHeader>
                          {/* Edit form content (same as previous in-card edit form) */}
                          <div className="flex flex-col md:flex-row md:gap-8 gap-2 mb-2">
                            <div className="flex-1">
                              {/* Parking, Electricity, Water, etc. (edit fields) */}
                              <div className="text-sm text-gray-700 mb-1 flex items-center gap-2">
                                <span className="font-medium">Parking:</span>
                                <span className={`inline-block w-3 h-3 rounded-full ${getIndicatorColor(editValues.parking)}`}></span>
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
                              </div>
                              <div className="text-sm text-gray-700 mb-1 flex items-center gap-2">
                                <span className="font-medium">Electricity:</span>
                                <span className={`inline-block w-3 h-3 rounded-full ${getIndicatorColor(editValues.electricity)}`}></span>
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
                              </div>
                              <div className="text-sm text-gray-700 mb-1 flex items-center gap-2">
                                <span className="font-medium">Water:</span>
                                <span className={`inline-block w-3 h-3 rounded-full ${getIndicatorColor(editValues.water)}`}></span>
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
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="text-sm text-gray-700 mb-1 flex items-center gap-2">
                                <span className="font-medium">Driver:</span>
                                <input
                                  type="text"
                                  className="min-w-[100px] border rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                  value={editValues.driver}
                                  onChange={e => setEditValues(v => ({ ...v, driver: e.target.value }))}
                                  aria-label="Edit driver"
                                  placeholder="Driver name"
                                />
                              </div>
                              <div className="text-sm text-gray-700 mb-1 flex items-center gap-2">
                                <span className="font-medium">Groomer:</span>
                                <input
                                  type="text"
                                  className="min-w-[100px] border rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                  value={editValues.groomer}
                                  onChange={e => setEditValues(v => ({ ...v, groomer: e.target.value }))}
                                  aria-label="Edit groomer"
                                  placeholder="Groomer name"
                                />
                              </div>
                            </div>
                          </div>
                          {/* Services Edit */}
                          <div className="mb-2">
                            <div className="font-medium text-gray-800 text-base">Services</div>
                            <ul className="list-none text-sm text-gray-700 p-0 m-0">
                              {editServices.map((service, i) => (
                                <li key={service.name + i} className="mb-2 border-b border-gray-200 pb-2 last:border-b-0 last:pb-0 flex flex-col gap-1 relative">
                                  <div className="flex flex-col gap-1">
                                    <label className="font-medium">Package/Service Name
                                      <input
                                        type="text"
                                        className="block w-full border rounded px-2 py-1 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        value={service.item_name}
                                        onChange={e => setEditServices(services => services.map((s, idx) => idx === i ? { ...s, item_name: e.target.value } : s))}
                                        aria-label="Edit package/service name"
                                      />
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
                                      <input
                                        type="text"
                                        className="block w-full border rounded px-2 py-1 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        value={service.pet_name}
                                        onChange={e => setEditServices(services => services.map((s, idx) => idx === i ? { ...s, pet_name: e.target.value } : s))}
                                        aria-label="Edit pet name"
                                      />
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
                              ))}
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
                          </div>
                          {/* Pets Edit */}
                          <div className="mb-2">
                            <div className="font-medium text-gray-800 text-base">Pets</div>
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
                          </div>
                          <DialogFooter className="flex justify-end gap-2 mt-4">
                            <button
                              className="min-w-[100px] px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                              tabIndex={0}
                              aria-label="Save changes"
                              onClick={() => {
                                setLocalSessions(sessions =>
                                  sessions.map(s =>
                                    s.name === session.name
                                      ? {
                                          ...s,
                                          ...editValues,
                                          services: editServices.map(s => ({ ...s, amount: Number(s.amount) })),
                                          customer_details: {
                                            ...s.customer_details,
                                            pets: editPets,
                                          },
                                        }
                                      : s
                                  )
                                );
                                setEditSessionId(null);
                                setEditServices([]);
                                setEditPets([]);
                                setEditModalOpen(false);
                              }}
                            >
                              Save
                            </button>
                            <button
                              className="min-w-[100px] px-3 py-1 text-xs bg-gray-300 text-gray-800 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                              tabIndex={0}
                              aria-label="Cancel editing"
                              onClick={() => {
                                setEditSessionId(null);
                                setEditServices([]);
                                setEditPets([]);
                                setEditModalOpen(false);
                              }}
                            >
                              Cancel
                            </button>
                          </DialogFooter>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default SecretTestPage; 