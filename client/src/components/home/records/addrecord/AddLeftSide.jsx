"use client";

export const AddLeftSide = ({
  isExpense,
  handleExpenseClick,
  handleIncomeClick,
  handleChange,
  handleSubmit,
  loading,
  category, // Pass category as a prop to control the select value
}) => {
  return (
    <div className="flex w-[444px] flex-col gap-5 p-6">
      <div className="bg-[#F3F4F6] rounded-full w-[348px] h-10 items-center justify-between flex">
        <div
          onClick={handleExpenseClick}
          className={`w-[172px] h-10 ${
            isExpense ? "bg-[#0166FF] text-white" : ""
          } cursor-pointer rounded-full flex items-center justify-center`}
        >
          Expense
        </div>
        <div
          onClick={handleIncomeClick}
          className={`w-[172px] h-10 ${
            !isExpense ? "bg-[#16A34A] text-white" : ""
          } cursor-pointer rounded-full flex items-center justify-center`}
        >
          Income
        </div>
      </div>
      <div className="flex flex-col gap-5 w-[348px] h-[78px] ">
        <div className="flex flex-col bg-[#F3F4F6] rounded-lg border border-[#D1D5DB] py-3 px-4">
          <div className="font-normal text-base">Amount</div>
          <input
            type="number"
            name="amount"
            placeholder="₮ 000.00"
            className="input input-ghost w-full max-w-xs bg-[#F3F4F6] h-7"
            step="1"
            min="0"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-normal text-base">Category</div>
          <select
            name="category"
            onChange={handleChange}
            className="select select-bordered w-full rounded-lg bg-[#F3F4F6] border border-[#D1D5DB]"
            value={category} // Control the value of the select
          >
            <option value="" disabled>
              choose
            </option>
            {isExpense ? (
              <>
                <option value="Home">Home</option>
                <option value="Shopping">Shopping</option>
                <option value="Food">Food</option>
                <option value="Drinks">Drinks</option>
                <option value="Taxi">Taxi</option>
                <option value="Gift">Gift</option>
              </>
            ) : (
              <>
                <option value="income">Income</option>
                <option value="investment">Investment</option>
                <option value="hustle">Hustle</option>
              </>
            )}
          </select>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <div className="font-normal text-base">Date</div>
            <input
              name="date"
              onChange={handleChange}
              type="datetime-local"
              className="w-[220px] h-12 py-3 px-4 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg"
            />
          </div>
        </div>
        <button
          disabled={loading}
          onClick={handleSubmit}
          className={`btn btn-primary h-12 w-full min-h-0 ${
            isExpense
              ? "bg-[#0166FF] hover:bg-[#0166FF]"
              : "bg-[#16A34A] hover:bg-[#16A34A] border-[#16A34A] hover:border-[#16A34A]"
          } text-base font-extralight text-white rounded-[20px]`}
        >
          {loading ? "Loading..." : "Add Record"}
        </button>
      </div>
    </div>
  );
};
