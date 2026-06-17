import { useState, useEffect } from 'react';
import { Ship, Anchor, Compass, ArrowRight, ShieldCheck } from 'lucide-react';

interface HouseboatsProps {
  onNavigate: (page: string, params?: any) => void;
  prefillParams?: {
    category?: 'fleet' | 'packages' | 'other';
  };
}

export default function Houseboats({ onNavigate, prefillParams }: HouseboatsProps) {
  const [activeCategory, setActiveCategory] = useState<'fleet' | 'packages' | 'other'>('fleet');

  useEffect(() => {
    if (prefillParams?.category) {
      if (prefillParams.category === 'packages') {
        onNavigate('packages', { category: 'houseboat' });
      } else {
        setActiveCategory(prefillParams.category as any);
      }
    }
  }, [prefillParams, onNavigate]);

  const fleetItems = [
    {
      code: 'Kera HB-01',
      title: '1 Bedroom Overnight Cruise',
      bedrooms: '1 Bedroom (Bath-Attached)',
      layout: 'Bottom deck with 1 bedroom, toilet, open dining lounge & kitchen. Upper deck with sun deck and open lounge.',
      suitability: 'Ideal for couples, honeymooners, or single families.',
      capacity: 'Overnight: 2-3 Adults | Day Cruise: Up to 20 Guests',
      image: '/images/boat-interior.png',
      features: ['Personal Chef Onboard', 'Free WiFi', 'Private Jetty Embarkation', '100% Insured']
    },
    {
      code: 'Kera HB-02',
      title: '2 Bedroom Overnight Cruise',
      bedrooms: '2 Bedrooms (Bath-Attached)',
      layout: 'Bottom deck with 2 air-conditioned bedrooms, dining lounge, kitchen. Upper deck with sun deck.',
      suitability: 'Perfect for two couples, friends, or families of 4-6 members.',
      capacity: 'Overnight: 4-6 Adults | Day Cruise: Up to 20 Guests',
      image: '/images/WhatsApp Image 2026-05-26 at 11.40.49 AM.jpeg',
      features: ['Personal Chef Onboard', 'Free WiFi', 'Private Jetty Boarding', 'Safety Gears']
    },
    {
      code: 'Kera HB-03',
      title: '3 Bedroom Overnight Cruise',
      bedrooms: '3 Bedrooms (Bath-Attached)',
      layout: 'Bottom deck with 3 bed rooms, dining hall, kitchen. Upper deck with a massive open recreation hall & sun deck.',
      suitability: 'Suitable for family get-togethers, groups of friends.',
      capacity: 'Overnight: 6-9 Adults | Day Cruise: Up to 50 Guests',
      image: '/images/WhatsApp Image 2026-05-26 at 11.40.49 AM (1).jpeg',
      features: ['Spacious Upper Deck', 'Traditional Chef', 'WiFi & TV', 'Punnamada Jetty']
    },
    {
      code: 'Kera HB-04',
      title: '4 Bedroom Overnight Cruise',
      bedrooms: '4 Bedrooms (Bath-Attached)',
      layout: 'Bottom deck with 3 bedrooms, hall, kitchen. Upper deck has 1 master bedroom (bath-attached), recreation hall, and sun deck.',
      suitability: 'Best for multiple families traveling together.',
      capacity: 'Overnight: 8-12 Adults | Day Cruise: Up to 50 Guests',
      image: '/images/WhatsApp Image 2026-05-26 at 11.40.49 AM (2).jpeg',
      features: ['Upper Deck Master Suite', 'Personal Chef', 'High Safety Standards', 'WiFi Included']
    },
    {
      code: 'Kera HB-05',
      title: '5 Bedroom Overnight Cruise',
      bedrooms: '5 Bedrooms (Bath-Attached)',
      layout: 'Bottom deck with 3 bedrooms, hall, kitchen. Upper deck features 2 bath-attached bedrooms, wide recreation lounge & sun deck.',
      suitability: 'Ideal for small corporate teams or family reunions.',
      capacity: 'Overnight: 10-15 Adults | Day Cruise: Up to 60 Guests',
      image: '/images/WhatsApp Image 2026-05-26 at 11.40.49 AM (3).jpeg',
      features: ['2 Bedrooms on Upper Deck', 'Custom Multi-Cuisine Chef', 'Free High-Speed WiFi']
    },
    {
      code: 'Kera HB-06',
      title: '6 Bedroom Overnight Cruise',
      bedrooms: '6 Bedrooms (Bath-Attached)',
      layout: 'Bottom deck features 6 bath-attached bedrooms, dining room, kitchen. Upper deck with large lounge & sun deck.',
      suitability: 'Perfect for large groups, wedding parties, or corporate excursions.',
      capacity: 'Overnight: 12-18 Adults | Day Cruise: Up to 60 Guests',
      image: '/images/WhatsApp Image 2026-05-26 at 11.40.48 AM.jpeg',
      features: ['6 Room Fleet', 'Spacious Lounges', 'Private Boarding', 'Fully Certified Safety']
    },
    {
      code: 'Kera HB-07',
      title: '7 Bedroom Overnight Cruise',
      bedrooms: '7 Bedrooms (Bath-Attached)',
      layout: 'Bottom deck with 7 bedrooms, wide dining hall, kitchen. Upper deck has a spacious meeting/recreation hall.',
      suitability: 'Suited for corporate retreats and large families.',
      capacity: 'Overnight: 14-21 Adults | Day Cruise: Up to 70 Guests',
      image: '/images/WhatsApp Image 2026-05-26 at 11.40.48 AM (1).jpeg',
      features: ['Massive Layout', 'Dedicated Crew & Captains', 'Fresh Seafood Onboard']
    },
    {
      code: 'Kera HB-08',
      title: '8 Bedroom Overnight Cruise',
      bedrooms: '8 Bedrooms (Bath-Attached)',
      layout: 'Our largest vessel. Bottom deck with 8 bedrooms, common hall, and kitchen. Upper deck with banquet-style hall and sun deck.',
      suitability: 'Ideal for conferences, large wedding gatherings, or grand events.',
      capacity: 'Overnight: 16-24 Adults | Day Cruise: Up to 100 Guests',
      image: '/images/WhatsApp Image 2026-05-26 at 11.40.48 AM (2).jpeg',
      features: ['100 Pax Day Cruise Capacity', 'Grand Dining Deck', 'Multilingual Crew', 'Full Insurance']
    },
    {
      code: 'Kera HB-09',
      title: 'Day Cruise Special',
      bedrooms: 'Lounge and Dining Decks',
      layout: 'Specially structured for day journeys. High passenger capacity layouts, wide viewing windows, and open banquet decks.',
      suitability: 'Corporate team outings, school/college groups, large birthday celebrations.',
      capacity: 'Day Cruise: 10 to 100 Guests (Timings: 11:30 AM to 5:00 PM)',
      image: '/images/WhatsApp Image 2026-05-26 at 11.40.50 AM.jpeg',
      features: ['Includes Welcome Drink & Lunch', 'Tea & Banana Fritters', 'Music System Onboard', 'Eco-Accredited']
    }
  ];

  const houseboatPackages = [
    {
      code: 'Kera HP-01',
      title: '2 Nights Houseboat Cruise',
      duration: '2 Nights / 3 Days',
      route: 'Alleppey Backwaters - Punnamadakayal - Vembanad Lake - Marthandom - Champakulam.',
      description: 'Relax with a complete 2-night drift. Experience village canal life, watch local farmers, visit historical churches, and enjoy fresh backwater cuisine. Includes complimentary short village walk and relaxing head/shoulder massage.',
      inclusions: 'All meals, welcome drinks, village walk, relaxing head/shoulder massage'
    },
    {
      code: 'Kera HP-02',
      title: '3 Nights Houseboat Cruise',
      duration: '3 Nights / 4 Days',
      route: 'Pullangadi Thodu - Thakazhi - Karumadi (Buddha Statue) - Marthandom - Champakulam - Punnamadakayal - Vembanad Lake - Thottappally.',
      description: 'A deep-dive voyage traversing ancient heritage locations and agricultural backwaters. You will witness the traditional coir-making industries, visit the ancient Karumadikkuttan shrine, and cruise through remote canals.',
      inclusions: 'Full boarding, premium chef selections, historical site tours, relaxing wellness therapy'
    },
    {
      code: 'Kera HP-03',
      title: '4 Nights Houseboat Cruise',
      duration: '4 Nights / 5 Days',
      route: 'Pullangadi - Thakazhi - Karumadi - Thottappally Spillway - Punnakadu - Marthandom - Champakulam - Vembanad Lake - Alappuzha.',
      description: 'The ultimate luxury backwater escape. This cruise covers the complete network of Alappuzha backwaters, touching peaceful lakeside lagoons and coastal spillways. Includes premium culinary experiences and therapeutic activities.',
      inclusions: 'Full custom menu, premium sightseeing packages, private village canoe expedition, souvenir photography'
    }
  ];

  const otherBoats = [
    {
      code: 'Kera OT-1',
      title: 'Motor Boats',
      desc: 'Used mainly for high-speed navigation and group transfers. Motor boats operate like water taxis, allowing travelers to reach remote resorts or cover long distances quickly without overnight stays.',
      suitedFor: 'Quick sight-seeing, low-cost transport, point-to-point transfers.',
      image: '/images/destination-alleppey.png'
    },
    {
      code: 'Kera OT-2',
      title: 'Canoeing Boats',
      desc: 'Traditional open canoes propelled manually with single-bladed paddles. It is the only way to navigate the narrowest channels where houseboats and motorboats cannot physically enter.',
      suitedFor: 'Photographers, culture enthusiasts, quiet exploration.',
      image: '/images/WhatsApp Image 2026-05-26 at 11.40.53 AM.jpeg'
    },
    {
      code: 'Kera OT-3',
      title: 'Shikara Boats',
      desc: 'Small, elegant wooden boats covered with detailed roofs and cushioned seating. They run on small quiet engines, providing an eco-friendly, cozy way to explore winding canals without the size of a houseboat.',
      suitedFor: 'Couples, small families, 2-4 hour budget cruises.',
      image: '/images/WhatsApp Image 2026-05-26 at 11.40.53 AM (1).jpeg'
    },
    {
      code: 'Kera OT-4',
      title: 'Speed Boats',
      desc: 'High-power fiberglass speedboats designed for thrills. Fly across the open waters of Vembanad Lake with the wind in your face.',
      suitedFor: 'Adventure seekers, fast transfers.',
      image: '/images/destination-kochi.png'
    }
  ];


  return (
    <div className="bg-bg-warm min-h-screen pt-24 pb-16 sm:pb-20 lg:pb-24 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="section-label mb-2">Our Offerings</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-text-dark mb-4">
            Houseboats & Services
          </h1>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
          <p className="text-text-muted text-base leading-relaxed">
            Browse our complete direct fleet of houseboats, specialized multi-night cruise packages, and smaller eco-boats.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 border-b border-gray-200 pb-6">
          {[
            { id: 'fleet', label: 'Our Fleet', icon: Ship },
            { id: 'packages', label: 'Houseboat Packages', icon: Compass },
            { id: 'other', label: 'Other Boats', icon: Anchor }
          ].map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  if (cat.id === 'packages') {
                    onNavigate('packages', { category: 'houseboat' });
                  } else {
                    setActiveCategory(cat.id as any);
                  }
                }}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
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

        {/* Tab Contents */}

        {/* 1. OUR FLEET */}
        {activeCategory === 'fleet' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleetItems.map((item) => (
              <div key={item.code} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <div>
                  <div className="relative aspect-video bg-gray-100 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-accent text-white text-[10px] font-bold tracking-widest rounded-full uppercase">
                      {item.code}
                    </span>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-text-dark">{item.title}</h3>
                      <p className="text-xs text-primary font-semibold mt-1">{item.bedrooms}</p>
                    </div>
                    <p className="text-text-muted text-xs leading-relaxed">{item.layout}</p>
                    <div className="bg-bg-warm p-3.5 rounded-xl text-xs space-y-1.5">
                      <p className="text-text-dark font-medium"><span className="text-text-muted">Suited for:</span> {item.suitability}</p>
                      <p className="text-text-dark font-medium"><span className="text-text-muted">Capacity:</span> {item.capacity}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.features.map(f => (
                        <span key={f} className="text-[10px] bg-primary/10 text-primary font-bold px-2 py-1 rounded">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onNavigate('booking', { tourType: 'Houseboat Cruise', bedrooms: item.code })}
                    className="w-full py-3 bg-text-dark text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-primary transition-colors cursor-pointer"
                  >
                    Inquire For Booking
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 2. HOUSEBOAT PACKAGES */}
        {activeCategory === 'packages' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            {houseboatPackages.map((pkg) => (
              <div key={pkg.code} className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-shadow duration-300">
                <div className="p-4 bg-accent/10 rounded-2xl text-accent self-start shrink-0">
                  <Compass className="w-8 h-8" />
                </div>
                <div className="space-y-4 flex-1">
                  <div className="flex flex-wrap items-baseline gap-2.5">
                    <span className="text-xs font-bold bg-accent text-white px-2 py-0.5 rounded">{pkg.code}</span>
                    <h3 className="font-serif text-xl font-bold text-text-dark">{pkg.title}</h3>
                    <span className="text-xs text-text-muted font-medium">({pkg.duration})</span>
                  </div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider"><span className="text-text-muted">Route:</span> {pkg.route}</p>
                  <p className="text-text-muted text-sm leading-relaxed">{pkg.description}</p>
                  <div className="text-xs bg-bg-warm p-3 rounded-lg text-text-dark font-medium border border-gray-50">
                    <span className="text-text-muted uppercase font-bold tracking-wider text-[10px] block mb-1">Package Inclusions:</span>
                    {pkg.inclusions}
                  </div>
                  <div className="pt-2 flex flex-wrap gap-4 items-center justify-between">
                    <span className="text-xs text-text-muted flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-green-600" /> Sustainable Local Tourism Certified</span>
                    <button
                      onClick={() => onNavigate('booking', { tourType: 'Houseboat Cruise', duration: pkg.duration })}
                      className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-accent text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-accent-hover transition-colors cursor-pointer"
                    >
                      Book Cruise <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 3. OTHER BOATS */}
        {activeCategory === 'other' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherBoats.map((boat) => (
              <div key={boat.code} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row hover:shadow-md transition-shadow duration-300">
                <div className="md:w-2/5 relative min-h-[200px] bg-gray-100">
                  <img src={boat.image} alt={boat.title} className="w-full h-full object-cover absolute inset-0" />
                  <span className="absolute top-3 left-3 px-2 py-0.5 bg-text-dark text-white text-[10px] font-bold rounded">
                    {boat.code}
                  </span>
                </div>
                <div className="p-6 md:w-3/5 space-y-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-bold text-text-dark">{boat.title}</h3>
                    <p className="text-text-muted text-xs leading-relaxed">{boat.desc}</p>
                    <p className="text-xs text-text-dark font-medium pt-1"><span className="text-text-muted font-normal">Best for:</span> {boat.suitedFor}</p>
                  </div>
                  <button
                    onClick={() => onNavigate('booking', { tourType: 'Other Boats & Services', subBoat: boat.title })}
                    className="w-full py-2.5 border border-text-dark text-text-dark text-[10px] font-bold uppercase tracking-wider rounded-lg hover:bg-text-dark hover:text-white transition-all cursor-pointer"
                  >
                    Book {boat.title}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
