import * as React from 'react';  

export default function Example() {
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
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="0.00"
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
            />
            <label htmlFor='button' className='block text-sm font-medium leading-6 text-gray-900'>
              
            </label>
            <button type='button' className='block box-border rounded border-2 border-black'>submit</button>
            <label htmlFor="Result" className="block text-sm font-medium leading-6 text-gray-900">
                Total Estimate of Tax according to new regime
            </label>
            <input
             type="number"
             name="Result"
             id="price3"
             className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             placeholder="0.00"
             />
        

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
  

  