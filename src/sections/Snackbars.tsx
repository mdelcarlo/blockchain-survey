import React from "react";
import { Alert, Snackbar } from "@mui/material";

const Snackbars = ({
  showSuccesSubmit,
  setShowSuccesSubmit,
  showErrorSubmit,
  setShowErrorSubmit,
}: {
  showSuccesSubmit: boolean;
  setShowSuccesSubmit: (showSuccesSubmit: boolean) => {};
  showErrorSubmit: boolean;
  setShowErrorSubmit: (showErrorSubmit: boolean) => {};
}) => {
  return (
    <Snackbar
      open={showSuccesSubmit || showErrorSubmit}
      autoHideDuration={3000}
      onClose={() => setShowSuccesSubmit(false)}
    >
      <Alert
        onClose={() => setShowErrorSubmit(false)}
        severity={showSuccesSubmit ? "success" : "error"}
        sx={{ width: "100%" }}
      >
        {showSuccesSubmit
          ? "Answers have been succesfully submitted!"
          : "Submittion have failed"}
      </Alert>
    </Snackbar>
  );
};

export default Snackbars;
