import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Check, Coffee, FileText, Monitor, Plane, Utensils, Wifi } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TravelClassesPage() {
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
              alt="Travel Classes"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="container absolute inset-0 z-20 flex items-center">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Travel Classes</h1>
              <p className="text-xl text-white/90">
                Discover the perfect balance of comfort and value for your journey
              </p>
            </div>
          </div>
        </section>

        {/* Classes Overview */}
        <section className="container py-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Our Travel Classes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From affordable comfort to premium luxury, we offer a range of travel experiences to suit every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Economy Class */}
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-primary-foreground">
                <h3 className="text-2xl font-bold">Economy Class</h3>
                <p className="text-sm opacity-90 mt-1">Affordable comfort for all travelers</p>
              </div>
              <CardContent className="p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">Starting from</div>
                  <div className="text-2xl font-bold text-primary">$299</div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Comfortable seating with adjustable headrests</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Complimentary meals and beverages</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Personal entertainment system</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>USB charging port</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>One carry-on bag and one personal item included</span>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Learn More</Button>
              </CardContent>
            </Card>

            {/* Premium Economy Class */}
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
                <Badge className="bg-white/20 text-white border-white/40 hover:bg-white/20 mb-2">Popular Choice</Badge>
                <h3 className="text-2xl font-bold">Premium Economy</h3>
                <p className="text-sm opacity-90 mt-1">Enhanced comfort and service</p>
              </div>
              <CardContent className="p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">Starting from</div>
                  <div className="text-2xl font-bold text-blue-600">$599</div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>Wider seats with 7" extra legroom</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>Premium meal options and complimentary beverages</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>Priority boarding and check-in</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>Enhanced entertainment system with larger screens</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>Additional baggage allowance</span>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Learn More</Button>
              </CardContent>
            </Card>

            {/* Business Class */}
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-amber-600 to-amber-800 p-6 text-white">
                <Badge className="bg-white/20 text-white border-white/40 hover:bg-white/20 mb-2">
                  Premium Experience
                </Badge>
                <h3 className="text-2xl font-bold">Business Class</h3>
                <p className="text-sm opacity-90 mt-1">Luxury and convenience</p>
              </div>
              <CardContent className="p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">Starting from</div>
                  <div className="text-2xl font-bold text-amber-600">$1,999</div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>Lie-flat seats with direct aisle access</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>Gourmet dining with chef-designed menus</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>Exclusive lounge access and priority services</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>Premium noise-canceling headphones</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>Luxury amenity kit and sleepwear</span>
                  </div>
                </div>

                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="bg-muted/40 py-12">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Class Comparison</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Compare our travel classes to find the perfect fit for your journey
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">Features</th>
                    <th className="text-center p-4">Economy</th>
                    <th className="text-center p-4">Premium Economy</th>
                    <th className="text-center p-4">Business</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Seat Pitch</td>
                    <td className="p-4 text-center">32"</td>
                    <td className="p-4 text-center">38"</td>
                    <td className="p-4 text-center">Lie-flat (78" bed)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Seat Width</td>
                    <td className="p-4 text-center">17"</td>
                    <td className="p-4 text-center">19"</td>
                    <td className="p-4 text-center">21"</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Baggage Allowance</td>
                    <td className="p-4 text-center">1 x 23kg</td>
                    <td className="p-4 text-center">2 x 23kg</td>
                    <td className="p-4 text-center">3 x 32kg</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Priority Boarding</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">✓</td>
                    <td className="p-4 text-center">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Lounge Access</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Wi-Fi</td>
                    <td className="p-4 text-center">Purchase</td>
                    <td className="p-4 text-center">Basic Included</td>
                    <td className="p-4 text-center">Full Access Included</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Dining Experience</td>
                    <td className="p-4 text-center">Standard</td>
                    <td className="p-4 text-center">Enhanced</td>
                    <td className="p-4 text-center">Gourmet</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Entertainment Screen</td>
                    <td className="p-4 text-center">10"</td>
                    <td className="p-4 text-center">13"</td>
                    <td className="p-4 text-center">18"</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Amenity Kit</td>
                    <td className="p-4 text-center">Basic</td>
                    <td className="p-4 text-center">Comfort</td>
                    <td className="p-4 text-center">Luxury</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container py-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Class Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the features that make each travel class unique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Plane className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Seating Comfort</h3>
                  <p className="text-muted-foreground">
                    From comfortable standard seats in Economy to spacious lie-flat beds in Business, we ensure a
                    comfortable journey regardless of your chosen travel class. All seats feature adjustable headrests
                    and ample personal space.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Utensils className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Dining Experience</h3>
                  <p className="text-muted-foreground">
                    Enjoy complimentary meals across all classes, with premium options in Business and Premium Economy.
                    Our menus are designed by renowned chefs and feature fresh, seasonal ingredients. Special meals are
                    available upon request.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Entertainment</h3>
                  <p className="text-muted-foreground">
                    All travel classes feature personal entertainment systems with on-demand movies, TV shows, music,
                    and games. Screen sizes and content selection vary by class, with premium options in Business and
                    Premium Economy.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Wifi className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Connectivity</h3>
                  <p className="text-muted-foreground">
                    Stay connected with Wi-Fi available across our fleet. Business Class passengers enjoy complimentary
                    full access, Premium Economy includes basic browsing, and Economy passengers can purchase packages
                    to suit their needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Coffee className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Amenities</h3>
                  <p className="text-muted-foreground">
                    From basic comfort kits in Economy to luxury amenity kits in Business, we provide essentials for a
                    comfortable journey. Business Class passengers also receive premium bedding and sleepwear for
                    overnight flights.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Services</h3>
                  <p className="text-muted-foreground">
                    Enhanced services are available in premium classes, including priority check-in, boarding, and
                    baggage handling. Business Class passengers enjoy dedicated check-in counters and exclusive lounge
                    access at select airports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/10 py-12">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Experience SkyJet Airways?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Book your next journey with us and discover the perfect balance of comfort and value
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Book Now</Button>
              <Button variant="outline">Contact Customer Service</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

