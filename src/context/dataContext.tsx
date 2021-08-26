import { createContext, useState, useEffect, ReactNode } from "react";

interface IDataProviderProps {
  children: ReactNode
}

interface IShopContext {
  data: DataWorkProps[],
  setData: (data: DataWorkProps[]) => void,
  media: number[],
}

interface DataWorkProps {
  id: number,
  name: string,
  data: number[]
}

//dados da api.
var dataWork = [
  {
    id: 1,
    name: 'Turbina 1',
    data: [31,56,30,97,60,20,56, 20,30,54,65,23,56,78,56,11,32,45,11,86,31,32,11,23]
  },
  {
    id: 2,
    name: 'Turbina 2',
    data :  [31,53,12,12,12,20,0, 11,30,11,21,23,34,44,65,11,32,75,11,22,13,23,11,22]
  },
  {
    id:3,
    name: 'Turbina 3',
    data: [69,57,21,32,30,75,45, 55,12,87,15,63,96,18,28,29,87,91,21,65,22,61,13]
  }
]


export const dataContext = createContext({} as IShopContext);

export function DataProvider({ children }: IDataProviderProps) {
  const [data, setData] = useState<DataWorkProps []>(dataWork);


  const media = dataWork.map(item => { 
    return item.data.reduce((total, value) => {
      return (total + value)/2
    }, 0)
   })
  
  console.log(media)

  return (
    <dataContext.Provider
      value={{ data, setData, media}}
    >
      {children}
    </dataContext.Provider>
  );
}
