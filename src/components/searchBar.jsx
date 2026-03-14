import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/counterSlice";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    setText("");
  };
  return (
    <div className="py-5 md:p-10 bg-gray-900 w-full px-2">
      <form
        className="flex gap-5"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search anything..."
          className="rounded-xl inset-shadow-sm inset-shadow-white/30 p-2 w-full outline-none shadow-sm shadow-white/30"
        />
        <button className="text-xs md:text-base rounded-lg px-6 font-semibold py-2 inset-shadow-sm inset-shadow-white/30 active:scale-95 shadow-sm shadow-white/30 hover:transition delay-150 duration-300 cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
