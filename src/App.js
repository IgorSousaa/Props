import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import img from "./img/download.jpg";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header title="Estudar" />
        <Main nome="Igor" idade="18" queroestudar="Props" />
        <img src={img} alt="Imagem sobre One Piece" />
      </>
    );
  }
}
