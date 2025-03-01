import "./Filter.css";

const Filter = ({ years, selectedYear, setSelectedYear }) => {
  return (
    <div className="expenses-filter">
      <label>Filter by Year</label>
      <select
        value={selectedYear}
        onChange={(event) => {
          setSelectedYear(event.target.value);
        }}
      >
        {years.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filter;
