import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Plane, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container px-4 py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-4">
              <Plane className="h-5 w-5 text-primary" />
              <span className="font-bold">SkyJet Airways</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Experience seamless travel with premium comfort and unbeatable prices.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-medium mb-3">Book</h3>
            <Link href="/flights/search" className="text-sm text-muted-foreground hover:text-foreground">
              Flights
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Car Rentals
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Airport Transfers
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-medium mb-3">Manage</h3>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Check-in
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Flight Status
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              My Bookings
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Refunds & Changes
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Travel Documents
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-medium mb-3">Experience</h3>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Onboard Experience
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Travel Classes
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Destinations
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Loyalty Program
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Special Assistance
            </Link>
          </div>

          <div className="flex flex-col gap-2 sm:col-span-2 md:col-span-4 lg:col-span-1">
            <h3 className="font-medium mb-3">Subscribe to Our Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">Stay updated with our latest offers and promotions.</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email address" />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground">
                Terms & Conditions
              </Link>
              <Link href="#" className="hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-foreground">
                Cookie Policy
              </Link>
              <Link href="#" className="hover:text-foreground">
                Accessibility
              </Link>
              <Link href="#" className="hover:text-foreground">
                Legal
              </Link>
            </div>
            <div className="text-sm text-muted-foreground sm:text-right">
              © {new Date().getFullYear()} SkyJet Airways. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

