
import ListThreadVote from './ListThreadVote.js'

function ListThread(props) {
  return (
    <div
      className="listThread"
      style={{
        height: 100,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        justifyContent: 'space-between',
        marginTop: 4,
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
          {props.title}
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
            {props.author}
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
            {props.numberOfComments} comments
          </p>
        </div>
      </div>

      <ListThreadVote upVoteScore={props.upVoteScore} />
    </div>
  );
}

export default ListThread;
