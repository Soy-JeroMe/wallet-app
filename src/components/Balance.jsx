// src/components/Balance.jsx
import React from "react";

const Balance = ({ data, onClear }) => {
  const totalIncome = data.incomes.reduce((a, b) => a + b, 0);
  const totalExpenses = data.expenses.reduce((a, b) => a + b, 0);
  const currentBalance = totalIncome - totalExpenses;

  return (
    <section id="balance" className="py-12 bg-purple-100">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl font-semibold text-purple-900 mb-6">Balance</h2>
        <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
          <h3 className="text-xl text-gray-800">Saldo Actual</h3>
          <p className="text-4xl font-bold text-purple-800 mt-4">
            ${currentBalance.toLocaleString()}
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-8 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2">
            <h4 className="text-lg text-gray-800">Ingresos</h4>
            <p className="text-xl font-semibold text-green-600">
              ${totalIncome.toLocaleString()}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2">
            <h4 className="text-lg text-gray-800">Gastos</h4>
            <p className="text-xl font-semibold text-red-600">
              ${totalExpenses.toLocaleString()}
            </p>
          </div>
        </div>
        {data.months.length > 0 && (
          <button
            onClick={onClear}
            className="mt-8 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
          >
            Eliminar todos los datos
          </button>
        )}
      </div>
    </section>
  );
};

export default Balance;
