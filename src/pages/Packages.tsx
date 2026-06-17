import { useState, useEffect } from 'react';
import { Compass, ArrowRight, ShieldCheck, MapPin, Check, X, Clock } from 'lucide-react';

interface PackagesProps {
  onNavigate: (page: string, params?: any) => void;
  prefillParams?: {
    category?: 'houseboat' | 'holiday';
  };
}

export default function Packages({ onNavigate, prefillParams }: PackagesProps) {
  const [activeCategory, setActiveCategory] = useState<'houseboat' | 'holiday'>('houseboat');

  useEffect(() => {
    if (prefillParams?.category) {
      setActiveCategory(prefillParams.category);
    }
  }, [prefillParams]);

  const houseboatPackages = [
    {
      code: 'Kera HP-00',
      title: '1 Night Houseboat Cruise',
      duration: '1 Night / 2 Days',
      route: 'Alleppey Backwaters - Punnamada Lake - Vembanad Lake - Kuppapuram - Alleppey.',
      description: 'The classic backwater experience. Cruise through the legendary palm-fringed Punnamada Lake, witness village activities, enjoy freshly caught fish for lunch, and spend a serene night floating on the peaceful waters.',
      inclusions: [
        'Welcome drink, lunch, evening tea with snacks, dinner, and breakfast',
        'Deluxe A/C usage from 9:00 PM to 6:00 AM (or 24-hr A/C for Premium/Luxury fleet)',
        'Traditional Kerala cuisine prepared by onboard private chef',
        'Cruise time from 12:00 PM to 5:30 PM and next morning 8:00 AM to 9:00 AM'
      ],
      exclusions: [
        'Any personal expenses or additional beverages',
        'Jetty transfer and entry fees'
      ]
    },
    {
      code: 'Kera HP-01',
      title: '2 Nights Houseboat Cruise',
      duration: '2 Nights / 3 Days',
      route: 'Alleppey Backwaters - Punnamadakayal - Vembanad Lake - Marthandom - Champakulam.',
      description: 'Relax with a complete 2-night drift. Experience village canal life, watch local farmers, visit historical churches, and enjoy fresh backwater cuisine. Includes complimentary short village walk and relaxing head/shoulder massage.',
      inclusions: [
        'All standard meals (Breakfast, Lunch, Dinner, Evening Tea/Coffee/Snacks)',
        'Complimentary short guided village walk',
        'Onboard head/shoulder relaxation massage sessions',
        'Special traditional Karimeen (Pearl Spot) fish preparation',
        '24-hour crew assistance'
      ],
      exclusions: [
        'Any premium seafood items not included in standard menu (like Lobsters/Crabs, can be arranged at extra cost)',
        'Gratuities for the crew'
      ]
    },
    {
      code: 'Kera HP-02',
      title: '3 Nights Houseboat Cruise',
      duration: '3 Nights / 4 Days',
      route: 'Pullangadi Thodu - Thakazhi - Karumadi (Buddha Statue) - Marthandom - Champakulam - Punnamadakayal - Vembanad Lake - Thottappally.',
      description: 'A deep-dive voyage traversing ancient heritage locations and agricultural backwaters. You will witness the traditional coir-making industries, visit the ancient Karumadikkuttan shrine, and cruise through remote canals.',
      inclusions: [
        'Full boarding with gourmet custom menu options',
        'Heritage site entrance fees and guided visits',
        'Complementary canoe/shikara ride through narrow canals',
        'Traditional Ayurvedic wellness massage coupons',
        'Punnamada Jetty private embarkation'
      ],
      exclusions: [
        'Personal laundry and telephone charges',
        'Additional transport to site locations'
      ]
    },
    {
      code: 'Kera HP-03',
      title: '4 Nights Houseboat Cruise',
      duration: '4 Nights / 5 Days',
      route: 'Pullangadi - Thakazhi - Karumadi - Thottappally Spillway - Punnakadu - Marthandom - Champakulam - Vembanad Lake - Alappuzha.',
      description: 'The ultimate luxury backwater escape. This cruise covers the complete network of Alappuzha backwaters, touching peaceful lakeside lagoons and coastal spillways. Includes premium culinary experiences and therapeutic activities.',
      inclusions: [
        'Full board custom gourmet menu (options for Continental/North Indian/Traditional Kerala)',
        'Private village canoe expedition & coir factory visit',
        'Complimentary souvenir photography and drone shoot (subject to availability)',
        'Luxury premium houseboat allocation with 24-hr air conditioning'
      ],
      exclusions: [
        'Alcoholic beverages and optional land sightseeing charges',
        'Flight/Train tickets'
      ]
    },
  ];

  const holidayPackages = [
    {
      code: 'Kera KP-01',
      title: 'Munnar & Alleppey Delight',
      duration: '3 Nights / 4 Days',
       routes: [
    'Munnar Hills (2 Nights) - Alleppey Houseboat (1 Night).',
    'Kochi(1 Night) - Kumarakom (1 Night) - Alleppey Houseboat (1 Night) .',
    'Vagamon (2 Nights) - Alleppey Houseboat (1 Night)'
  ],
      description: 'A perfect combination of misty tea gardens and tranquil backwaters. Spend two nights exploring the cascading waterfalls, tea museums, and scenic viewpoints of Munnar, followed by a magical 1-night luxury houseboat cruise.',
      inclusions: [
        '2 Nights stay in premium Munnar hill resort with breakfast',
        '1 Night stay in private luxury A/C houseboat with all meals',
        'A/C sedan transfer from Kochi airport/station for all sightseeing & jetty drops',
        'Munnar tea estate tour, Eravikulam entry tickets, and boating fees'
      ],
      exclusions: [
        'Lunch and dinner in Munnar resorts',
        'Any guide charges or camera fees'
      ]
    },
     {
      code: 'Kera KP-02',
      title: 'Romantic Vagamon & Kumarakom Honeymoon',
      duration: '4 Nights / 5 Days',
      routes:[
        'Munnar Hills (2 Nights) - Thekkady (1 Night) - Alleppey Houseboat (1 Night)',
        'Munnar Hills (2 Nights) - Kumarakom Lake Resort (1 Night) - Alleppey Houseboat (1 Night).',
        'Munnar Hills (3 Nights) - Alleppey Houseboat (1 Night).'
      ],
      description: 'A specially curated package for couples. Enjoy the cool mountain breeze and pine valleys of Vagamon, stay at a lakeside luxury resort in Kumarakom, and top it off with a decorated premium honeymoon houseboat.',
      inclusions: [
        '2 Nights luxury hill resort in Vagamon with candlelit dinner',
        '1 Night premium cottage in Kumarakom with breakfast',
        '1 Night luxury A/C houseboat with flower decoration & honeymoon cake',
        'All transfers in private chauffeur-driven executive car',
        'Couple spa/massage session (1 hour)'
      ],
      exclusions: [
        'Personal laundry and items of personal nature',
        'Entrance fees to parks not mentioned'
      ]
    },
    {
      code: 'Kera KP-03',
      title: 'Kerala Backwaters & Hills Escape',
      duration: '5 Nights / 6 Days',
      routes:[
        'Kochi (1 Night) - Munnar Hills (2 Nights) - Thekkady Wildlife (1 Night) - Alleppey Houseboat (1 Night).',
        'Munnar Hills (2 Nights) - Thekkady Wildlife (1 Night)- Kumarakom (1 Night) - Alleppey Houseboat (1 Night).',
        'Munnar Hills (2 Nights) - Thekkady Wildlife (1 Night) - Vagamon(1 Night)- Alleppey Houseboat (1 Night).',
      ],
      description: 'Experience the best of South Kerala. View the rolling tea gardens of Munnar, spot elephants in Periyar Lake, spice gardens in Thekkady, sail through Alleppey backwaters, and explore the historic Chinese Fishing nets in Fort Kochi.',
      inclusions: [
        '2 Nights Munnar, 1 Night Thekkady, 1 Night Kochi Premium hotel stays with breakfast',
        '1 Night private houseboat cruise in Alleppey with full board',
        'Private A/C SUV for the entire trip duration including pick and drop',
        'Spice plantation walk and Kathakali cultural show tickets'
      ],
      exclusions: [
        'Periyar boating tickets (subject to availability/direct booking)',
        'Tips, insurance, and personal shopping'
      ]
    },
    {
      code: 'Kera KP-04',
      title: 'Grand Kerala Coast & Hills Tour',
      duration: '6 Nights / 7 Days',
         routes:[
        'Munnar Hills (2 Nights) - Thekkady Wildlife (1 Night) - Alleppey Houseboat (1 Night) - Kovalam Beach (2 Nights)',
         'Kochi (1 Night) - Munnar Hills (2 Nights) - Thekkady Wildlife (1 Night) - Kumarakom(1 Night) - Alleppey Houseboat (1 Night).',
         'Munnar Hills (2 Nights) - Thekkady Wildlife (1 Night) - vagamon (2 Nights) Alleppey Houseboat (1 Night).',
      ],
      description: 'The ultimate grand itinerary. Traverse all landscapes of Kerala: the green hills of Munnar, forest trails of Thekkady, lazy backwater lagoons of Alleppey, and the golden shores & seaside cafes of Kovalam Beach.',
      inclusions: [
        'Premium hotel stays in Munnar (2N), Thekkady (1N), Kovalam (2N) with daily breakfast',
        '1 Night private deluxe/premium houseboat cruise with full board meals',
        'Full tour transport via dedicated private car from Kochi to Trivandrum departure',
        'Kovalam beach sightseeing, Fort Kochi tour, and tea garden walks'
      ],
      exclusions: [
        'Flight / Train fare to Kerala and return',
        'Water sports, rafting, and elephant riding fees'
      ]
    },
    {
  code: 'Kera KP-05',
  title: 'Munnar, Thekkady, Vagamon & Kovalam Escape',
  duration: '7 Nights / 8 Days',
  routes:[
    'Munnar Hills (2 Nights) - Thekkady Wildlife (1 Night) -  Alleppey Houseboat (1 Night) - Kovalam (2 Nights).',
     'Munnar Hills (2 Nights) - Thekkady Wildlife (1 Night) - kumarakom (1 Night) - Alleppey Houseboat (1 Night) - Kovalam (2 Nights).',
      'Munnar Hills (2 Nights) - Thekkady Wildlife (1 Night) - Vagamon (1 Night) - Alleppey Houseboat (1 Night) - Kovalam (2 Nights).',
  ],
  description: 'Experience Kerala’s most scenic destinations in a single journey. Explore the mist-covered tea plantations and breathtaking viewpoints of Munnar, discover the wildlife and spice plantations of Thekkady, relax amidst the rolling meadows and pine forests of Vagamon, enjoy a memorable overnight cruise through the tranquil backwaters of Alleppey aboard a traditional houseboat, and unwind on the beautiful beaches of Kovalam.',
  inclusions: [
    '2 Nights stay in Munnar with sightseeing of tea gardens and waterfalls',
    '1 Night stay in Thekkady with spice plantation and wildlife experiences',
    '1 Night stay in Vagamon with sightseeing of meadows, pine forests, and viewpoints',
    '1 Night stay in deluxe/private houseboat at Alleppey with all meals',
    '2 Nights stay in Kovalam beach resort',
    'Private A/C vehicle for all transfers and sightseeing',
    'Houseboat cruise through the scenic backwaters of Alleppey',
    'Daily breakfast at hotels and all meals on the houseboat'
  ],
  exclusions: [
    'Airfare, train tickets, and travel insurance',
    'Personal expenses, laundry, tips, and optional activities',
    'Entry fees to monuments, parks, boating, and wildlife attractions'
  ]
},
    {
  code: 'Kera KP-06',
  title: 'Grand Kerala Explorer',
  duration: '8 Nights / 9 Days',
  routes:[ 'Kochi (1 Night) - Munnar Hills (2 Nights) - Thekkady Wildlife (1 Night) - Alleppey Houseboat (1  Night) - Kanyakumari (1 Night) - Kovalam (2 Nights).',
    'Kochi (1 Night) - Munnar Hills (2 Nights) - Thekkady Wildlife (1 Night) - kumarakom (1 Night) - Alleppey Houseboat (1 Night) - Kovalam (2 Nights).',
    'Munnar Hills (2 Nights) - Thekkady Wildlife (1 Night) - Vagamon (1 Night) - Alleppey Houseboat (1 Night) - Kanyakumari (1 Night) - Kovalam (2 Nights).',
  ],
  description: 'Discover the best of Kerala and South India in one unforgettable journey. Explore the historic attractions of Cochin, enjoy the misty tea gardens and scenic viewpoints of Munnar, experience the wildlife and spice plantations of Thekkady, relax in the beautiful hill station of Vagamon, cruise through the tranquil backwaters of Alleppey aboard a traditional houseboat, visit the iconic Vivekananda Memorial and sunrise point at Kanyakumari, and unwind on the golden beaches of Kovalam.',
  inclusions: [
    '1 Night stay in Cochin with sightseeing of major attractions',
    '2 Nights stay in Munnar with tea garden and hill station sightseeing',
    '1 Night stay in Thekkady with spice plantation and wildlife experiences',
    '1 Night stay in Vagamon with sightseeing of meadows and pine forests',
    '1 Night stay in deluxe/private houseboat at Alleppey with all meals',
    '1 Night stay in Kanyakumari with Vivekananda Memorial visit',
    '2 Nights stay in Kovalam with beach sightseeing',
    'Private A/C vehicle for all transfers and sightseeing throughout the tour'
  ],
  exclusions: [
    'Airfare, train tickets, and travel insurance',
    'Personal expenses, laundry, tips, and optional activities',
    'Entry fees to monuments, parks, and boating unless specified'
  ]
}
  ];

  const currentPackages = activeCategory === 'houseboat' ? houseboatPackages : holidayPackages;

  return (
    <div className="bg-bg-warm min-h-screen pt-24 pb-16 sm:pb-20 lg:pb-24 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="section-label mb-2">Holiday Plans</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-text-dark mb-4">
            Curated Kerala Packages
          </h1>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
          <p className="text-text-muted text-base leading-relaxed">
            Choose from our specialized multi-night houseboat cruises or all-inclusive Kerala holiday packages combining hill stations, beaches, and backwater stays.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 border-b border-gray-200 pb-6">
          {[
            { id: 'houseboat', label: 'Houseboat Packages', icon: Compass },
            { id: 'holiday', label: 'Kerala Holiday Packages', icon: Clock }
          ].map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-accent text-white shadow-md'
                    : 'bg-white text-text-muted border border-gray-150 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Packages Grid/List */}
        <div className="space-y-10 max-w-5xl mx-auto">
          {currentPackages.map((pkg) => (
            <div 
              key={pkg.code} 
              className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col lg:flex-row gap-8 items-start hover:shadow-md transition-shadow duration-300"
            >
              {/* Left Info Column */}
              <div className="space-y-4 flex-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs font-bold bg-accent text-white px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {pkg.code}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-text-dark">
                    {pkg.title}
                  </h3>
                  <span className="text-xs text-text-muted font-semibold bg-bg-warm px-3 py-1 rounded-full flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-primary" /> {pkg.duration}
                  </span>
                </div>
                
              {pkg.routes?.map((route, index) => (
  <p
    key={index}
    className="text-xs font-bold text-primary flex items-start gap-1.5 leading-relaxed"
  >
    <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
    <span>
      <strong className="text-text-muted">
        Route CT{String(index + 1).padStart(2, '0')}:
      </strong>{' '}
      {route}
    </span>
  </p>
))}
                
                <p className="text-text-muted text-sm leading-relaxed">
                  {pkg.description}
                </p>

                {/* Inclusions and Exclusions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="bg-primary/5 p-4 rounded-2xl border border-primary/10">
                    <h4 className="text-[10px] font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-green-600 stroke-[3px]" /> Inclusions
                    </h4>
                    <ul className="space-y-1.5">
                      {pkg.inclusions.map((inc, index) => (
                        <li key={index} className="text-[11px] text-text-muted leading-relaxed flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 mt-1.5 shrink-0" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-50/30 p-4 rounded-2xl border border-red-500/10">
                    <h4 className="text-[10px] font-bold text-red-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <X className="w-3.5 h-3.5 text-red-600 stroke-[3px]" /> Exclusions
                    </h4>
                    <ul className="space-y-1.5">
                      {pkg.exclusions.map((exc, index) => (
                        <li key={index} className="text-[11px] text-text-muted leading-relaxed flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 mr-2 mt-1.5 shrink-0" />
                          <span>{exc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA section */}
                <div className="pt-4 flex flex-wrap gap-4 items-center justify-between border-t border-gray-100">
                  <span className="text-xs text-text-muted flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-green-600" /> Sustainable Local Tourism Certified
                  </span>
                  
                  <button
                    onClick={() => onNavigate('booking', { 
                      tourType: activeCategory === 'houseboat' ? 'Houseboat Package' : 'Houseboat Cruise', 
                      packageCode: pkg.code,
                      duration: pkg.duration
                    })}
                    className="inline-flex items-center gap-1.5 px-6 py-3 bg-accent text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-accent-hover transition-colors cursor-pointer"
                  >
                    Inquire For Booking <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom request section */}
        <div className="mt-16 bg-white rounded-3xl p-8 max-w-4xl mx-auto border border-gray-100 text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-text-dark">Want a fully customized itinerary?</h3>
          <p className="text-text-muted text-sm max-w-lg mx-auto leading-relaxed">
            Whether you want a corporate event day cruise, a special multi-boat family reunion, or a personalized Kerala circuit including bird sanctuaries and hill stations, we can craft it for you.
          </p>
          <button
            onClick={() => onNavigate('booking', { tourType: 'Houseboat Cruise', notes: 'Interested in a custom itinerary.' })}
            className="inline-flex items-center px-6 py-2.5 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-primary-dark cursor-pointer"
          >
            Request Custom Package
          </button>
        </div>

      </div>
    </div>
  );
}
