import { CalendarIcon, StarIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { Film } from '~/types';

type FilmList = {
  films: Film[];
};

export function FilmList({ films }: FilmList) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {films.map((film: Film) => {
        return (
          <Link key={film.id} href={film.url}>
            <div className="grid grid-cols-2 gap-4">
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
              <div>
                <h3 className="mb-1 text-slate-300 text-sm">{film.title}</h3>
                <div className="text-xs text-slate-500 space-y-1">
                  <p>{film.director}</p>
                  <div className="flex items-center space-x-3">
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
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
