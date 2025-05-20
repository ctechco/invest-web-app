
import React from 'react';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
import { 
  ResponsiveContainer,
  LineChart as RechartsLineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip 
} from 'recharts';

interface LineChartProps {
  labels: string[];
  datasets: {
    data: number[];
    label: string;
    borderColor: string;
    backgroundColor: string;
    fill: boolean;
  }[];
}

const LineChart = ({ labels, datasets }: LineChartProps) => {
  // Transform the data into the format recharts expects
  const data = labels.map((label, index) => {
    const dataPoint: Record<string, any> = { name: label };
    datasets.forEach(dataset => {
      dataPoint[dataset.label] = dataset.data[index];
    });
    return dataPoint;
  });

  const config = datasets.reduce((acc, dataset) => {
    acc[dataset.label] = {
      label: dataset.label,
      color: dataset.borderColor,
    };
    return acc;
  }, {} as Record<string, { label: string, color: string }>);

  return (
    <ChartContainer config={config} className="w-full h-full">
      <RechartsLineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis 
          tickFormatter={(value) => 
            value >= 1000000 
              ? `$${(value / 1000000).toFixed(1)}M` 
              : `$${(value / 1000).toFixed(0)}k`
          } 
        />
        <Tooltip 
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className="bg-white p-2 border border-gray-200 rounded shadow-sm">
                  <p className="font-medium">{`Age: ${label}`}</p>
                  {payload.map((entry, index) => (
                    <p key={index} style={{ color: entry.color }}>
                      {`${entry.name}: $${Number(entry.value).toLocaleString()}`}
                    </p>
                  ))}
                </div>
              );
            }
            return null;
          }}
        />
        {datasets.map((dataset, index) => (
          <Line
            key={index}
            type="monotone"
            dataKey={dataset.label}
            stroke={dataset.borderColor}
            fill={dataset.fill ? dataset.backgroundColor : undefined}
            activeDot={{ r: 8 }}
          />
        ))}
      </RechartsLineChart>
    </ChartContainer>
  );
};

export default LineChart;
