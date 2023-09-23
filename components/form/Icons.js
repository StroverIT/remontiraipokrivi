import React from "react";
// Icons
import { HiOutlineMail, HiOutlineUserCircle } from "react-icons/hi";
import { AiOutlineLock, AiOutlineMessage } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineSubtitles } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";

const iconDictionary = {
  password: <AiOutlineLock />,
  email: <HiOutlineMail />,
  fullName: <HiOutlineUserCircle />,
  name: <BsFillPersonFill />,
  phoneNumber: <BiPhoneCall />,
  title: <MdOutlineSubtitles />,
  message: <AiOutlineMessage />,
};
export default function InputIcons({ iconType }) {
  return <div className="text-lg font-bold"> {iconDictionary[iconType]}</div>;
}
