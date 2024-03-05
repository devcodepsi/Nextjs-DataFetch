/** work flow
 * 1. 선택된 메뉴의 path값에 따라 메뉴 활성화
 **/

'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
  const path = usePathname();

  const [activeMenu, setActiveMenu] = useState(0);
  const changePath = () => {
    switch (path) {
      case '/write':
        setActiveMenu(3);
        break;
      case '/sub2':
        setActiveMenu(2);
        break;
      case '/sub1':
        setActiveMenu(1);
        break;
      default:
        setActiveMenu(0);
    }
  };
  useEffect(() => {
    changePath();
  }, [path]);

  const hederMenuData = [
    { id: 0, link: '/', title: 'main' },
    { id: 1, link: '/sub1', title: 'sub1' },
    { id: 2, link: '/sub2', title: 'sub2' },
    { id: 3, link: '/write', title: 'write' },
  ];

  return (
    <header className="flex border-b border-black p-3">
      <h1 className="w-[100px]">logo</h1>
      <nav className="grow flex gap-3">
        {hederMenuData.map((item) => (
          <HeaderMenuItem key={item.id} item={item} activeMenu={activeMenu} />
        ))}
      </nav>
    </header>
  );
};
export default Header;

const HeaderMenuItem = ({ item, activeMenu }: any) => {
  return (
    <Link
      href={item.link}
      className={activeMenu === item.id ? 'text-blue-500' : 'text-zinc-500'}
    >
      {item.title}
    </Link>
  );
};
