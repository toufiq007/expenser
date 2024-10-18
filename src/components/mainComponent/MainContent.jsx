import BalanceSheet from "../balanceSheet/BalanceSheet";
import ExpenseTracker from "../expenseTracker/ExpenceTracker";
import ExpenseSection from "../expenseSection/ExpenseSection";
import IncomeSection from "../IncomeSection/IncomeSection";
import { useState } from "react";
import { initialExpenseData, initialIncomeData } from "../../utils/utils";

const MainContent = () => {
  const [incomeList, setIncomeList] = useState(initialIncomeData);
  const [expenseList, setExpenseList] = useState(initialExpenseData);
  const [activeTab, setActiveTab] = useState("expense");
  const [updateExpense, setUpdateExpense] = useState(null);
  const [updateIncome, setUpdateIncome] = useState(null);

  const totalIncome = incomeList.reduce((acc, prev) => {
    return acc + parseInt(prev.amount);
  }, 0);

  const totalExpense = expenseList.reduce((acc, prev) => {
    return acc + parseInt(prev.amount);
  }, 0);

  const tatalBalance = totalIncome - totalExpense;

  const [formData, setFormData] = useState({
    id: "",
    category: "",
    amount: 0,
    date: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  console.log(
    formData,
    "this is the formdata which is sent to the expenseTracker"
  );
  const handleAddOrEditExpense = (newExpenseData) => {
    // Check if the new expense already exists in the list
    const existingExpense = expenseList.find(
      (expense) => expense.id === newExpenseData.id
    );
    if (existingExpense) {
      // Edit the existing expense
      setExpenseList((prevExpenses) =>
        prevExpenses.map((expense) =>
          expense.id === newExpenseData.id ? newExpenseData : expense
        )
      );
    } else {
      // Add the new expense
      setExpenseList((prevExpenses) => [...prevExpenses, newExpenseData]);
    }
  };

  const handleAddOrEditIncome = (newIncomeData) => {
    // Check if the new expense already exists in the list
    const existingIncome = incomeList.find(
      (expense) => expense.id === newIncomeData.id
    );
    if (existingIncome) {
      // Edit the existing expense
      setIncomeList((prevIncomes) =>
        prevIncomes.map((income) =>
          income.id === newIncomeData.id ? newIncomeData : income
        )
      );
    } else {
      // Add the new expense
      setIncomeList((prevIncomes) => [...prevIncomes, newIncomeData]);
    }
  };

  // const handleAddOrEditIncome = (newIncomeData, isAdd) => {
  //   console.log(isAdd, "this is the is Add in handleAddOredit function");
  //   if (isAdd) {
  //     setIncomeList((prev) => [...prev, newIncomeData]);
  //   } else {
  //     setIncomeList((incomes) =>
  //       incomes.map((income) =>
  //         income.id === newIncomeData.id ? newIncomeData : income
  //       )
  //     );
  //   }
  // };

  const handleDeleteIncome = (id) => {
    const updateIncome = incomeList.filter((income) => income.id !== id);
    setIncomeList(updateIncome);
  };
  const handleDeleteExpense = (id) => {
    const updateIncome = expenseList.filter((income) => income.id !== id);
    setExpenseList(updateIncome);
  };

  const handleFindUpdateExpense = (expense) => {
    setActiveTab("expense");
    setUpdateExpense(expense);
    setFormData(expense);
  };

  const handleFindUpdateIncome = (income) => {
    setActiveTab("income");
    setUpdateIncome(income);
    setFormData(income);
  };

  return (
    <>
      <main className="relative mx-auto mt-10 w-full max-w-7xl">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ExpenseTracker
            handleAddOrEditExpense={handleAddOrEditExpense}
            handleAddOrEditIncome={handleAddOrEditIncome}
            formData={formData}
            setFormData={setFormData}
            updateExpense={updateExpense}
            updateIncome={updateIncome}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            handleChange={handleChange}
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
                handleFindUpdateIncome={handleFindUpdateIncome}
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
