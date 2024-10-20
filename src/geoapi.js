const apikey = {
    key: '8f631e52570016d881398c705cb69f98'
};
export const geoapi = (name) => `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=${apikey.key}`;
export const weatherapi = (lat,lon) => `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey.key}`;
