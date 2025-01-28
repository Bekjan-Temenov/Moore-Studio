import React from 'react'

interface ContainerProps {
    children: React.ReactNode
}
const Container:React.FC<ContainerProps> = ({children}) => {
  return (
    <div className='w-[90%] mx-auto max-w-[1250px]'>
      {children}
    </div>
  )
}

export default Container
