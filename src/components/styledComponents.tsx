import "../../src/assets/fonts/fonts.css";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    color: black;
    margin: 0;
    background: #f2f2f2
  }
  *{
    font-family: Gotham
  }
  h3{
    margin : 0;
  }
  h4{
    margin : 1.5rem 0
  }
`;

interface StyleBarProps {
  boxShadow?: boolean;
  background?: boolean;
}

export const StyledHeader = styled.div`
display : flex,
align-items : center,
justify-content : space-between,
flex-wrap : wrap,
position : sticky
`;

export const StyledBar = styled("section")<StyleBarProps>(
  ({ theme, boxShadow, background }) => ({
    background: background ? "lightgrey" : "white",
    paddingHorizontal: "80px",
    position: "sticky",
    boxShadow: boxShadow ? "0px 8px 10px 0px rgb(193, 193, 193)" : "none",
  })
);

export const StyledImg = styled.span`
  padding: 0.5rem 0;
`;

export const StyledLabel = styled.label`
  margin: 0 1rem;
  cursor: "pointer";
`;
