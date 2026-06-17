import { useState } from 'react';
import { ImagePlayer } from '@/components/ui/image-player';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const categories = [
    {
      id: 'houseboats',
      name: 'Our Houseboats',
      desc: 'Handcrafted premium wooden houseboats designed for traditional comfort and scenic cruising.',
      images: [
        '/images/WhatsApp Image 2026-05-26 at 11.40.48 AM.jpeg',
        '/images/WhatsApp Image 2026-05-26 at 11.40.48 AM (1).jpeg',
        '/images/WhatsApp Image 2026-05-26 at 11.40.48 AM (2).jpeg',
        '/images/WhatsApp Image 2026-05-26 at 11.40.49 AM.jpeg',
        '/images/hero-backwater.png'
      ]
    },
    {
      id: 'interiors',
      name: 'Luxury Interiors',
      desc: 'Elegant bedrooms, modern bathrooms, and scenic dining decks designed to make you feel at home.',
      images: [
        '/images/boat-interior.png',
        '/images/WhatsApp Image 2026-05-26 at 11.40.49 AM (1).jpeg',
        '/images/WhatsApp Image 2026-05-26 at 11.40.49 AM (2).jpeg',
        '/images/WhatsApp Image 2026-05-26 at 11.40.49 AM (3).jpeg'
      ]
    },
    {
      id: 'scenic',
      name: 'Scenic Backwaters',
      desc: 'Palm-fringed channels, peaceful lagoons, and magnificent sunset views of the Alleppey backwaters.',
      images: [
        '/images/destination-alleppey.png',
        '/images/WhatsApp Image 2026-05-26 at 11.40.50 AM.jpeg',
        '/images/WhatsApp Image 2026-05-26 at 11.40.53 AM.jpeg',
        '/images/WhatsApp Image 2026-05-26 at 11.40.53 AM (1).jpeg',
        '/images/destination-kochi.png'
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState('houseboats');
  const currentCategory = categories.find((c) => c.id === activeCategory) || categories[0];

  // Lightbox State
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number | null>(null);

  const openLightbox = (idx: number) => {
    setLightboxImageIndex(idx);
  };

  const closeLightbox = () => {
    setLightboxImageIndex(null);
  };

  const nextLightboxImage = () => {
    if (lightboxImageIndex !== null) {
      setLightboxImageIndex((lightboxImageIndex + 1) % currentCategory.images.length);
    }
  };

  const prevLightboxImage = () => {
    if (lightboxImageIndex !== null) {
      setLightboxImageIndex((lightboxImageIndex - 1 + currentCategory.images.length) % currentCategory.images.length);
    }
  };

  return (
    <div className="bg-bg-warm min-h-screen pt-24 pb-16 sm:pb-20 lg:pb-24 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="section-label mb-2">Visual Journey</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-text-dark mb-4">
            Our Luxury Gallery
          </h1>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
          <p className="text-text-muted text-base leading-relaxed">
            Take a virtual look at our boats, interior cabins, and the stunning scenery that awaits you.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                closeLightbox();
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-accent text-white shadow-md'
                  : 'bg-white text-text-muted border border-gray-150 hover:bg-gray-50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Slideshow Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm border border-gray-100 mb-12">
          {/* Text Description */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-text-dark">
              {currentCategory.name} Slideshow
            </h3>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed">
              {currentCategory.desc}
            </p>
            <div className="pt-4">
              <span className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Auto-playing Slideshow
              </span>
            </div>
          </div>

          {/* Image Player Wrapper */}
          <div className="lg:col-span-8 relative aspect-video rounded-2xl overflow-hidden shadow-md bg-gray-100">
            <ImagePlayer
              images={currentCategory.images}
              interval={4000}
              loop={true}
              className="w-full h-full object-cover"
              renderImage={(src) => (
                <div key={src} className="relative w-full h-full animate-fade-in">
                  <img
                    src={src}
                    alt={currentCategory.name}
                    className="w-full h-full object-cover object-center absolute inset-0"
                  />
                </div>
              )}
            />
          </div>
        </div>

        {/* Thumbnail Grid Explorer */}
        <div className="space-y-6">
          <h3 className="font-serif text-lg font-bold text-text-dark border-b border-gray-250 pb-3">
            Explore Images ({currentCategory.images.length})
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentCategory.images.map((src, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group shadow-sm bg-gray-250 border border-gray-100"
              >
                <img
                  src={src}
                  alt={`${currentCategory.name} thumbnail ${index}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {lightboxImageIndex !== null && (
          <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Left Nav */}
            <button
              onClick={prevLightboxImage}
              className="absolute left-6 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            {/* Image display */}
            <div className="max-w-4xl max-h-[80vh] flex flex-col items-center">
              <img
                src={currentCategory.images[lightboxImageIndex]}
                alt="Selected Lightbox"
                className="max-w-full max-h-[75vh] object-contain rounded"
              />
              <span className="text-white/60 text-xs font-semibold mt-4">
                {currentCategory.name} — Image {lightboxImageIndex + 1} of {currentCategory.images.length}
              </span>
            </div>

            {/* Right Nav */}
            <button
              onClick={nextLightboxImage}
              className="absolute right-6 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
