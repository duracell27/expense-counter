import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";

const History = () => {
  const { transactionHistory } = useGlobalContext();
  const [...history] = transactionHistory();
  return (
    <HistoryStyled>
      <h2>Недавні транзакції</h2>
      {history.map((item) => (
        <div key={item._id} className="history-item">
          <p
            style={{
              color: item.type === "expense" ? "red" : "var(--color-green)",
            }}
          >
            {item.title}
          </p>
          <p
            style={{
              color: item.type === "expense" ? "red" : "var(--color-green)",
            }}
          >
            {item.type === "expense" ? `-${item.amount}` : `+${item.amount}`}
          </p>
        </div>
      ))}
    </HistoryStyled>
  );
};
const HistoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .history-item {
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export default History;
