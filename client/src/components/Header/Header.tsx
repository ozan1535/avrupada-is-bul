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
import Image from "next/image";
import UserDropdownMenu from "../UserDropdownMenu/UserDropdownMenu";
/* import GoogleTranslate from "../GoogleTranslate/GoogleTranslate";
 */
function Header() {
  return (
    <>
      <div className="block md:hidden">
        <div className="w-full text-center p-2 text-white font-black flex justify-between items-center">
          <Link href="/">
            <Image
              src="/webapp-logo.png"
              alt="Logo"
              width={120}
              height={75}
              className="h-10 object-cover"
              priority
            />
          </Link>
          <div className="flex items-center gap-2">
            <UserDropdownMenu />
            <DarkModeComponent />
          </div>
        </div>
        <MobileFilterBar />
      </div>
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white hidden md:flex h-10 md:h-16 items-center border-b shadow-sm dark:bg-[#1d293d]">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
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
                  <Link href="/yurtdisi-is-ilanlari">İs Ara</Link>
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
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/urunler">Ürünler</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-2">
            {/*    <GoogleTranslate /> */}
            <UserDropdownMenu />
            <DarkModeComponent />
            {/*  <AuthButton /> */}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
