import { createContext, useContext, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5050/api/v1";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(false);

//icomes
  const addIncome = async (income) => {
    const response = await axios
      .post(BASE_URL + "/add-income", income)
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  const getIncomes = async () => {
    const response = await axios
      .get(BASE_URL + "/get-incomes")
      .catch((err) => {
        setError(err.response.data.message);
      });
      setIncomes(response.data);
  };

  const deleteIncome = async (id) => {
    const res = await axios.delete(BASE_URL + '/delete-income/' + id);
    getIncomes()
  }

  const totalIncome = () => {
    let totalIncome = 0
    incomes.forEach(income => {
      totalIncome += income.amount
    })
    return totalIncome
  }

  //expense
  const addExpense = async (expense) => {
    const response = await axios
      .post(BASE_URL + "/add-expense", expense)
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  const getExpenses = async () => {
    const response = await axios
      .get(BASE_URL + "/get-expenses")
      .catch((err) => {
        setError(err.response.data.message);
      });
      setExpenses(response.data);
  };

  const deleteExpense = async (id) => {
    const res = await axios.delete(BASE_URL + '/delete-expense/' + id);
    getExpenses()
  }

  const totalExpense = () => {
    let totalExpense = 0
    expenses.forEach(expense => {
      totalExpense += expense.amount
    })
    return totalExpense
  }

  return (
    <GlobalContext.Provider value={{addIncome, getIncomes, incomes, expenses, deleteIncome, totalIncome, addExpense, deleteExpense,getExpenses,totalExpense}}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
