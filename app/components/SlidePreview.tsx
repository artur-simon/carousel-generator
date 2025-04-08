'use client'

import { useRef } from "react";
import { useCarouselStore } from '../store/carouselStore'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import SlideView from './SlideView'

export default function SlidePreview() {
  const { slides, currentSlideIndex } = useCarouselStore()
  const currentSlide = slides[currentSlideIndex]

  const containerRef = useRef(null);

  const exportToPDF = async () => {
    if (!containerRef.current) return

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [1080, 1080]
    })

    const slideElements = (containerRef.current as HTMLDivElement).children;

    for (let i = 0; i < slideElements.length; i++) {
      const slide = slideElements[i] as HTMLDivElement;
      const canvas = await html2canvas((slide as HTMLDivElement), {
        useCORS: true,
        logging: false,
        width: 1080,
        height: 1080
      })

      const imgData = canvas.toDataURL('image/jpeg', 1.0)

      if (i !== 0) {
        pdf.addPage([1080, 1080]);
      }

      pdf.addImage(imgData, 'JPEG', 0, 0, 1080, 1080)
    }

    pdf.save('linkedin-carousel.pdf')
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-black">Preview</h2>
        <button
          onClick={exportToPDF}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Export PDF
        </button>
      </div>

      {<div className="relative w-full aspect-square max-w-[1080px] mx-auto">
        <SlideView slide={currentSlide} />
      </div>}

      <div ref={containerRef} className="absolute w-[1080px] h-[1080px] aspect-square max-w-[1080px] mx-auto" style={{ top: '-9999px', left: '-9999px' }}>
        {slides.map((slide, key) => (
          <SlideView slide={slide} key={key} />
        ))}
      </div>
    </div>
  )
} 