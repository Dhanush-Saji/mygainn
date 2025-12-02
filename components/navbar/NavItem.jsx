
import React from 'react'
import './NavItem.css'
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const NavItem = ({ menuItems = [] }) => {
  return (
    <nav className='topbarLists flex'>
      {
        menuItems?.length > 0 && (
          <ul className='flex gap-4 m-0' role='menubar' tabIndex={1}>
            {
              menuItems?.map((menus, mi_index) => {
                return <li key={mi_index} className='relative mainLinks' role='none'>
                  <Link role='menuitem' className={'flex items-center hover:text-(--corange) font-semibold'} href={menus.url ? menus.url : '#'}>
                    {menus.title} {menus?.submenus?.length > 0 && <ChevronDown className='scale-70' />}
                  </Link>
                  {menus?.submenus?.length > 0 && <ul className='subMenuLinks absolute bg-white z-2 min-w-[10rem] w-full shadow-lg p-3 rounded-lg flex flex-col gap-2' >
                    {
                      menus?.submenus?.map((submenuData, su_index) => {
                        return (
                          <li key={su_index} className='subSubMainLinks w-full'>
                            <Link className={' hover:text-(--corange) font-semibold flex whitespace-nowrap'} href={submenuData.url}>
                              {submenuData.title}
                            </Link>
                            {submenuData?.submenus?.length > 0 && <ul className='subSubMenuLinks translate-x-30 top-0 absolute bg-white z-2 min-w-[10rem] w-fit shadow-lg p-3 rounded-lg flex flex-col gap-2' >
                              {
                                submenuData?.submenus?.map((subSubMenuData, su_index) => {
                                  return (
                                    <li key={su_index}>
                                      <Link className={' hover:text-(--corange) font-semibold whitespace-nowrap'} href={subSubMenuData.url}>
                                        {subSubMenuData.title}
                                      </Link>
                                    </li>
                                  )
                                })
                              }
                            </ul>}
                          </li>
                        )
                      })
                    }
                  </ul>}
                </li>
              })
            }
          </ul>
        )
      }
    </nav>
  )
}

export default NavItem