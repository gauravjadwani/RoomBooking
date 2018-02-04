import React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import {Carousel} from 'react-responsive-carousel';

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

const CardExampleWithAvatar = () => (<MuiThemeProvider>
  <Card>
    <CardMedia >
      <Carousel>
        <div>
          <img src="https://firebasestorage.googleapis.com/v0/b/roombooking-80143.appspot.com/o/r50.jpg?alt=media&token=7f369be9-777a-43db-a229-12e3ddb57880" alt="ga"/>
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="https://firebasestorage.googleapis.com/v0/b/roombooking-80143.appspot.com/o/r50.jpg?alt=media&token=7f369be9-777a-43db-a229-12e3ddb57880" alt="ga"/>
          <p className="legend">Legend 1</p>
        </div>
      </Carousel>

    </CardMedia>
    {/* <CardTitle title="Card title" subtitle="Card subtitle" /> */}
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </CardText>
    <CardActions>
      <FlatButton label="Details"/>

    </CardActions>
  </Card>

</MuiThemeProvider>);

export default CardExampleWithAvatar;
