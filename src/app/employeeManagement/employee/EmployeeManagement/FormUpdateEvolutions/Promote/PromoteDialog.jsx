import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import React from "react";
import PromoteLetter from "../../Letter/PromoteLetter";

export default function PromoteDialog(props) {
  const { setDialogShowLetter, dialogShowLetter } = props;
  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={dialogShowLetter}
      onClose={() => setDialogShowLetter(false)}
    >
      <DialogTitle>Salary Increase</DialogTitle>

      <DialogContent>
        <PromoteLetter />
      </DialogContent>

      <DialogActions>
        {" "}
        <Button className="button-cancel" variant="contained" color="error">
          Hủy
        </Button>
        <Button variant="contained" color="primary">
          Trình lãnh đạo
        </Button>
      </DialogActions>
    </Dialog>
  );
}
