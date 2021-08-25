import dynamic from 'next/dynamic'

const Chart = dynamic(() => import ('react-apexcharts'), { ssr: false}) 


const options = {

  options: {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Product Trends by Month',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  },
};

const series = [
  {
    name: 'series1' , data: [31,23,300,35,102,200,100]
  }
]  ;



export function Graphics(){
  return (
    <Chart type='area' height={160} options={options} series={series}/>

  )
}