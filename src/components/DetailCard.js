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
import Header from './Header';
import Footer from './Footer';

class DetailsCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
     isloading:true,
     roomDetails: [],
    };

  }

  componentWillMount=()=>{
    let id=(window.location.href).split("=")[1];
    // console.log(props,'props');
    // let roomDetails=(window.location.href,id,'w');

    let roomDetails=(JSON.parse(localStorage.getItem('data'))[id]);
      this.setState({roomDetails:roomDetails });

  }

  render(){
    console.log(this.state.roomDetails);
    this.state.roomDetails['seconndaryImg'].map((obj)=>(
      console.log(obj['url'],'objee')
    ));
    return(
      <div>
      <MuiThemeProvider>
        <Header/>
        <Card>
          <CardMedia>
            <Carousel>
              <div>
                <img src={this.state.roomDetails['seconndaryImg'][0]['url']} alt="ga"/>
                <p className="legend">Room 1</p>
              </div>
              <div>
                <img
                  src={this.state.roomDetails['seconndaryImg'][1]['url']}
                  alt="ga"/>
                <p className="legend">Room 2</p>
              </div>
            </Carousel>

          </CardMedia>
          {/* <CardTitle title="Card title" subtitle="Card subtitle" /> */}
          <CardText>
            This spacious 2 bhk multistorey apartment is available for rental and is located in the heart of HSR Layout. It is a semi-furnished property. It is on the fourth floor of the building (total number of floors are 4). The property has 2 bathrooms and 1 balcony. It is well connected to the city areas. It is made in way to provide a comfortable living for the residents. Please contact us for more detail
          </CardText>
          <CardActions>
            <FlatButton label="Book Room"/>

          </CardActions>
        </Card>
        <Footer/>

      </MuiThemeProvider>
    </div>
);
}
}


export default DetailsCard;
