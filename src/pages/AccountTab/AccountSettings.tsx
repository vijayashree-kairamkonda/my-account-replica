import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { CardHeader, Grid, Stack } from "@mui/material";
import { StyledLabel } from "../../components/styledComponents";
import { StyledCard, StyledIcon, StyledTitle } from "./AccountProfile";
import { StyledElement } from "./AccBillingPref";

export const AccountSettings = () => {
  return (
    <>
      <StyledCard>
        <CardHeader
          avatar={
            <StyledIcon iconColor="green">
              <SettingsSuggestIcon />
            </StyledIcon>
          }
          title={<StyledTitle>Settings</StyledTitle>}
        />
        <br />
        <Grid
          container
          direction="row"
          rowSpacing={6}
          justifyContent="space-between"
          pr={2}
        >
          <Grid item>
            <Stack direction="row" width="100%" spacing={25}>
              <StyledElement variant="inherit">
                <StyledLabel>Notifications</StyledLabel>
              </StyledElement>
              <StyledElement>
                <ArrowForwardIosIcon />
              </StyledElement>
            </Stack>
          </Grid>
          <Grid item>
            <Stack direction="row" width="100%" spacing={15}>
              <StyledElement variant="inherit">
                <StyledLabel>Marketing Communications</StyledLabel>
              </StyledElement>
              <StyledElement>
                <ArrowForwardIosIcon />
              </StyledElement>
            </Stack>
          </Grid>{" "}
          <Grid item>
            <Stack direction="row" width="100%" spacing={30}>
              <StyledElement variant="inherit">
                <StyledLabel>Face ID</StyledLabel>
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
