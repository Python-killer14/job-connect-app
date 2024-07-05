"use client"
import { cn } from '@/lib/utils'
import { BriefcaseBusiness } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type navItemType = {
  name: string,
  slug: string,

}

const NavItem = ({name, slug}: navItemType) => {

  const path =usePathname()

  console.log("pathName", path);
  
  return (
    <li className={cn( path === slug ? "bg-light-rose text-rose-red": "", "px-3 py-2 rounded-md" )}>
      <Link href={`${slug}`} className='flex items-center gap-2 ' >
      <BriefcaseBusiness className='text-rose-red' size={22} strokeWidth={1.5} />
      {name}
      </Link>
      </li>
  )
}

export default NavItem