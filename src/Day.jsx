import React from 'react';
import { renderIcon, formatData } from './helper.js';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// {key: '41337_PC', city: 'Seattle', state: 'Washington'}
export default function Day({ day, i }) {

  return (
    <>
      {i === 0 && (
        <Card sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.primary', ':hover': { boxShadow: 20 } }}>
          <Typography variant="caption" component="p" color="white" align="center" sx={{ mt: 1}} >Today's Weather</Typography>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '50px' }}>
              <img src={renderIcon(day.Day.Icon)} />
            </div>
          <CardContent>
            <Typography gutterBottom variant="subtitle1" component="div" color="text.primary" sx={{ fontWeight: 'bold'}} >
              {formatData(day.Date)}
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="div">
              High: {day.Temperature.Maximum.Value}°F
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="div">
              Low: {day.Temperature.Minimum.Value}°F
            </Typography>
            <Typography gutterBottom variant="caption" component="div" color="text.secondary">
              🌝 Day: {day.Day.IconPhrase}
            </Typography>
            <Typography gutterBottom variant="caption" component="div" color="text.secondary">
              🌚 Night: {day.Night.IconPhrase}
            </Typography>
          </CardContent>
        </Card>
      )}
      {i >= 1 && (
        <Card sx={{  width: '100%', maxWidth: 500, ':hover': { boxShadow: 20 } }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '50px' }}>
            <img src={renderIcon(day.Day.Icon)} />
          </div>
          <CardContent>
            <Typography gutterBottom variant="subtitle1" component="div" color="text.primary" sx={{ fontWeight: 'bold'}}>
              {formatData(day.Date)}
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="div">
              High: {day.Temperature.Maximum.Value}°F
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="div">
              Low: {day.Temperature.Minimum.Value}°F
            </Typography>
            <Typography gutterBottom variant="caption" component="div" color="text.secondary">
              🌝 Day: {day.Day.IconPhrase}
            </Typography>
            <Typography gutterBottom variant="caption" component="div" color="text.secondary">
              🌚 Night: {day.Night.IconPhrase}
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  )
}

{/*             {day.Temperature.Minimum.Value}
      Day: {day.Day.Icon} {day.Day.IconPhrase} day.Day.HasPrecipitation
      Night: {day.Night} */}
