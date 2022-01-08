import * as React from "react";
import { Chip } from "@mui/material";
import styled from "styled-components";
import { AccountBalanceWallet } from "@mui/icons-material";

const TopBar = styled.div`
  margin: 12px 8px;
  text-align: right;
`;

const VoidCard = styled.div`
  margin: 12px 8px;
  width: 100%;
  height: 50px;
`;

const Card = styled.div`
  display: inline-flex;
  padding: 12px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Wallet = styled.div`
  display: inline-flex;
  font-weight: 600;
  padding: 0 8px;
`;

const Balance = styled.div`
  padding-left: 4px;
  line-height: 24px;
`;

export default ({ account, balance }: { account: string; balance: number }) => {
  const startAddress = Array.from(account)
    .filter((a, i) => i < 5)
    .join("");

  const endAddress = Array.from(account)
    .filter((a, i) => i > 30)
    .join("");
  return (
    <TopBar>
      {account ? (
        <Card>
          <Wallet>
            <AccountBalanceWallet />
            <Balance>
              <span> {balance} QUIZ</span>
            </Balance>
          </Wallet>
          <Chip size="small" label={`${startAddress}...${endAddress}`} />
        </Card>
      ) : (
        <VoidCard />
      )}
    </TopBar>
  );
};
