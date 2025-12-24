import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-1">
      <Image
        alt="logo-hero-kidz"
        src={"/assets/jotnologo.png"}
        width={80}
        height={80}
      />
      <h2 className="text-xl font-bold">
         <span className="text-primary">Jotno</span>{" "}
      </h2>
    </Link>
  );
};

export default Logo;
