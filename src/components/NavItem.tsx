import Link from 'next/link'
import React from 'react'

type navItemType = {
  name: string,
  slug: string,

}

const NavItem = ({name, slug}: navItemType) => {
  return (
    <li >
      <Link href={`${slug}`} >
      {name}
      </Link>
      </li>
  )
}

export default NavItem