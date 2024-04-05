import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/layouts";
import { useGlobalContext } from "../../context/globalContext";
import Form from "../Form/Form";
import IncomeItem from "../IncomeItem/IncomeItem";
import { dollar } from "../../utils/icons";
import ExpenseForm from "./ExpenseForm";

const Expenses = () => {
  const { getExpenses, deleteExpense, expenses, totalExpense } = useGlobalContext();
  useEffect(() => {
    getExpenses();
  }, []);
  return (
    <IncomesStyled>
      <InnerLayout>
        <h1>Розходи</h1>
        <h2 className="total-income">
          Загальні розходи:
          <span>
            {dollar} {totalExpense()}
          </span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <ExpenseForm />
          </div>
          <div className="incomes">
            {expenses.map((expense) => {
              const { _id, title, amount, date, category, description,type } =
                expense;
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  date={date}
                  type={type}
                  description={description}
                  amount={amount}
                  category={category}
                  indicatorColor="var(--color-delete)"
                  deleteItem={deleteExpense}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomesStyled>
  );
};
const IncomesStyled = styled.div`
  display: flex;
  overflow: auto;
  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-delete);
    }
  }
  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
  }
`;
export default Expenses;
