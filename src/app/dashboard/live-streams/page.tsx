"use client";

export default function LiveStreamsPage() {
  // TODO: Fetch courses with live stream data from API
  const liveStreams = [
    {
      id: 1,
      courseName: "NEET 2026 Crash Course",
      stream: "NEET",
      liveUrl: "https://youtube.com/live/abc123",
      scheduledAt: "2026-03-28T14:00:00",
      status: "live",
    },
    {
      id: 3,
      courseName: "Foundation Course - Class 11",
      stream: "Foundation",
      liveUrl: "https://youtube.com/live/def456",
      scheduledAt: "2026-03-28T16:00:00",
      status: "scheduled",
    },
    {
      id: 5,
      courseName: "IIT-JEE Mains 2026",
      stream: "IIT-JEE",
      liveUrl: "",
      scheduledAt: "2026-03-29T10:00:00",
      status: "scheduled",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#30343e]">Live Streams</h1>
        <p className="text-[#8a8989] mt-1">
          Manage live streaming links for your courses.
        </p>
      </div>

      {/* Stream Cards */}
      <div className="space-y-4">
        {liveStreams.map((stream) => (
          <div
            key={stream.id}
            className="bg-white rounded-xl border border-[#e5e5e5] p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-[#30343e]">
                    {stream.courseName}
                  </h3>
                  {stream.status === "live" ? (
                    <span className="flex items-center gap-1.5 px-2.5 py-0.5 bg-red-100 rounded-full">
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-xs font-medium text-red-600">
                        LIVE NOW
                      </span>
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700">
                      Scheduled
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4 text-sm text-[#8a8989]">
                  <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-[#BF0000]/10 text-[#BF0000]">
                    {stream.stream}
                  </span>
                  <span>
                    📅{" "}
                    {new Date(stream.scheduledAt).toLocaleString("en-IN", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </span>
                </div>

                {stream.liveUrl && (
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-sm text-[#8a8989]">Stream URL:</span>
                    <a
                      href={stream.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#BF0000] hover:underline"
                    >
                      {stream.liveUrl}
                    </a>
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                {/* <button className="px-4 py-2 text-sm font-medium text-[#BF0000] bg-[#BF0000]/10 rounded-lg hover:bg-[#BF0000]/20 transition-colors">
                  Edit Link
                </button> */}
                {stream.status === "live" && (
                  <button className="px-4 py-2 text-sm font-medium text-white bg-[#BF0000] rounded-lg hover:bg-[#960000] transition-colors">
                    End Stream
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
