import * as React from 'react';  
import { useState } from 'react';

export default function Example() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  const [data2, setData2] = useState(null);
  var [data3, setData3] = useState(null);
  var [data4, setData4] = useState(null);

  data3 = data - data2;

  function getData(val)
  {
    setData(val.target.value)
    console.warn(val.target.value)
  }

  function getData1(val)
  {
    setData2(val.target.value)
    console.warn(val.target.value)
  }

  function calc(val)
  {
    if(0 < setData3 < 300000 ){
      setData4 = 0;
    }
    else if (300000 <= setData3 < 600000){
      setData4 = val*0.05;
    }
    else if(600000 <= setData3 < 900000){
      setData4 = val*0.1;
    }
    else if(900000 <= setData3 < 1200000){
      setData4 = val*0.15;
    }
    else if(1200000 <= setData3 < 1500000){
      setData4 = val*0.2;
    }
    else if(setdata >= 1500000){
      setData4 = val*0.3;
    }

    return ("total tax:"+setData4);
  }



    return (
      <div>
        <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
          Income
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm"></span>
          </div>
          <input
            type="number"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="0.00"
            onChange={getData}
          />
          <label htmlFor="expense" className="block text-sm font-medium leading-6 text-gray-900">
            Expense
          </label>
          <input
            type="number"
            name="Expense"
            id="price2"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="0.0"
            onChange={getData1}
            />
            <label htmlFor='button' className='block text-sm font-medium leading-6 text-gray-900'>
              
            </label>
            <button type='button' onClick={()=>setPrint(true)} className='block box-border rounded border-2 border-black'>submit</button>
            <label htmlFor="Result" className="block text-sm font-medium leading-6 text-gray-900">
                Total Estimate of Tax according to new regime
            </label>
            {
              print?
              <h1>{data3}</h1>
              :null
            }
        

          <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="currency" className="sr-only">
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            >
                <option>INR</option>
            </select>
          </div>
        </div>
      </div>
      
      
        
    )
  }
  

  