import React from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import { dateFormat } from "../../utils/dateFormat";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Chart = () => {
  const { incomes, expenses } = useGlobalContext();

  const data = {
    labels: expenses.map((inc) => {
      return dateFormat(inc.date);
    }),
    datasets: [
      {
        label: "Прибуток",
        data: [
          ...incomes.map((income) => {
            const { amount } = income;
            return amount;
          }),
        ],
        backgroundColor: "green",
        tension: .2
      },
      {
        label: "Витрати",
        data: [
          ...expenses.map((income) => {
            const { amount } = income;
            return amount;
          }),
        ],
        backgroundColor: "red",
        tension: .2
      },
    ],
  };
  return (
    <ChartStyled>
      <Line data={data}/>
    </ChartStyled>
  );
};

const ChartStyled = styled.div`
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  border-radius: 20px;
  
`;

export default Chart;
