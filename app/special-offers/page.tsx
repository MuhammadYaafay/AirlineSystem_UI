import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Plane } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function SpecialOffersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
          <div className="relative h-[400px]">
            <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
            <img
              src="/placeholder.svg?height=400&width=1200"
              alt="Special Offers"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="container absolute inset-0 z-20 flex items-center">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Special Offers & Promotions</h1>
              <p className="text-xl text-white/90">
                Exclusive deals and limited-time offers on flights, hotels, and vacation packages
              </p>
            </div>
          </div>
        </section>

        {/* Featured Offers */}
        <section className="container py-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Featured Offers</h2>
              <p className="text-muted-foreground mt-2">Our best deals, handpicked for you</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Featured Offer 1 */}
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <div className="relative h-64">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                  <img
                    src="/placeholder.svg?height=256&width=512"
                    alt="Summer Sale"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">Limited Time</Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">Summer Sale</h3>
                  <p className="text-white/90">Up to 30% off on international flights</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Plane className="h-4 w-4 text-primary" />
                    <span className="text-sm">Multiple destinations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm">Travel period: Jun 1 - Aug 31, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm">Book by: May 15, 2024</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">View Deal</Button>
                </div>
              </CardContent>
            </Card>

            {/* Featured Offer 2 */}
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <div className="relative h-64">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                  <img
                    src="/placeholder.svg?height=256&width=512"
                    alt="City Breaks"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">Weekend Getaway</Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">City Breaks</h3>
                  <p className="text-white/90">Flights + 2 nights hotel from $299</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Plane className="h-4 w-4 text-primary" />
                    <span className="text-sm">New York, Boston, Chicago</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm">Travel period: May 1 - Jun 30, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm">Book by: Apr 30, 2024</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">View Deal</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* All Offers */}
        <section className="bg-muted/40 py-12">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Current Promotions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Browse all our active offers and promotions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Offer 1 */}
              <Card className="overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-primary/80 p-4 text-primary-foreground">
                  <Badge variant="outline" className="bg-white/20 text-white border-white/40 hover:bg-white/20">
                    Business Class
                  </Badge>
                  <h3 className="text-xl font-bold mt-2">Premium Experience</h3>
                  <p className="text-sm opacity-90 mt-1">30% off on business class flights</p>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-primary" />
                      <span className="text-sm">Europe & Asia destinations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm">Travel period: Jun 15 - Sep 30, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm">Book by: May 31, 2024</span>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">View Deal</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Offer 2 */}
              <Card className="overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 text-white">
                  <Badge variant="outline" className="bg-white/20 text-white border-white/40 hover:bg-white/20">
                    Family Vacation
                  </Badge>
                  <h3 className="text-xl font-bold mt-2">Family Package</h3>
                  <p className="text-sm opacity-90 mt-1">Kids fly free with 2 paying adults</p>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Domestic destinations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Travel period: Jul 1 - Aug 31, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Book by: Jun 15, 2024</span>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">View Deal</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Offer 3 */}
              <Card className="overflow-hidden">
                <div className="bg-gradient-to-r from-amber-600 to-amber-800 p-4 text-white">
                  <Badge variant="outline" className="bg-white/20 text-white border-white/40 hover:bg-white/20">
                    Last Minute
                  </Badge>
                  <h3 className="text-xl font-bold mt-2">Spontaneous Getaway</h3>
                  <p className="text-sm opacity-90 mt-1">Up to 40% off on last-minute bookings</p>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-amber-600" />
                      <span className="text-sm">Selected destinations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-amber-600" />
                      <span className="text-sm">Travel period: Next 2 weeks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-amber-600" />
                      <span className="text-sm">Limited availability</span>
                    </div>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">View Deal</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Offer 4 */}
              <Card className="overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-green-800 p-4 text-white">
                  <Badge variant="outline" className="bg-white/20 text-white border-white/40 hover:bg-white/20">
                    Loyalty Members
                  </Badge>
                  <h3 className="text-xl font-bold mt-2">Member Exclusive</h3>
                  <p className="text-sm opacity-90 mt-1">Extra 10% off for SkyJet Rewards members</p>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-green-600" />
                      <span className="text-sm">All destinations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Travel period: Anytime</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Login required to access</span>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">View Deal</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Offer 5 */}
              <Card className="overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4 text-white">
                  <Badge variant="outline" className="bg-white/20 text-white border-white/40 hover:bg-white/20">
                    Honeymoon
                  </Badge>
                  <h3 className="text-xl font-bold mt-2">Romantic Getaway</h3>
                  <p className="text-sm opacity-90 mt-1">Luxury packages with special perks</p>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">Maldives, Bali, Santorini</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">Travel period: May - Dec 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">Book by: Ongoing</span>
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">View Deal</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Offer 6 */}
              <Card className="overflow-hidden">
                <div className="bg-gradient-to-r from-red-600 to-red-800 p-4 text-white">
                  <Badge variant="outline" className="bg-white/20 text-white border-white/40 hover:bg-white/20">
                    Flash Sale
                  </Badge>
                  <h3 className="text-xl font-bold mt-2">48-Hour Sale</h3>
                  <p className="text-sm opacity-90 mt-1">Up to 50% off select destinations</p>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Plane className="h-4 w-4 text-red-600" />
                      <span className="text-sm">Caribbean destinations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-red-600" />
                      <span className="text-sm">Travel period: Jun - Nov 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-red-600" />
                      <span className="text-sm">Sale ends in 1 day, 12 hours</span>
                    </div>
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">View Deal</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Destination Deals */}
        <section className="container py-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Destination Deals</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Special offers for popular destinations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                  <img
                    src="/placeholder.svg?height=192&width=256"
                    alt="Tokyo"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-3 text-white">
                  <h3 className="font-bold">Tokyo</h3>
                  <p className="text-xs">Flights from $799</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                  <img
                    src="/placeholder.svg?height=192&width=256"
                    alt="Paris"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-3 text-white">
                  <h3 className="font-bold">Paris</h3>
                  <p className="text-xs">Flights from $599</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                  <img
                    src="/placeholder.svg?height=192&width=256"
                    alt="Dubai"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-3 text-white">
                  <h3 className="font-bold">Dubai</h3>
                  <p className="text-xs">Flights from $749</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                  <img
                    src="/placeholder.svg?height=192&width=256"
                    alt="Sydney"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-3 text-white">
                  <h3 className="font-bold">Sydney</h3>
                  <p className="text-xs">Flights from $999</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-primary/10 py-12">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Get Exclusive Offers</h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter and be the first to know about our special promotions and deals
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

