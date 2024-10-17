/* eslint-disable react/prop-types */
const initialFormData = {
  id: crypto.randomUUID(),
  category: "",
  amount: 0,
  date: "",
};
const ExpenceTracker = ({
  handleAddOrEditExpense,
  handleAddOrEditIncome,
  formData,
  setFormData,
  updateExpense,
  activeTab,
  setActiveTab,
  updateIncome,
}) => {
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const isAdd = Object.is(updateExpense | updateIncome, null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === "expense") {
      handleAddOrEditExpense(formData, isAdd);
    }
    if (activeTab === "income") {
      handleAddOrEditIncome(formData, isAdd);
    }
    setFormData(initialFormData);
  };

  console.log(formData, "this is the form data in expense tracker");

  return (
    <>
      <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
        <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
          Expense Tracker
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6">
            <div
              onClick={() => setActiveTab("expense")}
              className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${
                activeTab === "expense" ? "active" : ""
              }`}
            >
              Expense
            </div>
            <div
              onClick={() => setActiveTab("income")}
              className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${
                activeTab === "income" ? "active" : ""
              }`}
            >
              Income
            </div>
          </div>

          <div className="mt-3">
            <label
              htmlFor="category"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Category
            </label>

            {activeTab === "expense" ? (
              <div className="mt-2">
                <select
                  id="category"
                  name="category"
                  required
                  value={formData.category}
                  onChange={(e) => handleChange(e)}
                  autoComplete="category-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                >
                  <option>Select</option>
                  <option>Education</option>
                  <option>Food</option>
                  <option>Health</option>
                  <option>Bill</option>
                  <option>Insurance</option>
                  <option>Tax</option>
                  <option>Transport</option>
                  <option>Telephone</option>
                </select>
              </div>
            ) : (
              <div className="mt-2">
                <select
                  id="category"
                  name="category"
                  required
                  value={formData.category}
                  onChange={(e) => handleChange(e)}
                  autoComplete="category-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                >
                  <option>Select</option>
                  <option>Salary</option>
                  <option>Outsourcing</option>
                  <option>Bond</option>
                  <option>Dividen</option>
                </select>
              </div>
            )}
          </div>

          <div className="mt-3">
            <label
              htmlFor="amount"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Amount
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="amount"
                required
                value={formData.amount}
                onChange={(e) => handleChange(e)}
                id="amount"
                autoComplete="off"
                placeholder="12931"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="mt-3">
            <label
              htmlFor="date"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Date
            </label>
            <div className="mt-2">
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={(e) => handleChange(e)}
                id="date"
                autoComplete="off"
                placeholder="12931"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default ExpenceTracker;
