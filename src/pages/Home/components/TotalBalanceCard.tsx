import { Box, Stack, styled } from "@mui/material";
import Icon from "@mui/material/Icon";
import {
  CustomButton,
  StyledP,
} from "../../../components/shared/CustomModal/CustomModalStlyes";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";

export const TotalBalanceCard = () => {
  return (
    <>
      <Box
        sx={{
          boxShadow: "0px 0px 4px 0px rgb(193, 193, 193)",
          borderRadius: 2,
        }}
        p={2}
        marginY={2}
      >
        <StyledP color="green" padding={true}>
          Ziply Fiber Green Plan
        </StyledP>
        <h3>$60.00</h3>
        <Stack direction={"row"} alignItems={"center"} paddingY={3}>
          <StyledTick>
            <DoneOutlinedIcon fontSize="inherit" />
          </StyledTick>
          Autopay scheduled for Oct 18
        </Stack>
        <Box>
          <CustomButton
            backgroundColor="white"
            textColor="blue"
            border="blue"
            padding={true}
            margin={true}
          >
            Manage Autopay
          </CustomButton>
          <CustomButton padding={true} margin={true}>
            View Bill Details
          </CustomButton>
        </Box>
      </Box>
    </>
  );
};

export const StyledTick = styled(Icon)(({ theme }) => ({
  backgroundColor: "green",
  color: "white",
  borderRadius: "50%",
  fontSize: "small",
  padding: "2px",
  marginRight: "6px",
}));
