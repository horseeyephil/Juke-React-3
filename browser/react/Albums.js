'use strict';
// const React = require('react'); // import Reach from 'react'
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Main from "./main";
import SingleAlbum from "./SingleAlbum";

// let Albums = function(props) {
function Albums(props) {

    return (
        <div>
            <h3>Albums</h3>
            <div className="row">

            {props.albums.map(album => (
              <div className="col-xs-4">
              <a onClick = { () => props.handleClick(album)}>
                <a className="thumbnail" href="#">
                  <img src={album.imageUrl} />
                  <div className="caption">
                    <h5>
                      <span>{album.name}</span>
                    </h5>
                    <small>{album.songs.length}</small>
                  </div>
                  </a>
                </a>
              </div>
              )
            )}
              </div>
            </div>
    );
}



module.exports = Albums;
