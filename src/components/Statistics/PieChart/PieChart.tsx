import React from "react";
import { Chart } from "react-google-charts";
import "./PieChart.css"

export const data = [
  ["Pizza", "Popularity"],
  ["Inicial", 37],
  ["Total", 63],

];
export const dataRetencao = [
  ["Pizza", "Popularity"],
  ["Inicial", 48],
  ["Total", 52],

];

export const options = {
  title: "Retorno com Programa",
  sliceVisibilityThreshold: 0.2 // 20%,
};
export const optionsRetencao = {
  title: "Retenção total de Clientes",
  sliceVisibilityThreshold: 0.2 // 20%,
};

export function PieChart() {
  return (
    <>
    <h4></h4>
    <div id='grafico'>
    <div id='chart'>
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"370px"}
      height={"354px"}
    />
    </div>
    <div id='chart'>
    <Chart
      chartType="PieChart"
      data={dataRetencao}
      options={optionsRetencao}
      width={"370px"}
      height={"354px"}
    />
    </div>
    </div>
    </>
  );
}
