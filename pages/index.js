import { useAnimation, motion, animate } from "framer-motion"

const buttonMotion = {
  rest: {
    opacity: 0
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: 'easeOut'
    }
  }
}

const divMotion = {
  rest: {
    opacity: 1
  },
  hover: {
    width: '60%',
    transition: {
      duration: 2,
      ease: 'easeOut'
    }
  }
}

export default function Home() {
  return (
    <>
      <div 
        className='flex flex-wrap h-screen bg-teal-500'>
          <div className="flex flex-grow justify-center items-center h-screen bg-red-500 border-2 hover:w-[50%]">
            <p className="px-5 py-1 border-2 mx-3">Botão 1</p>
          </div>
          <div className="flex flex-grow justify-center items-center h-screen bg-red-500 border-2 hover:w-[50%]">
            <p className="px-5 py-1 border-2 mx-3">Botão 2</p>
          </div>
          <div className="flex flex-grow justify-center items-center h-screen bg-red-500 border-2 hover:w-[50%]">
            <p className="px-5 py-1 border-2 mx-3">Botão 3</p>
          </div>
      </div>
    </>
  )
}
