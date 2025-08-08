'use client'
import React from "react";

import { useUserContext } from "@/context/userContext"

type Props = {
  params: Promise<{
    verificationToken: string;
  }>;
};

const Page =  ({params}: Props) => {

    const {verifyUser} = useUserContext();
    
  const { verificationToken } = React.use(params); // ✅ unwrap the promise
    return(
       <div className="auth-page  flex flex-col justify-center items-center">
      <div className="bg-white flex flex-col justify-center gap-[1rem] px-[4rem] py-[2rem] rounded-md">
        <h1 className="text-[#999] text-[2rem]">Verify Your Account</h1>
        <button
          className="px-4 py-2 self-center bg-blue-500 text-white rounded-md"
          onClick={() => {
            verifyUser(verificationToken);
          }}
        >
          Verify
        </button>
      </div>
    </div>
    )
}

export default Page;