import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import Footer from './Footer';
import {database} from '../firebase';
import CircularProgress from 'material-ui/CircularProgress';
import browserHistory from 'react';
import './css/Loading.css';
import {Link} from 'react-router';

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
  }
};


class LandingScreen extends React.Component{
  handleClick=(event,value)=>{
    window.location = '/Details?id='+event.id;
  }

  constructor(props){
    super(props);
     this.state = {
      isloading:true,
      roomList: [],
     };
this.handleClick=this.handleClick.bind(this);

}
componentWillMount=()=>{
   var tempthis=this;
  const ref = database.ref("data");
  let tilesobject = [];
  ref.once("value").then(function(snapshot){
   let obj=snapshot.val();
  localStorage.setItem('data',JSON.stringify(obj));
for (let value of obj) {
     let dummy={};
     dummy['id']=value.id;
     dummy['img']=value.mainImg;
     dummy['title']=value.title;
     tilesobject.push(dummy);
   }
   tempthis.setState({roomList:tilesobject });
   tempthis.setState({isloading:false });

 });
}
  render(){
    return(

        <div style={styles.root}>
            <MuiThemeProvider>
              <Header/>
{(this.state.isloading)?(<CircularProgress    left={100} // Required properties
          top={50}  // Required properties
          status="loading"
          style={{
              display: 'inline-block',
              position: 'relative',
              margin: '50px auto' }}/>):(

          <GridList
            cols={3}
            cellHeight={300}
            padding={10}
            style={styles.gridList}>
            {this.state.roomList.map((tile) => (
              <Link to={'/Details?id='+tile.id}>
              <GridTile
                key={tile.id}
                title={tile.title}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                actionPosition="left"
                titlePosition="top"
                titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                cols={tile.featured ? 2 : 1}
                rows={tile.featured ? 2 : 1}

              >
                <img src={tile.img} style={{cursor:'pointer'}}/>
              </GridTile>
                </Link>
            ))}

          </GridList>
      )}
          {(this.state.isloading)?(''):(<Footer/> )}
        </MuiThemeProvider>
        </div>

    );
  }
}
export default LandingScreen;
