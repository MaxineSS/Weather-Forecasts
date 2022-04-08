# 👋 Welcome to 5 Days Forecasts!
> Note for Travis </br> 
> : Currently only `1 Day` and `5 Days` of Daily Forecasts available on AccWeather API.
><img width="866" alt="Screen Shot 2022-04-07 at 5 05 42 PM" src="https://user-images.githubusercontent.com/64869554/162399167-bf2bf236-8b79-410e-bda6-7f8f8c5d7c35.png">

> I initially planned to use 10 Day API URL(http://dataservice.accuweather.com/forecasts/v1/daily/10day/{locationkey})
> and fetch data and use `Array.slice(0, 7)` to get 7 days Forecasts.

<div align="center">
  <img width="870" alt="image" src="https://user-images.githubusercontent.com/64869554/162390918-57e34005-a830-4cca-b44d-192583e9e775.png">
</div>

## 📷 Demo - Responsive

https://user-images.githubusercontent.com/64869554/162393212-75824dd3-0f85-4307-bd8b-f98c3f914c6d.mp4

## 💾 Installation
1. Clone the repository: <br />
   `git clone https://github.com/MaxineSS/ingram-exercise.git`
2. Install dependencies: <br />
   `npm install`
3. Build application: <br />
   `npm run build`
4. Run application: <br />
   `npm start`
5. Start typing postal code to see 5 days forecasts!
   
## ⛰️ Environment
Create `.config.js` and fill in your information.
```bash
const API_KEY = 'Your AccWeather API Key';
```
