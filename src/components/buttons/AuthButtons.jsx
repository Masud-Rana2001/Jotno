"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import AvatarMenu from "../profile/AvaterMenu";

const AuthButtons = () => {
  const session = useSession();
  return (
    <div>
      {session.status == "authenticated" ? (
        <>
          
          <AvatarMenu/>
        </>
      ) : (
        <>
          {" "}
          <Link href={"/login"}>
            <button className="btn btn-primary btn-outline">Login</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthButtons;
