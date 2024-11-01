/* eslint-disable react/prop-types */
import { DeleteIcon, EditIcon } from "../../assets/svgicons/svgIcons";

const SingleExpense = ({
  expense,
  handleDeleteExpense,
  handleFindUpdateExpense,
}) => {
  return (
    <>
      <div className="flex justify-between items-center py-2 relative group cursor-pointer">
        <div>
          <h3 className="text-base font-medium leading-7 text-gray-600">
            {expense.category}
          </h3>
          <p className="text-xs text-gray-600">{expense.date}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
            BDT {expense.amount}
          </p>

          {/* <!-- 3 Dots --> */}
          <div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
            <button
              onClick={() => handleFindUpdateExpense(expense)}
              className="hover:text-teal-600"
              role="button"
              title="Edit Button"
            >
              <EditIcon />
            </button>

            <button
              onClick={() => handleDeleteExpense(expense.id)}
              className="hover:text-red-600"
              role="button"
              title="Delete"
            >
              <DeleteIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleExpense;
