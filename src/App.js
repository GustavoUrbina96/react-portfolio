import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Friends from "./Components/Friends";
import Home from "./Components/Home";
import { Typography, Container} from "@material-ui/core";

function App() {
  return (

    <Router>
      <div>
        <Container maxWidth="lg" className="mt-1">
          <Typography variant="h4" gutterBottom>
            Gustavo Urbina
      </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Software Engineer
      </Typography>
      

      
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Friends/">Friends</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={Home} />
          <Route path="/Friends/" component={Friends} />
        </Container>


      </div>
    </Router>
  );
}

export default App;
