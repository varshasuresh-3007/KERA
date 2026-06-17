import { MapPin, Calendar } from 'lucide-react';

const destinationBookingMap: Record<string, string> = {
  'Alleppey (Alappuzha)': 'Alleppey Backwaters',
  'Munnar': 'Munnar Hills',
  'Thekkady': 'Thekkady Wildlife',
  'Vagamon': 'Vagamon Hills',
  'Cochin (Kochi)': 'Kochi Heritage',
  'Kumarakom': 'Kumarakom Resort',
  'Kovalam': 'Kovalam Beach',
  'Kanyakumari': 'Kanyakumari Sunset'
};

interface DestinationsProps {
  onNavigate: (page: string, params?: any) => void;
}

export default function Destinations({ onNavigate }: DestinationsProps) {
  const destinationsList = [
    {
      name: 'Alleppey (Alappuzha)',
      image: '/images/destination-alleppey.png',
      tagline: 'The Venice of the East',
      desc: 'The backwater capital of India. Alleppey is famous for its intricate network of palm-fringed canals, quiet lakes, coir weaving industries, and the annual Nehru Trophy Snake Boat Race. It is the core base for Kera Houseboats.',
      highlights: ['Scenic backwater canals', 'Punnamada Lake boarding', 'Karumadi Buddha statue', 'Alleppey Beach & lighthouse'],
      packageCode: 'Kera-CT-01'
    },
    {
      name: 'Munnar',
      image: '/images/destination-munnar.png',
      tagline: 'Misty Tea Gardens & Hill Station',
      desc: 'Situated 1,600 meters above sea level at the confluence of three mountain streams, Munnar is Kerala\'s most popular hill station. Covered with rolling tea estates, waterfalls, dams, and the high Eravikulam National Park.',
      highlights: ['Tea Museum & estates tour', 'Eravikulam National Park', 'Mattupetty & Kundala Lakes', 'Cheeyappara Waterfalls'],
      packageCode: 'Kera-CT-04'
    },
    {
      name: 'Thekkady',
      image: '/images/destination-thekkady.png',
      tagline: 'Wildlife Sanctuary & Spices',
      desc: 'Home to the world-renowned Periyar National Tiger Reserve. Thekkady offers scenic lake boat cruises to spot wild elephants, bison, and tigers, along with extensive spice plantation tours and elephant safaris.',
      highlights: ['Periyar Lake boating safari', 'Spice plantation walks', 'Elephant riding and bathing', 'Kathakali cultural show'],
      packageCode: 'Kera-CT-07'
    },
    {
      name: 'Vagamon',
      image: '/images/destination-munnar.png', // reusing existing image as fallback
      tagline: 'Pine Forests & Cool Meadows',
      desc: 'A peaceful, untouched hill station known for its pine forests, velvet green meadows, tea plantations, and cool mountain air. Home to Kurisumala Ashram, suicide points, and excellent trekking trails.',
      highlights: ['Vagamon Pine Forest walk', 'Monk-managed Kurisumala dairy farm', 'Green Meadows & Lake', 'Vagamon Pine Valley suicide point'],
      packageCode: 'Kera-CT-03'
    },
    {
      name: 'Cochin (Kochi)',
      image: '/images/destination-kochi.png',
      tagline: 'Queen of the Arabian Sea',
      desc: 'A historic harbor city blending Portuguese, Dutch, Jewish, and British history. Fort Kochi features colonial architecture, the famous Chinese Fishing Nets, and the historic Mattancherry Palace.',
      highlights: ['Fort Kochi Chinese Fishing Nets', 'Jewish Synagogue & Jew Town', 'Mattancherry Dutch Palace', 'Marine Drive harbor cruise'],
      packageCode: 'Kera-CT-02'
    },
    {
      name: 'Kumarakom',
      image: '/images/boat-interior.png', // fallback
      tagline: 'Tranquil Lake Resort Retreat',
      desc: 'A beautiful village set against the Vembanad Lake. Famous for the Kumarakom Bird Sanctuary, where migratory birds nest, and upscale luxury resorts offering peaceful backwater retreat experiences.',
      highlights: ['Kumarakom Bird Sanctuary walk', 'Vembanad Lake houseboat cruise', 'Luxury wellness resorts', 'Village coir manufacturing'],
      packageCode: 'Kera-CT-08'
    },
    {
      name: 'Kovalam',
      image: '/images/destination-thekkady.png', // fallback
      tagline: 'Pristine Beach Paradise',
      desc: 'A world-famous beach resort town with three crescent-shaped beaches (Lighthouse, Hawa, and Samudra). Famous for its tall red-and-white lighthouse, golden sands, swimming waters, and beach cafes.',
      highlights: ['Kovalam Lighthouse view', 'Water sports & swimming', 'Beachside seafood cafes', 'Marine aquarium visit'],
      packageCode: 'Kera-CT-10'
    },
    {
      name: 'Kanyakumari',
      image: '/images/hero-backwater.png', // fallback
      tagline: 'Confluence of Three Oceans',
      desc: 'The southernmost tip of the Indian subcontinent, located in neighboring Tamil Nadu. Famous for the spectacular views of sunrise and sunset over the ocean confluence, and the Vivekananda Rock Memorial.',
      highlights: ['Vivekananda Rock Memorial', 'Thiruvalluvar Statue boat ride', 'Confluence of 3 Oceans', 'Gandhi Memorial Temple'],
      packageCode: 'Kera-CT-16'
    }
  ];

  return (
    <div className="bg-bg-warm min-h-screen pt-24 pb-16 sm:pb-20 lg:pb-24 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-label mb-2">Travel Guide</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-text-dark mb-4">
            Destinations in Kerala
          </h1>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
          <p className="text-text-muted text-base leading-relaxed">
            Kerala\'s unique topography offers cool mountain ranges, dense tropical wildlife forests, serene backwater lagoons, and pristine sandy beaches. Explore them all.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {destinationsList.map((dest) => (
            <div key={dest.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col sm:flex-row hover:shadow-md transition-shadow duration-300">
              {/* Image Column */}
              <div className="sm:w-1/2 relative min-h-[240px] bg-gray-100">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-black/10 sm:to-black/30" />
                <div className="absolute bottom-4 left-4 sm:hidden text-white">
                  <h3 className="font-serif font-bold text-lg">{dest.name}</h3>
                </div>
              </div>

              {/* Text Column */}
              <div className="sm:w-1/2 p-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="hidden sm:block">
                    <h3 className="font-serif text-lg font-bold text-text-dark flex items-center">
                      <MapPin className="w-4 h-4 text-accent mr-1 shrink-0" />
                      {dest.name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest block">
                    {dest.tagline}
                  </span>
                  <p className="text-text-muted text-xs leading-relaxed">
                    {dest.desc}
                  </p>
                  
                  {/* Highlights Bullet List */}
                  <div className="pt-2">
                    <h4 className="text-[9px] font-bold text-text-dark uppercase tracking-widest mb-1.5">Sightseeing Highlights:</h4>
                    <ul className="space-y-1">
                      {dest.highlights.map((hl) => (
                        <li key={hl} className="text-[11px] text-text-muted flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 shrink-0 animate-pulse" />
                          {hl}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-gray-50">
                  <button
                    onClick={() => onNavigate('booking', { destination: destinationBookingMap[dest.name] || dest.name })}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider hover:text-accent transition-colors cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" /> Inquire for Booking
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
