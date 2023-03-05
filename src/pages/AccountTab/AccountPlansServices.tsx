import RoomServiceIcon from "@mui/icons-material/RoomService";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  CardHeader,
  Grid,
  FormControl,
  Stack,
  CardContent,
} from "@mui/material";
import { StyledLabel } from "../../components/styledComponents";
import {
  StyledCard,
  StyledIcon,
  StyledTitle,
  StyledInput,
} from "./AccountProfile";
import { StyledElement } from "./AccBillingPref";

export const AccountPlansServices = () => {
  return (
    <>
      <StyledCard>
        <CardHeader
          avatar={
            <StyledIcon>
              <RoomServiceIcon />
            </StyledIcon>
          }
          title={<StyledTitle>Plans and Services</StyledTitle>}
        />
        <br />
        <Grid container direction="row" rowSpacing={3}>
          <Grid item sm={12} md={12} lg={6}>
            <FormControl fullWidth>
              <Stack
                direction="row"
                justifyContent={"space-between"}
                width="95%"
              >
                <StyledLabel>Ziply Fiber Green plan </StyledLabel>
                <StyledElement variant="inherit">Plan Details</StyledElement>
              </Stack>
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
                <StyledLabel>Account Number </StyledLabel>
                <StyledElement variant="inherit">show</StyledElement>
              </Stack>
              <StyledInput />
            </FormControl>
          </Grid>
          <Grid item>
            <Stack direction="row" width="100%" spacing={20}>
              <StyledElement variant="inherit">
                <StyledLabel>Link Another Account</StyledLabel>
              </StyledElement>
              <StyledElement>
                <ArrowForwardIosIcon />
              </StyledElement>
            </Stack>
          </Grid>
        </Grid>
      </StyledCard>
    </>
  );
};
