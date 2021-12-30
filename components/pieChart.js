import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);

class ChartsPage extends React.Component {
    state = {
        dataPie: {
            labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
            datasets: [
                {
                    label: "sad",
                    data: [300, 50, 100, 40, 120],
                    backgroundColor: [
                        "#F7464A",
                        "#46BFBD",
                        "#FDB45C",
                        "#949FB1",
                        "#4D5360",
                        "#AC64AD"
                    ],
                    hoverBackgroundColor: [
                        "#FF5A5E",
                        "#5AD3D1",
                        "#FFC870",
                        "#A8B3C5",
                        "#616774",
                        "#DA92DB"
                    ],
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,

                }
            ]
        }
    }

    render() {
        return (
            <MDBContainer>
                <Pie data={this.state.dataPie} options={{ responsive: true }} />
            </MDBContainer>
        );
    }
}

export default ChartsPage;