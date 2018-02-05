'use strict';
// const React = require('react'); // import Reach from 'react'
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
const Footer = require('./Footer.js')
const Sidebar = require('./Sidebar')
const Albums = require('./Albums')
const SingleAlbum = require('./SingleAlbum')

const axios = require('axios');
const toJson = data => response.data;
const log = console.log.bind(console);
const logError = console.error.bind(console);

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      selectedAlbum: {}
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    axios.get('/api/albums')
    .then(result => this.setState({albums: result.data}))
    .then(log)
    .catch(logError);
  }

  selectAlbum(album) {
    this.setState( {selectedAlbum: album});
  }

  componentWillUnmount() {

  }

  handleClick(album) {
    axios.get(`/api/albums/${album.id}`)
    .then(result => this.setState({selectedAlbum: result.data }))
    .then(log)
    .catch(logError);
  }

  render() {
      return (
          <div id="main" className="container-fluid">
          <Sidebar />
          <div className="col-xs-10">
            <Albums albums = {this.state.albums} handleClick = {this.handleClick} />
            <SingleAlbum album = {this.state.selectedAlbum} />
          </div>
          <Footer />
          </div>
      );
  }
};





// class Albums extends React.Component {


//   render() {
//     let albumNames = (
//               //   <ul>
//                 fakeAlbums.map((album) =>
//               // <li key = {album.id }>
//                 [album.name, album.songs.length]
//               // </li>
//                 )

//               // </ul>
//             );

//     return (
//       <div className="col-xs-10">
//           <h3>Albums</h3>
//           <div className="row">
//             <div className="col-xs-4">
//               <a className="thumbnail" href="#">
//                 <img src="http://placeholdit.imgix.net/~text?txtsize=33&txt=ALBUMoneIMAGE&w=300&h=300" />
//                 <div className="caption">
//                   <h5>
//                     <span>{albumNames[0][0]}</span>
//                   </h5>
//                   <small>{albumNames[0][1]} songs</small>
//                 </div>
//               </a>
//             </div>

//             <div className="col-xs-4">
//               <a className="thumbnail" href="#">
//                 <img src="http://placeholdit.imgix.net/~text?txtsize=33&txt=ALBUMtwoIMAGE&w=300&h=300" />
//                 <div className="caption">
//                   <h5>
//                     <span>{albumNames[1][0]}</span>
//                   </h5>
//                   <small>{albumNames[1][1]} songs</small>
//                 </div>
//               </a>
//             </div>


//             </div>
//           </div>
//     )
//   }
// }

module.exports = Main;
