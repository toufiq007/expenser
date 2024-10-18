/* eslint-disable react/prop-types */
import { ExpenseSectionIcon } from "../../assets/svgicons/svgIcons";
import SortingSection from "../sortingSection/SortingSection";
import SingleExpense from "./SingleExpense";
import { expenseCategories } from "../../utils/utils";
import FilterSection from "../filterSection/IncomeFilterSection";

const ExpenseSection = ({
  expenseList,
  handleDeleteExpense,
  handleFindUpdateExpense,
  lowToHighSort,
  highToLowSort,
  selectedCategories,
  handleCategoryChange,
}) => {
  return (
    <>
      {/* <!-- Income --> */}
      <div className="border rounded-md">
        <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-pink-600 text-white rounded-md text-center object-center place-content-center text-base">
              <ExpenseSectionIcon />
            </div>
            <div>
              <h3 className="text-xl font-semibold leading-7 text-gray-800">
                Expense
              </h3>
            </div>
          </div>

          <div>
            <SortingSection
              lowToHighSort={lowToHighSort}
              unsortedList={expenseList}
              dataList="expenseList"
              highToLowSort={highToLowSort}
            />
            {/* <ExpenseFilterSection /> */}
            <FilterSection
              selectedCategories={selectedCategories}
              handleCategoryChange={handleCategoryChange}
              categories={expenseCategories}
            />
          </div>
        </div>

        <div className="p-4 divide-y">
          {expenseList.length > 0 &&
            expenseList.map((expense) => (
              <SingleExpense
                handleFindUpdateExpense={handleFindUpdateExpense}
                handleDeleteExpense={handleDeleteExpense}
                key={expense.id}
                expense={expense}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default ExpenseSection;
