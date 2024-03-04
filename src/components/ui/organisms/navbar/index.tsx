"use client";
import React, { useState } from "react";
import { useHover } from "@uidotdev/usehooks";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/organisms/navbar-menu";
import { cn } from "@/utils/cn";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed top-10 flex justify-center w-full mx-auto z-50",
        className,
      )}
    >
      <Menu active={active} setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Life">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/gallery">Gallery</HoveredLink>
            <HoveredLink href="/blog/web">Blog - Web</HoveredLink>
            <HoveredLink href="/blog/other">Blog - Other</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-10 py-3 px-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about/me">Me</HoveredLink>
            <HoveredLink href="/about/career">Career</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
