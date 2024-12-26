import Head from "next/head";
import PrayerTimes from "@/components/PrayerTimes";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>YiLD Islamic Centre</title>
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-900">
          YiLD Islamic Centre
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Sebuah website yang menyediakan informasi lengkap untuk jadwal sholat,
          arah kiblat, dan Al-Qur'an. Di buat oleh tim{" "}
          <Link
            href={"https://yayasanisyfalanadhuafa.org"}
            className="text-blue-400 hover:underline"
          >
            YiLD
          </Link>
        </p>
        <div className="flex mt-8 ">
          <ul className="flex mr-4">
            <li className="mr-4">
              <Link
                href="/alquran"
                className=" bg-blue-500 py-6 px-8 rounded-xl hover:bg-blue-400 cursor-pointer font-semibold text-base md:text-lg lg:text-xl"
              >
                Al Quran
              </Link>
            </li>{" "}
            <li className="mr-4">
              <Link
                href="/adzhan"
                className="font-semibold text-base md:text-lg lg:text-xl bg-blue-500 py-6 px-8 rounded-xl hover:bg-blue-400 cursor-pointer"
              >
                Jadwal Adzhan
              </Link>
            </li>
            <li className="mr-4">
              <Link
                href="/kiblat"
                className="font-semibold text-base md:text-lg lg:text-xl bg-blue-500 py-6 px-8 rounded-xl hover:bg-blue-400 cursor-pointer"
              >
                Arah Kiblat
              </Link>
            </li>
          </ul>
        </div>
        <PrayerTimes />
      </main>
    </>
  );
}
