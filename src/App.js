import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Login } from "./components/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import { Signup } from "./components/Signup";
import { AuthProvider } from "./contexts/AuthContext";


function App() {

  return (
    
        <AuthProvider>

          <Container className="d-flex align-items-center justify-content-center "
          style={{minHeight: '100vh', border: '1px solid black'}}>
            <Routes>
              <Route path="/signup" Component={Signup}  />
              <Route path="/login" Component={Login}  />
              <Route path="/" element={ <PrivateRoute> <Dashboard/>  </PrivateRoute>   }  />
            </Routes>
            
          </Container>
         
        </AuthProvider>
  );
}

export default App;
