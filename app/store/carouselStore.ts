import { create } from 'zustand'
import { CarouselStore, Slide } from '@/app/types'

const defaultSlide: Omit<Slide, 'id'> = {
  text: '',
  backgroundColor: '#ffffff',
  backgroundOpacity: 1,
  fontFamily: 'Arial',
  fontSize: 24,
  textColor: '#000000'
}

const createSlide = (): Slide => ({
  ...defaultSlide,
  id: Date.now().toString()
})

const initialState = {
  slides: [createSlide()],
  currentSlideIndex: 0,
  userProfile: {
    name: '',
    handle: '',
  }
}

export const useCarouselStore = create<CarouselStore>((set) => ({
  ...initialState,

  addSlide: () => set((state) => ({
    slides: [...state.slides, createSlide()]
  })),

  removeSlide: (id) => set((state) => ({
    slides: state.slides.filter(slide => slide.id !== id)
  })),

  updateSlide: (id, updates) => set((state) => ({
    slides: state.slides.map(slide => 
      slide.id === id ? { ...slide, ...updates } : slide
    )
  })),

  setCurrentSlide: (index) => set({ currentSlideIndex: index }),

  updateUserProfile: (updates) => set((state) => ({
    userProfile: { ...state.userProfile, ...updates }
  }))
})) 