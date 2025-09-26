import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { syncUserProfile } from "@/lib/supabase/sync-user";
import Image from "next/image";
import Link from "next/link";

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
                <LoginLink className="btn btn-ghost sign-in-btn">
                  Giriş Yap
                </LoginLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <RegisterLink className="btn btn-dark">Kayıt Ol</RegisterLink>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserDropdownMenu;
