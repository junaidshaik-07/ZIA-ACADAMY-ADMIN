"use client";

// TODO: Fetch from API - GET api/courses (admin endpoint)
const allCourses = [
  {
    id: 1,
    name: "NEET 2026 Crash Course",
    stream: "NEET",
    studentsEnrolled: 245,
    status: "active",
    hasLiveStream: true,
    startDate: "2026-01-15",
    liveStreamUrl: "",
  },
  {
    id: 2,
    name: "IIT-JEE Advanced Batch",
    stream: "IIT-JEE",
    studentsEnrolled: 180,
    status: "active",
    hasLiveStream: false,
    startDate: "2026-02-01",
    liveStreamUrl: "",
  },
  {
    id: 3,
    name: "Foundation Course - Class 11",
    stream: "Foundation",
    studentsEnrolled: 320,
    status: "active",
    hasLiveStream: true,
    startDate: "2025-12-10",
    liveStreamUrl: "",
  },
  {
    id: 4,
    name: "NEET Repeater Batch",
    stream: "NEET",
    studentsEnrolled: 95,
    status: "upcoming",
    hasLiveStream: false,
    startDate: "2026-04-01",
    liveStreamUrl: "",
  },
  {
    id: 5,
    name: "IIT-JEE Mains 2026",
    stream: "IIT-JEE",
    studentsEnrolled: 410,
    status: "active",
    hasLiveStream: true,
    startDate: "2026-01-05",
    liveStreamUrl: "",
  },
  {
    id: 6,
    name: "Foundation Course - Class 12",
    stream: "Foundation",
    studentsEnrolled: 275,
    status: "active",
    hasLiveStream: false,
    startDate: "2025-11-20",
    liveStreamUrl: "",
  },
];

export default function CoursesPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#30343e]">All Courses</h1>
        <p className="text-[#8a8989] mt-1">
          View your registered courses and live stream links.
        </p>
      </div>

      {/* Courses Table */}
      <div className="bg-white rounded-xl border border-[#e5e5e5] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#e5e5e5] bg-[#f7f7f7]">
              <th className="text-left px-6 py-3 text-xs font-semibold text-[#8a8989] uppercase tracking-wider">
                Course
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-[#8a8989] uppercase tracking-wider">
                Stream
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-[#8a8989] uppercase tracking-wider">
                Status
              </th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-[#8a8989] uppercase tracking-wider">
                Live Stream Link
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e5e5e5]">
            {allCourses.map((course) => (
              <tr
                key={course.id}
                className="hover:bg-[#f7f7f7]/50 transition-colors"
              >
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-[#30343e]">
                      {course.name}
                    </p>
                    <p className="text-xs text-[#8a8989] mt-0.5">
                      Started: {course.startDate}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-[#BF0000]/10 text-[#BF0000]">
                    {course.stream}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${
                      course.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {course.status === "active" ? "Active" : "Upcoming"}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {course.hasLiveStream ? (
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-xs font-medium text-red-600">
                        Configured
                      </span>
                    </div>
                  ) : (
                    <span className="text-xs text-[#8a8989]">Not set</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
