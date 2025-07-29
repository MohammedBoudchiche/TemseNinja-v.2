import { ModeToggle } from "@/components/ModeToggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const NavBar = () => {
  return (
    <nav className="flex  items-center justify-end p-4  sticky top-0 z-50 w-full">
      <ul className="flex space-x-4 mr-50">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <ModeToggle/>
      
      <div className="ml-10">
        <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      </div>
    </nav>
  )
}

export default NavBar