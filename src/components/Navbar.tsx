"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem
            item="Home"
            setActive={setActive}
            active={active}
          ></MenuItem>
        </Link>
        <MenuItem item="Our Courses" setActive={setActive} active={active}>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/besic-music-theory">Basic Music Theory</HoveredLink>
            <HoveredLink href="/advanced-composition">Advanced Composition</HoveredLink>
            <HoveredLink href="/song-writing">Song Writing</HoveredLink>
            <HoveredLink href="/music-production">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem item="Contact Us" setActive={setActive} active={active}></MenuItem>
      </Menu>
    </div>
  );
}
