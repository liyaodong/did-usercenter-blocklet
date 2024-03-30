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
    <>
      <header className="bg-base-200 p-4">
        <Container className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">{window.blocklet?.appName}</h1>
          <menu>
            {menus.map((menu) => (
              <a key={menu.link} href={menu.link} className="mx-2 btn btn-primary capitalize">
                {menu.label}
              </a>
            ))}
          </menu>
        </Container>
      </header>
      <div>{children}</div>
      <footer>footer</footer>
    </>
  );
};
