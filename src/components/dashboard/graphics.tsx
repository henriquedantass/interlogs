import { Button } from '@chakra-ui/react';
import dynamic from 'next/dynamic'
import { useContext } from 'react';
import {dataContext} from '../../context/dataContext'

const Chart = dynamic(() => import ('react-apexcharts'), { ssr: false}) 



export function Graphics(){
  const {data} = useContext(dataContext);

  
const options = {
  chart: {
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
  tooltip: {
    y: [
      {
        title: {
          formatter: function (val:any) {
            return val + " (°C)"
          }
        }
      },
      {
        title: {
          formatter: function (val:any) {
            return val + " (°C)"
          }
        }
      },
      {
        title: {
          formatter: function (val:any) {
            return val + " (°C)"
          }
        }
      },
      
    ]
  },
  legend: {
    markers: {
      width: 20,
      height: 20,
    },
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontWeight: 500,
    itemMargin: {
      horizontal: 20,
      vertical: 20,
    },
    show: true,
    onItemClick: {
      toggleDataSeries: true,
    },
  },
  grid: {
    show: true,
  },
  dataLabels: {
    enabled: false,
  },
  yaxis: {
    min: 0,
    max: 100,
    title: {
      text: 'Temperatura Mancal'
    },
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


const series = data;


  return (
    <Chart type='line' height={400} options={options} series={series}/>
  )
}


//remover e adicionar o array para as series



