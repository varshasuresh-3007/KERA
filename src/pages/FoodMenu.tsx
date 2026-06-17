import { useState } from 'react';
import { ChefHat, Coffee, Moon, Sun, UtensilsCrossed } from 'lucide-react';

export default function FoodMenu() {
  const [activeMenuTab, setActiveMenuTab] = useState<'deluxe-day' | 'premium-day' | 'deluxe-overnight'>('deluxe-day');

  const menuDetails = {
    'deluxe-day': {
      title: 'Deluxe Menu (Day Cruise)',
      type: 'Veg & Non-Veg Day Cruise Menu',
      timing: 'Served during 11:30 AM to 5:00 PM Cruise',
      description: 'The standard traditional Kerala lunch served on banana leaves, freshly prepared onboard by your personal chef.',
      sections: [
        {
          title: 'Welcome Drink',
          icon: Coffee,
          items: ['Chilled Fresh Lime Juice or Tender Coconut Water']
        },
        {
          title: 'Lunch (Non-Veg Selection)',
          icon: UtensilsCrossed,
          items: [
            'Traditional Kerala Matta Rice / White Rice',
            'Fresh Backwater Karimeen (Pearl Spot) Fish Fry',
            'Kerala Style Spicy Chicken Roast',
            'Traditional Sambar & Banana Kalan (Yogurt curry)',
            'Mixed Vegetables Thoran (Cabbage, Coconuts & Carrot)',
            'Long Beans Mezhukupurathy (Stir Fry)',
            'Crispy Bitter Gourd Fry',
            'Pappadam, Pickle & Fresh Green Salad',
            'Dessert: Hot Vermicelli Payasam (Kheer)',
            'Fresh Tropical Seasonal Fruits'
          ]
        },
        {
          title: 'Lunch (Vegetarian Alternative)',
          icon: ChefHat,
          items: [
            'Matta Rice / White Rice',
            'Traditional Kerala Sambar & Rasam',
            'Banana Kalan (Yogurt & Coconut Curry)',
            'Vegetable Thoran & Long Beans Mezhukupurathy',
            'Crispy Bitter Gourd Fry',
            'Pappadam, Pickle & Salad',
            'Dessert: Vermicelli Payasam'
          ]
        },
        {
          title: 'Evening Tea',
          icon: Coffee,
          items: ['Freshly brewed Cardamom Tea / Coffee / Milk', 'Hot Banana Fritters (Traditional Pazham Pori)']
        }
      ]
    },
    'premium-day': {
      title: 'Premium Menu (Day Cruise)',
      type: 'Premium Seafood & Traditional Fusion',
      timing: 'Served during 11:30 AM to 5:00 PM Cruise',
      description: 'An upgraded culinary experience featuring premium seafood starters and soft chapati options.',
      sections: [
        {
          title: 'Welcome & Starters',
          icon: Coffee,
          items: [
            'Tender Coconut Water or Fresh Grape Juice',
            'Non-Veg Appetizer: Spicy Batter-Fried Prawns',
            'Veg Appetizer: Golden Cauliflower Fritters (Gobi 65)'
          ]
        },
        {
          title: 'Lunch Main Course (Seafood Special)',
          icon: UtensilsCrossed,
          items: [
            'Soft Chapatis / Flaky Kerala Parottas',
            'Premium Pearl Spot (Karimeen Pollichathu) baked in banana leaves',
            'Kerala Special Chicken Roast / Mutton Curry (on request)',
            'Aromatic Basmati Rice / White Rice',
            'Special Sambar & Malabar Avial (Mixed vegetable coconut paste)',
            'Carrot Cabbage Thoran & Bitter Gourd Fry',
            'Pappadam, Mango Pickle, Raita & Salad',
            'Dessert: Premium Ada Pradhaman Payasam',
            'Seasonal Fruit Platter (Watermelon, Pineapple, Banana)'
          ]
        },
        {
          title: 'Evening Tea & Snacks',
          icon: Coffee,
          items: [
            'Cardamom Tea, Black Coffee, or Fresh Hot Milk',
            'Banana Fritters (Pazham Pori)',
            'Crispy Onion Bhajiya (Onion Vada)'
          ]
        }
      ]
    },
    'deluxe-overnight': {
      title: 'Deluxe Menu (Overnight Cruise)',
      type: 'Veg & Non-Veg Full Board Overnight Menu',
      timing: 'Full Board (Lunch, Tea, Dinner, Breakfast)',
      description: 'Complete culinary coverage for overnight stays. Includes full lunch, tea, north-indian/kerala dinner, and traditional breakfast.',
      sections: [
        {
          title: 'Welcome & Afternoon Lunch',
          icon: Sun,
          items: [
            'Welcome: Chilled Fresh Lime Mint Juice',
            'Lunch: White Rice, Traditional Sambar, Cabbage Thoran, Bitter Gourd Fry, Long Beans Mezhukupurathy, Kalan, Pappadam, Pickle, Salad, Vermicelli Payasam, and Fresh Fruit slices.',
            'Note: Non-veg rooms receive Pearl Spot fish fry and Chicken Roast.'
          ]
        },
        {
          title: 'Evening Tea',
          icon: Coffee,
          items: ['Tea / Coffee / Hot Milk', 'Crispy Banana Fritters']
        },
        {
          title: 'Dinner (Light & Comforting)',
          icon: Moon,
          items: [
            'Freshly rolled Soft Chapatis',
            'North Indian Style Dal Fry',
            'Aloo Gobi (Potato & Cauliflower Dry Stir Fry)',
            'Mixed Vegetable Coconut Curry / Chicken Curry (for non-veg)',
            'White Steamed Rice & Cucumber Raita',
            'Cabbage White Thoran',
            'Pappadam & Salad'
          ]
        },
        {
          title: 'Breakfast (Next Morning)',
          icon: Sun,
          items: [
            'Toasted Sliced Bread with Creamy Butter & Mixed Fruit Jam',
            'Fresh Fruit Cuts (Banana / Pineapple)',
            'Main: Traditional Steamed Idlis or Crispy Dosas',
            'Sides: Fresh Coconut Chutney & Vegetable Sambar',
            'Drinks: Hot Tea, Coffee, or Fresh Milk'
          ]
        }
      ]
    }
  };

  const currentMenu = menuDetails[activeMenuTab];

  return (
    <div className="bg-bg-warm min-h-screen pt-24 pb-16 sm:pb-20 lg:pb-24 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="section-label mb-2">Onboard Dining</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-text-dark mb-4">
            Kera Food Menu
          </h1>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
          <p className="text-text-muted text-base leading-relaxed">
            One of the highlights of Kera Houseboats is the dining experience. Our onboard private chefs cook fresh, mouthwatering Kerala specialties in the boat galley.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 border-b border-gray-200 pb-6">
          {[
            { id: 'deluxe-day', label: 'Deluxe Day Cruise' },
            { id: 'premium-day', label: 'Premium Day Cruise' },
            { id: 'deluxe-overnight', label: 'Deluxe Overnight (Full Board)' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveMenuTab(tab.id as any)}
              className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeMenuTab === tab.id
                  ? 'bg-accent text-white shadow-md'
                  : 'bg-white text-text-muted border border-gray-150 hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu Presentation Panel */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8 pb-6 border-b border-gray-100">
            <div>
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">{currentMenu.type}</span>
              <h2 className="font-serif text-2xl font-bold text-text-dark mt-1">{currentMenu.title}</h2>
              <p className="text-text-muted text-xs mt-1 font-medium">{currentMenu.timing}</p>
            </div>
            <div className="p-3 bg-primary/10 rounded-2xl text-primary self-start">
              <ChefHat className="w-8 h-8" />
            </div>
          </div>

          <p className="text-text-muted text-sm leading-relaxed mb-8 italic">
            "{currentMenu.description}"
          </p>

          {/* Sections List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentMenu.sections.map((section, idx) => {
              const SectionIcon = section.icon;
              return (
                <div key={idx} className="bg-bg-warm p-6 rounded-2xl border border-gray-50 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-3 border-b border-gray-200/50">
                      <div className="p-2 bg-primary/10 text-primary rounded-lg">
                        <SectionIcon className="w-4 h-4" />
                      </div>
                      <h3 className="font-serif font-bold text-base text-text-dark">{section.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-xs text-text-muted flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2.5 mt-1.5 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Cooking custom message */}
          <div className="mt-10 p-5 rounded-2xl bg-primary/5 text-primary text-center text-xs font-medium border border-primary/10 leading-relaxed">
            🌿 Vegetable options are prepared separately with strict vegetarian utensils. If you have any specific food allergies or requests (e.g. kid-friendly spice levels), please inform your crew captain at least 24 hours prior to boarding.
          </div>
        </div>

      </div>
    </div>
  );
}
