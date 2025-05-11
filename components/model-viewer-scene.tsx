"use client"

import { useState, useEffect } from "react"

export default function ModelViewerScene() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Load the model-viewer script dynamically
    const script = document.createElement("script")
    script.type = "module"
    script.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
    script.onload = () => {
      setIsLoaded(true)
    }
    script.onerror = () => {
      setHasError(true)
      console.error("Failed to load model-viewer script")
    }
    document.body.appendChild(script)

    return () => {
      // Clean up the script when component unmounts
      document.body.removeChild(script)
    }
  }, [])

  // Show loading state
  if (!isLoaded && !hasError) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  // Show error state
  if (hasError) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl">
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 animate-pulse"></div>
          <p className="text-white">Unable to load 3D viewer</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full w-full">
      {/* @ts-ignore - model-viewer is a custom element */}
      <model-viewer
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/player_0424213550_generate-0dK0trz49Nb6Fa07vsPKadX9Onh6Sr.glb"
        alt="3D model of a player character"
        camera-controls
        disable-zoom
        auto-rotate
        shadow-intensity="1"
        environment-image="neutral"
        exposure="0.8"
        style={{ width: "100%", height: "100%", backgroundColor: "transparent" }}
        poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" // Transparent placeholder
        loading="eager"
        reveal="auto"
        ar-status="not-presenting"
      >
        <div slot="poster" className="flex items-center justify-center h-full w-full">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
        <div slot="error" className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4"></div>
            <p className="text-white">Error loading 3D model</p>
          </div>
        </div>
      </model-viewer>
    </div>
  )
}
