import BalanceSheet from "../balanceSheet/BalanceSheet";
import ExpenseTracker from "../expenseTracker/ExpenceTracker";
import ExpenseSection from "../expenseSection/ExpenseSection";
import IncomeSection from "../IncomeSection/IncomeSection";
import { useState } from "react";
import { initialExpenseData, initialIncomeData } from "../../utils/utils";

const MainContent = () => {
  const [incomeList, setIncomeList] = useState(initialIncomeData);
  const [expenseList, setExpenseList] = useState(initialExpenseData);

  const totalIncome = incomeList.reduce((acc, prev) => {
    return acc + parseInt(prev.amount);
  }, 0);

  const totalExpense = expenseList.reduce((acc, prev) => {
    return acc + parseInt(prev.amount);
  }, 0);

  const tatalBalance = totalIncome - totalExpense;

  const handleAddExpense = (expenseData) => {
    setExpenseList((prev) => [...prev, expenseData]);
    console.log(
      expenseData,
      "this is the incomeData inside handleAddIncome function"
    );
  };

  const handleAddIncome = (incomeData) => {
    setIncomeList((prev) => [...prev, incomeData]);
  };

  console.log({ totalIncome, totalExpense });

  return (
    <>
      <main className="relative mx-auto mt-10 w-full max-w-7xl">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ExpenseTracker
            handleAddExpense={handleAddExpense}
            handleAddIncome={handleAddIncome}
          />
          <div className="lg:col-span-2">
            <BalanceSheet
              totalExpense={totalExpense}
              totalIncome={totalIncome}
              totalBalance={tatalBalance}
            />

            {/* <!-- List Down --> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
              <IncomeSection incomeList={incomeList} />
              <ExpenseSection expenseList={expenseList} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainContent;
