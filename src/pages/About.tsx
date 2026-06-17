import { useState } from 'react';
import { Ship, Anchor, Shield, ShieldAlert, Wifi, Users, Sparkles, ChefHat } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('jetty');

  const detailedUSPs = [
    {
      id: 'boats',
      icon: Ship,
      title: 'Own House Boats',
      shortDesc: 'No middlemen. Directly managed and certified fleet.',
      longDesc: 'Unlike most travel agencies, Kera Houseboats owns and operates its complete fleet of handcrafted luxury wooden houseboats. This allows us to maintain the highest quality standards, ensure regular safety certifications, and offer direct booking prices without any middleman commission. Every vessel is built with traditional methods combining eco-friendly bamboo pole designs and premium wooden frameworks.'
    },
    {
      id: 'jetty',
      icon: Anchor,
      title: 'Private Boat Jetty',
      shortDesc: 'Exclusive boarding at Punnamada Lake, Alleppey.',
      longDesc: 'Avoid the chaos and crowds of Alappuzha\'s public boarding terminals. Kera Houseboats operates from its own exclusive private jetty situated along the scenic shores of Punnamada Lake (famous for the Nehru Trophy Snake Boat Race). Enjoy a calm, welcoming embarkation experience with refreshments, clean lounge spaces, and a smooth boarding process.'
    },
    {
      id: 'safety',
      icon: ShieldAlert,
      title: 'Best Safety Arrangements',
      shortDesc: 'State-of-the-art onboard security and rescue gear.',
      longDesc: 'Your safety is our absolute priority. All our houseboats are fully equipped with international-grade safety systems, including fire-extinguishers, lifebuoys, life jackets for adults and children, and emergency alarm networks. Our vessel captains and crew members are legally certified and undergo regular emergency response training.'
    },
    {
      id: 'insured',
      icon: Shield,
      title: 'Fully Insured Vessels',
      shortDesc: 'Comprehensive passenger and vessel insurance.',
      longDesc: 'Travel with absolute peace of mind. Every single boat in the Kera fleet is fully covered by comprehensive commercial marine insurance. This coverage protects all passengers, crew members, and the vessels themselves against any unforeseen events during the backwater cruises.'
    },
    {
      id: 'wifi',
      icon: Wifi,
      title: 'In-house Entertainment & Free WiFi',
      shortDesc: 'Complimentary high-speed internet and multimedia.',
      longDesc: 'Just because you are drifting along the tranquil backwaters doesn\'t mean you have to disconnect. Enjoy complimentary high-speed Wi-Fi throughout your journey, accompanied by smart LED televisions, Bluetooth sound systems, and a collection of board games to keep you entertained in the evenings.'
    },
    {
      id: 'staff',
      icon: Users,
      title: 'Courteous Staff & 24/7 Concierge',
      shortDesc: 'Multilingual crew dedicated to your comfort.',
      longDesc: 'From the moment you arrive until you disembark, our crew members are there to cater to your every request. Comprising local experts, our multilingual captains and guides speak English, Hindi, Malayalam, and Tamil. We provide round-the-clock concierge services to arrange local village tours, fishing expeditions, or customized itineraries.'
    },
    {
      id: 'housekeeping',
      icon: Sparkles,
      title: 'Spotless Housekeeping',
      shortDesc: 'Meticulous hygiene and pristine cabin conditions.',
      longDesc: 'We maintain a strict hygiene protocol across all cabins, bathrooms, and dining decks. Our houseboats undergo thorough cleaning after every trip. We use premium eco-friendly detergents, provide fresh high-thread-count cotton linens, clean bath towels, and luxury toiletries to ensure your stay is as hygienic as it is comfortable.'
    },
    {
      id: 'chef',
      icon: ChefHat,
      title: 'Personal Chef & Kerala Cuisine',
      shortDesc: 'Freshly prepared traditional local food onboard.',
      longDesc: 'Food is one of the main highlights of a backwater cruise. Each houseboat is staffed with a dedicated personal chef who prepares fresh, authentic Kerala dishes in the onboard kitchen. From the traditional Pearl Spot fish fry (Karimeen Pollichathu) and Kerala chicken roast to organic vegetarian feasts served on banana leaves, we customize the menu to match your spice tolerance and dietary requirements.'
    }
  ];

  const currentUSP = detailedUSPs.find(u => u.id === activeTab) || detailedUSPs[0];

  return (
    <div className="bg-bg-warm min-h-screen pt-24 pb-16 sm:pb-20 lg:pb-24 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-label mb-2">Since 2012</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-text-dark mb-4">
            About Kera Houseboats
          </h1>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
          <p className="text-text-muted text-base leading-relaxed">
            Redefining luxury and traditional backwater cruising in Alappuzha. We own our fleet, operate our own jetty, and deliver world-class hospitality.
          </p>
        </div>

        {/* Our Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20 bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-100">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-dark">
              Our Journey & Vision
            </h2>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed">
              Established on December 12, 2012 (12-12-2012), Kera Houseboats was founded with a single mission: to show the beauty of Kerala’s backwaters in its purest form without compromising on modern comfort and safety.
            </p>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed">
              What started as a single small boat has grown into one of Alappuzha’s most respected and accredited luxury operators. By owning our entire fleet and maintaining our private boarding jetty, we eliminate the variables that often affect holiday rentals. Our guests receive a consistent, high-standard hospitality experience from boarding to checkout.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <p className="text-3xl font-bold text-primary font-serif">14+</p>
                <p className="text-xs text-text-muted uppercase tracking-widest font-semibold mt-1">Years of Trust</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent font-serif">8+ Boats</p>
                <p className="text-xs text-text-muted uppercase tracking-widest font-semibold mt-1">Direct Fleet</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
              <img
                src="/images/WhatsApp Image 2026-05-26 at 11.40.48 AM.jpeg"
                alt="Kera Houseboat on the backwaters"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">Punnamada Lake</p>
                <h3 className="font-serif font-bold text-lg">Alappuzha, Kerala</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Kera - Tabs Section */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <p className="section-label mb-2">Excellence Guaranteed</p>
            <h2 className="font-serif text-3xl font-bold text-text-dark">
              Why Choose Kera Houseboats?
            </h2>
            <p className="text-text-muted text-sm sm:text-base mt-3">
              We focus on the small details that make a massive difference to your backwater getaway.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* List of USPs */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {detailedUSPs.map((usp) => {
                const Icon = usp.icon;
                const isSelected = activeTab === usp.id;
                return (
                  <button
                    key={usp.id}
                    onClick={() => setActiveTab(usp.id)}
                    className={`flex items-center text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-primary border-primary text-white shadow-md'
                        : 'bg-white border-gray-150 text-text-dark hover:bg-gray-50'
                    }`}
                  >
                    <div className={`p-2.5 rounded-lg mr-4 ${isSelected ? 'bg-white/20' : 'bg-primary/10'}`}>
                      <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-primary'}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{usp.title}</h4>
                      <p className={`text-xs mt-0.5 line-clamp-1 ${isSelected ? 'text-white/80' : 'text-text-muted'}`}>
                        {usp.shortDesc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected USP Details (Dynamic Panel) */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 border border-gray-100 shadow-sm min-h-[350px] flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="p-3 bg-accent/15 rounded-xl mr-5">
                    <currentUSP.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Core Feature</span>
                    <h3 className="font-serif text-2xl font-bold text-text-dark mt-0.5">{currentUSP.title}</h3>
                  </div>
                </div>

                <hr className="border-gray-100" />

                <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                  {currentUSP.longDesc}
                </p>
              </div>

              {/* Action buttons inside detail */}
              <div className="mt-8 flex flex-wrap gap-4 pt-6 border-t border-gray-50">
                <div className="text-xs text-text-muted">
                  Need custom arrangements? Contact our crew directly.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
