import { ChevronsRight } from "lucide-react";

const ButtonHoverOutLine = ({ text = "Know More", onClick, href }) => {
  return (
    <>
      {href ? (
        <a
          href={href}
          className="flex items-center gap-2 cursor-pointer px-4 py-3 bg-orange-400 hover:bg-white hover:text-orange-400 text-white border-black transition-all border-2 rounded-full font-semibold"
        >
          {text}
          <ChevronsRight />
        </a>
      ) : (
        <button
          onClick={onClick}
          className="flex items-center gap-2 cursor-pointer px-4 py-3 bg-orange-400 hover:bg-white hover:text-orange-400 text-white border-orange-700 transition-all border-2 rounded-full font-semibold"
        >
          {text}
          <ChevronsRight />
        </button>
      )}
    </>
  );
};

export default ButtonHoverOutLine;
