import { CalendarIcon, StarIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { Film } from '~/types';

type FilmGridProps = {
  films: Film[];
};

export function FilmGrid({ films }: FilmGridProps) {
  return (
    <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(150px,1fr))]">
      {films.map((film: Film) => {
        return (
          <Link key={film.id} href={film.url}>
            <div className="relative mb-2 rounded-lg overflow-hidden aspect-[3/4]">
              <Image
                src={film.image}
                alt={film.title}
                className="object-cover transition ease-in hover:scale-110"
                placeholder="blur"
                blurDataURL={film.image}
                fill
              />
            </div>
            <h3 className="mb-1 text-slate-300 text-sm">{film.title}</h3>
            <div className="flex items-center space-x-3 text-xs text-slate-500">
              <p className="flex items-center space-x-1">
                <StarIcon className="w-3 h-3" />
                <span>{film.rt_score}</span>
              </p>
              <p className="flex items-center space-x-1">
                <CalendarIcon className="w-3 h-3" />
                <span>{film.release_date}</span>
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
