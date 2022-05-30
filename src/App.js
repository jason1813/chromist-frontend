import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import React from 'react';
import { View } from 'react';
import { Text } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ListThread/>
      </header>
    </div>
  );
}

export default App;


class ListThreadVote extends Component {
  render() {
    return (
      <div
      className="listThreadVote"
      style={
        {
        height: 100,
        width: 50,
        display: "flex",
        flexDirection: "column",
        justifyContent: 'space-around',
        marginRight: 15,
        marginLeft: 8,
        marginTop: 'auto',
        marginBottom: 'auto',
      }
    }
    >

      <img src={require('./up-arrow.png')} 
        style={{ 
          width: "100%",
          marginTop: 0,
          marginBottom: 0,
        }}
      />

      <p style={{
        color: "black",
        marginTop: 0,
        marginBottom: 0,
        }}>458</p>

      <img src={require('./down-arrow.png')} 
        style={{ 
          width: "100%",
          marginTop: 0,
          marginBottom: 0,
        }}
      />
    </div>
    )
  }
}


class ListThread extends Component {
  render() {
    return (
        <div
          style={{
            height: 100,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            backgroundColor: "white",
          }}
        >
          <div
            className="thread"
            style={{
              marginLeft: 15,
              marginTop: 8,
              marginBottom: 8,
              display: "flex",
              flexDirection: "column",
              justifyContent: 'space-between',
            }}
          >
            <h1
              style={{
                textAlign: "left",
                color: "black",
                fontSize: "17px",
                marginTop: 0,
              }}
            >
              Billy Napier: Florida Football Wont Get Involved in NIL Bidding Wars adsf  awer asdf
            </h1>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <p
                style={{
                  textAlign: "left",
                  fontSize: "14px",
                  margin: 0,
                  color: "blue"
                }}
              >
                hiwe5qf89q3u4
              </p>
              <p
                style={{
                  textAlign: "left",
                  marginLeft: "12px",
                  marginTop: 0,
                  marginBottom: 0,
                  fontSize: "14px",
                  color: "black"
                }}
              >
                45 comments
              </p>
            </div>
          </div>

          <ListThreadVote/>
        </div>
    )
  }
}