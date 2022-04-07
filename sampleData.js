const sampledata = {
  Headline: {
    EffectiveDate: "2022-04-08T02:00:00-07:00",
    EffectiveEpochDate: 1649408400,
    Severity: 5,
    Text: "Expect showery weather late tomorrow night through Friday afternoon",
    Category: "rain",
    EndDate: "2022-04-08T20:00:00-07:00",
    EndEpochDate: 1649473200,
    MobileLink: "http://www.accuweather.com/en/us/seattle-wa/98104/daily-weather-forecast/41337_pc?lang=en-us",
    Link: "http://www.accuweather.com/en/us/seattle-wa/98104/daily-weather-forecast/41337_pc?lang=en-us"
  },
  DailyForecasts: [
    {
      Date: "2022-04-06T07:00:00-07:00",
      EpochDate: 1649253600,
      Temperature: {
        Minimum: {
          Value: 43,
          Unit: "F",
          UnitType: 18
        },
        Maximum: {
          Value: 56,
          Unit: "F",
          UnitType: 18
        }
      },
      Day: {
        Icon: 3,
        IconPhrase: "Partly sunny",
        HasPrecipitation: false
      },
      Night: {
        Icon: 38,
        IconPhrase: "Mostly cloudy",
        HasPrecipitation: false
      },
      Sources: [
        "AccuWeather"
      ],
      MobileLink: "http://www.accuweather.com/en/us/seattle-wa/98104/daily-weather-forecast/41337_pc?day=1&lang=en-us",
      Link: "http://www.accuweather.com/en/us/seattle-wa/98104/daily-weather-forecast/41337_pc?day=1&lang=en-us"
    },
    {
      Date: "2022-04-07T07:00:00-07:00",
      EpochDate: 1649340000,
      Temperature: {
        Minimum: {
          Value: 49,
          Unit: "F",
          UnitType: 18
        },
        Maximum: {
          Value: 62,
          Unit: "F",
          UnitType: 18
        }
      },
      Day: {
        Icon: 2,
        IconPhrase: "Mostly sunny",
        HasPrecipitation: false
      },
      Night: {
        Icon: 12,
        IconPhrase: "Showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Moderate"
      },
      Sources: [
        "AccuWeather"
      ],
      MobileLink: "http://www.accuweather.com/en/us/seattle-wa/98104/daily-weather-forecast/41337_pc?day=2&lang=en-us",
      Link: "http://www.accuweather.com/en/us/seattle-wa/98104/daily-weather-forecast/41337_pc?day=2&lang=en-us"
    },
    {
      Date: "2022-04-08T07:00:00-07:00",
      EpochDate: 1649426400,
      Temperature: {
        Minimum: {
          Value: 42,
          Unit: "F",
          UnitType: 18
        },
        Maximum: {
          Value: 55,
          Unit: "F",
          UnitType: 18
        }
      },
      Day: {
        Icon: 13,
        IconPhrase: "Mostly cloudy w/ showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light"
      },
      Night: {
        Icon: 38,
        IconPhrase: "Mostly cloudy",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light"
      },
      Sources: [
        "AccuWeather"
      ],
      MobileLink: "http://www.accuweather.com/en/us/seattle-wa/98104/daily-weather-forecast/41337_pc?day=3&lang=en-us",
      Link: "http://www.accuweather.com/en/us/seattle-wa/98104/daily-weather-forecast/41337_pc?day=3&lang=en-us"
    },
    {
      Date: "2022-04-09T07:00:00-07:00",
      EpochDate: 1649512800,
      Temperature: {
        Minimum: {
          Value: 38,
          Unit: "F",
          UnitType: 18
        },
        Maximum: {
          Value: 49,
          Unit: "F",
          UnitType: 18
        }
      },
      Day: {
        Icon: 12,
        IconPhrase: "Showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light"
      },
      Night: {
        Icon: 36,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light"
      },
      Sources: [
        "AccuWeather"
      ],
      MobileLink: "http://www.accuweather.com/en/us/seattle-wa/98104/daily-weather-forecast/41337_pc?day=4&lang=en-us",
      Link: "http://www.accuweather.com/en/us/seattle-wa/98104/daily-weather-forecast/41337_pc?day=4&lang=en-us"
    },
    {
      Date: "2022-04-10T07:00:00-07:00",
      EpochDate: 1649599200,
      Temperature: {
        Minimum: {
          Value: 39,
          Unit: "F",
          UnitType: 18
        },
        Maximum: {
          Value: 50,
          Unit: "F",
          UnitType: 18
        }
      },
      Day: {
        Icon: 12,
        IconPhrase: "Showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light"
      },
      Night: {
        Icon: 36,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: false
      },
      Sources: [
        "AccuWeather"
      ],
      MobileLink: "http://www.accuweather.com/en/us/seattle-wa/98104/daily-weather-forecast/41337_pc?day=5&lang=en-us",
      Link: "http://www.accuweather.com/en/us/seattle-wa/98104/daily-weather-forecast/41337_pc?day=5&lang=en-us"
    }
  ]
};

export default sampledata;