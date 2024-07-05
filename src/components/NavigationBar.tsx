import { BriefcaseBusiness } from "lucide-react"
import Link from "next/link"
import NavItem from "./NavItem"


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

const NavigationBar = () => {
  return (
    <div className='mx-auto w-full max-w-screen-xl'>
      <nav>
        <ul>
          {
            menuData.map(({id, name, slug}) => {
            return (
              <NavItem key={id} name={name} slug={slug} />
            )
          })
          }
         
        </ul>
      </nav>
    </div>
  )
}

export default NavigationBar