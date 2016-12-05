import React, { Component } from 'react';
import './App.css';
import Home, { Footer } from './Home.js';
import { hashHistory, Link } from 'react-router';
import firebase from 'firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    //hook up with the current auth status of firebase

    // firebase.auth().onAuthStateChanged((firebaseUser) => {
    //   if (firebaseUser) {
    //     this.setState({ userId: firebaseUser.uid });
    hashHistory.push('/home');
    // } else {
    //   this.setState({ userId: null });
    //   hashHistory.push('/login');
    // }
    // });

  }

  signOut() {
    /* Sign out the user, and update the state */
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="App">
        <Search />
        <main className="container">
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: '', searchBy: '' };
    this.handleClickSearch = this.handleClickSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.handleSearchProf = this.handleSearchProf.bind(this);
    // this.handleSearchCors = this.handleSearchCors.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    var searchValue = event.target.value.replace(/\s/g,'').toLowerCase();
    if (searchValue.match(/\d/g)) {
      searchValue = searchValue.replace(/\d/g,'') + "-" + searchValue.match(/\d/g).join("");
    console.log(searchValue);
    this.setState({ searchValue: searchValue });
    }
  }

  handleClickSearch(event) {
    event.preventDefault();
    console.log("Route to: " + 'class/' + this.state.searchValue);
    // hashHistory.push('class' + this.state.searchValue.replace(/\d/g, "-" + this.state.searchValue.match(/\d/g)));
  }

  render() {
    return (
      <div className="">
        <nav role="navigation" className="navbar navbar-inverse">
          <div className="navbar-header">
            <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="#" className="navbar-brand">iVal</a>
          </div>
          <div id="navbarCollapse" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="" ><a href="#">About</a></li>
              <li className="" ><a href="https://ischool.uw.edu/">The iSchool</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>
          <div className="container">
          </div>
          <div className="row searchBar">
            <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search" onChange={this.handleChange} />
                <span className="input-group-btn">
                  <button className="btn btn-default" type = "submit" onClick={this.handleClickSearch} ><span className="glyphicon glyphicon-search"></span></button>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }

}

export default App;
