import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// const styles = {
//   container: {
//     textAlign: 'center',
//     paddingTop: 200,
//   },
// };
//
// const muiTheme = getMuiTheme({
//   palette: {
//     accent1Color: deepOrange500,
//   },
// });
// const prepareStyles = this.context.muiTheme;
const CardExampleWithAvatar = () => (
    <MuiThemeProvider>
      <a href="">
  <Card>
    <CardHeader
      title="Room 1"
      subtitle="406"
    />
    <CardMedia
      overlay={<CardTitle title="Mnp residency" subtitle="Room 406" />}
    >
      <img src="http://www.pacificinnvernon.com/images/room_main_image.png" alt="ga" />
    </CardMedia>
    {/* <CardTitle title="Card title" subtitle="Card subtitle" /> */}
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Details" />

    </CardActions>
  </Card>
  <Card>
    <CardHeader
      title="MNP residency"
      subtitle="406"
    />
    <CardMedia
      overlay={<CardTitle title="MNP residency" subtitle="406" />}
    >
      <img src="http://www.pacificinnvernon.com/images/room_main_image.png" alt="ga" />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
  <Card>
    <CardHeader
      title="MNP residency"
      subtitle="406"
    />
    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img src="http://www.pacificinnvernon.com/images/room_main_image.png" alt="ga" />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
</a>
</MuiThemeProvider>
);

export default CardExampleWithAvatar;
