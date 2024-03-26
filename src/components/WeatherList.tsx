import WeatherCard from "./WeatherCard";

export default function WeatherList({ weatherJson }: { weatherJson: WeatherJsonResponse }) {
  const dailyWeatherArray = weatherJson.weatherInfo.daily;
  return (
    weatherJson.success ?
      <div className="flex flex-row justify-center my-10">
        {Array.from(dailyWeatherArray).map((dailyWeatherInfo: DailyWeatherInfo) => <WeatherCard key={dailyWeatherInfo.dt} weatherInfo={dailyWeatherInfo} />)}
      </div>
      : <div>Unable to obtain weather information</div>
  );
}
