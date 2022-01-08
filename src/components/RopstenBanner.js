import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

const connectRopsten = async (setIsRopsten) => {
  const { ethereum } = window;

  await ethereum.request({ method: "eth_requestAccounts" });
  ethereum
    .request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x3" }],
    })
    .then(() => {
      console.log("set ropsten");
      setIsRopsten(true);
    });
};

const RopstenBanner = ({ isRopsten, setIsRopsten }) => {
  return (
    <>
      {!isRopsten && (
        <Alert
          severity="info"
          action={
            <Button
              variant="outlined"
              onClick={() => connectRopsten(setIsRopsten)}
            >
              Connect
            </Button>
          }
        >
          You need to be conected to ropsten network for this app to work
        </Alert>
      )}
    </>
  );
};

export default RopstenBanner;
