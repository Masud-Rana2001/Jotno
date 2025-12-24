"use client";

import { useSession } from "next-auth/react";
import NavLink from "./NavLink";

const AuthenticatedUserNav = () => {
   const { data: session, status } = useSession();

  if (status !== "authenticated") return <></>;
  return (
    <>
      <li>
        <NavLink href={"/mybookings"}>My Bookings</NavLink>
      </li>
      <li>
        <NavLink href={"/payment-history"}>Payment History</NavLink>
      </li>
    </>
  );
};

export default AuthenticatedUserNav;