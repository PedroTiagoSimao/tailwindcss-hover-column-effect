import { useState } from "react"

export default function Home() {

  const [col1Active, setCol1Active] = useState('w-[33.33%]')
  const [col2Active, setCol2Active] = useState('w-[33.33%]')
  const [col3Active, setCol3Active] = useState('w-[33.33%]')

  console.log(col1Active);

  return (
    <>
      <div 
        className='flex flex-wrap h-screen bg-teal-500'>
          <div className={`flex flex-grow justify-center items-center h-screen br-slate-800 group z-0 ${col1Active} transition-[width] duration-500 ease-in-outbg-fixed bg-cover bg-left bg-column1 bg-no-repeat`}
           onMouseEnter={() => (setCol1Active('w-[50%]'), setCol2Active('w-[12.5%]'), setCol3Active('w-[12.5%]') )} 
           onMouseLeave={() => (setCol1Active('w-[33.33%]'), setCol2Active('w-[33.33%]'), setCol3Active('w-[33.33%]') )} 
           >
            <p className="px-5 py-1 border-[1px] mx-3 opacity-0 group-hover:opacity-100 transition ease-in-out duration-500">Botão 1</p>
          </div>
          <div className={`flex flex-grow justify-center items-center h-screen bg-red-500 group z-0 ${col2Active} transition-[width] duration-500 ease-in-out bg-fixed bg-cover bg-center bg-column2 bg-no-repeat`}
           onMouseEnter={() => (setCol1Active('w-[12.5%]'), setCol2Active('w-[50%]'), setCol3Active('w-[12.5%]') )} 
           onMouseLeave={() => (setCol1Active('w-[33.33%]'), setCol2Active('w-[33.33%]'), setCol3Active('w-[33.33%]') )} 
           >
            <p className="px-5 py-1 border-[1px] mx-3 opacity-0 group-hover:opacity-100 transition ease-in-out duration-500">Botão 2</p>
          </div>
          <div className={`flex flex-grow justify-center items-center h-screen bg-red-500 group z-0 ${col3Active} transition-[width] duration-500 ease-in-out bg-fixed bg-cover bg-right bg-column3 bg-no-repeat`}
          onMouseEnter={() => (setCol1Active('w-[12.5%]'), setCol2Active('w-[12.5%]'), setCol3Active('w-[50%]') )} 
           onMouseLeave={() => (setCol1Active('w-[33.33%]'), setCol2Active('w-[33.33%]'), setCol3Active('w-[33.33%]') )} 
          >
            <p className="px-5 py-1 border-[1px] mx-3 opacity-0 group-hover:opacity-100 transition ease-in-out duration-500">Botão 3</p>
          </div>
      </div>
    </>
  )
}
