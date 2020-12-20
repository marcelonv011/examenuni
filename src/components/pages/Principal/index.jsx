import React from "react";
import './index.css';
import "../../../components/Dibujo/index"
import Dibujo from "../../../components/Dibujo/index";
import "../../../components/Navegacion/index";
import Navegacion from "../../../components/Navegacion/index";
import "../../../components/Formjson/index";
import Formjson from "../../../components/Formjson/index";
import Pie from "../../../components/Pie/index";


function Principal() {
  return (
    <div >
      <header class="cab"> <Dibujo/> <Navegacion/> </header>
      <section class="aba"> <img src="nuevaluna.jpg" alt="nuevaluna" class="nueva"/> <p class="texto">La Nueva Luna era uma banda de cumbia argentina, considerada aí como um dos principais expoentes deste subgênero. </p>
      <p class="texto"> Foi formada em 1995, na província de Misiones, Argentina; depois de seus dois membros principais.</p><p class="texto"> Marcelo Chino González e Ramón "Mago" Benítez, deixaram seu antigo grupo conhecido como "Siete Lunas".</p>
      <Formjson/>
      </section>
      <footer> <Pie/> </footer>
    </div>
  );
}

export default Principal;