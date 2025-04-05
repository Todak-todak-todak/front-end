import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const rawData = [
  { name: '굴착기', value: 400 },
  { name: '지게차', value: 300 },
  { name: '크레인', value: 300 },
];

const data = [...rawData].sort((a, b) => b.value - a.value);

const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

const PieChartComponent = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <PieChart width={100} height={100}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={40}
          label={false}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

      <ul className="flex flex-row gap-1 text-xs">
        {data.map((entry, index) => (
          <li key={entry.name} className="flex items-center gap-1">
            <div
              className="w-3 h-3 rounded"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <span className="font-semibold"> {entry.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PieChartComponent;
