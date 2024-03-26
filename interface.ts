interface CampgroundItem {
  _id: string,
  name: string,
  address: string,
  picture: string,
  location: string,
  tel: string,
  __v: number,
  id: string,
}

interface CampgroundJson {
  success: boolean,
  count: number,
  pagination: Object,
  data: CampgroundItem[]
}

interface BookingItem {
  _id: string,
  user: string,
  campground: {
    _id: string,
    name: string,
    picture: string,
    tel: string,
    id: string,
  },
  bookDate: Date,
  createdAt: Date,
  __v: number
}

interface BookingItemResponse {
  success: boolean,
  data: BookingItem
}

interface BookingItemsResponse {
  success: boolean,
  count: number,
  data: BookingItem[]
}

interface WeatherJsonResponse {
  success: boolean,
  campground: CampgroundItem,
  weatherInfo: {
    lat: any,
    lon: any,
    timezone: string,
    timezone_offset: number,
    daily: DailyWeatherInfo[]
  }
}

interface DailyWeatherInfo {
  dt: number,
  sunrise: number,
  sunset: number,
  moorinse: number,
  moonset: number,
  moon_phase: any,
  summary?: string,
  temp: any,
  feels_like: any,
  pressure: number,
  humidity: number,
  dew_point: any,
  wind_speed: number,
  wind_deg: number,
  wind_gust: number,
  weather: weatherItem[]
  clouds: number,
  pop: number,
  rain: any,
  uvi: any
}

interface weatherItem {
  id: number,
  main: string,
  description: string,
  icon: string
}
