"use client"

import { useState, useEffect } from "react"
import { Send, Users } from "lucide-react"

export default function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [message, setMessage] = useState("Thanks for joining! We'll be in touch soon.")
  const [waitlistCount, setWaitlistCount] = useState(128)
  const [emailError, setEmailError] = useState("")

  useEffect(() => {
    // Fetch current waitlist count on load
    const fetchWaitlistCount = async () => {
      try {
        const response = await fetch('/api/waitlist');
        const data = await response.json();
        
        if (response.ok && data.count) {
          setWaitlistCount(data.count);
        }
      } catch (error) {
        // Silently fail and keep default count
      }
    };
    
    fetchWaitlistCount();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setEmailError('Please enter a valid email with @');
      return;
    }
    setEmailError('');
    setIsSubmitting(true)

    try {
      // Send the email to our API
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      // Update waitlist count if a new registration
      if (data.message === "Email registered successfully" && data.count) {
        setWaitlistCount(Math.max(waitlistCount + 1, data.count));
      }

      // Show success or already registered message
      setMessage(data.message === "Email already registered" 
        ? "You're already on our waitlist!" 
        : "Thanks for joining! We'll be in touch soon.");
      
      setIsSubmitted(true);
      setEmail("");

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      // console.error('Error submitting to waitlist:', error);
      setMessage("There was a problem. Please try again.");
      setIsSubmitted(true);
      
      // Reset error message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-center mb-4">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#1e293b]/70 backdrop-blur-md border border-[#3b82f6]/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
          <Users className="h-4 w-4 mr-2 text-blue-400" />
          <span className="text-sm text-white/90 font-medium">
            <span className="font-bold text-blue-400">{waitlistCount}</span> people on waitlist
          </span>
        </div>
      </div>
      
      {emailError && (
        <p className="text-red-500 text-xs mb-2 text-center">{emailError}</p>
      )}
      {isSubmitted ? (
        <div className="bg-[#1e293b]/80 backdrop-blur-md border border-[#3b82f6]/30 rounded-3xl p-4 text-center shadow-lg transition-all duration-300 animate-fade-in">
          <p className="text-white font-medium">
            {message}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative">
          <div className="relative group">
            {/* Enhanced gloomy shadow effect */}
            <div className="absolute -inset-1 bg-[#111]/80 rounded-3xl blur-md opacity-80 group-hover:opacity-100 transition duration-500"></div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#222] to-[#333] rounded-3xl blur-sm opacity-70 group-hover:opacity-90 transition duration-700"></div>

            {/* Main container with glass effect */}
            <div className="relative flex items-center bg-[#1a1a1a]/90 backdrop-blur-md border border-[#333]/50 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow bg-transparent px-6 py-4 text-white/90 placeholder-gray-400 focus:outline-none font-light"
                required
              />
              <div className="h-full px-2 mr-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center h-10 px-5 py-2 bg-[#222]/80 backdrop-blur-md rounded-full text-white/90 font-medium transition-all duration-200 hover:bg-[#333]/80 disabled:opacity-70 shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
                >
                  {isSubmitting ? (
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span className="mr-2">Join Waitlist</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="text-center mt-3">
            <p className="text-white/80 text-xs font-bold">Waitlist members get free AI Credits</p>
          </div>
        </form>
      )}
    </div>
  )
}
