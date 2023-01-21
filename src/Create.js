import { useState, useRef } from "react";
import axios from "axios";
function Create() {
  const rRno = useRef();
  const [rno, setRno] = useState("");
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");

  const hRno = (event) => {
    setRno(event.target.value);
  };
  const hName = (event) => {
    setName(event.target.value);
  };
  const hMarks = (event) => {
    setMarks(event.target.value);
  };

  const save = (event) => {
    event.preventDefault();
    let urladd = "http://localhost:9000/create";
    axios.post(urladd, { rno, name, marks })
    .then((res) => {
        if (res.data.insertedId) {
          alert("Record sucessfully created");
          setRno("");
          setMarks("");
          setName("");
          rRno.current.focus();
        } else {
          alert(rno + "Already exists");
          setRno("");
          setMarks("");
          setName("");
          rRno.current.focus();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <center>
        <h1>Create Page</h1>
        <form onSubmit={save}>
          <input
            type="number"
            placeholder="Enter Roll No."
            onChange={hRno}
            value={rno}
            ref={rRno}
          />
          <br/> 
          <br/> 
          <input
            type="text"
            placeholder="Enter Name"
            onChange={hName}
            value={name}
          />
           <br/> 
          <br/> 
          <input
            type="number"
            placeholder="Enter Marks"
            onChange={hMarks}
            value={marks}
          />
          <br/> 
          <br/> 
          <input type="submit" value="Save"></input>
        </form>
      </center>
    </>
  );
}
export default Create;
