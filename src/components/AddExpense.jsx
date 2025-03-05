import { useState } from "react";
import "./AddExpense.css";

const AddExpense = () => {
  const thisyear = new Date().getFullYear();
  const maxDate = `${thisyear + 2}-12-31`;
  const minDate = `${thisyear - 2}-01-01`;
  const [data, setData] = useState({
    title: "",
    price: "",
    date: "",
  });
  const handleData = ({ target }) => {
    const { name, value } = target;
    setData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const submitData = (e) => {
    e.preventDefault();
    console.log(data);
    setData({
      title: "",
      price: "",
      date: "",
    });
  };
  return (
    <div className="add-expense">
      <form onSubmit={submitData}>
        <div className="add-expense__controls">
          <div className="add-expense__control">
            <label>Title</label>
            <input
              onChange={handleData}
              value={data.title}
              name="title"
              placeholder="title"
              required
            />
          </div>
          <div className="add-expense__control">
            <label>Price</label>
            <input
              name="price"
              type="number"
              placeholder="price"
              min="0"
              step="0.01"
              onChange={handleData}
              value={data.price}
              required
            />
          </div>
          <div className="add-expense__control">
            <label>Date</label>
            <input
              value={data.date}
              onChange={handleData}
              name="date"
              type="date"
              max={maxDate}
              min={minDate}
              required
            />
          </div>
        </div>
        <div className="add-expense__actions">
          <button>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;
