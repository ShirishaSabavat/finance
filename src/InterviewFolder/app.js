import React, {useState} from "react"
import axios from "axios";

const App = () => {

  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
    conformPassword: ""
  })
  const {userName, email, password, conformPassword} = data;
  const onChangeEventHandler = e => {
    setData({...data, [e.target.name] : e.target.value})
  }
  const onSubmitEventHandler = e => {
    e.preventDefault();
    axios.post("https://fir-form-1986e-default-rtdb.firebaseio.com/register.json", data).then(()=>alert("Submitted Successfully"))
  }
  return (
    <div>
      <center>
      <form onSubmit={onSubmitEventHandler}>
        <input type="text" name="userName" value={userName} onChange={onChangeEventHandler} /> <br />
        <input type="email" name="email" value={email} onChange={onChangeEventHandler} /> <br />
        <input type="password" name="password" value={password} onChange={onChangeEventHandler} /> <br />
        <input type="password" name="conformPassword" value={conformPassword} onChange={onChangeEventHandler} /> <br />
        {password===conformPassword? null: <p>Passwords are not matching</p>}
        <input type="submit" name="submit" />
        </form>
        </center>
      </div>
  );
}

export default App;
