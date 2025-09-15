import { Spinner } from '@heroui/react'
import React from 'react'

export default function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-[30vh]">
      <Spinner/>
      <p className="text-gray-500 text-lg ml-4">Loading...</p>
    </div>
  )
}
