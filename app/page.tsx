import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, ChevronsUpDown, MapPin, Users } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FeaturedDestinations from "@/components/featured-destinations"
import TravelDeals from "@/components/travel-deals"
import WhyChooseUs from "@/components/why-choose-us"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
          <div className="h-[600px] bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} />
          <div className="container absolute inset-0 z-20 flex items-center">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl xl:text-6xl">
                Discover the World with SkyJet Airways
              </h1>
              <p className="text-xl text-white/90">
                Experience seamless travel with premium comfort and unbeatable prices
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Book Now
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  View Deals
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Flight Search Section */}
        <section className="container -mt-16 relative z-30 mb-24">
          <Card className="border-none shadow-xl">
            <CardContent className="p-6">
              <Tabs defaultValue="round-trip" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-6">
                  <TabsTrigger value="round-trip">Round Trip</TabsTrigger>
                  <TabsTrigger value="one-way">One Way</TabsTrigger>
                  <TabsTrigger value="multi-city">Multi-City</TabsTrigger>
                </TabsList>
                <TabsContent value="round-trip" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">From</label>
                      <div className="relative">
                        <div className="absolute left-3 top-3 text-muted-foreground">
                          <MapPin size={18} />
                        </div>
                        <Input placeholder="Departure City" className="pl-10" defaultValue="New York (JFK)" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">To</label>
                      <div className="relative">
                        <div className="absolute left-3 top-3 text-muted-foreground">
                          <MapPin size={18} />
                        </div>
                        <Input placeholder="Arrival City" className="pl-10" defaultValue="London (LHR)" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Departure</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start text-left font-normal">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            <span>Pick a date</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Return</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start text-left font-normal">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            <span>Pick a date</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Passengers</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-between">
                            <div className="flex items-center">
                              <Users className="mr-2 h-4 w-4" />
                              <span>2 Adults, 0 Children</span>
                            </div>
                            <ChevronsUpDown className="h-4 w-4 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                          <div className="grid gap-4">
                            <div className="grid grid-cols-2 items-center justify-between">
                              <div className="text-sm font-medium">Adults</div>
                              <div className="flex items-center gap-2">
                                <Button variant="outline" size="icon" className="h-8 w-8">
                                  -
                                </Button>
                                <span className="w-8 text-center">2</span>
                                <Button variant="outline" size="icon" className="h-8 w-8">
                                  +
                                </Button>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 items-center justify-between">
                              <div className="text-sm font-medium">Children</div>
                              <div className="flex items-center gap-2">
                                <Button variant="outline" size="icon" className="h-8 w-8">
                                  -
                                </Button>
                                <span className="w-8 text-center">0</span>
                                <Button variant="outline" size="icon" className="h-8 w-8">
                                  +
                                </Button>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 items-center justify-between">
                              <div className="text-sm font-medium">Infants</div>
                              <div className="flex items-center gap-2">
                                <Button variant="outline" size="icon" className="h-8 w-8">
                                  -
                                </Button>
                                <span className="w-8 text-center">0</span>
                                <Button variant="outline" size="icon" className="h-8 w-8">
                                  +
                                </Button>
                              </div>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Class</label>
                      <Select defaultValue="economy">
                        <SelectTrigger>
                          <SelectValue placeholder="Select class" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="economy">Economy</SelectItem>
                          <SelectItem value="premium">Premium Economy</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                          <SelectItem value="first">First Class</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-end">
                      <Link href="/flights/search">
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          Search Flights
                        </Button>
                      </Link>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="one-way" className="space-y-6">
                  {/* Similar structure to round-trip but without return date */}
                  <div className="text-center text-muted-foreground">One way flight search options</div>
                </TabsContent>

                <TabsContent value="multi-city" className="space-y-6">
                  {/* Multi-city flight search options */}
                  <div className="text-center text-muted-foreground">Multi-city flight search options</div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        {/* Featured Destinations */}
        <FeaturedDestinations />

        {/* Travel Deals */}
        <TravelDeals />

        {/* Why Choose Us */}
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  )
}

