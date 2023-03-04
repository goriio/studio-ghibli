import { ReactNode } from 'react';
import { Container } from './Container';
import { Header } from './Header';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen lg:ml-72 lg:mr-72">
        <Container>{children}</Container>
      </main>
    </>
  );
}
