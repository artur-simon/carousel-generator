'use client'

import { ChromePicker, ColorResult } from 'react-color'
import { ColorPickerProps } from '@/app/types'

export default function ColorPicker({ color, onChange }: ColorPickerProps) {
  return (
    <ChromePicker
      color={color}
      onChange={(color: ColorResult) => onChange(color.hex)}
      disableAlpha={true}
    />
  )
} 