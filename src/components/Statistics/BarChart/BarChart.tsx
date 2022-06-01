import React from "react";
import { Chart } from "react-google-charts";
import "./BarChart.css"

export const data = [
  ["Mês", "Quantidade"],
  ["Jan", 40],
  ["Fev",  68],
  ["Mar", 63],
  ["Abr",  45],
  ["Mai",  72],
  ["Jun",  55],
  ["Jul",  81],
  ["Ago",  24],
  ["Set",  98],
  ["Out",  26],
  ["Nov",  47],
  ["Dez",  57],

];

export const options = {
  chart: {
    title: "Retenção total de clientes",
    subtitle: "Total: 553",
  },
};

export function BarChart() {
  return (
    <>
    <h4></h4>
    <div id='barChart'>
    <div id='chartBar'>
    <Chart
          style={{marginLeft:'90px'}}
          chartType="Bar"
          width="772px"
          height="399px"
          data={data}
          options={options}
        />
    </div>
    </div>
    </>
  );
}
