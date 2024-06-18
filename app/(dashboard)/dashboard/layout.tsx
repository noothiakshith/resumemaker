import React from 'react'
import Header from '@/components/custom/Header'
const DashboardLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <Header/>
        {children}
  </div>
  )
}

export default DashboardLayout