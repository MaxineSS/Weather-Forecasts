import React from 'react';
import { renderIcon, formatData } from './helper.js';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// {key: '41337_PC', city: 'Seattle', state: 'Washington'}
export default function Day({ day }) {

  return (
    <>
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={renderIcon(day.Day.Icon)}
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="div">
            Date: {formatData(day.Date)}
          </Typography>
          <Typography gutterBottom variant="subtitle2" component="div">
            High: {day.Temperature.Maximum.Value}
          </Typography>
          <Typography gutterBottom variant="subtitle2" component="div">
            Low: {day.Temperature.Minimum.Value}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

{/*             {day.Temperature.Minimum.Value}
      Day: {day.Day.Icon} {day.Day.IconPhrase} day.Day.HasPrecipitation
      Night: {day.Night} */}
