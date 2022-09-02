import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  color: blue;
  display: flex;
  justify-content: space-evenly;
`;

export default class Main extends React.Component {
  render() {
    return (
      <>
        <div>
          <Ul>
            <li>Nome:{this.props.nome}</li>
            <li>Idade:{this.props.idade}</li>
            <li>Quero estudar:{this.props.queroestudar}</li>
          </Ul>
        </div>
      </>
    );
  }
}
