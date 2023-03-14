import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { Link, useLocation } from "react-router-dom";

export type NavProps = {
  name: string;
  link: string;
  icon?: any;
};

export interface NavBarProps {
  navLinks: NavProps[];
}

interface ActiveTabProp {
  active: boolean;
}

export const NavList = ({ navLinks }: NavBarProps) => {
  const { pathname } = useLocation();
  return (
    <>
      {navLinks.map(({ name, link, icon }) => {
        return (
          <NavigateLink
            to={link}
            key={name}
            active={pathname === link || pathname.includes(link)}
          >
            <StyledNavLinks>
              {icon}
              {name}
            </StyledNavLinks>
            {pathname === link || pathname.includes(link) ? (
              <StyledDiv></StyledDiv>
            ) : null}
          </NavigateLink>
        );
      })}
    </>
  );
};

export const StyledDiv = styled(Typography)(({ theme }) => ({
  border: "3px solid green",
  marginTop: "18px",
  borderRadius: "4px",
}));

export const NavigateLink = styled(Link)<ActiveTabProp>(
  ({ theme, active }) => ({
    cursor: "pointer",
    textDecoration: "none",
    color: active ? "green" : "black",
    height: active ? "16px" : "16px",
    padding: "0 0.5rem",
  })
);

export const StyledNavLinks = styled("h3")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10px",
}));
