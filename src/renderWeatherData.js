import React, { useState } from "react";
import axios from "axios";
import WeatherInformation from "./weatherInformation";

export default function RenderWeatherData() {
  const api = {
    key: "6878ef294911f8722c9e634773bf9a68",
  };
  const [input, setInput] = useState("London");
  const [loading, setLoading] = useState(false);

  const fetchWeatherData = () => {
    setLoading(true);
    setInput("");
    axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${api.key}`,
    })
      .then((res) => {
        setData(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const [data, setData] = useState(fetchWeatherData);

  const weather = data?.weather;
  const weatherIcon = weather?.map(({ icon }) => icon);
  const currentWeather = weather?.map(({ main }) => main);
  const iconUrl = `https://openweathermap.org/img/wn/${
    weatherIcon || "04d"
  }@4x.png`;

  return (
    <WeatherInformation
      onChangeText={(text) => setInput(text)}
      onSubmitEditing={fetchWeatherData}
      value={input}
      data={data}
      iconUrl={iconUrl}
      loading={loading}
      name={data?.name}
      currentWeather={currentWeather}
      initials={data?.sys?.country}
      humidity={data?.main?.humidity}
      currentTemperature={Math.round(data?.main?.temp)}
      minTemperature={Math.round(data?.main?.temp_min)}
      maxTemperature={Math.round(data?.main?.temp_max)}
    />
  );
}
