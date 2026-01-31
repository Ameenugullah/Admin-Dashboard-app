import {ChartColumnStacked, TrendingUp} from 'lucide-react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import './CashFlow.css';


const CashFlow = () => {
    const getGradient = (ctx, chartArea) =>{
        let getGradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        getGradient.addColorStop(0, 'rgba(79, 70, 229, 0)');
        getGradient.addColorStop(0.5, 'rgba(11, 107, 197, 1)');
        getGradient.addColorStop(1, 'rgba(11, 107, 197, 0.5)');
        return getGradient;
    }
    const config = {
        data:{
            labels:["Jan", "Feb", "April", "Mar", "May", "Jun", "Jul", "Aug", "Sep", "Oct",],
            datasets:[
                {
                  data:[1200, 1900, 3000, 2500, 3200, 2800, 3500, 4000, 4500, 5000],
                  borderWidth:2,
                  borderColor: '#06538eff',
                  lineTension: 0.8,
                  fill: true,
                    backgroundColor: (context)=>{
                        const Chart = context.chart
                        const {ctx, chartArea} = Chart;
                        if(!chartArea) return;
                        return getGradient (ctx, chartArea)
                    }

                   
                },   
        ],
        },
        options:{
             scales:{
                y: {beginAtZero: true},
             },
             plugins:{
                lengend:{
                    display: false,
                }
             }
        },
    }

    return (
        <div className='cash-flow-card'>
            <div className="cash-flow-header">
                <h2 className="title">Cash Flow</h2>
                <div className="row round-btns">
                    <div className="rounded-icon-btn">
                        <TrendingUp className="icon"/>
                    </div>
                    <div className="rounded-icon-btn btn-primary">
                        <ChartColumnStacked className="icon"/>
                    </div>
                </div>
            </div>
            <div className="row trending-report">
                <div className="rounded-icon-btn btn-primary">
                        <TrendingUp className="icon"/>
                     </div>
                    <h3>Savings</h3>
                    <TrendingUp className="icon primary"/>
                    <p className="success">+2.52%</p>
            </div>
            <Line data={config.data} options={config.options}/>
        </div>
    );
};

export default CashFlow;