import axios from 'axios';

// https://api.hgbrasil.com/weather?key=716b3410&lat=${lat}&lon=${long}

export const getWeather = async (lat, long) => {
  const res = await axios.create(``)
  if(res && res.data) return res.data
}

export const key = '716b3410';

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com'
});

export default api