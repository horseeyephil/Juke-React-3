'use strict';
// const React = require('react'); // import Reach from 'react'
import React, { Component, Router } from 'react';
import ReactDom from 'react-dom';
const Main = require('./main.js')



ReactDom.render( < Main / > , document.getElementById('app'));




// const router = require('../../server/app/routes/index.js')






// .then(([albums, artists, playlists]) => {
//     store.dispatch(receiveAlbums(albums));
//     store.dispatch(receiveArtists(artists));
//     store.dispatch(receivePlaylists(playlists));
// });
// };
// class Hello extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1> 'Hello React' </h1>
//                 </div>
//         )
//     }
// };