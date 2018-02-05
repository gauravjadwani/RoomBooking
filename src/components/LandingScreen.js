import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import Footer from './Footer';
import {init as firebaseInit} from '../firebase';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width:'auto',
    height: 'auto',
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/roombooking-80143.appspot.com/o/images%20(1).jpg?alt=media&token=40081992-7edd-4d31-875d-b974077b61b8',
    title: 'Breakfast',
    author: 'jill111',
    id:'1'

  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/roombooking-80143.appspot.com/o/images%20(2).jpg?alt=media&token=49f68684-a4df-4564-8734-1e5f026c1c6a',
    title: 'Tasty burger',
    author: 'pashminu',
    id: '2'

  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/roombooking-80143.appspot.com/o/images.jpg?alt=media&token=d9a62fd1-d560-48bc-956e-4ac0508d31b8',
    title: 'Camera',
    author: 'Danson67',
    id:'3'

  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/roombooking-80143.appspot.com/o/r50.jpg?alt=media&token=7f369be9-777a-43db-a229-12e3ddb57880',
    title: 'Morning',
    author: 'fancycrave1',
    id:'4'

  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/roombooking-80143.appspot.com/o/sea-view-holidays.jpg?alt=media&token=3bea2b86-a573-4638-86fb-69bb96d8c62e',
    title: 'Hats',
    author: 'Hans',
    id:'5'

  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/roombooking-80143.appspot.com/o/sea-view-holidays.jpg?alt=media&token=3bea2b86-a573-4638-86fb-69bb96d8c62e',
    title: 'Hats',
    author: 'Hans',
    id:'6'
  }
];

/**
 * This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the tile.
 * The tiles have a customised title, positioned at the top and with a custom gradient `titleBackground`.
 */

class LandingScreen extends React.Component{
  handleClick=(event,value)=>{
    console.log(event.id,this,value);
  }
  constructer(){
    this.handleClick=this.handleClick.bind(this);



     // var leadsRef = database.ref('leads');
  }
  render(){
         firebaseInit();
       // console.log('f');
       // console.log('inside LandingScreen() ',firebaseInit().database);
    return(

        <div style={styles.root}>
            <MuiThemeProvider>
              <Header/>
          <GridList
            cols={3}
            cellHeight={300}
            padding={10}
            style={styles.gridList}

          >
            {tilesData.map((tile) => (
              <GridTile
                key={tile.img}
                title={tile.title}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                actionPosition="left"
                titlePosition="top"
                titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                cols={tile.featured ? 2 : 1}
                rows={tile.featured ? 2 : 1}
                onClick={() => this.handleClick(tile)}
              >
                <img src={tile.img} style={{cursor:'pointer'}}/>
              </GridTile>
            ))}
          </GridList>
          <Footer/>
        </MuiThemeProvider>
        </div>

    );
  }
}
export default LandingScreen;
