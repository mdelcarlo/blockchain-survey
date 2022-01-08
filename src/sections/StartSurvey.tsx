import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const connectWallet =
  (setCurrentAccount: (account: string) => {}) => async () => {
    try {
      //@ts-ignore
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

const StartSurvey = ({
  currentAccount,
  setCurrentAccount,
  isRopsten,
  isOpenSurvey,
  setIsOpenSurvey,
  onSurveyStart,
}: {
  currentAccount: string;
  setCurrentAccount: (account: string) => {};
  isRopsten: boolean;
  isOpenSurvey: boolean;
  setIsOpenSurvey: (account: boolean) => {};
  onSurveyStart: () => {};
}) => {
  const startSurvey = () => {
    setIsOpenSurvey(true);
    onSurveyStart();
  };

  return (
    <Box sx={{ minWidth: 275, margin: "64px auto 0", width: 600 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" component="div">
            Answer this awesome survey
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Go throught the survey and win some QUIZ
          </Typography>
        </CardContent>

        <CardMedia
          component="img"
          height="240"
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.98Rjp6Ow0gN8MRgavidYggHaDt%26pid%3DApi&f=1"
          alt="Survey"
        />
        <CardContent>
          {!currentAccount && (
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Connect your Ethereum wallet and answer the survey!
            </Typography>
          )}
          <Stack>
            {!currentAccount && (
              <Button
                variant="contained"
                disabled={!isRopsten}
                onClick={connectWallet(setCurrentAccount)}
              >
                Connect Wallet
              </Button>
            )}
            {currentAccount && (
              <Button
                variant="contained"
                disabled={isOpenSurvey}
                onClick={startSurvey}
              >
                <span> Start survey</span>
              </Button>
            )}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default StartSurvey;
