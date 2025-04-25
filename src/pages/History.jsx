// src/pages/History.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const History = ({ data, clearData }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  const handleClearClick = () => {
    clearData();
  };

  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-4xl space-y-6">
        <h2 className="text-3xl font-semibold text-center text-purple-800 mb-6">
          Historial de Transacciones
        </h2>
        <div className="space-y-4">
          {data.months.length > 0 ? (
            data.months.map((month, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-between items-center p-4 bg-purple-50 rounded-lg shadow-sm hover:bg-purple-100 transition duration-300"
              >
                <p className="text-lg font-medium text-purple-700">
                  <strong>{month}</strong>
                </p>
                <div className="text-sm text-gray-600">
                  <p>
                    Ingreso:{" "}
                    <span className="font-bold text-green-600">
                      {data.incomes[index]} €
                    </span>
                  </p>
                  <p>
                    Gasto:{" "}
                    <span className="font-bold text-red-600">
                      {data.expenses[index]} €
                    </span>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No hay historial de transacciones.
            </p>
          )}
        </div>

        <div className="mt-8 text-center space-x-4 flex flex-wrap justify-center gap-4">
          <button
            onClick={handleBackClick}
            className="bg-purple-800 text-white py-2 px-6 rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
          >
            Volver a la página de inicio
          </button>
          <button
            onClick={handleClearClick}
            className="bg-red-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-500 transition duration-300"
          >
            Borrar historial
          </button>
        </div>
      </div>
    </div>
  );
};

export default History;
