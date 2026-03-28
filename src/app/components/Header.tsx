"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Courses", href: "/dashboard/courses" },
    { label: "Live Streams", href: "/dashboard/live-streams" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    router.push("/login");
  };

  return (
    <header className="bg-white border-b border-[#e5e5e5] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Zia Academy" width={36} height={36} />
            <div>
              <span className="text-lg font-bold text-[#30343e]">
                Zia Academy
              </span>
              <span className="text-xs text-[#8a8989] ml-2 hidden sm:inline">
                Admin
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#BF0000]/10 text-[#BF0000]"
                      : "text-[#6b7280] hover:text-[#333333] hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Admin avatar */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#BF0000]/10 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#BF0000]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <span className="text-sm font-medium text-[#333333] hidden sm:inline">
                Admin
              </span>
            </div>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="text-[#8a8989] hover:text-[#BF0000] transition-colors p-2 rounded-lg hover:bg-red-50"
              title="Logout"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
