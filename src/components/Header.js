import React, { Component } from "react"; 

class Header extends Component {
  render() {
    return (
     <div>
       <nav className="navbar navbar-light">
        <div className="container">
          <a href="#" className="navbar-brand">
            {this.props.appName.toLowerCase()}
          </a>
        </div>
       </nav>
     </div>
    );
  }
}

export default Header;