import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Film } from '~/types';
import { SideBar } from '~/components/Sidebar';
import { FilmGrid } from '~/components/FilmGrid';
import { Section } from '~/components/Section';
import { FilmList } from '~/components/FilmList';
import axios from '~/lib/axios';

type LatestProps = {
  films: Film[];
};

export default function Latest({
  films,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Section title="Latest films">
        <FilmGrid
          films={[...films].sort(
            (a, b) => Number(b.release_date) - Number(a.release_date)
          )}
        />
      </Section>
      <SideBar title="More films">
        <FilmList films={films} />
      </SideBar>
    </>
  );
}

export const getStaticProps: GetStaticProps<LatestProps> = async () => {
  const response = await axios.get('/films');

  return {
    props: {
      films: response.data,
    },
  };
};
