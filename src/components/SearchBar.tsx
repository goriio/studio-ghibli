import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { InputHTMLAttributes } from 'react';

export function SearchBar({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative">
      <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" />
      <input
        type="text"
        className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-800 bg-transparent text-sm"
        placeholder="Type to search"
        aria-label="Search"
        {...props}
      />
    </div>
  );
}
