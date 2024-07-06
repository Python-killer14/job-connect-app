import { BriefcaseBusiness } from "lucide-react"
import Link from "next/link"
import NavItem from "./NavItem"
import { FC } from "react"
import DarkModeToggle from "./DarkModeToggle"

// Types
import { MenuItemType } from "@/types/navigation/navTypes"
import { SignIn } from "./SignInBtn"


const menuData: MenuItemType[]  = [
  {
    id: "m1",
    name: "Find work",
    slug: "/",
    iconName: "briefCase"
  },
  {
    id: "m2",
    name: "Messages",
    slug: "/messages",
    iconName: "message"
  },
  {
    id: "m3",
    name: "My profile",
    slug: "/profile",
    iconName: "profile"
  },


]

const NavigationBar: FC = () => {
  return (
    <div className=' dark:bg-gun-metal mx-auto w-full max-w-screen-xl py-3 px-6 '>
      <nav className="flex justify-between items-center">
        <div>
          {process.env.NEXT_PUBLIC_APP_NAME}
        </div>
        <ul className="flex items-center gap-4">
          {
            menuData.map(({id, name, slug, iconName}) => {
            return (
              <NavItem key={id} name={name} slug={slug} iconName={iconName} />
            )
          })
          }         
        </ul>
        {/* Right side of the  */}
        <div className=" flex items-center">
          <DarkModeToggle />
          <SignIn />
        </div>
      </nav>
    </div>
  )
}

export default NavigationBar