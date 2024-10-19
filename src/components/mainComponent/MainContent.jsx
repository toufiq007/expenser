import BalanceSheet from "../balanceSheet/BalanceSheet";
import ExpenseTracker from "../expenseTracker/ExpenceTracker";
import ExpenseSection from "../expenseSection/ExpenseSection";
import IncomeSection from "../IncomeSection/IncomeSection";
import { useState } from "react";
import {
  initialExpenseData,
  initialFormData,
  initialIncomeData,
} from "../../utils/utils";

const MainContent = () => {
  const [incomeList, setIncomeList] = useState(initialIncomeData);
  const [expenseList, setExpenseList] = useState(initialExpenseData);
  const [activeTab, setActiveTab] = useState("expense");
  const [formData, setFormData] = useState(initialFormData);

  //  this is the balance sheet calculation
  const totalIncome = incomeList.reduce((acc, prev) => {
    return acc + parseInt(prev.amount);
  }, 0);
  const totalExpense = expenseList.reduce((acc, prev) => {
    return acc + parseInt(prev.amount);
  }, 0);
  const tatalBalance = totalIncome - totalExpense;

  //  adding or editing the expenses
  const handleAddOrEditExpense = (newExpenseData) => {
    const isExist = expenseList.find(
      (expense) => expense.id === newExpenseData.id
    );
    if (isExist) {
      setExpenseList((prev) =>
        prev.map((expense) =>
          expense.id === newExpenseData.id ? { ...newExpenseData } : expense
        )
      );
    } else {
      setExpenseList((prev) => [
        ...prev,
        { ...newExpenseData, id: crypto.randomUUID() },
      ]);
    }
  };
  //   adding ro editing the incomes
  const handleAddOrEditIncome = (newIncomeData) => {
    const isExist = incomeList.find((income) => income.id === newIncomeData.id);
    if (isExist) {
      setIncomeList((prev) =>
        prev.map((income) =>
          income.id === newIncomeData.id ? { ...newIncomeData } : income
        )
      );
    } else {
      setIncomeList((prev) => [
        ...prev,
        { ...newIncomeData, id: crypto.randomUUID() },
      ]);
    }
  };
  //   delete the income
  const handleDeleteIncome = (id) => {
    const updateIncome = incomeList.filter((income) => income.id !== id);
    setIncomeList(updateIncome);
  };
  //   delete the expense
  const handleDeleteExpense = (id) => {
    const updateIncome = expenseList.filter((income) => income.id !== id);
    setExpenseList(updateIncome);
  };
  //   set the update expense
  const handleFindUpdateExpense = (expense) => {
    setActiveTab("expense");
    setFormData(expense);
  };
  //   set the update income
  const handleFindUpdateIncome = (income) => {
    setActiveTab("income");
    setFormData(income);
  };

  //   sorting the income or expense list
  const lowToHighSort = (unsortedList, sortCondition, dataList) => {
    if (sortCondition === "lowtohigh" && dataList === "incomeList") {
      const sortedList = unsortedList.sort(
        (a, b) => parseInt(a.amount) - parseInt(b.amount)
      );
      setIncomeList((prev) => [...sortedList]);
    }
    if (sortCondition === "lowtohigh" && dataList === "expenseList") {
      const sortedList = unsortedList.sort(
        (a, b) => parseInt(a.amount) - parseInt(b.amount)
      );
      setExpenseList((prev) => [...sortedList]);
    }
  };

  const highToLowSort = (unsortedList, sortCondition, dataList) => {
    if (sortCondition === "highToLow" && dataList === "incomeList") {
      const sortedList = unsortedList.sort(
        (a, b) => parseInt(b.amount) - parseInt(a.amount)
      );
      setIncomeList((prev) => [...sortedList]);
    }
    if (sortCondition === "highToLow" && dataList === "expenseList") {
      const sortedList = unsortedList.sort(
        (a, b) => parseInt(b.amount) - parseInt(a.amount)
      );
      setExpenseList((prev) => [...sortedList]);
    }
  };

  return (
    <>
      <main className="relative mx-auto mt-10 w-full max-w-7xl">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ExpenseTracker
            formData={formData}
            setFormData={setFormData}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            handleAddOrEditExpense={handleAddOrEditExpense}
            handleAddOrEditIncome={handleAddOrEditIncome}
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
                incomeList={incomeList}
                lowToHighSort={lowToHighSort}
                highToLowSort={highToLowSort}
                handleFindUpdateIncome={handleFindUpdateIncome}
                handleDeleteIncome={handleDeleteIncome}
              />
              <ExpenseSection
                expenseList={expenseList}
                lowToHighSort={lowToHighSort}
                highToLowSort={highToLowSort}
                handleFindUpdateExpense={handleFindUpdateExpense}
                handleDeleteExpense={handleDeleteExpense}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainContent;
