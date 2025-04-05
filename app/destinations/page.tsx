import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Globe, MapPin, Search } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function DestinationsPage() {
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
              alt="Destinations"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="container absolute inset-0 z-20 flex items-center">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Our Destinations</h1>
              <p className="text-xl text-white/90">
                Discover over 150 destinations across 6 continents with SkyJet Airways
              </p>

              <div className="relative max-w-md mt-8">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  className="pl-10 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/70 border-white/20"
                  placeholder="Search destinations..."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Continents Tabs */}
        <section className="container py-12">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-7 h-auto mb-8">
              <TabsTrigger value="all" className="py-2">
                All
              </TabsTrigger>
              <TabsTrigger value="europe" className="py-2">
                Europe
              </TabsTrigger>
              <TabsTrigger value="americas" className="py-2">
                Americas
              </TabsTrigger>
              <TabsTrigger value="asia" className="py-2">
                Asia
              </TabsTrigger>
              <TabsTrigger value="africa" className="py-2">
                Africa
              </TabsTrigger>
              <TabsTrigger value="oceania" className="py-2">
                Oceania
              </TabsTrigger>
              <TabsTrigger value="middle-east" className="py-2">
                Middle East
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-1">Popular Destinations</h2>
                  <p className="text-muted-foreground">Explore our most popular destinations around the world</p>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">150+ destinations</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* New York */}
                <Card className="overflow-hidden group">
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                    <img
                      src="/placeholder.svg?height=192&width=288"
                      alt="New York"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
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

                {/* London */}
                <Card className="overflow-hidden group">
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                    <img
                      src="/placeholder.svg?height=192&width=288"
                      alt="London"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
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

                {/* Tokyo */}
                <Card className="overflow-hidden group">
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                    <img
                      src="/placeholder.svg?height=192&width=288"
                      alt="Tokyo"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
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

                {/* Paris */}
                <Card className="overflow-hidden group">
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                    <img
                      src="/placeholder.svg?height=192&width=288"
                      alt="Paris"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
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

                {/* Dubai */}
                <Card className="overflow-hidden group">
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                    <img
                      src="/placeholder.svg?height=192&width=288"
                      alt="Dubai"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute top-3 left-3 bg-amber-600 hover:bg-amber-700 text-white">Popular</Badge>
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h3 className="text-xl font-bold">Dubai</h3>
                      <p className="text-sm opacity-90">United Arab Emirates</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-muted-foreground">Flights from</div>
                        <div className="text-lg font-bold">$549</div>
                      </div>
                      <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Sydney */}
                <Card className="overflow-hidden group">
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                    <img
                      src="/placeholder.svg?height=192&width=288"
                      alt="Sydney"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h3 className="text-xl font-bold">Sydney</h3>
                      <p className="text-sm opacity-90">Australia</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-muted-foreground">Flights from</div>
                        <div className="text-lg font-bold">$999</div>
                      </div>
                      <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Rome */}
                <Card className="overflow-hidden group">
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                    <img
                      src="/placeholder.svg?height=192&width=288"
                      alt="Rome"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h3 className="text-xl font-bold">Rome</h3>
                      <p className="text-sm opacity-90">Italy</p>
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

                {/* Bangkok */}
                <Card className="overflow-hidden group">
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                    <img
                      src="/placeholder.svg?height=192&width=288"
                      alt="Bangkok"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute top-3 left-3 bg-amber-600 hover:bg-amber-700 text-white">Popular</Badge>
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h3 className="text-xl font-bold">Bangkok</h3>
                      <p className="text-sm opacity-90">Thailand</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-muted-foreground">Flights from</div>
                        <div className="text-lg font-bold">$649</div>
                      </div>
                      <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-8">
                <Button variant="outline" size="lg" className="gap-2">
                  <Globe className="h-4 w-4" />
                  View All Destinations
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="europe" className="space-y-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-1">European Destinations</h2>
                  <p className="text-muted-foreground">Explore the rich culture and history of Europe</p>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">45+ destinations</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* London */}
                <Card className="overflow-hidden group">
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                    <img
                      src="/placeholder.svg?height=192&width=288"
                      alt="London"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
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

                {/* Paris */}
                <Card className="overflow-hidden group">
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                    <img
                      src="/placeholder.svg?height=192&width=288"
                      alt="Paris"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
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

                {/* Rome */}
                <Card className="overflow-hidden group">
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                    <img
                      src="/placeholder.svg?height=192&width=288"
                      alt="Rome"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h3 className="text-xl font-bold">Rome</h3>
                      <p className="text-sm opacity-90">Italy</p>
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

                {/* Barcelona */}
                <Card className="overflow-hidden group">
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                    <img
                      src="/placeholder.svg?height=192&width=288"
                      alt="Barcelona"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h3 className="text-xl font-bold">Barcelona</h3>
                      <p className="text-sm opacity-90">Spain</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-muted-foreground">Flights from</div>
                        <div className="text-lg font-bold">$429</div>
                      </div>
                      <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Placeholder content for other tabs */}
            <TabsContent value="americas" className="text-center py-12">
              <div className="max-w-md mx-auto">
                <Globe className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">Americas Destinations</h3>
                <p className="text-muted-foreground mb-6">
                  Explore destinations across North and South America, from bustling cities to natural wonders.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Coming Soon</Button>
              </div>
            </TabsContent>

            <TabsContent value="asia" className="text-center py-12">
              <div className="max-w-md mx-auto">
                <Globe className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">Asian Destinations</h3>
                <p className="text-muted-foreground mb-6">
                  Discover the diverse cultures, ancient traditions, and modern cities across Asia.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Coming Soon</Button>
              </div>
            </TabsContent>

            <TabsContent value="africa" className="text-center py-12">
              <div className="max-w-md mx-auto">
                <Globe className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">African Destinations</h3>
                <p className="text-muted-foreground mb-6">
                  Experience the vibrant cultures, wildlife, and landscapes across the African continent.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Coming Soon</Button>
              </div>
            </TabsContent>

            <TabsContent value="oceania" className="text-center py-12">
              <div className="max-w-md mx-auto">
                <Globe className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">Oceania Destinations</h3>
                <p className="text-muted-foreground mb-6">
                  Explore the natural beauty and unique wildlife of Australia, New Zealand, and Pacific islands.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Coming Soon</Button>
              </div>
            </TabsContent>

            <TabsContent value="middle-east" className="text-center py-12">
              <div className="max-w-md mx-auto">
                <Globe className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">Middle East Destinations</h3>
                <p className="text-muted-foreground mb-6">
                  Discover ancient history and modern luxury across the destinations of the Middle East.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Coming Soon</Button>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Flight Map */}
        <section className="bg-muted/40 py-12">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight mb-2">SkyJet Airways Route Network</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our growing network connects major cities across the globe with direct and convenient routes
              </p>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
              <img
                src="/placeholder.svg?height=500&width=1200"
                alt="Flight Routes Map"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="mt-8 text-center">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Explore Interactive Map
              </Button>
            </div>
          </div>
        </section>

        {/* Destination Guides */}
        <section className="container py-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Destination Guides</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the best attractions, restaurants, and experiences at our popular destinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                <img
                  src="/placeholder.svg?height=192&width=384"
                  alt="New York Guide"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">New York City</h3>
                  <p className="text-sm opacity-90">Travel Guide</p>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Explore the Big Apple's iconic landmarks, diverse neighborhoods, world-class museums, and vibrant
                  culinary scene.
                </p>
                <Button variant="outline" className="w-full">
                  Read Guide
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                <img
                  src="/placeholder.svg?height=192&width=384"
                  alt="Tokyo Guide"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">Tokyo</h3>
                  <p className="text-sm opacity-90">Travel Guide</p>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Discover the perfect blend of tradition and innovation in Japan's capital, from ancient temples to
                  futuristic skyscrapers.
                </p>
                <Button variant="outline" className="w-full">
                  Read Guide
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                <img
                  src="/placeholder.svg?height=192&width=384"
                  alt="Paris Guide"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">Paris</h3>
                  <p className="text-sm opacity-90">Travel Guide</p>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Experience the romance and elegance of the City of Light, from iconic landmarks to charming
                  neighborhoods and world-class cuisine.
                </p>
                <Button variant="outline" className="w-full">
                  Read Guide
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              View All Guides
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

