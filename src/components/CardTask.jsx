import { React } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles({
  root: {

  },
  card:{
    flex: '1 0 500px',
    boxSizing: 'border-box',
    margin: '1rem .25em',
  },
  '@media screen and (min-width: 40em)': {
    card: {
       maxWidth: 'calc(50% -  1em)',
    },
},

'@media screen and (min-width: 60em)' :{
    card: {
        maxWidth: 'calc(25% - 1em)',
    }
}
});
const CardTask = (task) => {
  const classes = useStyles();

  return (
      <Card className={classes.card}>
        <CardActionArea>
     {/*     <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />*/}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {task.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {task.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="secondary">
            Eliminar
          </Button>
          <Button size="small" color="primary">
            Editar
          </Button>
        </CardActions>
      </Card>
  );
};

export default CardTask;
