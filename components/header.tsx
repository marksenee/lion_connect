"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "인재 탐색", href: "/talent-search" },
    { name: "인재 등록", href: "/talent-register" },
    { name: "인재 요청", href: "/talent-request" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              라이언 커넥트
            </Link>
            <div className="hidden md:flex gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                      isActive
                        ? "text-[#525151] bg-gray-100"
                        : "text-[#929292] hover:text-[#525151] hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/auth">
              <button className="w-[119px] h-[37px] border border-[#F3F3F3] rounded-[15px] text-sm text-gray-600 hover:text-gray-800 transition-colors">
                로그인/회원가입
              </button>
            </Link>
            {/* <button className="px-4 py-2 border border-orange-500 text-orange-500 text-sm font-medium hover:bg-orange-50 rounded-full transition-all">
              로그인
            </button> */}
          </div>
        </nav>
      </div>
    </header>
  );
}
