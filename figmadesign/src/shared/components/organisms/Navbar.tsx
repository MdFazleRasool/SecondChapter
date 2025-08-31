import React from "react";
import { ShoppingCart, User, Search } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-yellow-500 tracking-wide">
          LANDAS
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-8 font-semibold text-sm">
          <a href="#" className="hover:text-yellow-400">SS</a>
          <a href="#" className="hover:text-yellow-400">FW</a>
          <a href="#" className="hover:text-yellow-400">PANTS</a>
          <a href="#" className="hover:text-yellow-400">T-SHIRT</a>
          <a href="#" className="hover:text-yellow-400">SALE</a>
          <a href="#" className="hover:text-yellow-400">COLLECTION</a>
          <a href="#" className="hover:text-yellow-400">COMMUNITY</a>
        </div>

        {/* Icons + Logout */}
        <div className="flex items-center space-x-5">
          <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-yellow-400" />
          <User className="w-5 h-5 cursor-pointer hover:text-yellow-400" />
          <Search className="w-5 h-5 cursor-pointer hover:text-yellow-400" />
          <button className="text-sm hover:text-yellow-400">로그아웃</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
