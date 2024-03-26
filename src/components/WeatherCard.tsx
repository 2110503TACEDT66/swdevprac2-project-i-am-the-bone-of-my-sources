import Image from "next/image";

export default function WeatherCard({ weatherInfo }: { weatherInfo: DailyWeatherInfo }) {

  const weatherField = weatherInfo.weather.at(0);
  const msDt = weatherInfo.dt * 1000;

  return (
    <div className="flex flex-col w-1/3 min-h-80 h-fit mx-2 content-center border rounded-xl bg-white">
      <div className="grid place-content-center">
        <Image className="text-center" src={`https://openweathermap.org/img/wn/${weatherField?.icon}@2x.png`} alt={weatherField?.main + "  picture"} width={80} height={80} />
      </div>
      <div>
        <h1 className="font-bold">{weatherField?.main}</h1>
        <h3 className="font-extralight">{weatherField?.description}</h3>
      </div>
      <div className="mt-4 mb-6">
        <h1 className="font-bold">Date : {new Date(msDt).toLocaleDateString()}</h1>
        <h2 className="font-semibold">{new Date(msDt).toLocaleTimeString()}</h2>
        {weatherInfo.summary ? <p className="mt-3">{weatherInfo.summary}</p> : null}
      </div>
    </div>
  );
}
