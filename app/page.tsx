'use client'

import { useState } from 'react'
import SlideEditor from './components/SlideEditor'
import SlidePreview from './components/SlidePreview'
import UserProfile from './components/UserProfile'
import Navigation from './components/Navigation'

export default function Home() {
  const [isPreviewMode, setIsPreviewMode] = useState(false)

  return (
    <main className="min-h-screen bg-gray-100 p-2">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-xl font-bold text-black">Simple Carousel Generator</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {!isPreviewMode && (
            <div className="space-y-6">
              <UserProfile />
              <SlideEditor />
            </div>
          )}
          <div className="lg:sticky lg:top-4 bg-white rounded-lg shadow-lg p-4 h-fit">
            <SlidePreview />
            <Navigation />
          </div>
        </div>

        <button
          onClick={() => setIsPreviewMode(!isPreviewMode)}
          className="fixed bottom-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg z-50"
        >
          {isPreviewMode ? 'Edit Mode' : 'Preview Mode'}
        </button>
      </div>
    </main>
  )
}
