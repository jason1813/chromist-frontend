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
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <ListThread/>
        <div style={{height: 20}}></div>
        <ListThreadVote/>
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
      style={{
        height: 100,
        width: 50,
        position: 'relative',
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column"
        // justifyContent: "space-around",
      }}
    >

      <img src={require('./up-arrow.png')} 
        style={{ 
          width: 30,
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "auto",
          marginBottom: "auto"
        }}
      />

      <p style={{
        color: "black",
        marginTop: 0,
        marginBottom: 0,
        }}>458</p>

      <img src={require('./down-arrow.png')} 
        style={{ 
          width: 30,
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "auto",
          marginBottom: "auto"
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
          className="thread"
          style={{
            height: 100,
            width: "100%",
            position: 'relative',
            backgroundColor: "white"
          }}
        >
          <h1
            style={{
              textAlign: "left",
              color: "black",
              verticalAlign: "top",
              fontSize: "17px",
              marginRight: "50px",
              marginLeft: "12px",
              marginTop: "8px"
            }}
          >
            Billy Napier: Florida Football Wont Get Involved in NIL Bidding Wars
          </h1>

          <div
            style={{
              position: "absolute",
              bottom: 0,
              display: "flex"
            }}
          >
            <p
              style={{
                textAlign: "left",
                marginLeft: "12px",
                marginBottom: "8px",
                fontSize: "14px",
                color: "blue"
              }}
            >
              hiwe5qf89q3u4
            </p>
            <p
              style={{
                textAlign: "left",
                marginLeft: "12px",
                marginBottom: "8px",
                fontSize: "14px",
                color: "black"
              }}
            >
              45 comments
            </p>
          </div>

        </div>
    )
  }
}