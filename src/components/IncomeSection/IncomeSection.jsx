import { IncomeSectionIcon } from "../../assets/svgicons/svgIcons";
import IncomeFilterSection from "./IncomeFilterSection";
import IncomeSortingSection from "./IncomeSortingSection";
import SingleIncome from "./SingleIncome";

const IncomeSection = () => {
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
            <IncomeSortingSection />
            <IncomeFilterSection />
          </div>
        </div>

        <div className="p-4 divide-y">
          <SingleIncome />
          <SingleIncome />
        </div>
      </div>
    </>
  );
};

export default IncomeSection;
