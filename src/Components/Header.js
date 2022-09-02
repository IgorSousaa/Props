import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  color: red;
`;

export default class Header extends React.Component {
  render() {
    return (
      <>
        <H1>{this.props.title}</H1>
      </>
    );
  }
}
