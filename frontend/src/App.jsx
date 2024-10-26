import React from "react";
import { BackgroundLinesDemo } from "./components/Lines";
import { Sidebar, SidebarLink } from "../components/ui/sidebar";
import {
  IconHome,
  IconPhoto,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";

export default function App() {
  const links = [
    {
      label: "Home",
      href: "#",
      icon: <IconHome />,
    },
    {
      label: "Gallery",
      href: "#",
      icon: <IconPhoto />,
    },
    {
      label: "Profile",
      href: "#",
      icon: <IconUser />,
    },
    {
      label: "Settings",
      href: "#",
      icon: <IconSettings />,
    },
  ];

  return (
    <div className="flex h-screen bg-black">
      <Sidebar>
        <div className="flex flex-col gap-6">
          {links.map((link, idx) => (
            <SidebarLink key={idx} link={link} />
          ))}
        </div>
      </Sidebar>

      <div className="flex-1">
        <BackgroundLinesDemo />
      </div>
    </div>
  );
}
