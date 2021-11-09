import React from 'react'
import { useSelector } from 'react-redux'
import Chart from 'react-apexcharts'


const chartOptions = {
    series: [{
        name: 'Clientes Online',
        data: [40,70,20,90,36,80,30,91,60]
    }, {
        name: 'Clientes na Loja',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Agos', 'Set']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const Analytcs = () => {

    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div className="container">
        <div className="col-12">
        <div className="card full-height">
        <h1>Vendas do dia</h1>
            {/* chart */}
            <Chart
                options={themeReducer === 'theme-mode-dark' ? {
                    ...chartOptions.options,
                    theme: { mode: 'dark'}
                } : {
                    ...chartOptions.options,
                    theme: { mode: 'light'}
                }}
                series={chartOptions.series}
                type='line'
                height='100%'
            />
        </div>
    </div> 

    <div className="col-12">
        <div className="card full-height">
        <h1>Vendas do mês</h1>
            {/* chart */}
            <Chart
                options={themeReducer === 'theme-mode-dark' ? {
                    ...chartOptions.options,
                    theme: { mode: 'dark'}
                } : {
                    ...chartOptions.options,
                    theme: { mode: 'light'}
                }}
                series={chartOptions.series}
                type='line'
                height='100%'
            />
        </div>
    </div> 

    <div className="col-12">
        <div className="card full-height">
        <h1>Vendas do ano</h1>
            {/* chart */}
            <Chart
                options={themeReducer === 'theme-mode-dark' ? {
                    ...chartOptions.options,
                    theme: { mode: 'dark'}
                } : {
                    ...chartOptions.options,
                    theme: { mode: 'light'}
                }}
                series={chartOptions.series}
                type='line'
                height='100%'
            />
        </div>
        </div> 
    </div>
    )
}

export default Analytcs
