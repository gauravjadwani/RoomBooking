import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
// const AppBarExampleIcon = () => (
//   <MuiThemeProvider>
//   <AppBar
//     title="RoomOnRent"
//     left='100'
//     iconClassNameRight="muidocs-icon-navigation-expand-more"
//     titleStyle={{'text-align':'centre'}} style={{'text-align':'center'}}
//   />
// </MuiThemeProvider>
// );
// const Logged = (props) => (
const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

class AppBarExampleIcon extends React.Component{
  render(){
    return(
      <MuiThemeProvider>
      <AppBar
        title="RoomOnRent"
        left='100'
        iconClassNameRight="muidocs-icon-navigation-expand-more"
         style={{'text-align':'center'}}
          iconElementRight= {<Logged />}
      />
    </MuiThemeProvider>
    );
  }
}
export default AppBarExampleIcon;
