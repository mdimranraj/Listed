import React from 'react'
import style from './graph.module.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Graph = () => {
    const data = [
        {
          "name": "Week 1",
          "user": 400,
          "guest": 240,
          "amt": 240
        },
        {
          "name": "Week 2",
          "user": 300,
          "guest": 139,
          "amt": 221
        },
        {
          "name": "Week 3",
          "user": 200,
          "guest": 980,
          "amt": 229
        },
        {
          "name": "Week 4",
          "user": 278,
          "guest": 390,
          "amt": 200
        }
      ]
 
  return (
        <div>
                <LineChart width={800} height={150} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="user" stroke="#EE8484" />
                <Line type="monotone" dataKey="guest" stroke="#98D89E" />
                
                </LineChart>
        </div>

  )
}

export default Graph