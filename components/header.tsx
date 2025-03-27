import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Header() {
  return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">UK Foreign and Commonwealth Office</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/" className="transition-colors hover:text-foreground/80">
                Home
              </Link>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-4 w-[400px]">
                        <NavigationMenuLink asChild>
                          <Link
                              href="/services/tax-compliance"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Gift Compliance</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Gift compliance and advisory services for diplomatic staff
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                              href="/services/gift-approval"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Gift Approval Assessment</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Submit gifts for compliance review and approval
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <Link href="/about" className="transition-colors hover:text-foreground/80">
                About Us
              </Link>
              <Link href="/contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                  variant="ghost"
                  size="icon"
                  className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="/" className="flex items-center">
                <span className="font-bold">UK Foreign and Commonwealth Office</span>
              </Link>
              <nav className="flex flex-col space-y-4 mt-4">
                <Link href="/" className="text-sm font-medium">
                  Home
                </Link>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Services</div>
                  <Link href="/services/tax-compliance" className="block text-sm text-muted-foreground pl-4">
                    Gift Compliance
                  </Link>
                  <Link href="/services/gift-approval" className="block text-sm text-muted-foreground pl-4">
                    Gift Approval Assessment
                  </Link>
                </div>
                <Link href="/about" className="text-sm font-medium">
                  About Us
                </Link>
                <Link href="/contact" className="text-sm font-medium">
                  Contact
                </Link>
                <Link href="/blog" className="text-sm font-medium">
                  Blog
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
  )
}

