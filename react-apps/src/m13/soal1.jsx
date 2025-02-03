import React, { useEffect, useState } from "react";
import axios from "axios";

function CobaAxios() {
  const [weather, setWeather] = useState(null); // State untuk menyimpan data cuaca

  useEffect(() => {
    axios
      .get("https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true")
      .then((response) => {
        setWeather(response.data.current_weather); // Menyimpan data cuaca ke state
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat mengambil data cuaca:", error);
      });
  }, []); // useEffect berjalan hanya sekali saat komponen dimuat

  return (
    <div>
      <h2>Cuaca di London</h2>
      {weather ? (
        <div>
          <p>Suhu: {weather.temperature}°C</p>
          <p>Kecepatan Angin: {weather.windspeed} km/jam</p>
        </div>
      ) : (
        <p>Memuat data cuaca...</p>
      )}
    </div>
  );
}

export default CobaAxios;
