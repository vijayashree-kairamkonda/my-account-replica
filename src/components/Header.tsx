import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton, Stack, styled } from "@mui/material";
import { StyledBar, StyledImg } from "./styledComponents";
import { toAbsoluteUrl } from "../constants";
import { NavList } from "./NavList";
import { NavProps } from "./NavList";
import { Link, Outlet } from "react-router-dom";
import { StyledP } from "./shared/CustomModal/CustomModalStlyes";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

interface LinkProps {
  nav: boolean;
}

export const Header = () => {
  const navLinks: NavProps[] = [
    { name: " Home", link: "/home", icon: <HomeOutlinedIcon /> },
    { name: "Billing", link: "/billing", icon: <MonetizationOnOutlinedIcon /> },
    {
      name: "Account",
      link: "/account",
      icon: <AccountCircleOutlinedIcon />,
    },
    {
      name: "Notifications",
      link: "/notifications",
      icon: <CircleNotificationsOutlinedIcon />,
    },
    { name: "Support", link: "/support", icon: <HelpOutlineOutlinedIcon /> },
  ];

  return (
    <>
      <StyledBar>
        <CustomBar>
          <Bar green></Bar>
          <Bar lightBlue></Bar>
          <Bar darkBlue></Bar>
        </CustomBar>
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

export interface BarProps {
  lightBlue?: boolean;
  darkBlue?: boolean;
  green?: boolean;
}

export const StyledLink = styled(Link)<LinkProps>(({ theme, nav }) => ({
  color: nav ? "blue" : "black",
  textDecoration: "none",
  fontSize: "1rem",
}));

export const CustomBar = styled("div")(({ theme }) => ({
  display: "flex",
  margin: "0 0.2rem",
  position: "sticky",
  top: 0,
  zIndex: 1,
}));

export const Bar = styled("div")<BarProps>(
  ({ theme, lightBlue, darkBlue, green }) => ({
    width: green ? "50%" : lightBlue ? "30%" : darkBlue ? "20%" : 0,
    backgroundColor: lightBlue ? "#02caff" : darkBlue ? "darkblue" : "green",
    height: 6,
    borderTopLeftRadius: green ? 4 : 0,
    borderBottomLeftRadius: green ? 4 : 0,
    borderTopRightRadius: darkBlue ? 4 : 0,
    borderBottomRightRadius: darkBlue ? 4 : 0,
  })
);
