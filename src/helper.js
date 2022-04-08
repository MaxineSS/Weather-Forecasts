export const formatData = (date) => {
  let formatted;
  const options = { weekday: 'short', month: 'long', day: 'numeric' };
  formatted = new Intl.DateTimeFormat('en-US', options).format(Date.parse(date))
  return formatted;
}

export const renderIcon = (digit) => {
  let src;
  let newDigit;
  if (digit < 10) {
    newDigit = '0' + digit
    src = `https://developer.accuweather.com/sites/default/files/${newDigit}-s.png`
    return src;
  } else {
    src = `https://developer.accuweather.com/sites/default/files/${digit}-s.png`
    return src;
  }
}

export const isDay = (time) => {
  let sunset;
  let sunrise;

  if (time) {
    return true;
  } else {
    return false;
  }
}