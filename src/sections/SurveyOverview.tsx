import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import {
  AppBar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const Transition = React.forwardRef(function Transition(props, ref) {
  // @ts-ignore
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SurveyOverview({
  onSubmit,
  onCancel,
  isOpen,
  isLoading,
  questionsAndAnswers = [],
}: {
  isOpen: boolean;
  isLoading: boolean;
  questionsAndAnswers: any[];
  onSubmit: () => {};
  onCancel: () => {};
}) {
  return (
    <Dialog
      fullScreen
      open={isOpen}
      onClose={onCancel}
      //@ts-ignore
      TransitionComponent={Transition}
      disableEscapeKeyDown={isLoading}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onCancel}
            aria-label="close"
            disabled={isLoading}
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Survey overview
          </Typography>
          <Button
            autoFocus
            color="inherit"
            onClick={onSubmit}
            disabled={isLoading}
          >
            <LoadingButton loading={isLoading} />
            Submit
          </Button>
        </Toolbar>
      </AppBar>
      <List>
        {questionsAndAnswers.map(({ question, answer }) => (
          <ListItem button>
            <ListItemText primary={question} secondary={answer} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}
