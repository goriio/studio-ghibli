import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Film } from '~/types';
import { SideBar } from '~/components/Sidebar';
import { FilmGrid } from '~/components/FilmGrid';
import { Section } from '~/components/Section';
import { Hero } from '~/components/Hero';
import { FilmList } from '~/components/FilmList';
import { Button } from '~/components/Button';
import axios from '~/lib/axios';
import { useRouter } from 'next/router';

type HomeProps = {
  films: Film[];
};

export default function Home({
  films,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const featuredFilm = films[1];

  return (
    <>
      <Section title="Featured">
        <Hero film={featuredFilm} />
      </Section>
      <Section title="Browse films">
        <FilmGrid films={films} />
      </Section>
      <SideBar title="Latest releases">
        <FilmList
          films={[...films]
            .sort((a, b) => Number(b.release_date) - Number(a.release_date))
            .slice(0, 3)}
        />
        <Button
          onClick={() => router.push('/latest')}
          className="mt-4"
          fullWidth
        >
          See more
        </Button>
      </SideBar>
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const response = await axios.get('/films');

  return {
    props: {
      films: response.data,
    },
  };
};
