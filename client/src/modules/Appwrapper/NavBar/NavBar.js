import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link} from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
          <nav className="navbar navbar-default navbar-fixed-top">
              <div className="container-fluid">

                  <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                      </button>
                      <a className="navbar-brand" href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png" alt="" className="logo"/></a>
                  </div>

                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav">
                          {/*<li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>*/}

                      </ul>
                      <form className="navbar-form navbar-left">
                          <div className="form-group">
                              <input type="text" className="form-control" placeholder="Search"/>
                          </div>

                      </form>
                      <ul className="nav navbar-nav navbar-right">
                          <li>
                              <Link to="/">Home</Link>
                          </li>
                          <li>
                              <Link to="/jobs">Jobs</Link>
                          </li>
                          <li>
                              <Link to="/messaging">Messaging</Link>
                          </li>
                          <li>
                              <Link to="/mynetwork">Mynetwork</Link>
                          </li>
                          <li>
                              <Link to="/notifications">Notifications</Link>
                          </li>
                          <li className="dropdown">
                              <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown
                                  <span className="caret"></span>
                              </a>
                              <ul className="dropdown-menu">
                                  <li>
                                      <Link to="/">Home</Link>
                                  </li>
                                  <li>
                                      <Link to="/jobs">Jobs</Link>
                                  </li>
                                  <li>
                                      <Link to="/mynetwork">Mynetwork</Link>
                                  </li>
                                  <li role="separator" className="divider"></li>
                                  <li>
                                      <a href="#">Separated link</a>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
        )
    }

}

export default NavBar;
