import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { tailwindConfig, hexToRGB } from "./Utils";

export default function chart({ title, data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data.map((d) => ({
          ...d,
          timestamp: new Date(d.timestamp).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          }),
          value: d.message[title],
        }))}
        margin={{
          top: 20,
          right: 20,
          left: -10,
          bottom: 0,
        }}
      >
        <XAxis dataKey="timestamp" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" fillOpacity={0.6} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke={tailwindConfig().theme.colors.indigo[500]}
          strokeWidth={2}
          fill={`rgba(${hexToRGB(
            tailwindConfig().theme.colors.blue[500]
          )}, 0.2)`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
