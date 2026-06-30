import { useState, useEffect } from 'react';
import { Mail, Phone, ShieldCheck, CreditCard, HelpCircle, FileText, CheckCircle2 } from 'lucide-react';

interface BookingProps {
  prefillParams?: {
    tourType?: string;
    destination?: string;
    bedrooms?: string;
    duration?: string;
    packageCode?: string;
    subBoat?: string;
  };
}

export default function Booking({ prefillParams }: BookingProps) {
  // Form State
  const [formData, setFormData] = useState({
    tourType: 'Houseboat Cruise',
    destination: 'Alleppey Backwaters',
    checkInDate: '',
    bedrooms: '1 Bedroom (HB-01)',
    guests: '2',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeInfoTab, setActiveInfoTab] = useState<'terms' | 'cancellation' | 'bank'>('terms');

  // Load Prefill Parameters
  useEffect(() => {
    if (prefillParams) {
      setFormData((prev) => ({
        ...prev,
        tourType: prefillParams.tourType || prev.tourType,
        destination: prefillParams.destination || prev.destination,
        bedrooms: prefillParams.bedrooms || prev.bedrooms,
        notes: [
          prefillParams.packageCode ? `Interested in Package: ${prefillParams.packageCode}` : '',
          prefillParams.duration ? `Duration preference: ${prefillParams.duration}` : '',
          prefillParams.subBoat ? `Interested in Boat: ${prefillParams.subBoat}` : ''
        ].filter(Boolean).join('. ')
      }));
    }
  }, [prefillParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request
    setSubmitted(true);
  };

  return (
    <div className="bg-bg-warm min-h-screen pt-24 pb-16 sm:pb-20 lg:pb-24 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="section-label mb-2">Book Your Cruise</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-text-dark mb-4">
            Reservation & Inquiries
          </h1>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
          <p className="text-text-muted text-base leading-relaxed">
            Fill in our booking inquiry form to check fleet availability. Review payment details, terms of reservation, and cancellation policies below.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Column: Reservation Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-text-dark">Inquiry Submitted Successfully!</h3>
                  <p className="text-text-muted text-sm max-w-md mx-auto">
                    Thank you, <span className="font-bold text-text-dark">{formData.name}</span>. Our reservation officer has received your request. We will contact you on <span className="font-bold text-text-dark">{formData.phone}</span> or via email in the next 2-4 hours to confirm fleet availability and offer pricing.
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-50 flex justify-center gap-4 text-xs font-semibold text-text-muted">
                  <p className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-green-600" /> Direct Booking Rate</p>
                  <p className="flex items-center gap-1.5"><CreditCard className="w-4 h-4 text-primary" /> Verified Operator</p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-text-dark transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-serif text-xl font-bold text-text-dark border-b border-gray-50 pb-3 mb-6">
                  Inquiry Form
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Tour Type */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-text-muted">Tour Type</label>
                    <select
                      name="tourType"
                      value={formData.tourType}
                      onChange={handleInputChange}
                      className="w-full bg-bg-warm border border-gray-200 rounded-lg px-4 py-2.5 text-xs text-text-dark font-medium focus:ring-1 focus:ring-primary focus:outline-none cursor-pointer"
                    >
                      <option>Houseboat Cruise</option>
                      <option>Houseboat Package</option>
                      <option>Other Boats & Services</option>
                    </select>
                  </div>

                  {/* Destination */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-text-muted">Destination</label>
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      className="w-full bg-bg-warm border border-gray-200 rounded-lg px-4 py-2.5 text-xs text-text-dark font-medium focus:ring-1 focus:ring-primary focus:outline-none cursor-pointer"
                    >
                      <option>Alleppey Backwaters</option>
                      <option>Munnar Hills</option>
                      <option>Thekkady Wildlife</option>
                      <option>Vagamon Hills</option>
                      <option>Kochi Heritage</option>
                      <option>Kumarakom Resort</option>
                      <option>Kovalam Beach</option>
                      <option>Kanyakumari Sunset</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {/* Check-in Date */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-text-muted">Check-in Date</label>
                    <input
                      type="date"
                      name="checkInDate"
                      required
                      value={formData.checkInDate}
                      onChange={handleInputChange}
                      className="w-full bg-bg-warm border border-gray-200 rounded-lg px-4 py-2.5 text-xs text-text-dark font-medium focus:ring-1 focus:ring-primary focus:outline-none"
                    />
                  </div>

                  {/* Bedrooms */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-text-muted">Rooms/Fleet Size</label>
                    <select
                      name="bedrooms"
                      value={formData.bedrooms}
                      onChange={handleInputChange}
                      className="w-full bg-bg-warm border border-gray-200 rounded-lg px-4 py-2.5 text-xs text-text-dark font-medium focus:ring-1 focus:ring-primary focus:outline-none cursor-pointer"
                    >
                      <option>1 Bedroom (HB-01)</option>
                      <option>2 Bedrooms (HB-02)</option>
                      <option>3 Bedrooms (HB-03)</option>
                      <option>4 Bedrooms (HB-04)</option>
                      <option>5 Bedrooms (HB-05)</option>
                      <option>6 Bedrooms (HB-06)</option>
                      <option>7 Bedrooms (HB-07)</option>
                      <option>8 Bedrooms (HB-08)</option>
                      <option>Day Cruise (HB-09)</option>
                      <option>Not Sure / Combined Tour</option>
                    </select>
                  </div>

                  {/* Guests */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-text-muted">Total Guests</label>
                    <input
                      type="number"
                      name="guests"
                      min="1"
                      required
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full bg-bg-warm border border-gray-200 rounded-lg px-4 py-2.5 text-xs text-text-dark font-medium focus:ring-1 focus:ring-primary focus:outline-none"
                    />
                  </div>
                </div>

                <hr className="border-gray-50" />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-text-muted">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-bg-warm border border-gray-200 rounded-lg px-4 py-2.5 text-xs text-text-dark font-medium focus:ring-1 focus:ring-primary focus:outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-text-muted">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. name@domain.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-bg-warm border border-gray-200 rounded-lg px-4 py-2.5 text-xs text-text-dark font-medium focus:ring-1 focus:ring-primary focus:outline-none"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-text-muted">Phone (WhatsApp Preferred)</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +91 94959 44443"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-bg-warm border border-gray-200 rounded-lg px-4 py-2.5 text-xs text-text-dark font-medium focus:ring-1 focus:ring-primary focus:outline-none"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-text-muted">Special Requests / Tour details</label>
                  <textarea
                    name="notes"
                    rows={4}
                    placeholder="Enter any preferences, food requirements, extra beds needed, or route details..."
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full bg-bg-warm border border-gray-200 rounded-lg px-4 py-2.5 text-xs text-text-dark font-medium focus:ring-1 focus:ring-primary focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-accent text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-accent-hover transition-colors cursor-pointer"
                >
                  Send Booking Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Info Tabs */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Tab selection */}
            <div className="bg-white rounded-2xl p-2 border border-gray-100 shadow-sm flex">
              {[
                { id: 'terms', label: 'T&C', icon: FileText },
                { id: 'cancellation', label: 'Cancellation', icon: HelpCircle },
                { id: 'bank', label: 'Bank Details', icon: CreditCard }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveInfoTab(tab.id as any)}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeInfoTab === tab.id
                        ? 'bg-primary text-white shadow-sm'
                        : 'text-text-muted hover:text-primary'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Content Display Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm min-h-[300px] flex flex-col justify-between">
              
              {/* Terms Content */}
              {activeInfoTab === 'terms' && (
                <div className="space-y-4">
                  <h3 className="font-serif text-lg font-bold text-text-dark">Reservation Terms & Conditions</h3>
                  <hr className="border-gray-50" />
                  <ul className="space-y-3 text-xs text-text-muted leading-relaxed">
                    <li className="flex items-start">
                      <span className="text-accent font-bold mr-2">1.</span>
                      <span>A minimum <strong>50% advance payment</strong> is required to confirm a houseboat reservation. The balance must be paid at the boarding jetty before embarkation.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent font-bold mr-2">2.</span>
                      <span>Standard check-in time for overnight cruises is <strong>12:00 PM</strong>, and check-out is <strong>09:00 AM</strong> the following morning. Day cruise starts at 11:30 AM and check-out is 5:00 PM.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent font-bold mr-2">3.</span>
                      <span>Air conditioning (A/C) inside deluxe bedrooms is operational from <strong>09:00 PM to 06:00 AM</strong>. For premium/luxury houseboats, A/C is available 24 hours.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent font-bold mr-2">4.</span>
                      <span>All adult guests must carry a valid Government-issued Photo ID card (Aadhaar, Passport, Driving License) to submit at jetty authorities.</span>
                    </li>
                  </ul>
                </div>
              )}

              {/* Cancellation Policy */}
              {activeInfoTab === 'cancellation' && (
                <div className="space-y-4">
                  <h3 className="font-serif text-lg font-bold text-text-dark">Cancellation Refund Policy</h3>
                  <hr className="border-gray-50" />
                  <ul className="space-y-3 text-xs text-text-muted leading-relaxed">
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">•</span>
                      <span>Cancellation <strong>30 days or more</strong> prior to check-in date: Full refund of the deposit (minus 5% bank processing charges).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">•</span>
                      <span>Cancellation <strong>15 to 29 days</strong> prior to check-in date: 50% refund of the advance deposit.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">•</span>
                      <span>Cancellation <strong>less than 15 days</strong> prior to check-in date: No refund of the advance deposit.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">•</span>
                      <span>If Kera Houseboats has to cancel booking due to weather hazards (floods, storms) or technical issues, a 100% full refund or alternative dates will be offered.</span>
                    </li>
                  </ul>
                </div>
              )}

              {/* Bank Account Details */}
              {activeInfoTab === 'bank' && (
                <div className="space-y-4">
                  <h3 className="font-serif text-lg font-bold text-text-dark">Official Deposit Bank Account</h3>
                  <hr className="border-gray-50" />
                  <p className="text-xs text-text-muted">Please deposit reservation advances to our official company account. Share screenshots on WhatsApp after transfer.</p>
                  
                  <div className="bg-bg-warm p-4 rounded-xl border border-gray-100 text-xs space-y-2 text-text-dark">
                    <p><span className="text-text-muted block font-semibold text-[10px] uppercase">Account Name</span> <strong>Kera Holidays</strong> / <strong>Kera Houseboats</strong></p>
                    <p><span className="text-text-muted block font-semibold text-[10px] uppercase">Account Number</span> <strong className="text-sm font-serif">0524073000000311</strong></p>
                    <p><span className="text-text-muted block font-semibold text-[10px] uppercase">Bank Name</span> <strong>South Indian Bank (SIB)</strong></p>
                    <p><span className="text-text-muted block font-semibold text-[10px] uppercase">Branch & IFSC</span> <strong>Alappuzha (Alleppey)</strong> | <strong className="font-mono">SIBL0000524</strong></p>
                    <p><span className="text-text-muted block font-semibold text-[10px] uppercase">GSTIN Registration</span> <strong className="font-mono">32AAPFK5557R1ZH</strong></p>
                  </div>
                </div>
              )}

              {/* Quick Contact Info */}
              <div className="pt-6 border-t border-gray-50 space-y-2 mt-6">
                <h4 className="text-[10px] font-bold text-text-dark uppercase tracking-widest">Instant Support:</h4>
                <div className="flex flex-col gap-1.5 text-xs text-text-muted">
                  <a href="tel:+918086907043" className="flex items-center gap-1.5 hover:text-primary">
                    <Phone className="w-3.5 h-3.5 text-accent" /> +91 80869 07043
                  </a>
                  <a href="mailto:houseboatkera@gmail.com" className="flex items-center gap-1.5 hover:text-primary">
                    <Mail className="w-3.5 h-3.5 text-accent" /> houseboatkera@gmail.com
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
