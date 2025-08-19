import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import CustomTooltip from '../components/CustomTooltip '
const data = [
    { name: 'Active Points', value: 4374 },
    { name: 'Inactive Points', value: 731 },

];

const COLORS = ['#3B2A68', '#89B9E3'];
const DonutChart2 = () => {


    return (
        <div style={{ position: 'relative', width: 200, height: 200 }}>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={90}
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

export default DonutChart2;
