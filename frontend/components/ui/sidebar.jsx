// components/ui/sidebar.jsx
import { cn } from "/lib/utils";
import React, { useState } from "react";

export const Sidebar = ({ children, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        "h-full bg-neutral-900 border-r border-neutral-800 transition-all duration-300",
        isOpen ? "w-[300px]" : "w-[80px]",
        className
      )}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="p-4">
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { isOpen })
        )}
      </div>
    </div>
  );
};

export const SidebarLink = ({ link, isOpen, className }) => {
  return (
    <a
      href={link.href}
      className={cn(
        "flex items-center gap-4 px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-all duration-200",
        className
      )}
    >
      <div className="w-6 h-6 shrink-0">
        {React.cloneElement(link.icon, {
          className: "w-6 h-6",
          strokeWidth: 1.5,
        })}
      </div>
      <span
        className={cn(
          "transition-all duration-300 whitespace-nowrap",
          isOpen ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"
        )}
      >
        {link.label}
      </span>
    </a>
  );
};
