import { Alert, Select } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { SnackbarOrigin } from "@mui/material/Snackbar";

interface ButtonProps {
  margin?: boolean;
  padding?: boolean;
  textColor?: string;
  backgroundColor?: string;
  border?: string;
}

interface BoxProps {
  paddingRight?: boolean;
}

interface TextProps {
  color?: string;
}

export interface State extends SnackbarOrigin {
  visible: boolean;
}

export const StyledSelect = styled(Select)(({ theme }) => ({
  borderRadius: "0.5rem",
  fontSize: "1.2rem",
  outline: "none",
  // padding: "0rem",
  // margin: margin ? "0.7rem 0rem" : "1rem",
  width: "90%",
  border: "1px solid #ececec",
  backgroundColor: " #f6f6f6",
}));

export const StyledAlert = styled(Alert)(({ theme }) => ({
  padding: "1.5rem 2rem",
  borderRadius: "1.5rem",
}));

export const BoxContent = styled("div")<BoxProps>(
  ({ theme, paddingRight }) => ({
    paddingLeft: 3,
    paddingTop: 3,
    paddingRight: paddingRight ? "4rem" : 0,
  })
);

export const StyledP = styled("p")<TextProps>(({ theme, color }) => ({
  color: color === "green" ? "green" : "black",
  padding: "0.5rem 0",
}));

export const CustomButton = styled("button")<ButtonProps>(
  ({ theme, textColor, backgroundColor, border, margin, padding }) => ({
    color:
      textColor === "red"
        ? "red"
        : textColor === "grey"
        ? "grey"
        : theme.palette.primary.main,
    letterSpacing: "1px",
    fontSize: "1rem",
    backgroundColor:
      backgroundColor === "green"
        ? "green"
        : backgroundColor === "white"
        ? "white"
        : "#026ce3",
    border:
      border === "red"
        ? "1px solid red"
        : border === "grey"
        ? "1px solid grey"
        : "none",
    padding: padding ? "1.2rem 3rem" : "1.5rem 5rem",
    borderRadius: "2.5rem",
    margin: margin ? " 1.5rem 2rem" : "2rem 2rem",
    cursor: "pointer",
  })
);

export const StyledClose = styled(CloseIcon)(({ theme }) => ({
  position: "absolute",
  right: 0,
  margin: "-0.9rem 1rem -1rem auto",
  cursor: "pointer",
}));

export const BoxStyle1 = {
  position: "absolute" as "absolute",
  display: "flex",
  flexDirection: "column",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "60%",
  bgcolor: "background.paper",
  borderRadius: "1.5rem",
  boxShadow: 24,
  p: 5,
  overflowY: "scroll",
};

export const BoxStyle2 = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "25%",
  height: "25%",
  bgcolor: "background.paper",
  borderRadius: "1.5rem",
  boxShadow: 24,
  p: 5,
  paddingBottom: 10,
};

export const BoxStyle3 = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "25%",
  bgcolor: "background.paper",
  borderRadius: "1.5rem",
  boxShadow: 24,
  p: 5,
  paddingBottom: 4,
};

export const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
