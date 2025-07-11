import React, { useState } from "react";
import "./Comments.css";
import CommentsForm from "./CommentsForm";

function Comments() {
  let [comment, setComment] = useState([
    {
      username: "Snaket",
      remarks: "Nice",
      rating: 5,
    },
  ]);
  let addNewComments = (comment) => {
    setComment((currComments) => [...currComments, comment]);
    console.log("added");
  };
  return (
    <>
      {comment.map((comment, idx) => (
        <div className="comment" key={idx}>
          <span>{comment.username}</span>
          <br />
          <span>{comment.remarks}</span>
          <br />
          <span>{comment.rating}</span>
        </div>
      ))}

      <hr />
      <CommentsForm addNewComments={addNewComments} />
    </>
  );
}

export default Comments;
