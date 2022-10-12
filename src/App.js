import { useState } from "react";

import "./App.css";

// a controlled input requires 2 things. a value, which comes from state, and an onChange handler

//synthetic event is just the same event object, but React handles all browsers so that the event object will be handled the same way in every browser

function App() {
  // state is handling a single input
  // const [firstName, setFirstName] = useState('')
  //define state to hold first and last name, it handles multiple inputs
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: "",
  });

  const [check, setCheck] = useState(false);
  const [mySelect, setMySelect] = useState("");

  const handleChange = (e) => {
    // console.log("target", e);
    console.log(e.target.id, ": ", e.target.value);
    setFullName({ ...fullName, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // inside the submit I will grab all the state values
    // and then I will send them to the database and I also may update state.

    // then after I submit to the database, I will reset my values to 0
    reset();
    alert("submitted");
  };

  const reset = () => {
    setCheck(false);
  };

  return (
    <div className="App">
      <h1>Pursuit App Template</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          <input
            id="firstName"
            type="text"
            placeholder="First Name"
            value={fullName.firstName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="lastName">
          <input
            id="lastName"
            type="text"
            placeholder="Last Name"
            value={fullName.lastName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="check">
          Likes flowers:
          <input
            type="checkbox"
            checked={check}
            onChange={() => setCheck(!check)}
          />
        </label>
        <label>
          <select
            value={mySelect}
            onChange={(e) => setMySelect(e.target.value)}
          >
            <option value=""></option>
            <option value="rose">rose</option>
            <option value="carnation">carnation</option>
          </select>
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
