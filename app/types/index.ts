export interface Slide {
  id: string
  text: string
  backgroundColor: string
  backgroundImage?: string
  backgroundOpacity: number
  fontFamily: string
  fontSize: number
  textColor: string
}

export interface UserProfile {
  name: string
  handle: string
  imageUrl?: string
}

export interface CarouselState {
  slides: Slide[]
  currentSlideIndex: number
  userProfile: UserProfile
}

export interface CarouselActions {
  addSlide: () => void
  removeSlide: (id: string) => void
  updateSlide: (id: string, updates: Partial<Slide>) => void
  setCurrentSlide: (index: number) => void
  updateUserProfile: (updates: Partial<UserProfile>) => void
}

export interface CarouselStore extends CarouselState, CarouselActions {}

export interface ColorPickerProps {
  color: string
  onChange: (color: string) => void
}

export interface ImageUploadProps {
  onUpload: (file: File) => void
  currentImage?: string
  className?: string
}

export interface SlidePreviewProps {
  slide: Slide
  userProfile: UserProfile
  ref?: React.RefObject<HTMLDivElement>
} 