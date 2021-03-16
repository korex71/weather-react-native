export function condition(condition) {
  switch(condition){
    case 'storm':
      return {
        name: 'thunderstorm-outline',
        color: '#1ec9ff'
      };
    case 'clear_day':
      return {
        name: 'sunny-outline',
        color: '#FFB300'
      };
    case 'clear_night':
      return {
        name: 'moon-outline',
        color: '#1ec9ff'
      };
    case 'cloudly_day':
      return {
        name: 'partly-sunny-outline',
        color: '#FFB300'
      };
    case 'cloudly_night':
      return {
        name: 'cloudly-night-outline',
        color: '#1ec9ff'
      };
    case 'rain':
      return {
        name: 'rainy-outline',
        color: '#1ec9ff'
      };
    default:
      return {
        name: 'cloudy-outline',
        color: '#1ec9ff'
      };
  }
}