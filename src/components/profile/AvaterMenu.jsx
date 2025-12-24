"use client";

import { useSession } from "next-auth/react";
import ProfileDropdown from "./ProfileDropdown";


const AvatarMenu = () => {
  const { data: session, status } = useSession();

  if (status !== "authenticated") return null;

  const user = session?.data?.user || session?.user;

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn  btn-circle avatar"
      >
        <div className="w-30 rounded-full bg-primary text-primary-content flex items-center justify-center">
          {user?.name?.charAt(0).toUpperCase()}
        </div>
      </div>

      <ProfileDropdown user={user} />
    </div>
  );
};

export default AvatarMenu;
