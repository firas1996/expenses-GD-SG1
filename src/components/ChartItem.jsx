import "./ChartItem.css";

const ChartItem = ({ label, value }) => {
  return (
    <div className="chart-item">
      <div className="chart-item__inner">
        <div className="chart-item__fill"></div>
      </div>
      <div className="chart-item__label">{label}</div>
    </div>
  );
};

export default ChartItem;
