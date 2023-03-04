import { ReactNode } from 'react';

type SectionProps = {
  title: string;
  children: ReactNode;
};

export function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-6">
      <h2 className="mb-4 font-bold">{title}</h2>
      {children}
    </section>
  );
}
