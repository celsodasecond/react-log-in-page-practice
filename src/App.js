import LoginForm from "./components/loginForm";
import React, {useState} from 'react';


function App() {
  const adminUser = {
    username: "hiwelcome",
    password: "hola123"
  }

  const [user, setUser] = useState({username: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
  }

  const Logout = () => {
    console.log("Logout");
  }

  return (
    <div>
      
      {(user.username != "") ? (
        <div className="Welcome">
          <h2>Welcome, <span>{user.username}</span></h2>
          <button>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}

    
    </div>
  );
}

export default App;
