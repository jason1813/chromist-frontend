import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import React from 'react';
import { View } from 'react';
import { Text } from 'react';

const threadInfo = {
  id: 0,
  dateCreated: new Date(2018, 11, 24, 10, 33, 30, 0),
  author: "Ghewrof324",
  title: "Billy Napier: Florida Football Wont Get Involved in NIL Bidding Wars adsf  awer asdf",
  description: "Can you imagine listening to the Tennessee and Oklahoma bands battle it out all game when they play each other?",
  numberOfComments: 21,
  upVoteScore: -221
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ListThread
          threadInfo={threadInfo}
        />
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
          width: 40,
          display: "flex",
          flexDirection: "column",
          justifyContent: 'space-around',
          marginRight: 15,
          marginLeft: 8,
          border: 2,
          borderColor: "green",
        }
      }
      >

      <img src={require('./up-arrow.png')} 
        style={{ 
          width: 30,
          marginTop: 10,
          marginBottom: 0,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />

      <p style={{
        color: "black",
        minWidth: "100%",
        marginTop: 0,
        marginBottom: 0,
        }}>
          {this.props.upVoteScore}
          </p>

      <img src={require('./down-arrow.png')} 
        style={{ 
          width: 30,
          marginTop: 0,
          marginBottom: 10,
          marginLeft: "auto",
          marginRight: "auto",
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
          className="listThread"
          style={{
            height: 100,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            backgroundColor: "white",
          }}
        >
          <div
            className="textContent"
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
              {this.props.threadInfo.title}
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
                {this.props.threadInfo.author}
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
                {this.props.threadInfo.numberOfComments} comments
              </p>
            </div>
          </div>

          <ListThreadVote upVoteScore={this.props.threadInfo.upVoteScore}/>
        </div>
    )
  }
}