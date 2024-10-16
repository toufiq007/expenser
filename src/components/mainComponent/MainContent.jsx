import BalanceSheet from "../balanceSheet/BalanceSheet";
import ExpenseSection from "../expense/ExpenseSection";
import ExpenseTracker from "../expenseTracker/ExpenceTracker";
import IncomeSection from "../Income/IncomeSection";

const MainContent = () => {
  return (
    <>
      <main className="relative mx-auto mt-10 w-full max-w-7xl">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <!-- Submission Form --> */}
          <ExpenseTracker />

          {/* <!-- Right Column --> */}
          <div className="lg:col-span-2">
            {/* <!-- Total Balance Stat--> */}
            <BalanceSheet />

            {/* <!-- List Down --> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
              <ExpenseSection />
              <IncomeSection />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainContent;
