import { ReactNode } from 'react';

export function Container({ children }: { children: ReactNode }) {
  return <div className="container mx-auto p-4 lg:p-8">{children}</div>;
}
