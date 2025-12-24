"use client";
import React, { useState } from "react";
import Link from 'next/link'
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";



export default function BookServiceBtn({service }) {
  const session = useSession();
  const path = usePathname();
  const router = useRouter();
  const islogin = session?.status == "authenticated";
  console.log("islogin" ,islogin)
  const handleBooking =  () => {
    
    if (islogin) {
      router.push(`/booking/${service._id}`)
    } else {
      router.push(`/login?callbackUrl=${path}`);
    }
  };
  return (
  
                  <div className="w-full">
                   <button
                       onClick={handleBooking}
                          className="btn btn-primary w-full text-lg shadow-lg">
                        Book This Service
                      </button>
                    </div>
   
  )
}


// import { handleCart } from "@/actions/server/cart";
// import { FaCartPlus } from "react-icons/fa";

// const CartButton = ({ product }) => {


//   return (
//     <div>
//       <button
//         disabled={session.status == "loading" || isLoading}
//         onClick={handleAdd2Cart}
//         className="btn btn-primary w-full flex gap-2"
//       >
//         <FaCartPlus />
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default CartButton;
