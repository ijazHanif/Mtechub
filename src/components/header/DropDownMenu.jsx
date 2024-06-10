import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Dropdown } from "flowbite";
import { Link ,NavLink } from "react-router-dom";

const DropDownMenu= () => {
  return (
    <div className="flex justify-center">
      <FlyoutLink href="#" FlyoutContent={PricingContent}>
        <li className="text-black font-medium text-[15px] hover:text-blue-400 
        hover:decoration-2 hover:underline hover:underline-offset-8 transition 
        duration-500 ease-in-out">Our Services</li>
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-white">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
        //   className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <ul className="mb-3 space-y-10 hover:text-gray-400">
       <NavLink to='/mobile'><li className="cursor-pointer font-medium text-[15px] hover:text-blue-400 hover:decoration-2 transition 
        duration-500 ease-in-out py-1">Mobile App Development</li></NavLink>
       <NavLink to='/web'> <li className="cursor-pointer font-medium text-[15px] hover:text-blue-400 hover:decoration-2 transition
         duration-500 ease-in-out py-1">Web Development</li></NavLink>
       <NavLink to='/cloud'> <li className="cursor-pointer font-medium text-[15px] hover:text-blue-400 hover:decoration-2 transition 
        duration-500 ease-in-out py-1">Cloud Services</li></NavLink>
       <NavLink to='uiux'> <li className="cursor-pointer font-medium text-[15px] hover:text-blue-400 hover:decoration-2 transition
         duration-500 ease-in-out py-1">UI/UX Services</li></NavLink>
       <NavLink to='digital'> <li className="cursor-pointer font-medium text-[15px] hover:text-blue-400 hover:decoration-2 transition
         duration-500 ease-in-out py-1">
          Digital Services
        </li></NavLink>
      </ul>
    </div>
  );
};

export default DropDownMenu;
