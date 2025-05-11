"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment, ContactShadows } from "@react-three/drei"
import * as THREE from "three"

// Player model component that loads the user's GLB file
function PlayerModel({ url, ...props }: { url: string; [key: string]: any }) {
  const modelRef = useRef<THREE.Group>(null)
  const { camera } = useThree()
  const [modelLoaded, setModelLoaded] = useState(false)

  // Load the model with proper error handling
  const { scene, animations } = useGLTF(url)

  // Set up animation and positioning when the model loads
  useEffect(() => {
    if (scene) {
      setModelLoaded(true)

      // Center and scale the model appropriately
      const box = new THREE.Box3().setFromObject(scene)
      const center = box.getCenter(new THREE.Vector3())
      const size = box.getSize(new THREE.Vector3())

      // Adjust model position to center it
      scene.position.x = -center.x
      scene.position.y = -center.y
      scene.position.z = -center.z

      // Position camera based on model size
      const maxDim = Math.max(size.x, size.y, size.z)
      camera.position.set(0, maxDim * 0.5, maxDim * 1.5)
      camera.lookAt(0, 0, 0)
    }
  }, [scene, camera])

  // Add subtle animation to the model
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005
      modelRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1
    }
  })

  return <primitive ref={modelRef} object={scene} {...props} />
}

// Fallback component in case the model fails to load
function FallbackModel(props: any) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.2
    }
  })

  return (
    <mesh ref={meshRef} {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#2563eb" />
    </mesh>
  )
}

export default function ThreeScene() {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Handle loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Error fallback UI
  if (hasError) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl">
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 animate-pulse"></div>
          <p className="text-white">Interactive Preview</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full w-full rounded-xl overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-10">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}

      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        onError={(e) => {
          console.error("Canvas error:", e)
          setHasError(true)
        }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

        {/* Error boundary for the model */}
        <ErrorBoundary fallback={<FallbackModel position={[0, 0, 0]} />}>
          <Suspense fallback={<FallbackModel position={[0, 0, 0]} />}>
            <PlayerModel url="/models/player_model.glb" position={[0, 0, 0]} scale={1} />
          </Suspense>
        </ErrorBoundary>

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />
        <ContactShadows position={[0, -1, 0]} opacity={0.5} scale={10} blur={2} far={4} />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}

// Error boundary component for React
function ErrorBoundary({ children, fallback }: { children: React.ReactNode; fallback: React.ReactNode }) {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const errorHandler = (event: ErrorEvent) => {
      if (event.message.includes("GLB") || event.message.includes("GLTF")) {
        console.error("3D model error:", event)
        setHasError(true)
        event.preventDefault()
      }
    }

    window.addEventListener("error", errorHandler)
    return () => window.removeEventListener("error", errorHandler)
  }, [])

  if (hasError) {
    return <>{fallback}</>
  }

  return <>{children}</>
}

// Import Suspense from React
import { Suspense } from "react"

// Preload the model
useGLTF.preload("/models/player_model.glb")
