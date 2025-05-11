import Image from "next/image"

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vgX8yJDR6aEFq0fCgG5qdYFjY4ASCo.png"
        alt="Vactor AI Logo"
        width={40}
        height={40}
        className="object-contain"
      />
    </div>
  )
}
