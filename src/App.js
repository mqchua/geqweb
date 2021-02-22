import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import Articles from './pages/articles/ArticlesPage.js';
import Volunteer from './pages/volunteer/VolunteerPage.js';
import Forum from './pages/forum/ForumPage.js';
import About from './pages/about/AboutPage.js';
import tree from './images/tree.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 2,
  },
  emptyitem: {
    flexGrow: 3,
  },
  appbar:{
    position:'sticky',
    top:0,
  },
  logo: {
    maxWidth: 40,
    padding: 5,

  },
}));

function App() {

  const classes = useStyles();

  return (
    <BrowserRouter>

      <AppBar className={classes.appbar}color='#C0C0C0'>
        <Toolbar variant="dense">
          
          <a href="/">
            <img src={tree} alt="logo" href="/" className={classes.logo} />
          </a>
          <div className={classes.emptyitem}></div>
          <div className={classes.emptyitem}></div>
          <div className={classes.emptyitem}></div>
          <Button color="inherit" href="/" className={classes.title}>News</Button>
          <Button color="inherit" href="/volunteer" className={classes.title}>Volunteer</Button>
          <Button color="inherit" href="/forum" className={classes.title}>Forum</Button>
          <Button color="inherit" href="/about" className={classes.title}>About</Button>
          {/* <Button color="inherit" href="/blog" className={classes.title}>Blog</Button> */}
          {/* <div className={classes.emptyitem}></div>
          <div className={classes.emptyitem}></div> */}
        </Toolbar>
      </AppBar>

      <Switch>
        <Route path="/" exact component={Articles} />
        <Route path="/volunteer" exact component={Volunteer} />
        <Route path="/forum" exact component={Forum} />
        <Route path="/about" exact component={About} />
    
    </Switch>

    </BrowserRouter>
  );
}

export default App;

// <Route path="/hackathon" exact component={HackathonPage} />
// <Route path="/partners/fintechlab" exact component={FinTechLab} />        
// <Route path="/partners/fundedhere" exact component={Fundedhere} />
// <Route path="/partners/bnpp" exact component={BNPP} />
// <Route path="/partners/stanley" exact component={Stanley} />
// <Route path="/partners/genping" exact component={Genping} />
// <Route path="/faq" exact component={FaqPage} />
// {/* <Route path="/blog" exact component={BlogPage} /> */}
// <Route path="/workshop" exact component={Workshop}/>
// <Route path="/eventoverview" exact component={EventOverviewPage}/>
// <Route path="/registrationdates" exact component={RegDatePage}/>
// <Route
//     exact
//     path="/workshop/:whichWorkshop"
//     render={props => (
//       <Workshopdetail {...props}/>
//     )}/>
// <Route path="/externalworkshop" exact component={Externalworkshop}/>
