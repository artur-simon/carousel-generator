'use client'

import { useCarouselStore } from '../store/carouselStore'
import Image from 'next/image'
import { Slide } from '../types'

export default function SlideView({slide }: {slide: Slide }) {
    const { userProfile } = useCarouselStore()
    
    return (
        <div
            className="inset-0 w-full h-full relative overflow-hidden"
            style={{
                backgroundColor: slide.backgroundColor,
                backgroundImage: slide.backgroundImage
                    ? `url(${slide.backgroundImage})`
                    : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div
                className="absolute inset-0"
                style={{
                    backgroundColor: slide.backgroundColor,
                    opacity: slide.backgroundOpacity
                }}
            />

            {userProfile.imageUrl && (
                <div className="absolute top-8 left-8 flex items-center space-x-4">
                    <div className="relative w-16 h-16">
                        <Image
                            src={userProfile.imageUrl}
                            alt={userProfile.name}
                            fill
                            className="rounded-full object-cover"
                            style={{ imageRendering: 'auto' }}
                        />
                    </div>
                    <div>
                        <h3 className="text-white font-semibold">{userProfile.name}</h3>
                        <p className="text-white">@{userProfile.handle}</p>
                    </div>
                </div>
            )}

            <div
                className="absolute inset-0 flex items-center justify-center p-16"
                style={{
                    color: slide.textColor,
                    fontSize: `${slide.fontSize}px`,
                    fontFamily: slide.fontFamily
                }}
            >
                {slide.text}
            </div>
        </div>
    )
}
