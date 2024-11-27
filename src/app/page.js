import { ACTION_HEADER } from "next/dist/client/components/app-router-headers"
import AnimeList from "@/components/AnimeList"
import Link from "next/link"

const Home = async() => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topAnime = await response.json()

  return (
    <div>

      <div className="flex justify-between p-4 items-center">
        <h1 className="text-2xl font-bold">Paling Populer</h1>
        <Link href="/populer" className="md:text-xl text-md underline hover:text-indigo-500 transition-all">Lihat Semua..</Link>
      </div>
      <AnimeList api={topAnime}/>
    </div>
  )
}

export default Home