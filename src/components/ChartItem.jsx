import "./ChartItem.css";

const ChartItem = ({ label, value, maxValue }) => {
  const Bandwidth = (value / maxValue) * 100 + "%";

  return (
    <div className="chart-item">
      <div className="chart-item__inner">
        <div
          className="chart-item__fill"
          style={{
            height: Bandwidth,
          }}
        ></div>
      </div>
      <div className="chart-item__label">{label}</div>
    </div>
  );
};

export default ChartItem;
