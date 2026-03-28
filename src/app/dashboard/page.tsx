"use client";

import Link from "next/link";

// TODO: Replace with actual API call to fetch courses
// This is dynamic skeleton data - will be fetched from API
const mockCourses = [
  {
    id: 1,
    name: "NEET 2026 Crash Course",
    stream: "NEET",
    studentsEnrolled: 245,
    status: "active",
    hasLiveStream: true,
  },
  {
    id: 2,
    name: "IIT-JEE Advanced Batch",
    stream: "IIT-JEE",
    studentsEnrolled: 180,
    status: "active",
    hasLiveStream: false,
  },
  {
    id: 3,
    name: "Foundation Course - Class 11",
    stream: "Foundation",
    studentsEnrolled: 320,
    status: "active",
    hasLiveStream: true,
  },
  {
    id: 4,
    name: "NEET Repeater Batch",
    stream: "NEET",
    studentsEnrolled: 95,
    status: "upcoming",
    hasLiveStream: false,
  },
];

const stats = [
  { label: "Total Courses", value: "12", icon: "📚" },
  { label: "Active Students", value: "840", icon: "👥" },
  { label: "Live Now", value: "2", icon: "🔴" },
  { label: "Upcoming", value: "3", icon: "📅" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#30343e]">Dashboard</h1>
        <p className="text-[#8a8989] mt-1">
          Welcome back! Here&apos;s an overview of your courses.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl p-5 border border-[#e5e5e5] hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#8a8989]">{stat.label}</p>
                <p className="text-2xl font-bold text-[#30343e] mt-1">
                  {stat.value}
                </p>
              </div>
              <span className="text-3xl">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Courses Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-[#30343e]">
            Your Courses
          </h2>
          <Link
            href="/dashboard/courses"
            className="text-sm text-[#BF0000] hover:text-[#960000] font-medium transition-colors"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {mockCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl border border-[#e5e5e5] overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
            >
              {/* Course Header Banner */}
              <div className="h-2 bg-[#BF0000]" />

              <div className="p-5">
                {/* Status & Stream */}
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${
                      course.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {course.status === "active" ? "Active" : "Upcoming"}
                  </span>
                  <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-[#BF0000]/10 text-[#BF0000]">
                    {course.stream}
                  </span>
                </div>

                {/* Course Name */}
                <h3 className="text-base font-semibold text-[#30343e] group-hover:text-[#BF0000] transition-colors">
                  {course.name}
                </h3>

                {/* Info */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#e5e5e5]">
                  <div className="flex items-center gap-1.5 text-sm text-[#8a8989]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 00-3-3.87" />
                      <path d="M16 3.13a4 4 0 010 7.75" />
                    </svg>
                    {course.studentsEnrolled} students
                  </div>

                  {course.hasLiveStream && (
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-xs font-medium text-red-600">
                        Live
                      </span>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 py-2 text-sm font-medium text-[#BF0000] bg-[#BF0000]/10 rounded-lg hover:bg-[#BF0000]/20 transition-colors">
                    Manage
                  </button>
                  {course.hasLiveStream && (
                    <button className="flex-1 py-2 text-sm font-medium text-white bg-[#BF0000] rounded-lg hover:bg-[#960000] transition-colors">
                      Go Live
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
