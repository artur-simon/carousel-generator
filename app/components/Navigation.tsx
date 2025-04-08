'use client'

import { useCarouselStore } from '../store/carouselStore'

export default function Navigation() {
  const { slides, currentSlideIndex, setCurrentSlide, addSlide, removeSlide } = useCarouselStore()

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-black">Slides</h2>
        <button
          onClick={addSlide}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Slide
        </button>
      </div>

      <div className="space-y-2">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`flex items-center justify-between p-3 rounded-md cursor-pointer ${
              currentSlideIndex === index
                ? 'bg-blue-100 border-blue-500'
                : 'hover:bg-black-100'
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            <span className="text-gray-400">Slide {index + 1}</span>
            {slides.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  removeSlide(slide.id)
                }}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
} 