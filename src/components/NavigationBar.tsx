import { BriefcaseBusiness } from "lucide-react"
import Link from "next/link"
import NavItem from "./NavItem"
import { FC } from "react"
import DarkModeToggle from "./DarkModeToggle"


interface MenuItemType {
  id: string,
  name: string,
  slug: string
}

const menuData: MenuItemType[]  = [
  {
    id: "m1",
    name: "Find work",
    slug: "/"
  },
  {
    id: "m2",
    name: "Messages",
    slug: "/messages"
  },
  {
    id: "m3",
    name: "My profile",
    slug: "/profile"
  },


]

const NavigationBar: FC = () => {
  return (
    <div className='mx-auto w-full max-w-screen-xl py-3 border'>
      <nav className="flex justify-between items-center">
        <div>
          {process.env.NEXT_PUBLIC_APP_NAME}
        </div>
        <ul className="flex items-center gap-4">
          {
            menuData.map(({id, name, slug}) => {
            return (
              <NavItem key={id} name={name} slug={slug} />
            )
          })
          }
         
        </ul>
        <div>
          <DarkModeToggle />
        </div>
      </nav>
    </div>
  )
}

export default NavigationBar