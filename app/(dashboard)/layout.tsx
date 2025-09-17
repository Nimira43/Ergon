import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}
export default layout