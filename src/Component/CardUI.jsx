import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { RWebShare } from "react-web-share";

const CardUI = ({ name, image }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }} style={{ margin: 20 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="130"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Just 1 donation can save up to 3 lives. The average red blood cell
            transfusion is 3 pints (or 3 whole-blood donations).
          </Typography>
        </CardContent>
        <CardActions>
          {/* <RWebShare data={{title: "bloodbuddy"}}>
            <button>Share on Web</button>
            <Button size="small" variant="outlined">
              Share
            </Button>
          </RWebShare> */}
          <RWebShare
            data={{
              text: "Like humans, flamingos make friends for life",
              url: "https://on.natgeo.com/2zHaNup",
              title: "Flamingos",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <Button size="small" variant="outlined">
              Share
            </Button>
          </RWebShare>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardUI;
