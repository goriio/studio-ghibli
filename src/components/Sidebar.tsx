import { CalendarIcon, StarIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { Film } from '~/types';
import { Container } from './Container';

type SideBarProps = {
  title: string;
  children: ReactNode;
};

export function SideBar({ title, children }: SideBarProps) {
  return (
    <section className="bg-slate-900 z-20 hidden lg:block lg:fixed lg:w-72 lg:top-0 lg:right-0 lg:h-screen lg:border-l lg:border-l-slate-800 lg:overflow-y-auto">
      <Container>
        <h2 className="mb-4 font-bold">{title}</h2>

        {children}
      </Container>
    </section>
  );
}
