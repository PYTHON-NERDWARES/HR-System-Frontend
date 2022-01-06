import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
let colors = require("./colorPallet.json")


ChartJS.register(ArcElement, Tooltip, Legend);



const ChartApp = () => {
    const state = useSelector((state) => {
        return {
            data: state.stateReducer.data,
            token: state.stateReducer.token,
            branches: state.stateReducer.branches,
            totalsalary: state.stateReducer.totalsalary,
            departments: state.stateReducer.departments,
        }
    });
    let colorPallet = []
    const labels = state.departments.map(element => {
        colorPallet.push('#'+ Math.floor(Math.random() * 19777215).toString(16))
        return (element.name)
    })
    const groupBy = (arr, criteria) => {
        const newObj = arr.reduce(function (acc, currentValue) {
            if (!acc[currentValue[criteria]]) {
                acc[currentValue[criteria]] = [];
            }
            acc[currentValue[criteria]].push(currentValue);
            return acc;
        }, {});
        return newObj;
    }
    let depArr= []
    const dataSet = groupBy(state.data.payload, "department")
    for (const key in dataSet) {
        depArr.push(dataSet[key].length)
    }
    const data = {
        labels: labels,
        datasets: [
            {
                label: "#",
                data: depArr,
                backgroundColor: colors.color,
                // borderColor: [
                //     'rgba(255, 99, 132, 1)',
                //     'rgba(54, 162, 235, 1)',
                //     'rgba(255, 206, 86, 1)',
                //     'rgba(75, 192, 192, 1)',
                //     'rgba(153, 102, 255, 1)',
                //     'rgba(255, 159, 64, 1)',
                // ],
                borderWidth: 1,
            },
        ],
    };
    const options = {
        plugins: {
            legend: false,
          }
    }
    return <Pie data={data} options={options}/>;
}

export default ChartApp
