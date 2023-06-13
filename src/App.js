// import { text } from "express";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

function App() {
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated , getAccessTokenSilently} =
    useAuth0();

  function callApi() {
    axios
      .get("http://localhost:4000/")
      .then((response) => console.log(response.data))
      .catch(error=>console.log(error));
  }

  async function callProtectedApi() {

    const token = await getAccessTokenSilently()
    axios({
      method: 'get',
      url: 'http://localhost:4000/protected',
      responseType: 'stream',
      crossdomain: true,
      headers:{
              Authorization:`Bearer ${token}`
            }
    })
      .then(function (response) {
        console.log(response.data)
      });
  }

  return (
    <div className="main">
      <h1>Auth0 Authentication</h1>
      <ul>
        <li>
          <button onClick={loginWithPopup}>Login with popup</button>
        </li>
        <li>
          <button onClick={loginWithRedirect}>Login with redirect</button>
        </li>
        <li>
          <button onClick={logout}>Logout</button>
        </li>
      </ul>
      <h3>User is {isAuthenticated ? "Logged in" : "Not Logged in"}</h3>

      <ul>
        <li>
          <button onClick={callApi}>Call API route</button>
        </li>
        <li>
          <button onClick={callProtectedApi}>Call Protected API route</button>
        </li>
      </ul>

      {isAuthenticated && (
        <div style={{ textAlign: "start" }}>
          <h3>
          Hello {JSON.parse(JSON.stringify(user.name, null, 2))}
          </h3>
          <p>You are {isAuthenticated ? "logged in." : "not logged in."}</p>
        </div>
        
      )}
    </div>
  );
}

export default App;
