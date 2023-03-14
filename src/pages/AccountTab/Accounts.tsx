import { Breadcrumbs, Box } from "@mui/material";
import { styled } from "@mui/system";
import { useLocation } from "react-router-dom";
import { StyledLink } from "../../components/Header";
import { AccountContainer } from "./AccountContainer";

export const Account = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/").slice(2).join();

  const breadcrumbs = [
    <StyledLink nav={false} key="1" color="inherit" to="/">
      Account
    </StyledLink>,
    <StyledLink nav={false} key="2" color="inherit" to="/account/profile">
      {path}
    </StyledLink>,
  ];

  return (
    <Container>
      <Breadcrumbs separator="›">{breadcrumbs}</Breadcrumbs>
      {/* <Content>
        <p>
          Hi Victoria, welcome to Ziply Fiber! You have not verified your email
          ziplygignow@gmail.com.
          <StyledLink nav={true} to={""}>
            Resend verification email.
          </StyledLink>
          You have not verified your mobile number 1112223333.
        </p>
        <StyledLink nav={true} to={""}>
          Verify now
        </StyledLink>
      </Content>
      <br /> */}
      <AccountContainer />
    </Container>
  );
};

export const Container = styled(Box)(({ theme }) => ({
  padding: "1rem",
}));

export const Content = styled(Box)(({ theme }) => ({
  backgroundColor: "lightblue",
  padding: "1rem 0.5rem",
  margin: "1rem 0",
  borderRadius: "0.5rem",
}));
