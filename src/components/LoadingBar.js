import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const SECOND_INTERVALS = 5;

export default function LoadingBar({ seconds = 15, onTimerEnd }) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === 100) {
          setTimeout(onTimerEnd);
          clearInterval(timer);
        }
        const intervalValue = 100 / seconds / SECOND_INTERVALS;
        return Math.min(prevProgress + intervalValue, 100);
      });
    }, 1000 / SECOND_INTERVALS);

    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Box sx={{ width: "100%", marginTop: "16px" }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}
