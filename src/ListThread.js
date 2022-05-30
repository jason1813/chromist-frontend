
import { Component } from 'react'
import ListThreadVote from './ListThreadVote.js'

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
              justifyContent: 'space-between'
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
                  maxHeight: 60,
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

export default ListThread;
