import { AiOutlineAreaChart } from 'react-icons/ai'
import { IoLayersOutline } from 'react-icons/io5'
import { PiAppWindow } from 'react-icons/pi'

type NavLink = {
  href: string
  label: string
  icon: React.ReactNode
}

const links: NavLink[] = [
  {
    href: '/add-job',
    label: 'add job',
    icon: <IoLayersOutline />,
  },
  {
    href: '/jobs',
    label: 'all jobs',
    icon: <PiAppWindow />,
  },
  {
    href: '/stats',
    label: 'stats',
    icon: <AiOutlineAreaChart />,
  },
]

export default links