'use client'

import { useUserContext } from "@/context/userContext";
import { useState } from "react";


function RegisterForm() {

    const [showPassword, setShowPassword] = useState(false);
    const { registerUser, userState, handlerUserInput } = useUserContext();

    const { name, email, password } = userState;



    return (
        <form className="relative m-[2rem] px-10 py-14 rounded-lg bg-white w-full max-w-[520px]">
            <div className="relative z-10">
                <h1 className="mb-2 text-center text-[1.35rem] font-medium">
                    Register for an Account
                </h1>
                <p className="mb-8 px-[2rem] text-center text-[#999] text-[14px]">
                    Create an account. Already have an account?{" "}
                    <a
                        href="/login"
                        className="font-bold text-[#2ECC71] hover:text-[#7263F3] transition-all duration-300"
                    >
                        Login here
                    </a>
                </p>
                <div className="flex flex-col">
                    <label htmlFor="name" className="mb-1 text-[#999]">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => handlerUserInput("name")(e)}
                        name="name"
                        className="px-4 py-3 border-[2px] rounded-md outline-[#2ECC71] text-gray-800"
                        placeholder="John Doe"
                    />
                </div>
                <div className="mt-[1rem] flex flex-col">
                    <label htmlFor="email" className="mb-1 text-[#999]">
                        Email
                    </label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => handlerUserInput("email")(e)}
                        name="email"
                        className="px-4 py-3 border-[2px] rounded-md outline-[#2ECC71] text-gray-800"
                        placeholder="johndoe@gmail.com"
                    />
                </div>
                <div className="relative mt-[1rem] flex flex-col">
                    <label htmlFor="password" className="mb-1 text-[#999]">
                        Password
                    </label>
                    <input
                        id='password'
                        name="password"
                        type={showPassword? "text" : "password"}
                        value={password}
                        onChange={(e) => handlerUserInput("password")(e)}
                        className="px-4 py-3 border-[2px] rounded-md outline-[#2ECC71] text-gray-800 "
                        placeholder="********"
                    />

                    <button
                        type="button"
                        className="absolute p-1 right-4 top-[43%] text-[22px] text-[#999] opacity-45 "
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <i className="fas fa-eye-slash"></i> :  <i className="fas fa-eye"></i>}
                                             
                    </button>
                </div>

                <div className="flex">
                    <button
                        type="submit"
                        // disabled={!name || !email || !password}
                        
                        className="mt-[1.5rem] flex-1 px-4 py-3 font-bold bg-[#2ECC71] text-white rounded-md hover:bg-[#1abc9c] transition-colors cursor-pointer"
                        onClick={registerUser}
                    >
                        Register Now
                    </button>
                </div>
            </div>
            <img src="/flurry.png" alt="" />
        </form>
    );
}

export default RegisterForm;