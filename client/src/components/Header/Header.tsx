"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import DarkModeComponent from "../DarkModeComponent/DarkModeComponent";
import MobileFilterBar from "../MobileFilterBar/MobileFilterBar";
import { usePathname } from "next/navigation";
import Image from "next/image";
/* import GoogleTranslate from "../GoogleTranslate/GoogleTranslate";
 */
function Header() {
  const pathname = usePathname();
  return (
    <>
      <div className="block sm:hidden">
        <div className="w-full text-center p-3 bg-primary-color text-white font-black">
          <Link href="/">Uluslararası Kariyer</Link>
        </div>
        {pathname.includes("yurtdisi-is-ilanlari") && <MobileFilterBar />}
      </div>
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white hidden sm:flex h-10 md:h-16 items-center border-b shadow-sm">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo on the left */}
          <div className="text-2xl font-bold text-primary-color">
            <Link href="/">
              <Image
                src="/webapp-logo.png"
                alt="Logo"
                width={100}
                height={90}
                className="h-32 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/">Ana Sayfa</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/yurtdisi-is-ilanlari">İş Ara</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/blog">Blog</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/araclar">Araçlar</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div>
            {/*    <GoogleTranslate /> */}
            {false && <DarkModeComponent />}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
