import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import SalaryIncreaseLetter from "../../Letter/SalaryIncreaseLetter";

export default function SalaryIncreaseDialog(props) {
  const { setDialogShowLetter, dialogShowLetter } = props;
  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={dialogShowLetter}
      onClose={() => setDialogShowLetter(false)}
    >
      <DialogContent>
        <SalaryIncreaseLetter />
      </DialogContent>

      <DialogActions>
        <Button variant="contained" color="secondary">
          Hủy
        </Button>
        <Button variant="contained" color="primary">
          Trình lãnh đạo
        </Button>
      </DialogActions>
    </Dialog>
  );
}
