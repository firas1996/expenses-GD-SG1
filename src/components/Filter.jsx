import "./Filter.css";

const Filter = () => {
  return (
    <div className="expenses-filter">
      <label>Filter by Year</label>
      <select>
        <option>All</option>
        <option>2023</option>
        <option>2024</option>
        <option>2025</option>
      </select>
    </div>
  );
};

export default Filter;
