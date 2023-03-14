import "../../src/assets/fonts/fonts.css";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    color: black;
    margin: 0;
    background: #ffffff
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
    backgroundColor:  "#ffffff" ,
    paddingHorizontal: "80px",
    position: "sticky",
    top:0,
    zIndex:1,
    boxShadow: boxShadow ? "0px 3px 4px 0px rgb(193, 193, 193)" : "none",
  })
);

export const StyledImg = styled.span`
  padding: 0.5rem 0;
`;

export const StyledLabel = styled.label`
  margin: 0 1rem;
  cursor: "pointer";
`;
