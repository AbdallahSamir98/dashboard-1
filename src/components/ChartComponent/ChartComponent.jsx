import React from "react";
import {PieChart, Pie,Tooltip,Cell,ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid , Legend , Scatter,} from "recharts";

import {} from "recharts";

const ChartComponent = () => {
  //   data to first dash
  const data01 = [
    { name: "total order", value: 400 },
    { name: "total driver", value: 100 },
    { name: "Total Merchant", value: 300 },
    { name: "Total Commission", value: 200 },
  ];

  //  data to second dash

  const data = [
    {
      name: "shif 1",
      koshry: 590,
      pizaa: 800,
      creape: 300,
      mol5ya: 490,
    },
    {
      name: "shift 2",
      koshry: 120,
      pizaa: 300,
      creape: 400,
      mol5ya: 100,
    },
    {
      name: "shift 3",
      koshry: 120,
      pizaa: 600,
      creape: 300,
      mol5ya: 490,
    },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#205295", "#FF8042"];

  return (
    <div className=" container  chart mt-5 ">
      <div className="row justify-content-between d-flex">
        {/* col for first dash shape */}
        <div className="col-md-6 rounded  bg-white">
            <h3 className='text-center my-3'>Line Bar Chart</h3>
          <ComposedChart
          className="chart"
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid data={data} stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="koshry"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="pizaa" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="creape" stroke="#ff7300" />
            <Scatter dataKey="mol5ya" fill="red" />
          </ComposedChart>
        </div>
       
        

        {/* col for second dash shape */}

        
        <div className="col-md-5 bg-white rounded  ms-5">
        <h3 className='text-center my-3'>Pie Chart</h3>
         
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={true}
              data={data01}
              cx={200}
              cy={200}
              outerRadius={140}
              fill="#8884d8"
              label
            >
              {data01.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
       
      </div>
       
       
    </div>
  );
};

export default ChartComponent;
