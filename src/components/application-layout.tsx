import React from 'react';
import { Container } from './container.tsx';

const menus = [
  {
    label: 'home',
    link: '/',
  },
  {
    label: 'about',
    link: '/about',
  },
];

export const ApplicationLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-base-200 p-4">
        <Container className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={window.blocklet?.appLogo} alt="logo" className="w-8 h-8 mr-2" />
            <h1 className="text-lg hidden sm:block font-semibold">{window.blocklet?.appName}</h1>
          </div>
          <menu>
            {menus.map((menu) => (
              <a key={menu.link} href={menu.link} className="mx-2 btn btn-primary capitalize">
                {menu.label}
              </a>
            ))}
          </menu>
        </Container>
      </header>
      <main className="grow">{children}</main>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <Container className="py-4">
            <p>Copyright © 2024 - All right reserved by XXX Ltd</p>
          </Container>
        </aside>
      </footer>
    </div>
  );
};
