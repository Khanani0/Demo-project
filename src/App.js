import React, {Component} from 'react';
import NavBar from './components/DashBoard/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProjectForm from './components/Details/ProjectForm';
import ProjectContextProvider from './components/Context/ProjectContext';
import SignIn from './components/Authentication/SignIn';
import ProjectList from './components/Details/ProjectList';
import ProjectDetails from './components/Details/ProjectDetails';


class App extends Component {
  render() {
    return (
      <BrowserRouter> 
      <ProjectContextProvider>  
          <div className='App'>
            <NavBar/>
            <Switch>
              <Route path = '/MyProjects' component={ProjectList}/>
              <Route exact path = '/' component={SignIn}/>
              <Route exact path= '/ProjectForm' component={ProjectForm} />
              <Route path = '/ProjectDetails/:id' component = {ProjectDetails}/>
            </Switch>
          </div>
      </ProjectContextProvider>
      </BrowserRouter> );
  }
}

 
export default App ;