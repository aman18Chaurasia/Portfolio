
import React from "react";
import { Link, useLocation } from "react-router-dom";
import MagneticElement from "./MagneticElements";
import { Home, Code, Star, Calendar, Mail } from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Home, color: "from-cyan-400 to-purple-400" },
  { name: "About", path: "/about", icon: Code, color: "from-purple-400 to-pink-400" },
  { name: "Portfolio", path: "/portfolio", icon: Star, color: "from-yellow-400 to-cyan-400" },
  { name: "Timeline", path: "/timeline", icon: Calendar, color: "from-blue-400 to-pink-400" },
  { name: "Contact", path: "/contact", icon: Mail, color: "from-pink-400 to-purple-400" },
];

const Navigation = () => {
  const location = useLocation();
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[99] flex gap-7 md:gap-10">
      {navItems.map((item) => (
        <MagneticElement strength={0.5} key={item.name}>
          <Link to={item.path} tabIndex={0} aria-label={item.name}>
            <div
              className={`
                w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-inner
                bg-gradient-to-br ${item.color} bg-opacity-30 hover-lift group border-2 border-white/20
                hover:border-white/50 transition-all duration-300
                ${location.pathname === item.path ? "ring-4 ring-cyan-400/40 scale-110" : "opacity-80"}
              `}
            >
              <item.icon className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-cyan-300 transition-colors duration-300" />
            </div>
            <span
              className="
                block mt-1 text-xs font-bold text-center text-gradient transition-all duration-300
                group-hover:scale-110
              "
            >
              {item.name}
            </span>
          </Link>
        </MagneticElement>
      ))}
    </nav>
  );
};

export default Navigation;
