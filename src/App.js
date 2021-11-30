import React, { useState } from 'react'

const App = () => {
  const [value ,setValue]=useState("")
  return (
    <div>
      <center>
        {/* <nav>
          <ul className="d-flex flex-row">
            <li style={{ color: "black" }}><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">SignUp</a></li>
          </ul>
        </nav> */}
        <form>
          <input type="radio" name="gender" onChange={()=>setValue("male")} />Male<br/>
          <input type="radio" name="gender" onChange={()=>setValue("female")} />Female<br/>
          <input type="submit" value="Submit" onClick={()=>console.log(value)}/>
        </form>
      </center>
    </div>
  )
}


export default App;
