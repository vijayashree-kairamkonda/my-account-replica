import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Grid,
  FormControl,
  Stack,
  Modal,
  Box,
  FormControlLabel,
} from "@mui/material";
import {
  BoxContent,
  BoxStyle1,
  BoxStyle2,
  BoxStyle3,
  CustomButton,
  IOSSwitch,
  StyledClose,
  StyledP,
} from "./CustomModalStlyes";
import { StyledInput } from "../../../pages/AccountTab/AccountProfile";
import { StyledElement } from "../../../pages/AccountTab/AccBillingPref";
import { StyledLabel } from "../../styledComponents";
import { useState } from "react";
import "../../../../src/Global.css";

export const CustomModal = ({ open, onClose, type, snack, mode }: any) => {
  const [disabled, setDisabled] = useState(true);
  const [value, setValue] = useState("manage");

  const handleEditClick = () => {
    setDisabled(!disabled);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <>
        {type === "manage" && (
          <Box sx={BoxStyle1}>
            <StyledClose onClick={onClose} />
            <BoxContent>
              <h3>Manage AutoPay</h3>
              <div>
                <FormControlLabel
                  sx={{ m: 0 }}
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  label={<h4>AutoPay</h4>}
                  labelPlacement="start"
                />
              </div>
              <div>
                Here are your current settings for AutoPay.You can make changes
                to your settings.
              </div>
            </BoxContent>
            <Grid
              container
              direction="row"
              sx={{ mv: 2, mt: 3, pl: 0 }}
              spacing={2}
              columnSpacing={5}
              flexWrap={"wrap"}
            >
              <Grid item sm={12} md={12} lg={6}>
                <FormControl fullWidth>
                  <label>Phone Number</label>
                  <StyledInput
                    margin={true}
                    disabled={disabled}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </FormControl>
              </Grid>
              <Grid item sm={12} md={12} lg={6}>
                <FormControl fullWidth>
                  <label>Payment Method</label>
                  <StyledInput
                    margin={true}
                    disabled={disabled}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </FormControl>
              </Grid>
              <Grid item sm={12} md={12} lg={6}>
                <FormControl fullWidth>
                  <label>Payment to be applied</label>
                  <StyledInput
                    margin={true}
                    disabled={disabled}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </FormControl>
              </Grid>
              <Grid item sm={12} md={12} lg={6}>
                <FormControl fullWidth>
                  <label>Amount</label>
                  <StyledInput
                    margin={true}
                    disabled={disabled}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </FormControl>
              </Grid>
              {disabled ? (
                <CustomButton onClick={handleEditClick}>
                  Edit Auto Pay
                </CustomButton>
              ) : (
                <>
                  <CustomButton backgroundColor="green">
                    Save AutoPay
                  </CustomButton>
                  <CustomButton
                    backgroundColor="white"
                    textColor="grey"
                    border="grey"
                    onClick={() => {
                      setDisabled(!disabled);
                    }}
                  >
                    Cancel
                  </CustomButton>
                </>
              )}
            </Grid>
          </Box>
        )}
        {type === "payment" && (
          <Box sx={BoxStyle1}>
            <StyledClose onClick={onClose} />
            <BoxContent>
              <h3>Manage Payment Method</h3>
              <div>
                <h4>Your saved cards and bank accounts</h4>
              </div>
              <StyledP>
                Lorem ipsum dolor sit amet,tantas persequeris at eum, cu ignota
                deleniti qui. Nostro ponderum.
              </StyledP>
            </BoxContent>
            <Grid
              container
              direction="row"
              sx={{ mv: 2, mt: 3, pl: 0 }}
              spacing={2}
            >
              <Grid item sm={12} md={12} lg={6}>
                <FormControl fullWidth>
                  <label>Payment Method 1</label>
                  <StyledInput margin={true} />
                </FormControl>
              </Grid>
              <Grid item lg={2.5}>
                <CustomButton margin={true} padding={true}>
                  Edit
                </CustomButton>
              </Grid>
              <Grid item lg={2.5}>
                <CustomButton
                  textColor={"red"}
                  backgroundColor={"white"}
                  border={"red"}
                  margin={true}
                  padding={true}
                >
                  Delete
                </CustomButton>
              </Grid>
              <Grid item sm={12} md={12} lg={6}>
                <FormControl fullWidth>
                  <label>Payment Method 2</label>
                  <StyledInput margin={true} />
                </FormControl>
              </Grid>
              <Grid item lg={2.5}>
                <CustomButton margin={true} padding={true}>
                  Edit
                </CustomButton>
              </Grid>
              <Grid item lg={2.5}>
                <CustomButton
                  textColor={"red"}
                  backgroundColor={"white"}
                  border={"red"}
                  margin={true}
                  padding={true}
                >
                  Delete
                </CustomButton>
              </Grid>
              <Grid item lg={12}>
                <Stack direction="row" width="100%" spacing={15}>
                  <StyledElement>
                    <StyledLabel>Add Payment Method</StyledLabel>
                  </StyledElement>
                  <StyledElement>
                    <ArrowForwardIosIcon />
                  </StyledElement>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        )}

        {type === "paperless" && (
          <>
            <Box sx={BoxStyle2}>
              <StyledClose onClick={onClose} />
              <BoxContent>
                <h2>Sign Up for Paper less Billing</h2>
                <div>
                  <h4>Receive Bill by Mail</h4>
                </div>
                <div>Turn On Paperless Billing</div>
                <CustomButton
                  margin={true}
                  onClick={() => {
                    snack(true);
                    onClose();
                    mode("Turn Off");
                  }}
                >
                  Turn On
                </CustomButton>
              </BoxContent>
            </Box>
          </>
        )}

        {type === "cancel mode" && (
          <>
            <Box sx={BoxStyle3}>
              <StyledClose onClick={onClose} />
              <BoxContent>
                <h2>Cancel Paperless Billing</h2>

                <div>Are you sure you want to cancel Paperless Billing?</div>
                <CustomButton
                  margin={true}
                  onClick={() => {
                    onClose();
                    mode("Turn On");
                  }}
                >
                  Yes , Cancel
                </CustomButton>
              </BoxContent>
            </Box>
          </>
        )}
      </>
    </Modal>
  );
};
