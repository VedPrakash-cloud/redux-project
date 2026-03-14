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
    <div className="p-10 bg-gray-900 w-full">
      <form
        className="flex"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search anything..."
          className="border rounded-lg p-2 w-full mx-5 outline-none shadow-lg shadow-gray-800"
        />
        <button className="text-xs md:text-base border rounded-lg px-6 font-semibold py-2 active:scale-85 hover:shadow-lg shadow-gray-800 hover:transition delay-150 duration-300 hover:bg-gray-800 cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
