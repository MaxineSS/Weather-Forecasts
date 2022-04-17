import {fetchForecast} from '../services/forecast-service'

const useGetForeCast = (zipCodeLength, queryOptions={}) => {
    return useQuery('forecasts', fetchForecast, {
        // enabled: zipCodeLength > 4
        enabled: queryOptions.enabled
    })
}