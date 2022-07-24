import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App flex flex-col justify-center items-center h-screen">
      <div className="mb-3">
        <h1>Crud Example</h1>
        <span>Book review</span>
      </div>

      <div className="flex flex-col justify-center items-center gap-3">
        <label htmlFor="bookName">Movie </label>
        <input
          type="text"
          name="bookName"
          className="border border-black p-1"
          placeholder="Enter movie"
        />
        <label htmlFor="review">Review </label>
        <input
          type="text"
          name="review"
          className="border border-black p-1 h-[100px]"
          placeholder="Review"
        />
        <button type="submit" className="bg-gray-200 rounded-xl p-2">
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
