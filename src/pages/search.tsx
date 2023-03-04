import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Film } from '~/types';
import { SideBar } from '~/components/Sidebar';
import { FilmGrid } from '~/components/FilmGrid';
import { Section } from '~/components/Section';
import { FilmList } from '~/components/FilmList';
import axios from '~/lib/axios';
import { SearchBar } from '~/components/SearchBar';
import { useState } from 'react';

type SearchProps = {
  films: Film[];
};

export default function Search({
  films,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [search, setSearch] = useState('');

  return (
    <>
      <Section title="Search films">
        <div className="mb-4">
          <SearchBar
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search for films"
          />
        </div>
        <FilmGrid
          films={films.filter((film) =>
            film.title.toLowerCase().includes(search.toLowerCase())
          )}
        />
      </Section>
      <SideBar title="More films">
        <FilmList films={films} />
      </SideBar>
    </>
  );
}

export const getStaticProps: GetStaticProps<SearchProps> = async () => {
  const response = await axios.get('/films');

  return {
    props: {
      films: response.data,
    },
  };
};
