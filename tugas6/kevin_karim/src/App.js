import "./App.css";
import React from "react";
import foto from "./foto.jpg";
import "./css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
    };
  }
  render() {
    const LoginButton = withRouter(({ history }) => (
      <button className='btn btn-outline-primary'onClick={() => { this.setState({ isAuth: true });history.push("/profile");}}>
        Login
      </button>
    ));
    const LogoutButton = withRouter(({ history }) => (
      <button className='btn btn-outline-danger'onClick={() => {this.setState({ isAuth: false });history.push("/login");}}>
        Logout
      </button>
    ));
    const routes = [
      {path: "/",
        exact: true,
        render: () => (
          <div className='text-center container h2 text-danger'>
            <br/>
            <br/>
            <br/>
            Halaman Utama</div>
        ),
      },
      {path: "/login",
        render: () => (
          <div className='container text-center'>
            <br/>
            <br/>
<LoginButton />
          </div>
        ),
      },
      {path: "/profile",
        render: () =>
          this.state.isAuth ? (
            <div className='container text-center'>
              <br/>
              <h2 className='fw-bold'>Profile</h2>
              <br/>
              <img src={foto} />
              <br/>
              <br/>
              <br/>
                <p>Nama                   : Kevin Karim</p>
                <p>NIM                    : 192110801</p>
                <p>Jenis Kelamin          : Laki-laki</p>
                <p>tempat Lahir           : Medan</p> 
               <LogoutButton />
            </div>
          ) : (
            <Redirect to='/login' />
          ),
      },
    ];
    return (
      <Router>
        <div className='container'>
          <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <div className='container'>
              <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <NavLink exact className='nav-link text-info h1' to='/'>Home</NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink to='/profile'className='nav-link text-info h1'activeClassName='active'>Profile</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Switch>
            {routes.map((item, index) => (
              <Route path={item.path} exact={item.exact} render={item.render} />
            ))}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;