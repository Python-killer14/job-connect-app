"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Types
import { IconsOptionsType, MenuItemType } from '@/types/navigation/navTypes'

// Icons
import { BriefcaseBusiness, Mail, SquareUserRound } from 'lucide-react'

const iconOptions: IconsOptionsType = {
  briefCase: <BriefcaseBusiness className='text-rose-red' size={22} strokeWidth={1.5} />,
  message: <Mail className='text-rose-red' size={22} strokeWidth={1.5} />,
  profile: <SquareUserRound className='text-rose-red' size={23} strokeWidth={1.5} />
}

const NavItem = ({ name, slug, iconName }: MenuItemType) => {
  const path = usePathname();

  // Check if on this path?
  const isOnThisPage = path === slug;

  return (
    <li className={cn(isOnThisPage ? "bg-light-rose text-rose-red" : "dark:hover:text-black hover:bg-hover-gray", "transition-colors duration-150 rounded-md")}>
      <Link href={`${slug}`} className='flex items-center gap-2 px-3 py-2'>
        {iconOptions[iconName]}
        {name}
      </Link>
    </li>
  );
}

export default NavItem;
