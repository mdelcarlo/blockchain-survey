import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ModalNoAnswers({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => {};
}) {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"You haven't answered the survey"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Please take your time to answer
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Accept
        </Button>
      </DialogActions>
    </Dialog>
  );
}
