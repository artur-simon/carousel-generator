'use client'

import { useDropzone } from 'react-dropzone'
import Image from 'next/image'
import { ImageUploadProps } from '@/app/types'

export default function ImageUpload({ onUpload, currentImage, className = '' }: ImageUploadProps) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg']
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0]
      if (file) onUpload(file)
    }
  })

  return (
    <div
      {...getRootProps()}
      className={`flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-blue-500 cursor-pointer ${className}`}
    >
      <input {...getInputProps()} />
      {currentImage ? (
        <Image
          src={currentImage}
          alt="Uploaded"
          width={80}
          height={80}
          className="rounded-full object-cover"
        />
      ) : (
        <div className="space-y-1 text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex text-sm text-black-600">
            <span>Upload a file</span>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs text-black-500">PNG, JPG up to 10MB</p>
        </div>
      )}
    </div>
  )
} 