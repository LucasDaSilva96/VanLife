import "../../css/HostIncome.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Jul",
    income: 400,
    price: 720,
    date: "1/12/22",
  },
  {
    name: "Aug",
    income: 100,
    price: 560,
    date: "10/11/22",
  },
  {
    name: "Sep",
    income: 300,
    price: 980,
    date: "23/11/22",
  },
  {
    name: "Oct",
    income: 250,
    price: 0,
    date: "1/5/22",
  },
  {
    name: "Nov",
    income: 150,
    price: 0,
    date: "2/5/22",
  },
  {
    name: "Dev",
    income: 50,
    price: 0,
    date: "4/8/22",
  },
];

function Income() {
  return (
    <div className="income-container">
      <h1>Income</h1>
      <p>
        Last <strong>30 days</strong>
      </p>
      <h2>$2,260</h2>

      <div className="income-diagram-wrapper">
        <ResponsiveContainer width="100%" height="80%">
          <BarChart width={100} height={40} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="income" fill="#FF8C38" />
            <XAxis dataKey="name" />
            <YAxis dataKey="income" />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="transactions-wrapper">
        <div className="transactions-heading-box">
          <h3>Your transactions ({data.length})</h3>
          <p>
            Last <strong>30 days</strong>
          </p>
        </div>

        <div className="transaction-box-wrapper">
          {data.map((value) => {
            return <TransactionsBox data={value} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Income;

function TransactionsBox({ data }) {
  return (
    <div className="transaction-box">
      <h4>${data.price}</h4>
      <p>{data.date}</p>
    </div>
  );
}
