import { Link } from "@nextui-org/link";
import React from "react";

import { Navbar } from "@/components/navbar";
import { InstagramIcon, LinkedinIcon } from "@/components/icons.tsx";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative isolate overflow-hidden">
      <svg
        aria-hidden="true"
        className="fixed left-1/2 bottom-1/2 -z-20 h-[64rem] w-[64rem] translate-y-1/2 [mask-image:radial-gradient(closest-side,black,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        viewBox="0 0 1024 1024"
      >
        <circle
          cx={512}
          cy={512}
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fillOpacity="0.7"
          r={512}
        />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#70E000" />
            <stop offset={1} stopColor="#004B23" />
          </radialGradient>
        </defs>
      </svg>
      <div className="relative flex flex-col">
        <Navbar />
        <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
          {children}
        </main>
        <footer className="w-full flex gap-1 items-center justify-center py-3">
          <Link isExternal href="https://www.instagram.com/marison.jpeg">
            <InstagramIcon className="text-default-500 mx-1" />
          </Link>
          <Link isExternal href="https://www.linkedin.com/in/marison-sol">
            <LinkedinIcon className="text-default-500 mx-1" />
          </Link>
        </footer>
      </div>
      <svg
        aria-hidden="true"
        className="fixed right-1/2 top-1/2 -z-20 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,black,transparent)] sm:right-full sm:-mr-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        viewBox="0 0 1024 1024"
      >
        <circle
          cx={512}
          cy={512}
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fillOpacity="0.7"
          r={512}
        />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#70E000" />
            <stop offset={1} stopColor="#004B23" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
