import React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";

import MenuInicial from '../telas/MenuInicial';
import Cadastrar from '../telas/Cadastrar';
import Destino from '../telas/Destino';
import Passagem from "../telas/Passagem";
import Login from "../telas/Login";
const Rotas = {

  MenuInicial: {
    nome: "MenuInicial",
    screen: MenuInicial,
  },
  
  Cadastrar: {
    nome: "Cadastrar",
    screen: Cadastrar,
  },  

  Destino:{
    nome: "Destino",
    screen: Destino,
  },

  Passagem:{
    nome: "Passagem",
    screen: Passagem,
  },

  Login:{
    nome: "Login",
    screen: Login,
  },
  
  
  
};
// Criar as Rotas
const Navegacao = createSwitchNavigator(Rotas);
// Passar para o App
export default createAppContainer(Navegacao);

