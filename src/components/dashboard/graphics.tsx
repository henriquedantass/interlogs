import dynamic from 'next/dynamic'

const Chart = dynamic(() => import ('react-apexcharts'), { ssr: false}) 



const options = {
  chart: {
    toolbar: {
      show: false,
    },
    height: 100,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  stroke: {
    curve: 'smooth'
  },
  zoom: {
    enabled: false,
  },
  grid: {
    show: true,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  yaxis: {
    min: 0,
    max: 100
  },
  xaxis: {
    categories: [
      '00:00',
      '01:00',
      '02:00',
      '03:00',
      '04:00',
      '05:00',
      '06:00',
      '07:00',
      '08:00',
      '09:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
      '23:00',
    ]
  },
 
  
};

const series = [
  {
    name: 'Maquina 1' , data: [30,23,50,15,23,20,100, 0,70,13,51,13,13,44,56,11,32,45,11,22,31,23,11,23]
  },
  {
    name: 'Maquina 2' , data: [31,53,12,12,12,20,0, 11,30,11,21,23,34,44,65,11,32,75,11,22,13,23,11,22]

  },
  {
    name: 'Maquina 3' , data: [31,56,30,97,60,20,56, 20,30,54,65,23,56,78,56,11,32,45,11,86,31,32,11,23]

  }
];


export function Graphics(){
  return (
    <Chart type='line' height={400} options={options} series={series}/>

  )
}