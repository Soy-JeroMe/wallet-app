import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Graphs = ({ data, addData }) => {
  const [formData, setFormData] = useState({
    month: "",
    income: "",
    expenses: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { month, income, expenses } = formData;
    if (month && income && expenses) {
      addData(month, parseInt(income), parseInt(expenses));
      setFormData({ month: "", income: "", expenses: "" });
    }
  };

  const chartData = {
    labels: data.months,
    datasets: [
      {
        label: "Ingresos",
        data: data.incomes,
        backgroundColor: "rgba(34, 197, 94, 0.7)",
        borderRadius: 10,
      },
      {
        label: "Gastos",
        data: data.expenses,
        backgroundColor: "rgba(248, 113, 113, 0.7)",
        borderRadius: 10,
      },
    ],
  };

  return (
    <section className="py-16 bg-purple-50" id="grafico">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-purple-900 text-center mb-6">
          Gráfico de Ingresos y Gastos
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Bar data={chartData} />
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-8 bg-white p-6 rounded-lg shadow-lg space-y-4"
        >
          <input
            type="text"
            name="month"
            placeholder="Mes (Ej: Enero)"
            value={formData.month}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            name="income"
            placeholder="Ingresos"
            value={formData.income}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            name="expenses"
            placeholder="Gastos"
            value={formData.expenses}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition"
          >
            Añadir datos
          </button>
        </form>
      </div>
    </section>
  );
};

export default Graphs;
