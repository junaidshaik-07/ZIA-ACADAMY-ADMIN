export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e5e5e5] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Zia Academy" width={24} height={24} />
            <span className="text-sm text-[#8a8989]">
              © {new Date().getFullYear()} Zia Academy. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://ziaacademy.org.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#8a8989] hover:text-[#BF0000] transition-colors"
            >
              Website
            </a>
            <a
              href="#"
              className="text-sm text-[#8a8989] hover:text-[#BF0000] transition-colors"
            >
              Support
            </a>
            <a
              href="#"
              className="text-sm text-[#8a8989] hover:text-[#BF0000] transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
