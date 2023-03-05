import styled from "@emotion/styled";
import DescriptionSharpIcon from "@mui/icons-material/DescriptionSharp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  CardHeader,
  Grid,
  FormControl,
  Typography,
  Stack,
} from "@mui/material";
import { StyledLink } from "../../components/Header";
import { StyledLabel } from "../../components/styledComponents";
import {
  StyledCard,
  StyledIcon,
  StyledInput,
  StyledTitle,
} from "./AccountProfile";
import { useState } from "react";
import { CustomModal } from "../../components/shared/CustomModal/CustomModal";
import { CustomSnackbar } from "../../components/shared/CustomSnackBar";

export const AccountBillingPreference = () => {
  const [manageModal, setManageModal] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  const [paperlessModal, setPaperlessModal] = useState(false);
  const [snackBarVisibility, setSnackBarVisibility] = useState(false);
  const [mode, setMode] = useState("Turn On");
  const [cancelMode, setCancelMode] = useState(false);

  const handleCloseModal = () => {
    setPaymentModal(false);
    setPaperlessModal(false);
    setManageModal(false);
    setCancelMode(false);
  };

  return (
    <>
      <StyledCard>
        <CardHeader
          avatar={
            <StyledIcon>
              <DescriptionSharpIcon />
            </StyledIcon>
          }
          title={<StyledTitle>Billing Preference</StyledTitle>}
        />
        <StyledSubtitle>Billing Address</StyledSubtitle>
        <Grid container direction="row" rowSpacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <FormControl fullWidth>
              <StyledLabel>Address Line 1</StyledLabel>
              <StyledInput />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <FormControl fullWidth>
              <StyledLabel>Address Line 2</StyledLabel>
              <StyledInput />
            </FormControl>
          </Grid>
          <Grid container sx={{ borderBottom: "1px solid #ededed" }} width="100%">
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <FormControl fullWidth>
                <StyledLabel>State</StyledLabel>
                <StyledInput />
              </FormControl>
            </Grid>
            <Grid item  xs={12} sm={12} md={12} lg={6}>
              <FormControl fullWidth>
                <StyledLabel>Zipcode</StyledLabel>
                <StyledInput />
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <FormControl fullWidth>
              <Stack
                direction="row"
                justifyContent={"space-between"}
                width="95%"
              >
                <StyledLabel>AutoPay </StyledLabel>
                <StyledElement
                  variant="inherit"
                  onClick={() => {
                    setManageModal(true);
                  }}
                >
                  Manage
                </StyledElement>
              </Stack>
              <StyledInput />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <FormControl fullWidth>
              <Stack
                direction="row"
                justifyContent={"space-between"}
                width="95%"
              >
                <StyledLabel>Paperless Billing </StyledLabel>
                {mode === "Turn On" ? (
                  <StyledElement
                    variant="inherit"
                    onClick={() => {
                      setPaperlessModal(true);
                    }}
                  >
                    {mode}
                  </StyledElement>
                ) : mode === "Turn Off" ? (
                  <StyledElement
                    variant="inherit"
                    onClick={() => {
                      setCancelMode(true);
                    }}
                  >
                    {mode}
                  </StyledElement>
                ) : null}
              </Stack>
              <StyledInput />
            </FormControl>
          </Grid>
          <Grid item>
            <Stack direction="row" width="100%" spacing={15}>
              <StyledElement
                onClick={() => {
                  setPaymentModal(true);
                }}
              >
                <StyledLabel>Manage Payment Method</StyledLabel>
              </StyledElement>
              <StyledLink to={""} nav={true}>
                <ArrowForwardIosIcon />
              </StyledLink>
            </Stack>
          </Grid>
        </Grid>
        <CustomModal
          open={manageModal}
          onClose={handleCloseModal}
          type={"manage"}
        />
        <CustomModal
          open={paymentModal}
          onClose={handleCloseModal}
          type={"payment"}
        />
        <CustomModal
          open={paperlessModal}
          onClose={handleCloseModal}
          type={"paperless"}
          snack={setSnackBarVisibility}
          mode={setMode}
        />
        <CustomModal
          open={cancelMode}
          onClose={handleCloseModal}
          type={"cancel mode"}
          mode={setMode}
        />
        <CustomSnackbar
          visible={snackBarVisibility}
          snack={setSnackBarVisibility}
        />
      </StyledCard>
    </>
  );
};

export const StyledSubtitle = styled("h3")(({ theme }) => ({
  margin: " 1rem ",
}));

export const StyledElement = styled(Typography)(({ theme }) => ({
  color: "blue",
  cursor: "pointer",
}));
