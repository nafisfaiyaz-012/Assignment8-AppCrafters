import React from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const SingleDataBarChart = ({ singleAppData }) => {
  const { ratings } = singleAppData;

  return (
    <div className="h-[400px] border-2 p-2">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={ratings}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f55" />
          <XAxis type="number"   />
          <YAxis reversed type="category" dataKey="name"  />
          <Tooltip />

          <Bar dataKey="count" barSize={20} fill="#ff8811" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SingleDataBarChart;
