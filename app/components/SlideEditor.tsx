'use client'

import { useCarouselStore } from '../store/carouselStore'
import { useState, useEffect } from 'react'
import ColorPicker from './common/ColorPicker'
import ImageUpload from './common/ImageUpload'

export default function SlideEditor() {
  const { slides, currentSlideIndex, updateSlide } = useCarouselStore()
  const currentSlide = slides[currentSlideIndex]
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleImageUpload = (file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      updateSlide(currentSlide.id, { backgroundImage: e.target?.result as string })
    }
    reader.readAsDataURL(file)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4 text-black">Slide Editor</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-black">Slide Text</label>
          <textarea
            value={currentSlide.text}
            onChange={(e) => updateSlide(currentSlide.id, { text: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={4}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black">Text Color</label>
          <div className="mt-1">
            <ColorPicker
              color={currentSlide.textColor}
              onChange={(color) => updateSlide(currentSlide.id, { textColor: color })}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-black">Font Size</label>
          <input
            type="range"
            min="12"
            max="72"
            value={currentSlide.fontSize}
            onChange={(e) => updateSlide(currentSlide.id, { fontSize: parseInt(e.target.value) })}
            className="mt-1 block w-full"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-black">Background Color</label>
          <div className="mt-1">
            <ColorPicker
              color={currentSlide.backgroundColor}
              onChange={(color) => updateSlide(currentSlide.id, { backgroundColor: color })}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-black">Background Opacity</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={currentSlide.backgroundOpacity}
            onChange={(e) => updateSlide(currentSlide.id, { backgroundOpacity: parseFloat(e.target.value) })}
            className="mt-1 block w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black">Background Image</label>
          <div className="mt-1">
            <ImageUpload
              onUpload={handleImageUpload}
              currentImage={currentSlide.backgroundImage}
            />
          </div>
        </div>
      </div>
    </div>
  )
} 