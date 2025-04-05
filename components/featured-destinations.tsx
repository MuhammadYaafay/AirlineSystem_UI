import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function FeaturedDestinations() {
  return (
    <section className="container py-12 md:py-16 lg:py-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Featured Destinations</h2>
          <p className="text-muted-foreground mt-2">Explore our most popular destinations</p>
        </div>
        <Button variant="link" className="hidden md:flex items-center gap-1 text-primary hover:text-primary/90">
          View all destinations
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="overflow-hidden border-none shadow-lg">
          <div className="relative h-48 sm:h-56">
            <Image src="/images/new-york.jpg" alt="New York" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="text-xl font-bold">New York</h3>
              <p className="text-sm opacity-90">United States</p>
            </div>
          </div>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm text-muted-foreground">Flights from</div>
                <div className="text-lg font-bold">$299</div>
              </div>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Book Now
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-none shadow-lg">
          <div className="relative h-48 sm:h-56">
            <Image src="/images/london.jpg" alt="London" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="text-xl font-bold">London</h3>
              <p className="text-sm opacity-90">United Kingdom</p>
            </div>
          </div>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm text-muted-foreground">Flights from</div>
                <div className="text-lg font-bold">$449</div>
              </div>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Book Now
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-none shadow-lg">
          <div className="relative h-48 sm:h-56">
            <Image src="/images/tokyo.jpg" alt="Tokyo" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="text-xl font-bold">Tokyo</h3>
              <p className="text-sm opacity-90">Japan</p>
            </div>
          </div>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm text-muted-foreground">Flights from</div>
                <div className="text-lg font-bold">$799</div>
              </div>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Book Now
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-none shadow-lg">
          <div className="relative h-48 sm:h-56">
            <Image src="/images/paris.jpg" alt="Paris" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="text-xl font-bold">Paris</h3>
              <p className="text-sm opacity-90">France</p>
            </div>
          </div>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm text-muted-foreground">Flights from</div>
                <div className="text-lg font-bold">$399</div>
              </div>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Book Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center mt-8 md:hidden">
        <Button variant="outline" className="flex items-center gap-1">
          View all destinations
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}

