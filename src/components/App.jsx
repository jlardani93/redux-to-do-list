import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Moment from 'moment'
import ToDoList from './ToDoList'
import { connect } from 'react-redux'

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
        const action = {
          type: 'UPDATE_TIMES',
          id: key
        }
        dispatch(action);
      })
    }
  }

  render(){
    return(
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={ToDoList} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    toDoList: state.toDoList
  }
}

export default withRouter(connect(mapStateToProps)(App));
