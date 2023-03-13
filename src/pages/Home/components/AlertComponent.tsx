import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import {
  Alert,
  styled,
  Box,
  Stack,
  Icon,
  Badge,
  IconButton,
} from "@mui/material";
import { StyledLink } from "../../../components/Header";
import { StyledIcon, StyledTitle } from "../../AccountTab/AccountProfile";
import { VscClose } from "react-icons/vsc";
import { StyledElement } from "../../AccountTab/AccBillingPref";
import CloseIcon from "@mui/icons-material/Close";

export interface AlertProps {
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  error?: boolean;
}

export const AlertComponent = ({ type }: any) => {
  return (
    <>
      {type === "primary" && (
        <Box>
          <NotificationAlert
            primary
            icon={
              <Badge
                variant="dot"
                color="error"
                overlap="circular"
                badgeContent=" "
              >
                <StyledIcon iconColor="primary">
                  <NotificationsOutlinedIcon />
                </StyledIcon>
              </Badge>
            }
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                // onClick={() => {}}
              >
                <CloseBtn />
              </IconButton>
            }
          >
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <p>You have not verified your mobile number 1112223333.</p>
              <StyledElement> Verify now </StyledElement>
            </Stack>
          </NotificationAlert>
        </Box>
      )}
      {type === "success" && (
        <Box>
          <NotificationAlert
            icon={
              <Badge
                variant="dot"
                color="error"
                overlap="circular"
                badgeContent=" "
              >
                <StyledIcon iconColor="green">
                  <NotificationsOutlinedIcon />
                </StyledIcon>
              </Badge>
            }
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                // onClick={() => {}}
              >
                <CloseBtn />
              </IconButton>
            }
          >
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <p>Payment Success.</p>
              <StyledElement> View Bill Invoice </StyledElement>
            </Stack>
          </NotificationAlert>
        </Box>
      )}
      {type === "error" && (
        <Box>
          <NotificationAlert
            error
            icon={
              <Badge
                variant="dot"
                color="error"
                overlap="circular"
                badgeContent=" "
              >
                <StyledIcon iconColor="error">
                  <NotificationsOutlinedIcon />
                </StyledIcon>
              </Badge>
            }
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                // onClick={() => {}}
              >
                <CloseBtn />
              </IconButton>
            }
          >
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <p>Payment Due.</p>
              <StyledElement> Pay now </StyledElement>
            </Stack>
          </NotificationAlert>
        </Box>
      )}
      {type === "secondary" && (
        <Box>
          <NotificationAlert
            secondary
            icon={
              <Badge
                variant="dot"
                color="error"
                overlap="circular"
                badgeContent=" "
              >
                <StyledIcon iconColor="secondary">
                  <NotificationsOutlinedIcon />
                </StyledIcon>
              </Badge>
            }
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                // onClick={() => {}}
              >
                <CloseBtn />
              </IconButton>
            }
          >
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <p>Update your payment method.</p>
              <StyledElement> Update now </StyledElement>
            </Stack>
          </NotificationAlert>
        </Box>
      )}
    </>
  );
};

export const NotificationAlert = styled(Alert)<AlertProps>(
  ({ theme, primary, secondary, error }) => ({
    backgroundColor: "white",
    boxShadow: "0px 0px 5px 0px rgb(193, 193, 193)",
    borderRadius: 8,
    borderLeft: primary
      ? "6px solid #d9dd3a"
      : secondary
      ? "6px solid #9747ff"
      : error
      ? "6px solid red"
      : "6px solid green",
    alignItems: "center",
    marginTop: 14,
    padding: 5,
    lineHeight: 0,
  })
);

export const CloseBtn = styled(CloseIcon)(({ theme }) => ({
  cursor: "pointer",
  marginRight: 4,
  fontSize: "14px",
}));
