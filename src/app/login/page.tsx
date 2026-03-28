"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // TODO: Replace with actual admin login API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      localStorage.setItem("admin_token", "skeleton_token");
      router.push("/dashboard");
    } catch {
      setError("Login failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-[45%] bg-gradient-to-br from-[#BF0000] to-[#8B0000] relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/5 rounded-full" />
        <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-white/5 rounded-full" />
        <div className="absolute top-1/4 right-10 w-40 h-40 bg-white/5 rounded-full" />

        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          {/* Top - Logo */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <Image src="/logo.png" alt="Zia Academy" width={40} height={40} />
            </div>
            <div>
              <p className="text-white text-sm font-medium">Zia Academy</p>
              <p className="text-white/70 text-xs">Admin Portal</p>
            </div>
          </div>

          {/* Center - Hero text */}
          <div className="space-y-6">
            <h2 className="text-white text-4xl font-bold leading-tight">
              Deliver live<br />lectures instantly
            </h2>
            <p className="text-white/70 text-lg max-w-sm leading-relaxed">
              View your courses, access live streaming links, and deliver lectures to students across Zia Academy platform.
            </p>
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-white text-2xl font-bold">1000+</p>
                <p className="text-white/60 text-sm">Live Lectures</p>
              </div>
              <div>
                <p className="text-white text-2xl font-bold">50K+</p>
                <p className="text-white/60 text-sm">Students Reached</p>
              </div>
              <div>
                <p className="text-white text-2xl font-bold">24/7</p>
                <p className="text-white/60 text-sm">Streaming</p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Zia Academy. All rights reserved.
          </p>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center bg-[#f7f7f7] px-6">
        <div className="w-full max-w-[420px]">
          {/* Mobile Logo (hidden on desktop) */}
          <div className="lg:hidden flex flex-col items-center mb-10">
            <Image src="/logo-large.png" alt="Zia Academy" width={64} height={64} priority />
            <h1 className="text-xl font-bold text-[#30343e] mt-3">Zia Academy</h1>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-[0_2px_24px_rgba(0,0,0,0.06)] p-8 sm:p-10">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#1a1a1a]">Welcome back</h2>
              <p className="text-[#6b7280] mt-2 text-[15px]">
                Sign in to access your courses and go live
              </p>
            </div>

            {error && (
              <div className="mb-6 flex items-center gap-3 p-3.5 bg-red-50 border border-red-100 rounded-xl">
                <svg className="w-5 h-5 text-[#BF0000] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
                <span className="text-sm text-[#BF0000]">{error}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#374151] mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@ziaacademy.org.in"
                  required
                  className="w-full h-12 px-4 bg-[#f9fafb] border border-[#e5e7eb] rounded-xl text-[15px] text-[#1a1a1a] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#BF0000]/20 focus:border-[#BF0000] focus:bg-white transition-all"
                />
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="password" className="block text-sm font-medium text-[#374151]">
                    Password
                  </label>
                  <button type="button" className="text-xs font-medium text-[#BF0000] hover:text-[#960000] transition-colors">
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="w-full h-12 px-4 pr-12 bg-[#f9fafb] border border-[#e5e7eb] rounded-xl text-[15px] text-[#1a1a1a] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#BF0000]/20 focus:border-[#BF0000] focus:bg-white transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#374151] p-1 transition-colors"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-[#BF0000] hover:bg-[#960000] disabled:opacity-50 disabled:cursor-not-allowed text-white text-[15px] font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#BF0000]/25 flex items-center justify-center mt-2"
              >
                {isLoading ? (
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>
          </div>

          {/* Bottom text */}
          <p className="text-center text-[#9ca3af] text-xs mt-6">
            Admin access only · Contact support for assistance
          </p>
        </div>
      </div>
    </div>
  );
}
