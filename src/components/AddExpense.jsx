import "./AddExpense.css";

const AddExpense = () => {
  const thisyear = new Date().getFullYear();
  const maxDate = `${thisyear + 2}-12-31`;
  const minDate = `${thisyear - 2}-01-01`;
  console.log(thisyear);
  return (
    <div className="add-expense">
      <form>
        <div className="add-expense__controls">
          <div className="add-expense__control">
            <label>Title</label>
            <input placeholder="title" required />
          </div>
          <div className="add-expense__control">
            <label>Price</label>
            <input
              type="number"
              placeholder="price"
              min="0"
              step="0.01"
              required
            />
          </div>
          <div className="add-expense__control">
            <label>Date</label>
            <input type="date" max={maxDate} min={minDate} required />
          </div>
        </div>
        <div className="add-expense__actions">
          <button>Cancel</button>
          <button>Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;
