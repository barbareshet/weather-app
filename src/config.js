const API = {
    key : process.env.WEATHER_API_KEY,
    base_api_url : process.env.WEATHER_API_KEY_BASE_URL || "https://api.openweathermap.org/data/2.5/",
    googleMapsBase: process.env.GOOGLE_MAPS_BASE_URL || "https://maps.googleapis.com/maps/api/geocode/",
    googleMapsKey: process.env.GOOGLE_MAPS_KEY,
}
export default API