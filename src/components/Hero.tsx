import { CalendarIcon, StarIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { Film } from '~/types';

export function Hero({ film }: { film: Film }) {
  return (
    <div className="relative overflow-hidden">
      <Link href={film.url}>
        <div className="relative w-full h-40 rounded-lg overflow-hidden md:h-52">
          <Image
            src={film.movie_banner}
            alt={film.title}
            className="object-cover transition ease-in hover:scale-110"
            fill
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-900"></div>
        <div className="absolute left-4 bottom-4 text-slate-100 md:left-8">
          <h4 className="font-bold text-lg">
            {film.title} ({film.original_title})
          </h4>
          <div className="flex items-center space-x-3 mb-2 text-sm text-slate-400">
            <p className="flex items-center space-x-1">
              <StarIcon className="w-3 h-3" />
              <span>{film.rt_score}</span>
            </p>
            <p className="flex items-center space-x-1">
              <CalendarIcon className="w-3 h-3" />
              <span>{film.release_date}</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
