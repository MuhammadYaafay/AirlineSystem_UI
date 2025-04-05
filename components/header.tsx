"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Bell, Globe, Menu, Plane, Search, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  // In a real implementation, you would add an event listener for scroll
  // and update isScrolled state accordingly

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <Plane className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">SkyJet Airways</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Book</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/80 to-primary p-6 no-underline outline-none focus:shadow-md"
                          href="/special-offers"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium text-primary-foreground">Special Offers</div>
                          <p className="text-sm leading-tight text-primary-foreground/90">
                            Discover our latest deals and exclusive promotions
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <Link
                        href="/flights/search"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Flights</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Search and book flights to destinations worldwide
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Manage</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <Link
                        href="/check-in"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Check-in</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Check in for your flight online
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/flight-status"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Flight Status</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Check the status of your flight
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/my-bookings"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">My Bookings</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          View and manage your bookings
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/refunds-changes"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Refunds & Changes</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Request refunds or make changes to your booking
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/travel-documents"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Travel Documents</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Information about required travel documents
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Experience</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <Link
                        href="/onboard-experience"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Onboard Experience</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Learn about our in-flight services and amenities
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/travel-classes"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Travel Classes</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Explore our Economy, Premium, and Business class options
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/destinations"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Destinations</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Discover our global network of destinations
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/loyalty-program"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Loyalty Program</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Join SkyJet Rewards and earn points on every flight
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/special-assistance"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Special Assistance</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Information for passengers requiring special assistance
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Help</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <Link
                        href="/help/contact-us"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Contact Us</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Get in touch with our customer service team
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/help/faqs"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">FAQs</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Find answers to commonly asked questions
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/help/baggage"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Baggage Information</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Learn about baggage allowances and fees
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/help/travel-updates"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Travel Updates</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Stay informed about travel advisories and updates
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Search */}
        <div className="hidden md:flex md:flex-1 md:justify-center md:px-4">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search flights, destinations..."
              className="w-full bg-background pl-8 md:w-[300px] lg:w-[300px]"
            />
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Language & Currency</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>English (US)</DropdownMenuItem>
              <DropdownMenuItem>English (UK)</DropdownMenuItem>
              <DropdownMenuItem>Español</DropdownMenuItem>
              <DropdownMenuItem>Français</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>USD ($)</DropdownMenuItem>
              <DropdownMenuItem>EUR (€)</DropdownMenuItem>
              <DropdownMenuItem>GBP (£)</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Bell className="h-5 w-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>My Bookings</DropdownMenuItem>
              <DropdownMenuItem>SkyJet Rewards</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-6 py-6">
                <div className="flex items-center gap-2">
                  <Plane className="h-5 w-5 text-primary" />
                  <span className="font-bold">SkyJet Airways</span>
                </div>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <div className="font-medium">Book</div>
                    <Link href="/flights/search" className="text-muted-foreground">
                      Flights
                    </Link>
                    <Link href="/special-offers" className="text-muted-foreground">
                      Special Offers
                    </Link>
                  </div>
                  <div className="grid gap-2">
                    <div className="font-medium">Manage</div>
                    <Link href="/check-in" className="text-muted-foreground">
                      Check-in
                    </Link>
                    <Link href="/flight-status" className="text-muted-foreground">
                      Flight Status
                    </Link>
                    <Link href="/my-bookings" className="text-muted-foreground">
                      My Bookings
                    </Link>
                    <Link href="/refunds-changes" className="text-muted-foreground">
                      Refunds & Changes
                    </Link>
                    <Link href="/travel-documents" className="text-muted-foreground">
                      Travel Documents
                    </Link>
                  </div>
                  <div className="grid gap-2">
                    <div className="font-medium">Experience</div>
                    <Link href="/onboard-experience" className="text-muted-foreground">
                      Onboard Experience
                    </Link>
                    <Link href="/travel-classes" className="text-muted-foreground">
                      Travel Classes
                    </Link>
                    <Link href="/destinations" className="text-muted-foreground">
                      Destinations
                    </Link>
                    <Link href="/loyalty-program" className="text-muted-foreground">
                      Loyalty Program
                    </Link>
                    <Link href="/special-assistance" className="text-muted-foreground">
                      Special Assistance
                    </Link>
                  </div>
                  <div className="grid gap-2">
                    <div className="font-medium">Help</div>
                    <Link href="/help/contact-us" className="text-muted-foreground">
                      Contact Us
                    </Link>
                    <Link href="/help/faqs" className="text-muted-foreground">
                      FAQs
                    </Link>
                    <Link href="/help/baggage" className="text-muted-foreground">
                      Baggage Information
                    </Link>
                    <Link href="/help/travel-updates" className="text-muted-foreground">
                      Travel Updates
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

