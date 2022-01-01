import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';


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
    const labels = state.departments.map(element => {
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
    console.log(state.data.payload);
    const dataSet = groupBy(state.data.payload, "department")
    console.log(8888,dataSet);
    const data = {
        labels: labels,
        datasets: [
            {
                label: '# of Votes',
                data: [dataSet.Managment.length, dataSet.Development.length],
                backgroundColor: [
                    "#F7464A",
                    "#46BFBD",
                    "#FDB45C",
                    "#949FB1",
                    "#4D5360",
                    "#AC64AD"
                ],
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
    return <Pie data={data} />;
}

export default ChartApp