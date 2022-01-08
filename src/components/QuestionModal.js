import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import LoadingBar from "./LoadingBar";
import styled from "styled-components";

const CenteredDiv = styled.div`
  margin-bottom: 16px;
  text-align: center;
  height: 240px;
  overflow: hidden;
  border-radius: 4px;
`;

const ContainerWidthImage = styled.img`
  width: 100%;
`;

export default function QuestionModal({
  isOpen,
  text,
  image,
  onEnd,
  selectedOption,
  setSelectedOption,
  options,
  lifetimeSeconds = 5,
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const onCancel = () => onEnd({ isCancel: true });

  return (
    <Dialog
      fullScreen={fullScreen}
      fullWidth
      maxWidth="sm"
      open={isOpen}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{text}</DialogTitle>
      <DialogContent>
        <CenteredDiv>
          <ContainerWidthImage src={image} alt="" />
        </CenteredDiv>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label={text}
            value={selectedOption}
            name="radio-buttons-group"
          >
            {options.map(({ id, text }) => (
              <FormControlLabel
                value={id}
                control={<Radio onClick={() => setSelectedOption(id)} />}
                label={text}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <LoadingBar seconds={lifetimeSeconds} onTimerEnd={onEnd} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={onEnd} disabled={!selectedOption} autoFocus>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
