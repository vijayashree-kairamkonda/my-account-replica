import { GiLindenLeaf } from "react-icons/gi";
import {
  BoxContent,
  StyledAlert,
  StyledClose,
} from "./CustomModal/CustomModalStlyes";
import { Snackbar } from "@mui/material";

export const CustomSnackbar = ({ visible, snack }: any) => {
  const vertical = "top";
  const horizontal = "center";
  return (
    <Snackbar
      color="success"
      anchorOrigin={{ vertical, horizontal }}
      open={visible}
      onClose={() => snack(false)}
      key={"top" + "center"}
      autoHideDuration={2000}
    >
      <StyledAlert severity="success" variant="filled" icon={<GiLindenLeaf />}>
        <BoxContent paddingRight={true}>
          <StyledClose onClick={() => snack(false)} />
          Enrolled in Paperless Billing.
        </BoxContent>
      </StyledAlert>
    </Snackbar>
  );
};
