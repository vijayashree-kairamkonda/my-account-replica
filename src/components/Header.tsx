import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton, Stack, styled } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { StyledBar, StyledImg } from "./styledComponents";
import { toAbsoluteUrl } from "../constants";
import { NavList } from "./NavList";
import { NavProps } from "./NavList";
import { Link, Outlet } from "react-router-dom";
import { StyledP } from "./shared/CustomModal/CustomModalStlyes";

interface LinkProps {
  nav: boolean;
}

export const Header = () => {
  const navLinks: NavProps[] = [
    { name: " Home", link: "/home" },
    { name: "Billing", link: "/billing" },
    {
      name: "Account",
      link: "/account",
    },
    { name: "Notifications", link: "/notifications" },
    { name: "Support", link: "/support" },
  ];

  return (
    <>
      <StyledBar>
        <StyledBar>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            flexWrap={"wrap"}
            sx={{
              paddingLeft: 2,
              paddingRight: 2,
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <p>Services</p>
              <StyledP color="green">My Account</StyledP>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <IconButton color="inherit" size="small">
                <PersonIcon
                  sx={{
                    color: "green",
                    // display: { xs: "none", sm: "none", md: "block" },
                  }}
                />
              </IconButton>
              <StyledP color="green">Welcome,Victoria</StyledP>
              <StyledLink nav={false} to={""}>
                Sign Out
              </StyledLink>
            </Stack>
          </Stack>
        </StyledBar>
        <StyledBar boxShadow={true}>
          <Stack
            direction="row"
            spacing={4}
            alignItems="center"
            justifyContent={"space-between"}
            flexWrap={"wrap"}
            sx={{ pl: 2, pr: 2 }}
          >
            <Stack
              direction={"row"}
              spacing={4}
              alignItems="center"
              flexWrap={"wrap"}
            >
              <StyledImg>
                <img
                  src={toAbsoluteUrl("/assets/icon/ziply-logo.png")}
                  alt="ziply-logo"
                />
              </StyledImg>
              <NavList navLinks={navLinks} />
            </Stack>
          </Stack>
          <Outlet />
        </StyledBar>
      </StyledBar>
    </>
  );
};

export const StyledLink = styled(Link)<LinkProps>(({ theme, nav }) => ({
  color: nav ? "blue" : "black",
  textDecoration: "none",
  fontSize: "1rem",
}));
