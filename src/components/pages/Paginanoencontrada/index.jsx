import React from "react"
import "../../../components/Dibujo/index"
import Dibujo from "../../../components/Dibujo/index";
import "../../../components/Navegacion/index";
import Navegacion from "../../../components/Navegacion/index";
import Pie from "../../../components/Pie/index";

const PageNotFound = () => (
  <>
    <header class="cab"> <Dibujo/> <Navegacion/> </header>
    <h1>PageNotFound</h1>
    <footer> <Pie/> </footer>
  </>
)

export default PageNotFound