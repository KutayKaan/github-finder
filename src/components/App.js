import React, {Component , Fragment} from 'react';
import {BrowserRouter,Route,Switch,Link,NavLink, Routes} from 'react-router-dom'
import Navbar from './Navbar';
import Users from './Users';
import Search from './Search';
import axios from 'axios';
import Alert from './alert';
import About from './About';
import Footer from './FooterTKNFST'

export class App extends Component {

  constructor(props){
    super(props);
    this.searchUsers = this.searchUsers.bind(this);
    this.clearUsers = this.clearUsers.bind(this);
    this.setAlert = this.setAlert.bind(this);
    this.state = {
      loading : false,
      userList : [],
      alert : null
    }
  }

  componentDidMount(){
    this.setState({loading: true});
    setTimeout(() => {
      axios
      .get('https://api.github.com/users')
      .then(response => this.setState({userList: response.data, loading: false}));
    }, 1000);
  }

  searchUsers(keyword){
    this.setState({loading: true});
    setTimeout(() => {
      axios
      .get(`https://api.github.com/search/users?q=${keyword}`) // tırnak değişti ${} yapabilmek için
      .then(response => this.setState({userList: response.data.items, loading: false}));
    }, 1000);
  }
  
  clearUsers(){
    this.setState({
      userList : []
    })
  }

  setAlert(msg,type){
    this.setState({
      alert : {msg: msg, type: type}
    })
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Alert alert={this.state.alert} />
        <Routes>
          <Route exact path='/' element={(
              <Fragment>
                <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} setAlert={this.setAlert}/>
                <Users userList={this.state.userList} loading={this.state.loading}/>
              </Fragment>
            )}
          />   

          <Route path='/about' element={<About />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App
