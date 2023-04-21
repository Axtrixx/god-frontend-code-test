import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { JsonData } from './HelloWorld';

// Should have used own type here like ActionAreaCardProps with id omitted...

export default function ActionAreaCard({name, profession, imageUrl}: JsonData) {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={imageUrl}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {profession}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
  