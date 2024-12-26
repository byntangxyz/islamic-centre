"use client";
import axios from "axios";
import { useEffect, useState } from "react";

interface PrayerTimes {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

const prayerTranslations: { [key: string]: string } = {
  Fajr: "Subuh",
  Dhuhr: "Dzuhur",
  Asr: "Ashar",
  Maghrib: "Maghrib",
  Isha: "Isya",
};

export default function PrayerTimes() {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimes | null>(null);

  useEffect(() => {
    async function fetchPrayerTimes() {
      try {
        const response = await axios.get(
          "https://api.aladhan.com/v1/timingsByCity",
          {
            params: {
              city: "Jakarta",
              country: "Indonesia",
              method: 2,
            },
          }
        );
        const timings = response.data.data.timings;
        // Filter hanya jadwal utama
        const filteredTimings = {
          Fajr: timings.Fajr,
          Dhuhr: timings.Dhuhr,
          Asr: timings.Asr,
          Maghrib: timings.Maghrib,
          Isha: timings.Isha,
        };
        setPrayerTimes(filteredTimings);
      } catch (error) {
        console.error("Error fetching prayer times:", error);
      }
    }
    fetchPrayerTimes();
  }, []);

  return (
    <div className="mt-12 p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-2">Jadwal Adzhan</h2>
      {prayerTimes ? (
        <ul>
          {Object.entries(prayerTimes).map(([key, time]) => (
            <li key={key} className="flex justify-between py-1">
              <span className="font-medium">{prayerTranslations[key]}</span>
              <span>{time}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Memuat...</p>
      )}
    </div>
  );
}
