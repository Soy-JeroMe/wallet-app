import React, { useState } from "react";

const Budget = ({ totalExpenses, setBudget, budget }) => {
  const [inputBudget, setInputBudget] = useState(budget || 0);

  const handleSaveBudget = () => {
    setBudget(inputBudget); // Guardamos el presupuesto ingresado en el estado
  };

  const calculateBudgetUsage = () => {
    if (budget === 0) return 0; // Si no hay presupuesto, el uso es 0
    return (totalExpenses / budget) * 100; // Calculamos el porcentaje utilizado
  };

  const budgetUsage = calculateBudgetUsage();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-8">
      <h3 className="text-xl font-semibold text-gray-800">
        Presupuesto Mensual
      </h3>
      <div className="flex items-center mt-4">
        <input
          type="number"
          className="border p-2 rounded-lg mr-4"
          placeholder="Ingresa tu presupuesto"
          value={inputBudget}
          onChange={(e) => setInputBudget(e.target.value)}
        />
        <button
          onClick={handleSaveBudget}
          className="bg-purple-800 text-white py-2 px-6 rounded-lg hover:bg-purple-700"
        >
          Guardar
        </button>
      </div>
      {budget > 0 && (
        <>
          <p className="mt-4 text-gray-600">
            Tu presupuesto mensual es: ${budget.toLocaleString()}
          </p>
          <p className="mt-2 text-gray-600">
            Has utilizado el {budgetUsage.toFixed(2)}% de tu presupuesto.
          </p>
          {budgetUsage > 100 && (
            <p className="text-red-600 mt-2">¡Has superado tu presupuesto!</p>
          )}
          {budgetUsage > 80 && budgetUsage <= 100 && (
            <p className="text-yellow-600 mt-2">
              ¡Cuidado! Estás cerca de alcanzar tu presupuesto.
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default Budget;
