"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Types
import { IconsOptionsType, MenuItemType } from "@/types/navigation/navTypes";

// Icons
import { BriefcaseBusiness, Mail, SquareUserRound } from "lucide-react";

const iconOptions: IconsOptionsType = {
  briefCase: (
    <BriefcaseBusiness
      className="w-7 h-7 md-plus:w-6 md-plus:h-6 text-rose-red"
      // size={22}
      strokeWidth={1.5}
    />
  ),
  message: (
    <Mail
      className="w-7 h-7 md-plus:w-6 md-plus:h-6 text-rose-red "
      //  size={22}
      strokeWidth={1.5}
    />
  ),
  profile: (
    <SquareUserRound
      className="w-8 h-8 md-plus:w-6 md-plus:h-6 text-rose-red"
      // size={23}
      strokeWidth={1.5}
    />
  ),
};

const NavItem = ({ name, slug, iconName }: MenuItemType) => {
  const path = usePathname();

  // Check if on this path?
  const isOnThisPage = path === slug;

  return (
    <li
      className={cn(
        isOnThisPage
          ? "bg-light-rose text-rose-red  "
          : "dark:hover:text-black hover:bg-hover-gray",
        "transition-colors duration-150 border-b md-plus:border-b-0 md-plus:rounded-md w-full md-plus:w-auto "
      )}
    >
      <Link
        href={`${slug}`}
        className="flex items-center gap-2 w-full py-4 px-5 md-plus:px-3 md-plus:py-2  "
      >
        {iconOptions[iconName]}
        <p className=" font-medium md-plus:font-normal text-lg md-plus:text-base ">
          {name}
        </p>
      </Link>
    </li>
  );
};

export default NavItem;
