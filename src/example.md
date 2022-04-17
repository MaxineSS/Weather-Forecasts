  const fetchForecast = async () => {
    const url = 'http://dataservice.accuweather.com';
    const location = `/locations/v1/postalcodes/search?apikey=${API_KEY}&q=${zipcode}`;
    const forecast = '/forecasts/v1/daily/5day/';

    try {
      const res1 = await fetch(`${url}${location}`);
      const key = await res1.json();
      setLocationKey(Object.assign({},
        { key: key[0].Key, city: key[0].LocalizedName, state: key[0].AdministrativeArea.LocalizedName, zip: zipcode }))
      try {
        const res2 = await fetch(`${url}${forecast}${key[0].Key}?apikey=${API_KEY}`);
        const list = await res2.json()
        return list;
      } catch (error) {
        console.log(error)
      }
    } finally {
      console.log('Finished fetching')
    }
  }

cons useGetForeCast = (zipCodeLength) => {
    return useQuery('forecasts', fetchForecast, {
        enabled: zipCodeLength > 4
    })
}

const {data} =  useGetForeCast()