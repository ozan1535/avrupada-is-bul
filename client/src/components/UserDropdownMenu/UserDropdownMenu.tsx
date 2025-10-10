import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { syncUserProfile } from "@/lib/supabase/sync-user";

async function UserDropdownMenu() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (user) {
    await syncUserProfile(user);
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          src={user?.picture || "/user-image.jpg"}
          width={35}
          height={35}
          alt="picture"
          className="cursor-pointer rounded-full"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 z-[101]" align="start">
        <DropdownMenuLabel>Hesabım</DropdownMenuLabel>
        <DropdownMenuItem>
          <Link href={"/favoriler"} className="text-subtle">
            Favoriler
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {user ? (
            <DropdownMenuItem>
              <LogoutLink className="text-subtle">Çıkış Yap</LogoutLink>
            </DropdownMenuItem>
          ) : (
            <>
              <DropdownMenuItem>
                <Link href="/giris-yap" className="btn btn-ghost sign-in-btn">
                  Giriş Yap
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/kayit-ol" className="btn btn-dark">
                  Kayıt Ol
                </Link>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserDropdownMenu;
