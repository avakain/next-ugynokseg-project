'use client'
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { BsPersonFillAdd } from "react-icons/bs";
import { BiLogIn, BiMessageAdd } from "react-icons/bi";
import { AiFillSignal } from "react-icons/ai";
import Addreview from "../components/dashboard/testimonials/Testimonials";
import Addifluencers from "../components/dashboard/influencer/Influencers";
import Logout from "@/firebase/auth/logout";
import Addresult from "../components/dashboard/results/Results";

export default function SideBar() {

  const [activeComponent, setActiveComponent] = useState("Eredmények");
  const { user } = useAuthContext()
  const router = useRouter()
  const [open, sehrefpen] = useState(true);
  const menus = [
    { name: "Értékelések", icon: BiMessageAdd },
    { name: "Influencerek", icon: BsPersonFillAdd },
    { name: "Eredmények", icon: AiFillSignal },
    { name: "Kijelentkezés", icon: BiLogIn },
  ];

  React.useEffect(() => {
    if (user == null) router.push("/")
  }, [user])


  return (
    <div>
      <section className=" xs:gap-2 xs:hidden md:flex">
        <div
          className={`bg-[#0e0e0e] min-h-screen  min-w-screen ${open ? "w-72" : "w-16"
            } duration-500 text-gray-100 px-4`}
        >
          <div className="py-3 flex justify-end">
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => sehrefpen(!open)}
            />
          </div>
          <div className=" mt-4 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <div
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setActiveComponent(menu?.name)
                  if (menu?.name === "Kijelentkezés") Logout()
                }}
                key={i}
                className={` ${menu?.margin && "mt-5"
                  } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
              >
                <div
                  style={{ cursor: 'pointer' }}
                  title={menu?.name}
                >{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${open && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
        <div className="grow mt-5 text-xl text-gray-900 font-semibold">
          <div >
            {activeComponent === "Értékelések" && <Addreview />}
          </div>
          <div className="my-8">
            {activeComponent === "Influencerek" && <Addifluencers />}
          </div>
          <div className="my-8">
            {activeComponent === "Eredmények" && <Addresult />}
          </div>
        </div>
      </section>

      {/*Mobile view-*/}

      <section className=" xs:gap-2 xs: md:hidden">
        <div
          className='bg-[#0e0e0e] p-2 min-w-screen text-gray-100'
        >

          <div className="flex justify-center">
            {menus?.map((menu, i) => (
              <div
                onClick={() => {
                  setActiveComponent(menu?.name)
                  if (menu?.name === "Kijelentkezés") Logout()
                }}
                key={i}
                className={` ${menu?.margin && "mt-5"
                  } group flex items-center text-sm  m-2 font-medium p-2 hover:bg-gray-800 rounded-md`}
              >
                <div
                  className="flex justify-center items-center"
                  style={{ cursor: 'pointer' }}
                  title={menu?.name}
                >{React.createElement(menu?.icon, { size: "25" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                >
                </h2>

              </div>
            ))}
          </div>
        </div>
        <div className="text-xl text-gray-900 font-semibold">
          <div>
            {activeComponent === "Értékelések" && <Addreview />}
          </div>
          <div>
            {activeComponent === "Influencerek" && <Addifluencers />}
          </div>
          <div>
            {activeComponent === "Eredmények" && <Addresult />}
          </div>
        </div>
      </section>
    </div>
  );
};

