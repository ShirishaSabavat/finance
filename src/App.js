import './App.css';
import React, {useState} from "react"

const App = () => {
  const [data, setData] = useState({
    userName: "shirisha",
    email: "shirisha660@gmail.com",
    password: "123456",
    conformPassword: "123456"
  })
  const {userName, email, password, conformPassword} = data;
  const onChangeEventHandler = e => {
    setData({...data, [e.target.name] : e.target.value})
  }
  const onSubmitEventHandler = e => {
    e.preventDefault();
    if (userName.length < 5){
      alert("userName must be atleast 5 characters")
    }
    else if (password!==conformPassword){
      alert("Passwords are not matching")
    }else{
      console.log(data);
    }
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
      <p>{data.userName}</p>
      <p>{data.email}</p>
      <p>{data.password}</p>
      <p>{data.conformPassword}</p>
      </center>
      </div>
  );
}

export default App;
