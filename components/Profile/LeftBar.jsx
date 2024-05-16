"use client";
import { userDetailsStore } from "@/store/userStore";
import Image from "next/image";
import React from "react";
import AvatarBg from "../../public/assets/images/profile.png";
import { BriefcaseBusiness, ImageUp, Phone, Vote } from "lucide-react";

const LeftBar = () => {
  const userDetails = userDetailsStore((state) => state.userDetails);
  console.log(userDetails);
  return (
    <div
      className="flex flex-col gap-4 text-white font-semibold text-2xl items-center shadow-2xl rounded-xl mx-14 my-8"
      style={{ backgroundColor: "rgba(45,45,45)" }}
    >
      <div className="px-14 py-8  flex flex-col justify-center items-center">
        {userDetails?.imageUrl ? (
          <img src={userDetails?.imageUrl} alt="" width={50} height={50} />
        ) : (
          <Image
            src={AvatarBg}
            alt=""
            className="w-24 h-24 cursor-pointer rounded-full"
          ></Image>
        )}
        <p className="text-white font-semibold text-2xl pt-4">
          {userDetails?.username}
        </p>

        <button className="bg-green-300 py-3 px-14 rounded-lg text-green-500 bg-opacity-20 mt-4">
          Edit Profile
        </button>
      </div>
      <div className="border-t-2 border-orange-300 w-full h-4" />

      <div className="px-2 py-4 flex flex-col gap-4">
        <span className="flex gap-3 items-center">
          <Phone color="wheat" className="font-semibold" size={24} />
          <p>{userDetails.mobileNo}</p>
        </span>
        <span className="flex gap-3 items-center">
          <BriefcaseBusiness
            color="wheat"
            className="font-semibold"
            size={24}
          />
          <p>Entrepreneur</p>
        </span>
        <span className="flex gap-3 items-center">
          <ImageUp color="wheat" className="font-semibold" size={24} />
          <p>Polls Uploaded</p>
        </span>
        <span className="flex gap-3 items-center">
          <Vote color="wheat" className="font-semibold" size={24} />
          <p>Voted for Polls</p>
        </span>
      </div>
    </div>
  );
};

export default LeftBar;
