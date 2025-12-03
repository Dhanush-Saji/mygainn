'use client';
import { useEffect, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import './Navbar.css'
import Link from "next/link";
import Image from "next/image";
import { BadgePercent, CirclePower, CircleUserRound, ClipboardList, MapPinHouse, ShoppingCart, User, UserRoundPen } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { ScrollProgress } from "../ui/scroll-progress";
import NavbarTabs from "./NavbarTabs";
import NavItem from "./NavItem";
import NavbarDataList from "./NavbarList.json"
import { ShinyButton } from "../ui/shiny-button";

const WebNavbar = () => {
   const router = useRouter()
  const [scrollVal, setscrollVal] = useState(0)
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    setscrollVal(current)
  });

  return (
    <>
      <header className={`fixed transition-all ease-in-out duration-500 px-4 py-3 ${scrollVal > 0.03 ? 'w-[85%] glassMorphism border-black/5' : 'w-[95%] border-transparent'} hidden md:flex items-center justify-between z-[99] border rounded-full top-3 left-[50%] translate-x-[-50%]`}>
        <Link aria-label="Gainn Fintech Logo" href={"/"} >
          <Image src={'/images/logo.png'} alt="Gainn Fintech Logo" width={100} height={100} />
        </Link>
        <div className='flex gap-3 items-center'>
          <NavItem menuItems={NavbarDataList || []} />
        </div>
        {/* <ShinyButton >
          <Link href={'https://gkyc.mygainn.com/gainnfintech'} className="bg-[var(--corange)] text-white p-2 rounded-full text-sm font-semibold">Open Demat Account</Link>
        </ShinyButton> */}

        <Link href={'https://gkyc.mygainn.com/gainnfintech'}>
        <ShinyButton className="bg-[var(--corange)] text-white text-sm">
          Open Demat Account
        </ShinyButton>
        </Link>
        


        <div className="w-[96%] absolute rounded-full overflow-hidden h-[1rem] left-1/2 -translate-x-1/2 -bottom-[23px] py-[1.5rem] pointer-events-none">
          <ScrollProgress />
        </div>
      </header>
    </>
  );
};

export default WebNavbar;