import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
   
      <ul id="button">
        <nav className="menu">
          <Link  className="link" to="/Principal">
          <li> cadastro e nois  </li>
          </Link>
          <Link  className="link" to="/servicios">
          <li>   Serviços  </li>
          </Link>
          <Link  className="link" to="/musicas">
          <li>   musicas  </li>
          </Link>
          <Link  className="link" to="/Principal">
          <li>   nosotros  </li>
          </Link>
        </nav>
     </ul>
    
  );
}

export default Menu;