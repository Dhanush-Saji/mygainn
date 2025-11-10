
import React from 'react'
import './NavItem.css'
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const NavItem = ({ menuItems = [] }) => {
  return (
    <nav className='topbarLists flex'>
      {
        menuItems?.length > 0 && (
          <ul className='menuHeadings flex gap-4 m-0'>
            {
              menuItems?.map((menus, mi_index) => {
                return <li key={mi_index} className='relative'>
                  <Link className={'menuHeadingsLink flex items-center'} href={menus.url ? menus.url : '#'}>
                    {menus.title} {menus?.submenus?.length > 0 && <ChevronDown className='scale-70' />}
                  </Link>
                  {menus?.submenus?.length > 0 && <ul className='absolute bg-white z-2' >
                    {
                      menus?.submenus?.map((submenuData, su_index) => {
                        return (
                          <React.Fragment key={su_index}>
                            <li key={su_index}>
                              <Link className={'subMenuLink'} href={submenuData.url}>
                                {submenuData.title}
                              </Link>
                            </li>
                          </React.Fragment>
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