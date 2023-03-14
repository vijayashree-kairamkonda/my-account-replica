import { Container, Stack, styled } from "@mui/material";
import { NavList } from "../../components/NavList";
import Divider from "@mui/material/Divider";
import { Outlet } from "react-router-dom";

export type accountProps = {
  name: string;
  link: string;
};

export const AccountContainer = () => {
  const accountLinks: accountProps[] = [
    { name: "Profile", link: "/account/profile" },
    { name: "Billing Preference", link: "/account/preferences" },
    { name: "Plans & Services", link: "/account/plans-services" },
    { name: "Settings", link: "/account/settings" },
  ];

  return (
    <>
      <Container maxWidth="md">
        <Stack direction={"row"} spacing={16} p={0} flexWrap={"wrap"}>
          {/* <NavList navLinks={accountLinks} /> */}
        </Stack>
        {/* <StyledDivider /> */}
        <Outlet />
      </Container>
    </>
  );
};

export const StyledDivider = styled(Divider)(({ theme }) => ({
  marginTop: "1.75rem",
  border: "1px solid grey",
  [theme.breakpoints.down(927)]: {
    marginTop:"3rem"
  },
}));
