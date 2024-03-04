import React from 'react'

export default function Login() {
  return (
    <div>
         <h1>FaceBook Login</h1>
      <div><input type="text" placeholder="Enter the Username"></input></div><br></br>
      <div><input type="text" placeholder="Enter the Password"></input></div><br></br>
      <button type="submit">LOGIN</button><br></br>
      <h2>Or</h2>
      <a href='https://www.facebook.com/'>Create Account</a>
    </div>
  )
}
