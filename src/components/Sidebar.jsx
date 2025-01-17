"use client";

import Link from "next/link";
import { AiOutlineAppstore } from "react-icons/ai";
import { HiOutlineDatabase } from "react-icons/hi";
import { SlSettings } from "react-icons/sl";
import { BsPerson } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { RiBuilding3Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { GrInherit } from "react-icons/gr";
import { PiKeyholeDuotone } from "react-icons/pi";
import { FaBarsProgress } from "react-icons/fa6";
import { IoBookOutline, IoMenuSharp } from "react-icons/io5";
import { GoGitPullRequest } from "react-icons/go";
import { VscGroupByRefType } from "react-icons/vsc";

const page = () => {
  const [submenuStates, setSubmenuStates] = useState({
    userManagement: false,
    department: false,
    leave: false,
  });
  const toggleSubmenu = (submenu) => {
    setSubmenuStates((prevStates) => ({
      ...prevStates,
      [submenu]: !prevStates[submenu],
    }));
  };

  const [show, setShow] = useState(false);
  const path = usePathname();

  return (
    <>
      {/* Menu icon */}

      {show ? (
        <div
          onClick={() => setShow(!show)}
          className="bg-black/50 fixed z-[90] w-full h-full text-white hidden max-sm:block"
        ></div>
      ) : (
        <IoMenuSharp
          size={23}
          className="fixed top-2 right-2 z-[100] max-w-min hidden max-sm:block bg-blue-50"
          onClick={() => setShow(() => !show)}
        />
      )}

      <div
        className={`bg-white shadow-xl  w-[16rem] h-screen overflow-hidden ${
          show ? "max-sm:-left-[0]" : "max-sm:-left-[200%] "
        } max-sm:fixed max-sm:z-[990] transition-all duration-400`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center gap-2.5 font-medium border-b border-slate-300 py-3 mx-3 min-w-max">
          <img
            src="https://img.icons8.com/color/512/firebase.png"
            alt=""
            width={45}
          />
          <span className="text-xl whitespace-pre ">Admin</span>
        </div>

        {/* Menu */}
        <div className="flex flex-col w-full h-[70%]">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden w-full scroll">
            <li
              onClick={() => setShow(!show)}
              className={`box ${path === "/dashboard" ? "active" : "box"}`}
            >
              <Link href={"/dashboard"} className="flex gap-2 items-center">
                <AiOutlineAppstore size={23} className="min-w-max" />
                <p>Dashboard</p>
              </Link>
            </li>
            <li
              onClick={() => setShow(!show)}
              className={`box ${path === "/employee" ? "active" : "box"}`}
            >
              <Link href={"/employee"} className="flex gap-2 items-center">
                <HiOutlineDatabase size={23} className="min-w-max" />
                <p>Employee</p>
              </Link>
            </li>

            {/* Submenu part */}
            <div className="border-y py-5 border-slate-300 w-full">
              <div className="flex flex-col gap-1">
                {/* User Management */}
                <li
                  onClick={() => toggleSubmenu("userManagement")}
                  className={`box flex gap-2 items-center ${
                    submenuStates.userManagement ? "text-blue-600" : ""
                  }`}
                >
                  <div className="flex gap-2 flex-1">
                    <BsPerson size={23} className="min-w-max" />
                    <p className="flex-1">User Management</p>
                  </div>
                  <IoIosArrowDown
                    className={
                      submenuStates.userManagement && true
                        ? "rotate-180 transition-all delay-100"
                        : "rotate-0 transition-all delay-100"
                    }
                  />
                </li>
                {submenuStates.userManagement ? (
                  <ul className="flex flex-col text-[0.8rem] font-normal overflow-hidden pl-8">
                    <li
                      onClick={() => setShow(!show)}
                      className={`box px-20 ${
                        path === "/user/role" ? "active " : "box"
                      }`}
                    >
                      <Link
                        href={"/user/role"}
                        className="flex items-center gap-2"
                      >
                        <GrInherit />
                        <p>Role</p>
                      </Link>
                    </li>
                    <li
                      onClick={() => setShow(!show)}
                      className={`box ${
                        path === "/user/permission" ? "active" : "box"
                      }`}
                    >
                      <Link
                        href={"/user/permission"}
                        className="flex items-center gap-2"
                      >
                        <PiKeyholeDuotone size={15} />
                        <p>Permission</p>
                      </Link>
                    </li>
                  </ul>
                ) : null}

                {/* Department */}
                <li
                  onClick={() => toggleSubmenu("department")}
                  className={`box flex gap-2 items-center ${
                    submenuStates.department ? "text-blue-600" : ""
                  }`}
                >
                  <div className="flex gap-2 flex-1">
                    <RiBuilding3Line size={23} className="min-w-max" />
                    <p>Department</p>
                  </div>
                  <IoIosArrowDown
                    className={
                      submenuStates.department && true
                        ? "rotate-180 transition-all delay-100"
                        : "rotate-0 transition-all delay-100"
                    }
                  />
                </li>
                {submenuStates.department ? (
                  <ul className="flex flex-col text-[0.8rem] font-normal pl-8 overflow-hidden h-fit px-4">
                    <li
                      onClick={() => setShow(!show)}
                      className={`box ${
                        path === "/department/courses" ? "active " : "box"
                      }`}
                    >
                      <Link
                        href={"/department/courses"}
                        className="flex items-center gap-2"
                      >
                        <FaBarsProgress />
                        <p>Courses</p>
                      </Link>
                    </li>
                    <li
                      onClick={() => setShow(!show)}
                      className={`box ${
                        path === "/department/subject" ? "active " : "box"
                      }`}
                    >
                      <Link
                        href={"/department/subject"}
                        className="flex items-center gap-2"
                      >
                        <IoBookOutline />
                        <p>Subject</p>
                      </Link>
                    </li>
                  </ul>
                ) : null}

                {/* Leave */}
                <li
                  onClick={() => toggleSubmenu("leave")}
                  className={`box flex gap-1 items-center ${
                    submenuStates.leave ? "text-blue-600" : ""
                  }`}
                >
                  <div className="flex gap-2 flex-1 items-center">
                    <TbReportAnalytics size={23} className="min-w-max" />
                    <p className="flex-1">Leave</p>
                  </div>
                  <IoIosArrowDown
                    className={
                      submenuStates.leave && true
                        ? "rotate-180 transition-all delay-100"
                        : "rotate-0 transition-all delay-100"
                    }
                  />
                </li>
                {submenuStates.leave ? (
                  <ul className="flex flex-col pl-8 text-[0.8rem] font-normal overflow-hidden h-fit">
                    <li
                      onClick={() => setShow(!show)}
                      className={`box ${
                        path === "/leave/leavetype" ? "active " : "box"
                      }`}
                    >
                      <Link
                        className="flex items-center gap-2"
                        href={"/leave/leavetype"}
                      >
                        <VscGroupByRefType />
                        <p>Leave Type</p>
                      </Link>
                    </li>
                    <li
                      onClick={() => setShow(!show)}
                      className={`box ${
                        path === "/leave/leaverequest" ? "active " : "box"
                      }`}
                    >
                      <Link
                        className="flex items-center gap-2"
                        href={"/leave/leaverequest"}
                      >
                        <GoGitPullRequest />
                        <p>Leave Request</p>
                      </Link>
                    </li>
                  </ul>
                ) : null}
              </div>
            </div>
            {/* settings */}
            <li
              onClick={() => setShow(!show)}
              className={`box ${path === "/settings" ? "active" : "box"}`}
            >
              <Link href={"/settings"} className="flex gap-2 items-center">
                <SlSettings size={23} className="min-w-max" />
                <p>Settings</p>
              </Link>
            </li>
          </ul>
          {/* Logout btn */}
          <div className="absolute bottom-4 py-5 border-slate-300 w-[16rem] flex justify-center items-center ">
            <button className="w-[14rem] border border-gray-400 box active flex justify-center">
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
