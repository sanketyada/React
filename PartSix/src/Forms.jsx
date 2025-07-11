import React, { useState } from "react";

function Forms() {
  let [formdata, SetformData] = useState({ username: "", name: "",password:"" });

  let handleInputCahnge = (event) => {
    let fieldname = event.target.name;
    let newValue = event.target.value;
    SetformData((curr) => {
      // curr[fieldname] = newValue;
      return { ...curr,[fieldname]:newValue };
    });
  };
  let handleform = (event) => {
    event.preventDefault();
    SetformData({
      username: "",
      name: "",
      password:""
    });
  };

  return (
    <div>
      {/* section01 */}

      <form action="" onSubmit={handleform}>
        <label htmlFor="username">UserName</label>
        <input
          name="username"
          id="username"
          placeholder="Enter your Name"
          value={formdata.username}
          onChange={handleInputCahnge}
        />
        <br />

        {/* section2 */}

        <label htmlFor="name">Name</label>
        <input
          name="name"
          id="name"
          placeholder="Enter your Name"
          value={formdata.name}
          onChange={handleInputCahnge}
        />
        <br />
      <label htmlFor="password">Password</label>
        <input
          name="password"
          id="password"
          placeholder="password"
          value={formdata.password}
          onChange={handleInputCahnge}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Forms;
