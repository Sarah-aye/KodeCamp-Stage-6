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
          {/* Account Icon */}
          <div
            className="flex items-center justify-center cursor-pointer"
            onClick={toggle}
          >
            <img
              src={on ? "/assets/user.png" : "/assets/account-icon.png"}
              alt="my account"
              className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-auto lg:h-auto rounded-full ${
                on ? "bg-[#DB4444]" : ""
              }`}
            />
          </div>

          {/* Dropdown */}
          {on && (
            <div
              className="
              absolute
              top-full
              left-0
              z-50
              mt-2
              w-52
              rounded-md
              bg-black
              p-3
              shadow-xl
              opacity-90
              flex
              flex-col
              gap-3

              sm:mt-3
              sm:w-56
              sm:p-4
              sm:gap-4

              lg:mt-3
              lg:w-60
              lg:p-4
              lg:gap-4
            "
            >
              {data.map((item) => (
                <div
                  key={item.id}
                  className="
                  flex
                  items-center
                  gap-3
                  cursor-pointer

                  sm:gap-4
                  lg:gap-4
                "
                >
                  <img
                    src={item.icon}
                    alt={item.piece}
                    className="
                    w-4
                    h-4
                    object-contain

                    sm:w-5
                    sm:h-5

                    lg:w-auto
                    lg:h-auto
                  "
                  />

                  {item.piece === "Logout" ? (
                    <Link
                      onClick={logOut}
                      className="
                      text-white
                      text-xs
                      hover:text-gray-300

                      sm:text-sm
                      lg:text-sm
                    "
                    >
                      {item.piece}
                    </Link>
                  ) : (
                    <p
                      className="
                      text-white
                      text-xs

                      sm:text-sm
                      lg:text-sm
                    "
                    >
                      {item.piece}
                    </p>
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
