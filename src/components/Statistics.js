import React from "react";
import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";

const Statistics = ({data}) => {

  const title = []
  const amount = []
  const charData = data.map((proCategory) => title.push(proCategory.category))
  charData.map = data.map((proQuantity) => amount.push(+proQuantity.quantity))
  console.log(title)
  console.log(amount)
  var sum = {};
  var i;
  for (i = 0; i < amount.length; i++) {
    var name = title[i];
    var oldSum = sum[name];
    if (typeof oldSum === 'undefined') {
      oldSum = 0;
    }
    sum[name] = oldSum + amount[i];
  }
  console.log(sum)
  
  // const proName = title.map((proName) => proName)
  // console.log(proName)
  const chartData = [{name: title.map((proName) => proName)}]
  console.log(chartData)
    // const chartData = data.map((product) => ({name: product.category, value:sum }))
    // const uniqueAddresses = Array.from(new Set(chartData.map(a => a.name)))
    // .map(name => {
    //   return chartData.find(a => a.name === name)
    // })

  return (
    <div>
        <h3>با توجه به اطلاعات وارد شده</h3>
        {/* <PieChart width={400} height={400}>
          <Pie
            dataKey={sum.value}
            isAnimationActive={false}
            data={sum}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart> */}
    </div>
  );
};

export default Statistics;
