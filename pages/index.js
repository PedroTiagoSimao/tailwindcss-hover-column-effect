
export default function Home() {
  return (
    <>
      <div 
        className='flex flex-wrap h-screen bg-teal-500'>
          <div className="flex flex-grow justify-center items-center h-screen
           br-slate-800 group hover:w-[50%] transition-[width] duration-500 ease-in-out
           bg-fixed bg-cover bg-left bg-column1 bg-no-repeat">
            <p className="px-5 py-1 border-[1px] mx-3 opacity-0 group-hover:opacity-100 transition ease-in-out duration-500">Botão 1</p>
          </div>
          <div className="flex flex-grow justify-center items-center h-screen
           bg-red-500 group hover:w-[50%]
           bg-fixed bg-cover bg-center bg-column2 bg-no-repeat">
            <p className="px-5 py-1 border-[1px] mx-3 opacity-0 group-hover:opacity-100 transition ease-in-out duration-500">Botão 2</p>
          </div>
          <div className="flex flex-grow justify-center items-center h-screen 
          bg-red-500 group hover:w-[50%]
          bg-fixed bg-cover bg-right bg-column3 bg-no-repeat">
            <p className="px-5 py-1 border-[1px] mx-3 opacity-0 group-hover:opacity-100 transition ease-in-out duration-500">Botão 3</p>
          </div>
      </div>
    </>
  )
}
