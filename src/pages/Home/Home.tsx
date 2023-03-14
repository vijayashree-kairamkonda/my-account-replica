import styled from "@emotion/styled";
import { Box, Breadcrumbs, Container, Icon, Stack } from "@mui/material";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { TiWiFi } from "react-icons/ti";
import { useLocation } from "react-router-dom";
import { StyledLink } from "../../components/Header";
import { CustomButton } from "../../components/shared/CustomModal/CustomModalStlyes";
import { StyledIcon, StyledTitle } from "../AccountTab/AccountProfile";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { AlertComponent } from "./components/AlertComponent";
import { TotalBalanceCard } from "./components/TotalBalanceCard";
import LocalOfferSharpIcon from "@mui/icons-material/LocalOfferSharp";
import { OfferCarousel } from "./components/OfferCarousel";
import { StyledElement } from "../AccountTab/AccBillingPref";

export const Home = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/").slice(1).join();

  const breadcrumbs = [
    <StyledLink nav={false} key="1" color="inherit" to="/">
      My Account
    </StyledLink>,
    <StyledLink nav={false} key="2" color="inherit" to="/account/profile">
      {path}
    </StyledLink>,
  ];
  return (
    <>
      <Container maxWidth="xl" sx={{ position: "relative" }}>
        <Breadcrumbs separator="›" sx={{ marginY: 2 }}>
          {breadcrumbs}
        </Breadcrumbs>
        <StyledStack>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <StyledIcon backgroundColor="green" padding={true}>
              <TiWiFi />
            </StyledIcon>
            <p>Hey there! Your Ziply internet is online</p>
          </Stack>
          <Box>
            <CustomButton
              backgroundColor="white"
              textColor="blue"
              border="blue"
              padding={true}
              margin={true}
            >
              Having issues?
            </CustomButton>
            <CustomButton padding={true} margin={true}>
              Run a speed test
            </CustomButton>
          </Box>
        </StyledStack>
        <Stack
          direction={"row"}
          spacing={62}
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <StyledIcon iconColor="green">
              <FaFileInvoiceDollar />
            </StyledIcon>
            <StyledTitle>Total Balance</StyledTitle>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <StyledIcon iconColor="green">
              <NotificationsOutlinedIcon />
            </StyledIcon>
            <StyledTitle>Recent Notifications</StyledTitle>
          </Stack>
        </Stack>
        <Stack direction={"row"}>
          <StyledElement sx={{ marginLeft: "auto" }} variant="inherit">
            Mark all as read
          </StyledElement>
        </Stack>
        <Stack direction={"row"} spacing={5}>
          <Box width="50%">
            <TotalBalanceCard />
          </Box>
          <Box width="60%">
            <AlertComponent type={"primary"} />
            <AlertComponent type={"success"} />
            <AlertComponent type={"error"} />
            <AlertComponent type={"secondary"} />
          </Box>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} spacing={2} paddingY={2}>
          <StyledIcon iconColor="green">
            <LocalOfferSharpIcon />
          </StyledIcon>
          <StyledTitle>Special Offers</StyledTitle>
        </Stack>
        <OfferCarousel />
      </Container>
    </>
  );
};

export const StyledStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
  padding: "0 1.2rem",
  justifyContent: "space-between",
  boxShadow: "0px 0px 5px 0px rgb(193, 193, 193)",
  borderRadius: 6,
  margin: "2rem 0",
}));
