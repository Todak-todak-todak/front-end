import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];
interface PieData {
  name: string;
  probability: number;
}

interface PieChartComponentProps {
  data: PieData[];
}

const PieChartComponent = ({ data }: PieChartComponentProps) => {
  const formattedData = data?.map((item) => ({
    name: item.name,
    value: Number(item.probability),
  }));

  return (
    <div className="flex flex-col items-center gap-2">
      <PieChart width={100} height={100}>
        <Pie
          data={formattedData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={40}
          label={false}
        >
          {formattedData?.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

      <ul className="flex flex-row gap-1 text-[10px]">
        {formattedData?.map((entry, index) => (
          <li key={entry.name} className="flex items-center gap-1">
            <div
              className="w-2 h-2 rounded"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <span className="font-semibold">{entry.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PieChartComponent;
