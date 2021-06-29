import logo from './logo.svg';
import { Grid, Typography } from '@material-ui/core'
import { MoreHoriz } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

import profilepic from './assets/pfp.jpg';
import contentpic from './assets/content.jpg'
import './App.css';


const useStyles = makeStyles(theme => ({
  profileInfo: {
    flex: 1,
  },
  profilepic: {
    borderRadius: 16,
    marginRight: theme.spacing(1),
  }
}));

function Home() {
  const classes = useStyles();
  const username = "username";
  return (
    <Grid container direction="row">
        <Grid xs={2} item>

        </Grid>
        <Grid xs={8} item container direction="column" alignItems="stretch">
          <Grid xs={12} item container direction="row" alignItems="center" justifyContent="space-between" width="100%">
            <img src={profilepic} width={32} height={32} className={classes.profilepic}/>
            <Grid item container direction="column" alignItems="flex-start" justifyContent="space-between" className={classes.profileInfo}>
              
              <Typography variant="body2"><Link to={`/user/${username}`}>Profile name</Link></Typography>
              <Typography variant="caption">Gaza, Palestine</Typography>
            </Grid>
            
            <MoreHoriz></MoreHoriz>
          </Grid>
          <img src={contentpic} width="100%"/>
        </Grid>
        <Grid xs={2} item>

        </Grid>
      </Grid>
  )
}

function User() {
  const { id } = useParams()
  return (
    <div>{id}</div>
  )
}

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/user/:id">
            <User />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
