import BalanceSheet from "../balanceSheet/BalanceSheet";
import ExpenseTracker from "../expenseTracker/ExpenceTracker";
import ExpenseSection from "../expenseSection/ExpenseSection";
import IncomeSection from "../IncomeSection/IncomeSection";
import { useState } from "react";
import { initialExpenseData, initialIncomeData } from "../../utils/utils";

const MainContent = () => {
  const [incomeList, setIncomeList] = useState(initialIncomeData);
  const [expenseList, setExpenseList] = useState(initialExpenseData);
  const [updateExpense, setUpdateExpense] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    category: "",
    amount: 0,
    date: "",
  });

  const totalIncome = incomeList.reduce((acc, prev) => {
    return acc + parseInt(prev.amount);
  }, 0);

  const totalExpense = expenseList.reduce((acc, prev) => {
    return acc + parseInt(prev.amount);
  }, 0);

  const tatalBalance = totalIncome - totalExpense;

  const handleAddExpense = (newExpenseData, isAdd) => {
    console.log(isAdd, "this is the isadd function inside handleAddExpense");
    if (isAdd) {
      setExpenseList((prev) => [...prev, newExpenseData]);
    } else {
      setExpenseList((expenses) =>
        expenses.map((expense) =>
          expense.id === newExpenseData.id ? newExpenseData : expense
        )
      );
    }
  };

  const handleAddIncome = (incomeData) => {
    setIncomeList((prev) => [...prev, incomeData]);
  };

  const handleDeleteIncome = (id) => {
    const updateIncome = incomeList.filter((income) => income.id !== id);
    setIncomeList(updateIncome);
  };
  const handleDeleteExpense = (id) => {
    const updateIncome = expenseList.filter((income) => income.id !== id);
    setExpenseList(updateIncome);
  };

  const handleFindUpdateExpense = (expense) => {
    setUpdateExpense(expense);
    setFormData(expense);
  };

  return (
    <>
      <main className="relative mx-auto mt-10 w-full max-w-7xl">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ExpenseTracker
            handleAddExpense={handleAddExpense}
            handleAddIncome={handleAddIncome}
            formData={formData}
            setFormData={setFormData}
            updateExpense={updateExpense}
          />
          <div className="lg:col-span-2">
            <BalanceSheet
              totalExpense={totalExpense}
              totalIncome={totalIncome}
              totalBalance={tatalBalance}
            />

            {/* <!-- List Down --> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
              <IncomeSection
                handleDeleteIncome={handleDeleteIncome}
                incomeList={incomeList}
              />
              <ExpenseSection
                handleDeleteExpense={handleDeleteExpense}
                expenseList={expenseList}
                handleFindUpdateExpense={handleFindUpdateExpense}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainContent;
