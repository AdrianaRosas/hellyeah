import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Sections from './Sections'

import Caracterizacion from './Caracterizacion'
import EsculturaFigura from './EstulturaFigura'
import Filmacion from './Filmacion'
import ImAction from './ImAction'
import ImLatex from './ImLatex'
import '../Gallery/Sidebar.css'

function Sidebar() {
  return (
    <BrowserRouter>
      <div className="contain-sectiontwo">
          <Sections/>
          <Switch>
            <div className="contenido">
            <Route path="/caracterizacion" component={Caracterizacion} />
            <Route path="/escultura" component={EsculturaFigura} />
            <Route path="/filmacion" component={Filmacion} />
            <Route path="/action" component={ImAction} />
            <Route path="/latex" component={ImLatex} />
            </div>
          </Switch>
      </div>
    </BrowserRouter>
  );
}


export default Sidebar;






