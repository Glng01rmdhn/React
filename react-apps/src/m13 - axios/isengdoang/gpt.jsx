import React, { useState } from "react";
import axios from "axios";

function CobaAxios() {
  const [city, setCity] = useState("London"); // Default kota
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    setLoading(true);
    try {
      // 1️⃣ Ambil koordinat dari nama kota
      const geoResponse = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );

      if (!geoResponse.data.results) {
        alert("Kota tidak ditemukan!");
        setLoading(false);
        return;
      }

      const { latitude, longitude } = geoResponse.data.results[0];

      // 2️⃣ Ambil data cuaca berdasarkan koordinat
      const weatherResponse = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );

      setWeather(weatherResponse.data.current_weather);
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      alert("Gagal mengambil data cuaca.");
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>🌍 Cek Cuaca</h2>

      {/* Input Nama Kota */}
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Masukkan nama kota..."
      />
      <button onClick={getWeather} disabled={loading}>
        {loading ? "Memuat..." : "Cek Cuaca"}
      </button>

      {/* Menampilkan Data Cuaca */}
      {weather && (
        <div>
          <h3>Cuaca di {city}</h3>
          <p>🌡️ Suhu: {weather.temperature}°C</p>
          <p>💨 Kecepatan Angin: {weather.windspeed} km/jam</p>
        </div>
      )}
    </div>
  );
}

export default CobaAxios;