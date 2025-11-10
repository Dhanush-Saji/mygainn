'use client';
import { useState } from "react";
import { cn } from "@/lib/utils";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import NavbarDataList from "./NavbarList1.json"
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

const NavbarTabs = () => {
  const [active, setActive] = useState(null);
    const handleScroll = (target) => {
    gsap.to(window, { duration: 0.5, scrollTo: target });
  };
  return (
    <div className={cn(" mx-auto")} >
      <Menu setActive={setActive}>
        {
          NavbarDataList?.map((item, index) => {
            return <MenuItem  key={index} setActive={setActive} active={active} item={item?.title}>
              {
                item?.type == 'grid' ?
                  <div className="text-sm grid grid-cols-2 gap-10 p-4">
                    {
                      item?.subList?.map((subItem, sindex) => (
                        <ProductItem title={subItem?.title} description={subItem?.des} src={subItem?.image} key={sindex} href={subItem?.url} />
                      ))
                    }
                  </div> :
                  <div className="flex flex-col space-y-4 text-sm">
                    {
                      item?.subList?.map((subItem, sindex) => (
                        <HoveredLink key={sindex} href={subItem?.url}>{subItem?.title}</HoveredLink>
                      ))
                    }
                  </div>
              }
            </MenuItem>
          })
        }
      </Menu>
    </div>
  );
};

export default NavbarTabs;