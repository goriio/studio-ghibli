import { CalendarIcon, ClockIcon, StarIcon } from '@heroicons/react/24/outline';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { FilmList } from '~/components/FilmList';
import { SideBar } from '~/components/Sidebar';
import axios from '~/lib/axios';
import { Film } from '~/types';

type FilmsProps = {
  film: Film;
  films: Film[];
};

export default function Films({
  film,
  films,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{film.title} | Studio Ghibli</title>
      </Head>
      <div className="relative w-full mb-2 rounded-lg overflow-hidden aspect-video">
        <Image
          src={film.movie_banner}
          alt={film.title}
          className="object-cover"
          placeholder="blur"
          blurDataURL={film.image}
          fill
        />
      </div>
      <article>
        <h1 className="mb-4 font-bold text-xl text-slate-200">
          {film.title} ({film.original_title})
        </h1>
        <div className="mb-4 flex items-center space-x-3 text-sm">
          {[
            {
              Icon: StarIcon,
              text: film.rt_score,
            },
            {
              Icon: CalendarIcon,
              text: film.release_date,
            },
            {
              Icon: ClockIcon,
              text: `${film.running_time} mins`,
            },
          ].map(({ Icon, text }) => {
            return (
              <p key={text} className="flex items-center space-x-1">
                <Icon className="w-3 h-3" />
                <span>{text}</span>
              </p>
            );
          })}
        </div>
        <p>{film.description}</p>
      </article>
      <SideBar title="More films">
        <FilmList films={films} />
      </SideBar>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios.get<Film[]>('/films');

  return {
    paths: response.data.map((film) => {
      return {
        params: {
          id: film.id,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<FilmsProps> = async (context) => {
  const id = context.params?.id;

  const [film, films] = await Promise.all([
    axios.get('/films/' + id),
    axios.get('/films'),
  ]);

  return {
    props: { film: film.data, films: films.data },
  };
};
