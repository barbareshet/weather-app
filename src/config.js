const API = {
    key : process.env.NEXT_WEATHER_API_KEY,
    base_api_url : process.env.NEXT_PUBLIC_WEATHER_API_KEY_BASE_URL || "https://api.openweathermap.org/data/2.5/",
    googleMapsBase: process.env.NEXT_PUBLIC_GOOGLE_MAPS_BASE_URL || "https://maps.googleapis.com/maps/api/geocode/",
    googleMapsKey: process.env.NEXT_GOOGLE_MAPS_KEY,
}
export default API