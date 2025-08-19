import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import CustomTooltip from '../components/CustomTooltip '
const data = [
    { name: 'Total Amt Collected', value: 2874 },
    { name: 'NO CASH', value: 1598 },
    { name: 'SHOP CLOSED', value: 396 },
    { name: ' PENDING', value: 238 },

];

const COLORS = ['#25B395', '#E8BE18', '#DF4A3A', '#287CB4'];
const DonutChart = () => {


    return (
        <div style={{ position: 'relative', width: 300, height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}

                        paddingAngle={2}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                </PieChart>
            </ResponsiveContainer>


        </div>
    );
};

export default DonutChart;
