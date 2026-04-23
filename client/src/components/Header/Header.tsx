// import React from "react";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";
// import Link from "next/link";
// import DarkModeComponent from "../DarkModeComponent/DarkModeComponent";
// /* import MobileFilterBar from "../MobileFilterBar/MobileFilterBar";
//  */import Image from "next/image";
// import UserDropdownMenu from "../UserDropdownMenu/UserDropdownMenu";
// /* import GoogleTranslate from "../GoogleTranslate/GoogleTranslate";
//  */

// const navItems = [
//   {
//     name: "Ana Sayfa",
//     link: "/",
//   },
//   /*   {
//     name: "İş	İlanları",
//     link: "/yurtdisi-is-ilanlari",
//   }, */
//   {
//     name: "Blog",
//     link: "/blog",
//   },
//   {
//     name: "Araçlar",
//     link: "/araclar",
//   },
//   /*  {
//     name: "Ürünler",
//     link: "/urunler",
//   }, */
// ];
// function Header() {
//   return (
//     <>
//       <div className="block md:hidden">
//         <div className="w-full text-center p-2 text-white font-black flex justify-between items-center">
//           <Link href="/">
//             <Image
//               src="/webapp-logo.png"
//               alt="Logo"
//               width={120}
//               height={75}
//               className="h-10 object-cover"
//               priority
//             />
//           </Link>
//           <div className="flex items-center gap-2">
//             <UserDropdownMenu />
//             <DarkModeComponent />
//           </div>
//         </div>
//         {/* <MobileFilterBar /> */}
//       </div>
//       <header className="fixed top-0 left-0 right-0 z-[100] bg-white hidden md:flex h-10 md:h-16 items-center border-b shadow-sm dark:bg-[#1d293d]">
//         <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
//           <div className="text-2xl font-bold text-primary-color">
//             <Link href="/">
//               <Image
//                 src="/webapp-logo.png"
//                 alt="Logo"
//                 width={100}
//                 height={90}
//                 className="h-32 w-auto object-contain"
//                 priority
//               />
//             </Link>
//           </div>

//           <NavigationMenu viewport={false}>
//             <NavigationMenuList>
//               {navItems.map((item) => (
//                 <NavigationMenuItem key={item.link}>
//                   <NavigationMenuLink
//                     //   asChild
//                     className={navigationMenuTriggerStyle()}
//                     href={item.link}
//                   >
//                     {item.name}
//                   </NavigationMenuLink>
//                 </NavigationMenuItem>
//               ))}
//             </NavigationMenuList>
//           </NavigationMenu>
//           <div className="flex items-center gap-2">
//             {/*    <GoogleTranslate /> */}
//             <UserDropdownMenu />
//             <DarkModeComponent />
//             {/*  <AuthButton /> */}
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }

// export default Header;

// import Link from "next/link";
// import React from "react";
// import MobileFilterBar from "../MobileFilterBar/MobileFilterBar";

// function Header() {
//   return (
//     <>
//       <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
//         <div className="max-w-[1280px] mx-auto px-6 lg:px-12 h-[68px] flex items-center justify-between">
//           <Link
//             href="/"
//             className="font-serif text-[20px] text-[#1B2B4A] tracking-tight"
//           >
//             Uluslararası<span className="text-[#4A7BC8]">Kariyer</span>
//           </Link>
//           <div className="hidden md:flex items-center gap-8">
//             <Link
//               href="/yurtdisi-is-ilanlari"
//               className="text-[14px] text-slate-500 hover:text-[#1B2B4A] transition-colors"
//             >
//               İş İlanları
//             </Link>
//             <Link
//               href="/vize-rehberi"
//               className="text-[14px] text-slate-500 hover:text-[#1B2B4A] transition-colors"
//             >
//               Vize Rehberleri
//             </Link>

//             {/* <Link
//             href="/araclar"
//             className="text-[14px] text-slate-500 hover:text-[#1B2B4A] transition-colors"
//             >
//             Araçlar
//             </Link> */}
//             <Link
//               href="/blog"
//               className="text-[14px] text-slate-500 hover:text-[#1B2B4A] transition-colors"
//             >
//               Blog
//             </Link>
//             <Link
//               href="/araclar"
//               className="bg-[#1B2B4A] text-white text-[13px] font-medium px-5 py-2 rounded-md hover:bg-[#2D4270] transition-colors"
//             >
//               Puan Hesapla
//             </Link>
//           </div>
//         </div>
//       </nav>
//       <MobileFilterBar />
//     </>
//   );
// }

// export default Header;

"use client";
import Link from "next/link";
import React, { useState } from "react";
import MobileFilterBar from "../MobileFilterBar/MobileFilterBar";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-[20px] text-[#1B2B4A] tracking-tight"
          >
            Uluslararası<span className="text-[#4A7BC8]">Kariyer</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/yurtdisi-is-ilanlari"
              className="text-[14px] text-slate-500 hover:text-[#1B2B4A] transition-colors"
            >
              İş İlanları
            </Link>
            <Link
              href="/vize-rehberi"
              className="text-[14px] text-slate-500 hover:text-[#1B2B4A] transition-colors"
            >
              Vize Rehberleri
            </Link>
            <Link
              href="/blog"
              className="text-[14px] text-slate-500 hover:text-[#1B2B4A] transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/araclar"
              className="bg-[#1B2B4A] text-white text-[13px] font-medium px-5 py-2 rounded-md hover:bg-[#2D4270] transition-colors"
            >
              Puan Hesapla
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-[2px] bg-[#1B2B4A] transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-[#1B2B4A] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-[#1B2B4A] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-64 border-t border-slate-100" : "max-h-0"
          }`}
        >
          <div className="flex flex-col px-6 py-4 gap-4 bg-white">
            <Link
              href="/yurtdisi-is-ilanlari"
              onClick={() => setMenuOpen(false)}
              className="text-[14px] text-slate-600 hover:text-[#1B2B4A] transition-colors py-1"
            >
              İş İlanları
            </Link>
            <Link
              href="/vize-rehberi"
              onClick={() => setMenuOpen(false)}
              className="text-[14px] text-slate-600 hover:text-[#1B2B4A] transition-colors py-1"
            >
              Vize Rehberleri
            </Link>
            <Link
              href="/blog"
              onClick={() => setMenuOpen(false)}
              className="text-[14px] text-slate-600 hover:text-[#1B2B4A] transition-colors py-1"
            >
              Blog
            </Link>
            <Link
              href="/araclar"
              onClick={() => setMenuOpen(false)}
              className="bg-[#1B2B4A] text-white text-[13px] font-medium px-5 py-2 rounded-md hover:bg-[#2D4270] transition-colors text-center"
            >
              Puan Hesapla
            </Link>
          </div>
        </div>
      </nav>
      <MobileFilterBar />
    </>
  );
}

export default Header;
