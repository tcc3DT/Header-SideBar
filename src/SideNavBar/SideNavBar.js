import React, { useState } from "react";
import "./SideNavBar.css";

import Grafico from "../assets/grafico.svg";
import Home from "../assets/home.svg";
import Perfil from "../assets/perfil.svg";
import Smile from "../assets/user-regular.svg";
import Senai from "../assets/senai.png";
import Bolinha from "../assets/bolinha.png";
// import Imagem from "../assets/recusar.png"
import Sair from "../assets/sair.svg";

export default function SideNavBar() {

  const menuItems = [
    {
      text: "Perfil",
      icon: Perfil,
    },
    {
      text: "Dashboard",
      icon: Grafico,
    },
    {
      text: "Departamentos",
      icon: Home,
    },
  ];
  const [isExpended, setExpendedState] = useState(false);

  return (
    <div
      className={
        isExpended
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
          {/* {isExpended && (
                        <div className="nav-brand">
                            <img src={Imagem} />
                            <h2>Senai</h2>
                        </div>
                    )} */}
          
            <button
              className={
                isExpended
                  ? "hamburguer hamburguer-in"
                  : "hamburguer hamburguer-out"
              }
              onClick={() => setExpendedState(!isExpended)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <img className="senai-logo" src={Senai} alt="" />
          </div>


        <div className="nav-menu">
        <div className={isExpended ? "bolinha": "bolinha-NX"}>
          <img className="bola"src={Bolinha}></img>
          Serviços
          </div>
          {menuItems.map(({ text, icon }) => (
            <a
              href="#"
              className={isExpended ? "menu-item" : "menu-item menu-item-NX"}
            >
              <div className="casa2">
                <img className="casa" src={icon} alt="" />
              </div>
              {isExpended && <p>{text}</p>}
              {!isExpended && <div className="tooltip">{text}</div>}
            </a>
          ))}
        </div>
      </div>
      <div className="nav-footer">
        {isExpended && (
          <div className="nav-details">
            <img className="carinha" src={Smile} alt="" />
            <div className="nav-footer-info">
              <p className="nav-footer-user-name">Thomaz R.</p>
              <p className="nav-footer-user-position">Visitante -</p>
            </div>
          </div>
        )}
        {isExpended && <img className="logout-icon" src={Sair} alt="" />}
      </div>
    </div>
  );
}
