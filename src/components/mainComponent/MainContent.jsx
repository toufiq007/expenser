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

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };
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
      // Edit the existing income
      setIncomeList((prevIncomes) =>
        prevIncomes.map((income) =>
          income.id === newIncomeData.id ? newIncomeData : income
        )
      );
    } else {
      // Add the new income
      setIncomeList((prevIncomes) => [...prevIncomes, newIncomeData]);
    }
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
    setActiveTab("expense");
    setUpdateExpense(expense);
    setFormData(expense);
  };

  const handleFindUpdateIncome = (income) => {
    setActiveTab("income");
    setUpdateIncome(income);
    setFormData(income);
  };
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

  // code for filtering
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [expenseCategories, setExpenseCategories] = useState([]);

  const handleExpenseChange = (categoryOption) => {
    let updatedCategories;
    if (expenseCategories.includes(categoryOption)) {
      updatedCategories = expenseCategories.filter(
        (option) => option !== categoryOption
      );
    } else {
      updatedCategories = [...expenseCategories, categoryOption];
    }
    setExpenseCategories(updatedCategories);
    if (updatedCategories.length === 0) {
      setExpenseList(initialExpenseData);
    } else {
      const newFilteredIncomeList = expenseList.filter((income) =>
        updatedCategories.includes(income.category)
      );

      console.log(newFilteredIncomeList, "this is inside expenseSection");
      setExpenseList(newFilteredIncomeList);
    }
  };

  const handleCategoryChange = (categoryOption) => {
    let updatedCategories;
    if (selectedCategories.includes(categoryOption)) {
      updatedCategories = selectedCategories.filter(
        (option) => option !== categoryOption
      );
    } else {
      updatedCategories = [...selectedCategories, categoryOption];
    }
    setSelectedCategories(updatedCategories);
    if (updatedCategories.length === 0) {
      setIncomeList(initialIncomeData);
    } else {
      const newFilteredIncomeList = incomeList.filter((income) =>
        updatedCategories.includes(income.category)
      );
      setIncomeList(newFilteredIncomeList);
    }
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
                lowToHighSort={lowToHighSort}
                highToLowSort={highToLowSort}
                selectedCategories={selectedCategories}
                handleCategoryChange={handleCategoryChange}
              />
              <ExpenseSection
                handleDeleteExpense={handleDeleteExpense}
                expenseList={expenseList}
                handleFindUpdateExpense={handleFindUpdateExpense}
                lowToHighSort={lowToHighSort}
                highToLowSort={highToLowSort}
                selectedCategories={expenseCategories}
                handleCategoryChange={handleExpenseChange}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainContent;
