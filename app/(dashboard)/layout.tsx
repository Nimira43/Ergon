import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

import { PropsWithChildren } from 'react'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}
export default layout