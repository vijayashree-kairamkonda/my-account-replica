import styled from "@emotion/styled";
import Person3RoundedIcon from "@mui/icons-material/Person3Rounded";
import {
  Card,
  CardHeader,
  Grid,
  FormControl,
  Typography,
  Stack,
} from "@mui/material";
import Icon from "@mui/material/Icon";
import { StyledLabel } from "../../components/styledComponents";
import { StyledElement } from "./AccBillingPref";

export interface InputProps {
  margin?: boolean;
}

export const AccountProfile = () => {
  return (
    <>
      <StyledCard>
        <CardHeader
          avatar={
            <StyledIcon>
              <Person3RoundedIcon />
            </StyledIcon>
          }
          title={<StyledTitle>Profile</StyledTitle>}
        />
        <Grid container direction="row">
          <Grid item sm={12} md={12} lg={6}>
            <FormControl fullWidth>
              <StyledLabel>Phone Number</StyledLabel>
              <StyledInput />
            </FormControl>
          </Grid>
          <Grid item sm={12} md={12} lg={6}>
            <FormControl fullWidth>
              <StyledLabel>Email Address</StyledLabel>
              <StyledInput />
            </FormControl>
          </Grid>
          <Grid item sm={12} md={12} lg={6}>
            <FormControl fullWidth>
              <Stack
                direction="row"
                justifyContent={"space-between"}
                width="95%"
              >
                <StyledLabel>Password </StyledLabel>
                <StyledElement variant="inherit">Change password</StyledElement>
              </Stack>
              <StyledInput type="password" />
            </FormControl>
          </Grid>
        </Grid>
      </StyledCard>
    </>
  );
};

export const StyledIcon = styled(Icon)(({ theme }) => ({
  color: "green",
  border: "1px solid green",
  borderRadius: "50%",
  padding: "5px",
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: "0.5rem",
  marginTop: "3rem",
  padding: " 0.5rem ",
  paddingBottom: "3rem",
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "600",
  padding: "0.5rem 0",
}));

export const StyledInput = styled("input")<InputProps>(({ theme, margin }) => ({
  borderRadius: "0.5rem",
  fontSize: "1.2rem",
  outline: "none",
  padding: "1rem",
  margin: margin ? "0.7rem 0rem" : "1rem",
  width: "85%",
  border: "1px solid #ececec",
  backgroundColor: " #f6f6f6",
}));
