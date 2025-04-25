import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Balance from "./components/Balance";
import Graphs from "./components/Graphs";
import Navbar from "./components/Navbar";
import History from "./pages/History";
import Toast from "./components/Toast"; // importamos Toast

function App() {
  // Estado para los datos mensuales
  const [monthlyData, setMonthlyData] = useState(() => {
    const savedData = localStorage.getItem("walletData");
    return savedData
      ? JSON.parse(savedData)
      : { months: [], incomes: [], expenses: [] };
  });

  // Estado para el presupuesto mensual
  const [budget, setBudget] = useState(0);

  // Estado para los mensajes del Toast
  const [toastMessage, setToastMessage] = useState("");

  // Guardar los datos en el localStorage cada vez que se actualicen
  useEffect(() => {
    localStorage.setItem("walletData", JSON.stringify(monthlyData));
  }, [monthlyData]);

  // Ocultar el mensaje Toast después de 3 segundos
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  // Función para agregar un nuevo mes de datos
  const addData = (month, income, expense) => {
    setMonthlyData((prev) => ({
      months: [...prev.months, month],
      incomes: [...prev.incomes, income],
      expenses: [...prev.expenses, expense],
    }));
    setToastMessage("¡Datos guardados!");
  };

  // Función para borrar todos los datos
  const clearData = () => {
    setMonthlyData({
      months: [],
      incomes: [],
      expenses: [],
    });
    localStorage.removeItem("walletData");
    setToastMessage("Historial eliminado");
  };

  // Calcular los ingresos, gastos y porcentaje de presupuesto utilizado
  const totalIncome = monthlyData.incomes.reduce((a, b) => a + b, 0);
  const totalExpenses = monthlyData.expenses.reduce((a, b) => a + b, 0);
  const percentageUsed = budget
    ? ((totalExpenses / budget) * 100).toFixed(2)
    : 0;

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Pantalla de Balance y Gráficos */}
              <Balance data={monthlyData} onClear={clearData} />
              <Graphs data={monthlyData} addData={addData} />

              {/* Componente del presupuesto mensual */}
              <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                <h3 className="text-xl font-semibold text-gray-800">
                  Presupuesto Mensual
                </h3>
                <div className="mt-4">
                  <input
                    type="number"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="Establece tu presupuesto"
                    className="p-2 border rounded w-full mb-4"
                  />
                  <p className="text-lg text-gray-700">
                    Presupuesto:{" "}
                    <span className="font-semibold text-green-600">
                      ${budget}
                    </span>
                  </p>
                  <p className="text-lg text-gray-700">
                    Gastos Totales:{" "}
                    <span className="font-semibold text-red-600">
                      ${totalExpenses}
                    </span>
                  </p>
                  <p className="text-lg text-gray-700">
                    Porcentaje de Presupuesto Utilizado:{" "}
                    <span className="font-semibold text-yellow-600">
                      {percentageUsed}%
                    </span>
                  </p>
                  {percentageUsed > 90 && (
                    <p className="text-red-600 mt-2 font-semibold">
                      ¡Cuidado! Estás cerca de exceder tu presupuesto.
                    </p>
                  )}
                  {percentageUsed >= 100 && (
                    <p className="text-red-600 mt-2 font-semibold">
                      ¡Presupuesto excedido! Debes ajustar tus gastos.
                    </p>
                  )}
                </div>
              </div>
            </>
          }
        />
        <Route
          path="/history"
          element={<History data={monthlyData} clearData={clearData} />}
        />
      </Routes>
      {toastMessage && <Toast message={toastMessage} />}
    </>
  );
}

export default App;
