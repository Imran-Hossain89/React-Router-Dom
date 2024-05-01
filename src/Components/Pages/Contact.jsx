import React, { useState } from "react";

const Contact = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [output, setOutput] = useState("");

  const showoutput = (e) => {
    e.preventDefault();

    let output =
      "My name is: " +
      fname +
      " " +
      lname +
      "," +
      "email: " +
      email +
      ", " +
      "Mobile: " +
      mobile +
      ". " +
      "My message for you is: " +
      message;

    setOutput(output);
  };

  const reset = (e) => {
    e.preventDefault();
    window.location.reload();
    setOutput(" ");
  };

  return (
    <div>
      <div>Please fill all the field carefully</div>
      <form onSubmit={showoutput}>
        <div>
          <label>First Name</label>
          <input
            onChange={(e) => setFname(e.target.value)}
            type="text"
            placeholder="First Name"
          />
        </div>

        <div>
          <label>Last Name</label>
          <input
            onChange={(e) => setLname(e.target.value)}
            type="text"
            placeholder="Last Name"
          />
        </div>

        <div>
          <label>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
        </div>

        <div>
          <label>Mobile No.</label>
          <input
            onChange={(e) => setMobile(e.target.value)}
            type="number"
            placeholder="Mobile no."
          />
        </div>

        <div>
          <label>Your Message</label>
          <input
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="type your message here"
          />
        </div>

        <div>
          <button type="submit">Submit</button>
          <button onClick={reset}>Clear</button>
        </div>
      </form>
      <div>
        <p>{output}</p>
      </div>
    </div>
  );
};

export default Contact;
