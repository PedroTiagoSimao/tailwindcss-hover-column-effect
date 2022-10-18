import { userAgent } from "next/server"
import { useState, useRef, useEffect, Children } from "react"

export default function Home({ children }) {

  const [colActive, setColActive] = useState(null)

  return (
    <>
      <div 
        className='flex flex-wrap h-screen'>
          <div className={`flex flex-grow justify-center items-center h-screen group z-0 ${colActive ? colActive === 'col1' ? 'w-[50%]' : 'w-[12.5%]' : 'w-[33.33%]'} transition-[width] duration-1000 ease-in-outbg-fixed bg-cover bg-center bg-column1 bg-no-repeat`}
          onMouseEnter={() => setColActive('col1')} 
          onMouseLeave={() => setColActive(null)} 
          >
            <p className="px-5 py-1 border-[1px] mx-3 opacity-0 group-hover:opacity-100 transition ease-in-out duration-500">Botão 1</p>
          </div>
          <div className={`flex flex-grow justify-center items-center h-screen group z-0 ${colActive ? colActive === 'col2' ? 'w-[50%]' : 'w-[12.5%]' : 'w-[33.33%]'} transition-[width] duration-1000 ease-in-outbg-fixed bg-cover bg-center bg-column2 bg-no-repeat`}
          onMouseEnter={() => setColActive('col2')} 
          onMouseLeave={() => setColActive(null)} 
          >
            <p className="px-5 py-1 border-[1px] mx-3 opacity-0 group-hover:opacity-100 transition ease-in-out duration-500">Botão 1</p>
          </div>
          <div className={`flex flex-grow justify-center items-center h-screen group z-0 ${colActive ? colActive === 'col3' ? 'w-[50%]' : 'w-[12.5%]' : 'w-[33.33%]'} transition-[width] duration-1000 ease-in-outbg-fixed bg-cover bg-center bg-column3 bg-no-repeat`}
          onMouseEnter={() => setColActive('col3')} 
          onMouseLeave={() => setColActive(null)} 
          >
            <p className="px-5 py-1 border-[1px] mx-3 opacity-0 group-hover:opacity-100 transition ease-in-out duration-500">Botão 1</p>
          </div>
      </div>
    </>
  )
}