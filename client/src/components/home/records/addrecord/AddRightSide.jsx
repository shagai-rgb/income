"use client";
export const AddRightSide = ({ handleChange }) => {
  return (
    <div className="flex w-[444px] flex-col gap-5 p-6">
      <div className="flex flex-col gap-2 ">
        <div>Payee</div>
        <input
          type="text"
          className="rounded-lg bg-[#F3F4F6] border border-[#D1D5DB] w-[348px] h-12 p-4"
          placeholder="Write here"
        />
      </div>
      <div className="flex flex-col gap-2 ">
        <div>Note</div>

        <textarea
          onChange={handleChange}
          name="note"
          id=""
          type="text"
          className="rounded-lg bg-[#F3F4F6] border border-[#D1D5DB] w-[348px] resize-none h-[270px] p-4"
          placeholder="Write here"
        ></textarea>
      </div>
    </div>
  );
};
