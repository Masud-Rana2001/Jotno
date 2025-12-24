"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";

const ProfileDropdown = ({ user }) => {
  return (
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-100 rounded-box w-52 space-y-4"
    >
      <li className="pointer-events-none">
        <span className="font-semibold">{user?.name}</span>
      </li>
      <li className="pointer-events-none">
        <span className="font-semibold">{user?.email}</span>
      </li>

      {/* <li className="hover:bg-white">
        <Link href="/profile">Profile</Link>
      </li> */}

      <li>
        <button onClick={() => signOut()} className="btn btn-primary ">
                    Log Out
                  </button>
      </li>
    </ul>
  );
};

export default ProfileDropdown;
