import React, { useState } from "react";
import Comments from "./Comments";

export default function CommentsForm({addNewComments}) {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  let handleInputData = (event) => {
    setFormData((currData) => {
      return { ...formData, [event.target.name]: event.target.value };
    });
  };
  let handleForm = (event) => {
    event.preventDefault();
    console.log(formData);
    addNewComments(formData)
    setFormData({
      username: "",
      remarks: "",
      rating: 0,
    });
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <h1>Enter Your Data</h1>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          onChange={handleInputData}
          value={formData.username}
        />
        <br />
        <br />
        <label htmlFor="remarks">Remarks</label>
        <textarea
          name="remarks"
          id="remarks"
          onChange={handleInputData}
          value={formData.remarks}
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          min={1}
          max={5}
          name="rating"
          id="rating"
          onChange={handleInputData}
          value={formData.rating}
        />
        <br />
        <br />
        <button>Submit Data</button>
      </form>
    </div>
  );
}
