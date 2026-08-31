import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 py-14 container w-full mx-auto px-40">
        {/* Subscribe */}
        <div className="space-y-5">
          <h2 className="text-2xl font-bold font-poppins">Exclusive</h2>

          <div className="space-y-3">
            <h3 className="font-semibold">Subscribe</h3>

            <p className="text-gray-400 text-sm">
              Get 10% off your first order
            </p>

            <div className="flex items-center border border-gray-500 rounded-md px-3 py-2 relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none flex-1 text-sm placeholder:text-gray-500"
              />

              <button className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer">
                <img
                  src="/assets/icon-send.png"
                  alt="Send"
                  className="w-5 h-5 object-contain"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="space-y-5">
          <h3 className="font-semibold text-lg">Support</h3>

          <div className="space-y-3 text-gray-400 text-sm">
            <p>111 Bijoy Sarana, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-18888-9999</p>
          </div>
        </div>

        {/* Account */}
        <div className="space-y-5">
          <h3 className="font-semibold text-lg">Account</h3>

          <div className="space-y-3 text-gray-400 text-sm">
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-5">
          <h3 className="font-semibold text-lg">Quick Link</h3>

          <div className="space-y-3 text-gray-400 text-sm">
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
        </div>

        {/* Download App */}
        <div className="space-y-5">
          <h3 className="font-semibold text-lg">Download App</h3>

          <div className="space-y-3 text-gray-400 text-sm">
            <p>Save $3 with App New User Only</p>
            {/* <p>New User Only</p> */}

            {/* QR + Store Buttons */}
            {/* QR + Store Buttons */}
            <div className="flex items-center gap-3">
              {/* QR Code */}
              <img
                src="/assets/QrCode (2).png"
                alt="QR Code"
                className="w-[90px] h-[90px] border border-gray-600 p-1 object-contain"
              />

              <div className="grid grid-rows-2 gap-1 w-[120px] h-[90px]">
                <img
                  src="/assets/googleStore.png"
                  alt="Google Play"
                  className="w-full h-full object-contain"
                />

                <img
                  src="/assets/appStore.png"
                  alt="App Store"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-5">
        <p className="text-center text-gray-500 text-sm">
          © Copyright Rimel 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
