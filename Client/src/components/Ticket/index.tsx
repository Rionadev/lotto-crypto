import { P } from "../Heading";
import * as S from "./styles";
import { motion } from "framer-motion";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Image from "next/image";

interface TicketProps {
  current: boolean;
  id: any;
  wallet: string;
  finalized: boolean;
  ticketsCount: any;
  isLastsRounds?: boolean;
  ticketsToSale?: any;
  claimed?: boolean;
  isWinner?: boolean;
}

const Ticket = ({
  current,
  id,
  wallet,
  finalized,
  ticketsCount = 0,
  claimed,
  isLastsRounds = false,
  ticketsToSale = 0,
  isWinner = false,
}: TicketProps) => {
  return (
    <>
      {current && (
        <motion.div>
          <S.Container as="div" isWinner={isWinner}>
            {isWinner && (
              <S.WinnerIcon>
                <EmojiEventsIcon
                  sx={{
                    color: "#505050",
                  }}
                />
              </S.WinnerIcon>
            )}
            <Image
              src={"/LottoCrypto.png"}
              alt={"LottoCrypto"}
              width={110}
              height={20}
            />
            <S.Line>
              <S.Label>
                {!isLastsRounds ? "Ticket Owner Wallet" : "Winner"}
              </S.Label>
              <P>{wallet}</P>
            </S.Line>
            <S.Line>
              <S.Label>{!isLastsRounds ? "Ticket ID" : "Round ID"}</S.Label>
              <P>{id?.toString()}</P>
            </S.Line>

            <S.Line>
              <S.Label>Status</S.Label>
              <P>{finalized ? "Finished" : "Not finished"}</P>
            </S.Line>
            {isLastsRounds && (
              <>
                <S.Line>
                  <S.Label>Tickets sold</S.Label>
                  <P>
                    {ticketsCount.toString()}/{ticketsToSale}
                  </P>
                </S.Line>
                <S.Line>
                  <S.Label>Claimed</S.Label>
                  <P>{claimed ? "Yes" : "Not"}</P>
                </S.Line>
              </>
            )}
            <Image
              src={"/logo.png"}
              alt={"LottoCrypto"}
              width={110}
              height={110}
              style={{
                position: "absolute",
                right: "0",
                bottom: "0",
              }}
            />
          </S.Container>
        </motion.div>
      )}
    </>
  );
};

export default Ticket;
