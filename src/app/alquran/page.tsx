"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";

interface Surah {
  number: number;
  name_simple: string;
  name_arabic: string;
  verses_count: number;
  revelation_place: string;
}

export default function Quran() {
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSurahs() {
      try {
        const response = await axios.get(
          "https://api.quran.com/api/v4/chapters"
        );
        console.log("Data Surahs:", response.data.chapters); // Log data
        setSurahs(response.data.chapters);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching surahs:", error);
        setLoading(false);
      }
    }
    fetchSurahs();
  }, []);

  return (
    <>
      <Head>
        <title>Al-Qur'an</title>
      </Head>
      <main className="min-h-screen p-4 bg-gray-100">
        <h1 className="text-3xl font-bold text-center mb-6">
          Daftar Surah Al-Qur'an
        </h1>
        {loading ? (
          <p className="text-center">Memuat...</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {surahs.map((surah, index) => (
              <li
                key={`${index}-${surah.name_simple}`}
                className="p-4 bg-white rounded shadow hover:bg-gray-50 transition"
              >
                <h2 className="text-xl font-semibold">
                  {surah.number}. {surah.name_arabic} | {surah.name_simple}
                </h2>
                <p className="text-sm text-gray-600">
                  {surah.revelation_place} -{" "}
                  {surah.verses_count} Ayat
                </p>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
