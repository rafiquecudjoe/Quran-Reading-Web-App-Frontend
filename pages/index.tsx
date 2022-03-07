import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ChapterCard from '../components/ChapterCard'



interface Chapter {   
  id: number;
  revelation_place: string;
  revelation_order: 5;
  bismillah_pre: false,
  name_simple: string,
  name_complex: string,
  name_arabic:string,
  verses_count: number,
  pages: Array<number>;
  translated_name: {
  language_name: string,
  name: string
        }
   
}

interface HomeProps {
    quranChapters: Array<Chapter>;
   
}

const Home = ({quranChapters }:HomeProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Holy Quran App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            HOLY QURAN WEB APP!
          </a>
        </h1>

        <h2>
          Chapters
        </h2>


        <div className="mt-2 flex max-w-7xl flex-wrap items-center justify-around sm:w-full">

     
          {quranChapters.map((chapter, index) => (
            <ChapterCard key={index} surah={chapter.name_simple} englishName={chapter.translated_name.name }/>
          ))}

        </div>
      </main>
    </div>
  )
}

export default Home


export async function getStaticProps() {
  const Chapters = await axios.get("https://holyquranbackend.herokuapp.com/quran/ListChapters");

  const data = Chapters?.data?.data?.chapters

  return {

    props: {
      quranChapters: data,
    },
  };
}