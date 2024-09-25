export const Button = ({ text }) => {
  return (
    <button className="btn btn-primary w-full h-full min-h-0 bg-[#0166FF] text-base font-extralight hover:bg-[#0166FF] text-white rounded-[20px]">
      {text}
    </button>
  );
};
