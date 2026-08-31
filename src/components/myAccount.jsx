import React from "react";
import withAuth from "../HOC/withAuth.jsx";
import ToggleComponent from "./toggle.jsx";
import { useAuth } from "../hooks/useAuth.js";
import { Link } from "react-router-dom";

const data = [
  {
    id: crypto.randomUUID(),
    piece: "Manage My Account",
    icon: "/assets/user.png",
  },
  { id: crypto.randomUUID(), piece: "My Order", icon: "/assets/mallbag.png" },
  {
    id: crypto.randomUUID(),
    piece: "My Cancellations",
    icon: "/assets/cancel.png",
  },
  { id: crypto.randomUUID(), piece: "My Reviews", icon: "/assets/reviews.png" },
  { id: crypto.randomUUID(), piece: "Logout", icon: "/assets/logout.png" },
];
const MyAccount = () => {
  const { logOut } = useAuth();
  return (
    <ToggleComponent
      render={(on, toggle) => (
        <div className="relative">
          <div
            className="flex items-center justify-between gap-4 cursor-pointer"
            onClick={toggle}
          >
            <img
              src={on ? "/assets/user.png" : "/assets/account-icon.png"}
              alt=" my account"
              className={` rounded-full  ${on ? "bg-[#DB4444]" : ""}`}
            />
          </div>
          {on && (
            <div className=" absolute right-0 top-full w-60 mt-3 rounded-md shadow-xl flex flex-col gap-4 opacity-70 z-50 bg-black p-4">
              {data.map((item) => (
                <div key={item.id} className="flex gap-4 ">
                  <img src={item.icon} alt={item.piece} />
                  {item.piece === "Logout" ? (
                    <Link onClick={logOut} className="text-white text-sm">
                      {item.piece}
                    </Link>
                  ) : (
                    <p className="text-white text-sm">{item.piece}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    />
  );
};

export default withAuth(MyAccount);
