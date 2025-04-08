'use client'

import { useCarouselStore } from '../store/carouselStore'
import ImageUpload from './common/ImageUpload'

export default function UserProfile() {
  const { userProfile, updateUserProfile } = useCarouselStore()

  const handleImageUpload = (file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      updateUserProfile({ imageUrl: e.target?.result as string })
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4 text-black">Profile Information</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-black">Name</label>
          <input
            type="text"
            value={userProfile.name}
            onChange={(e) => updateUserProfile({ name: e.target.value })}
            className="mt-1 block w-full rounded-md border-black-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Handle</label>
          <input
            type="text"
            value={userProfile.handle}
            onChange={(e) => updateUserProfile({ handle: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Profile Image</label>
          <div className="mt-1">
            <ImageUpload
              onUpload={handleImageUpload}
              currentImage={userProfile.imageUrl}
            />
          </div>
        </div>
      </div>
    </div>
  )
} 