// "use client";
// import Link from "next/link";
// import { SocialButtons } from "./SocialButton";
// import { useState } from "react";
// import { postUser } from "@/actions/server/auth";
// import { useRouter, useSearchParams } from "next/navigation";
// import { signIn } from "next-auth/react";
// import Swal from "sweetalert2";

// export const RegisterForm = () => {
//   const params = useSearchParams();
//   const router = useRouter();
//   const callbackUrl = params.get("callbackUrl") || "/";
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const result = await postUser(form);

//     if (result.acknowledged) {
//       const result = await signIn("credentials", {
//         email: form.email,
//         password: form.password,
//         redirect: false,
//         callbackUrl: callbackUrl,
//       });
//       if (result.ok) {
//         Swal.fire("success", "Registered successfully", "success");
//         router.push(callbackUrl);
//       }
//     } else {
//       Swal.fire("erro", "Sorry", "error");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-base-200">
//       <div className="card w-full max-w-sm shadow-xl bg-base-100">
//         <div className="card-body">
//           <h2 className="text-2xl font-bold text-center">Create Account</h2>

//           <form onSubmit={handleSubmit} className="space-y-3">
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               className="input input-bordered w-full"
//               onChange={handleChange}
//               required
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               className="input input-bordered w-full"
//               onChange={handleChange}
//               required
//             />

//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               className="input input-bordered w-full"
//               onChange={handleChange}
//               required
//             />

//             <button type="submit" className="btn btn-primary w-full">
//               Register
//             </button>
//           </form>

//           <SocialButtons />

//           <p className="text-center text-sm mt-4">
//             Already have an account?{" "}
//             <Link href="/login" className="link link-primary">
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };



















"use client";
import Link from "next/link";
import { SocialButtons } from "./SocialButton";
import { useState } from "react";
import { postUser } from "@/actions/server/auth";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";

export const RegisterForm = () => {
  const params = useSearchParams();
  const router = useRouter();
  const callbackUrl = params.get("callbackUrl") || "/";
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    nid: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isPasswordValid = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isPasswordValid(form.password)) {
      Swal.fire(
        "Invalid Password",
        "Password must be at least 6 characters with 1 uppercase and 1 lowercase letter",
        "warning"
      );
      return;
    }

    const result = await postUser(form);

    if (result.acknowledged) {
      const loginResult = await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
        callbackUrl: callbackUrl,
      });

      if (loginResult.ok) {
        Swal.fire("Success", "Registered successfully", "success");
        router.push(callbackUrl);
      }
    } else {
      Swal.fire("Error", "Registration failed", "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-100 px-4">
      <div className="card w-full max-w-lg shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-1">
            Create Account
          </h2>
          <p className="text-center text-sm text-gray-500 mb-4">
            Join Jotno to book trusted care services
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                className="input input-bordered w-full"
                onChange={handleChange}
                required
              />
            </div>

            {/* NID */}
            <div>
              <label className="label">
                <span className="label-text">NID Number</span>
              </label>
              <input
                type="text"
                name="nid"
                placeholder="National ID Number"
                className="input input-bordered w-full"
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="label">
                <span className="label-text">Contact Number</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="01XXXXXXXXX"
                className="input input-bordered w-full"
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                className="input input-bordered w-full"
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Create a strong password"
                className="input input-bordered w-full"
                onChange={handleChange}
                required
              />
              <label className="label">
                <span className="label-text-alt text-gray-500">
                  At least 6 characters, 1 uppercase & 1 lowercase letter
                </span>
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Register
            </button>
          </form>

          <div className="divider">OR</div>

          <SocialButtons />

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link href="/login" className="link link-primary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
