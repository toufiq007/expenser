/* eslint-disable react/prop-types */
import { IncomeSectionIcon } from "../../assets/svgicons/svgIcons";
import SortingSection from "../sortingSection/SortingSection";
import SingleIncome from "./SingleIncome";
import { incomeCategories } from "../../utils/utils";
import FilterSection from "../filterSection/IncomeFilterSection";

const IncomeSection = ({
  incomeList,
  handleDeleteIncome,
  handleFindUpdateIncome,
  lowToHighSort,
  highToLowSort,
  selectedCategories,
  handleCategoryChange,
}) => {
  return (
    <>
      {/* <!-- Expense --> */}
      <div className="border rounded-md relative">
        {/* <!-- Header --> */}
        <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-teal-600 text-white rounded-md text-center object-center place-content-center text-base">
              <IncomeSectionIcon />
            </div>
            <div>
              <h3 className="text-xl font-semibold leading-7 text-gray-800">
                Income
              </h3>
            </div>
          </div>
          <div>
            <SortingSection
              lowToHighSort={lowToHighSort}
              unsortedList={incomeList}
              dataList="incomeList"
              highToLowSort={highToLowSort}
            />
            <FilterSection
              selectedCategories={selectedCategories}
              handleCategoryChange={handleCategoryChange}
              categories={incomeCategories}
              filterProps="income"
            />
          </div>
        </div>

        <div className="p-4 divide-y">
          {incomeList.length > 0 &&
            incomeList.map((income) => (
              <SingleIncome
                handleFindUpdateIncome={handleFindUpdateIncome}
                handleDeleteIncome={handleDeleteIncome}
                key={income.id}
                income={income}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default IncomeSection;
