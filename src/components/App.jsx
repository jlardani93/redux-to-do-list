import React from 'react'
import { Switch, Route, withRouter, Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Moment from 'moment'
import ToDoList from './ToDoList'
import MusicInterface from './MusicInterface'
import { connect } from 'react-redux'
import c from './../constants'
import * as actions from './../actions'

class App extends React.Component {

  constructor(props){
    super(props);
  }

  activeTimeUpdateTimer;

  componentDidMount(){
    this.activeTimeUpdateTimer = setInterval(()=>{
      this.updateActiveTimes();
    }, 1000)
  }

  updateActiveTimes(){
    const { dispatch } = this.props;
    if (this.props.toDoList){
      Object.keys(this.props.toDoList).map(key => {
        dispatch(actions.updateTimes(key));
      })
    }
  }

  render(){

    let linkButton;
    let currentLocation = this.props.location.pathname;
    //CHANGES LINK SHOWN ON PAGE DEPENDING ON PART OF SITE CURRENTLY VISIBLE
    if (currentLocation === '/') {
      linkButton = <Link to='/Music'><button>Music Interface</button></Link>;
    } else {
      linkButton = <Link to='/'><button>Return to Main Page</button></Link>;
    }

    return(
      <div>
        <Header />
        <div>
          <p>Tasks Completed: {this.props.tasksCompleted}</p>
          {linkButton}
        </div>
        <Switch>
          <Route exact path="/" component={ToDoList} />
          <Route exact path="/Music" component={MusicInterface} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    toDoList: state.toDoList.toDoList,
    tasksCompleted: state.completedActions.tasksCompleted
  }
}

export default withRouter(connect(mapStateToProps)(App));
