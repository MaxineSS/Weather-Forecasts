import { updateForeCast } from '../services/forecast-service'

const useUpdateForeCast = (zipCodeLength) => {
    return useMutation('forecasts', updateForecast)
}