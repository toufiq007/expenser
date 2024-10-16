import { useState } from "react";
import { FilterIcon } from "../../assets/svgicons/svgIcons";

const ExpenseFilterSection = () => {
  const [showExpenseFilterSection, setShowExpenseFilterSection] =
    useState(false);
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={() => setShowExpenseFilterSection(!showExpenseFilterSection)}
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="filter-button-2"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <FilterIcon />
        </button>
      </div>

      {showExpenseFilterSection && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="filter-button-2"
          tabIndex="-1"
          id="filter-dropdown2"
        >
          <div className="py-1" role="none">
            <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                id="filter-option-1"
              />
              <span className="ml-2">Education</span>
            </label>
            <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                id="filter-option-2"
              />
              <span className="ml-2">Food</span>
            </label>
            <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                id="filter-option-3"
              />
              <span className="ml-2">Health</span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpenseFilterSection;