import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Coffee, Utensils, Wifi, Film, Heart, BookOpen } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function OnboardExperiencePage() {
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
              alt="Onboard Experience"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="container absolute inset-0 z-20 flex items-center">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Onboard Experience</h1>
              <p className="text-xl text-white/90">Discover comfort and luxury at 35,000 feet with SkyJet Airways</p>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="container py-12">
          <Tabs defaultValue="economy" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="economy">Economy Class</TabsTrigger>
              <TabsTrigger value="premium">Premium Economy</TabsTrigger>
              <TabsTrigger value="business">Business Class</TabsTrigger>
            </TabsList>

            <TabsContent value="economy" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Economy Class Experience</h2>
                  <p className="text-muted-foreground mb-4">
                    Our Economy Class offers comfort and value for all travelers. Enjoy modern amenities, delicious
                    meals, and attentive service throughout your journey.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                        <Utensils className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Delicious Meals</h3>
                        <p className="text-sm text-muted-foreground">
                          Enjoy complimentary meals and beverages curated by renowned chefs, with options for special
                          dietary requirements available upon request.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                        <Film className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Entertainment</h3>
                        <p className="text-sm text-muted-foreground">
                          Access hundreds of movies, TV shows, games, and music through our state-of-the-art seatback
                          screens.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                        <Wifi className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Connectivity</h3>
                        <p className="text-sm text-muted-foreground">
                          Stay connected with onboard Wi-Fi available for purchase, and USB power outlets at every seat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Economy Class"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-medium mb-4">Economy Class Amenities</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <Utensils className="h-6 w-6 text-primary" />
                      </div>
                      <div className="font-medium">Meals & Beverages</div>
                      <div className="text-xs text-muted-foreground mt-1">Complimentary on all flights</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <Film className="h-6 w-6 text-primary" />
                      </div>
                      <div className="font-medium">Entertainment</div>
                      <div className="text-xs text-muted-foreground mt-1">Seatback screens on all flights</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <Wifi className="h-6 w-6 text-primary" />
                      </div>
                      <div className="font-medium">Wi-Fi</div>
                      <div className="text-xs text-muted-foreground mt-1">Available for purchase</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <Coffee className="h-6 w-6 text-primary" />
                      </div>
                      <div className="font-medium">Snacks</div>
                      <div className="text-xs text-muted-foreground mt-1">Complimentary on all flights</div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="text-center">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Book Economy Class</Button>
              </div>
            </TabsContent>

            <TabsContent value="premium" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="mb-4">
                    <Badge className="bg-blue-600 text-white mb-2">Enhanced Experience</Badge>
                    <h2 className="text-2xl font-bold">Premium Economy Class</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Enjoy extra comfort and premium service with our Premium Economy Class. More legroom, wider seats,
                    enhanced amenities, and priority services make your journey even more enjoyable.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center mt-1">
                        <Heart className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Extra Comfort</h3>
                        <p className="text-sm text-muted-foreground">
                          Enjoy 7 inches of extra legroom, wider seats with additional recline, and adjustable headrests
                          for maximum comfort.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center mt-1">
                        <Utensils className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Premium Dining</h3>
                        <p className="text-sm text-muted-foreground">
                          Enhanced meal options served on fine tableware with a wider selection of complimentary
                          beverages including premium wines.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center mt-1">
                        <Wifi className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Priority Services</h3>
                        <p className="text-sm text-muted-foreground">
                          Enjoy priority check-in, boarding, and baggage handling, plus a complimentary Wi-Fi voucher
                          for your journey.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Premium Economy Class"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-medium mb-4">Premium Economy Class Amenities</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-full bg-blue-600/10 flex items-center justify-center mb-3">
                        <Utensils className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="font-medium">Premium Dining</div>
                      <div className="text-xs text-muted-foreground mt-1">Enhanced meal options</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-full bg-blue-600/10 flex items-center justify-center mb-3">
                        <Film className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="font-medium">Larger Screens</div>
                      <div className="text-xs text-muted-foreground mt-1">Enhanced entertainment</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-full bg-blue-600/10 flex items-center justify-center mb-3">
                        <Wifi className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="font-medium">Complimentary Wi-Fi</div>
                      <div className="text-xs text-muted-foreground mt-1">Basic browsing package</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-full bg-blue-600/10 flex items-center justify-center mb-3">
                        <BookOpen className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="font-medium">Amenity Kit</div>
                      <div className="text-xs text-muted-foreground mt-1">Essential travel items</div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="text-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Book Premium Economy</Button>
              </div>
            </TabsContent>

            <TabsContent value="business" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="mb-4">
                    <Badge className="bg-amber-600 text-white mb-2">Luxury Experience</Badge>
                    <h2 className="text-2xl font-bold">Business Class</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Experience the pinnacle of comfort and luxury with our Business Class. Lie-flat seats, gourmet
                    dining, premium amenities, and personalized service ensure an unforgettable journey.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-600/20 flex items-center justify-center mt-1">
                        <Heart className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Lie-Flat Seats</h3>
                        <p className="text-sm text-muted-foreground">
                          Spacious lie-flat seats with direct aisle access convert into a fully flat bed with premium
                          bedding for restful sleep.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-600/20 flex items-center justify-center mt-1">
                        <Utensils className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Gourmet Dining</h3>
                        <p className="text-sm text-muted-foreground">
                          Multi-course meals designed by award-winning chefs, paired with fine wines and champagnes,
                          served on demand.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-600/20 flex items-center justify-center mt-1">
                        <Wifi className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Premium Services</h3>
                        <p className="text-sm text-muted-foreground">
                          Dedicated check-in, priority boarding, exclusive lounge access, and unlimited high-speed Wi-Fi
                          throughout your journey.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Business Class"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-medium mb-4">Business Class Amenities</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-full bg-amber-600/10 flex items-center justify-center mb-3">
                        <Utensils className="h-6 w-6 text-amber-600" />
                      </div>
                      <div className="font-medium">Gourmet Dining</div>
                      <div className="text-xs text-muted-foreground mt-1">Chef-curated menus</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-full bg-amber-600/10 flex items-center justify-center mb-3">
                        <Film className="h-6 w-6 text-amber-600" />
                      </div>
                      <div className="font-medium">Premium Entertainment</div>
                      <div className="text-xs text-muted-foreground mt-1">Noise-canceling headphones</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-full bg-amber-600/10 flex items-center justify-center mb-3">
                        <Wifi className="h-6 w-6 text-amber-600" />
                      </div>
                      <div className="font-medium">Unlimited Wi-Fi</div>
                      <div className="text-xs text-muted-foreground mt-1">High-speed connectivity</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-full bg-amber-600/10 flex items-center justify-center mb-3">
                        <BookOpen className="h-6 w-6 text-amber-600" />
                      </div>
                      <div className="font-medium">Luxury Amenity Kit</div>
                      <div className="text-xs text-muted-foreground mt-1">Designer skincare products</div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="text-center">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">Book Business Class</Button>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Dining Section */}
        <section className="bg-muted/40 py-12">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Dining at Altitude</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experience exceptional cuisine at 35,000 feet with menus designed by award-winning chefs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                  <img
                    src="/placeholder.svg?height=192&width=384"
                    alt="Economy Class Dining"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-2">Economy Class Dining</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Enjoy delicious, regionally-inspired meals with multiple options to choose from, accompanied by a
                    selection of beverages.
                  </p>
                  <div className="text-sm">
                    <div className="font-medium mb-1">Highlights:</div>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Multiple meal choices</li>
                      <li>Special meals available upon request</li>
                      <li>Complimentary beverages</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                  <img
                    src="/placeholder.svg?height=192&width=384"
                    alt="Premium Economy Dining"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-2">Premium Economy Dining</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Elevated dining experience with enhanced menu options served on fine tableware, featuring a greater
                    selection of wines and spirits.
                  </p>
                  <div className="text-sm">
                    <div className="font-medium mb-1">Highlights:</div>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Enhanced meal presentation</li>
                      <li>Premium wine selection</li>
                      <li>Between-meal snacks available</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                  <img
                    src="/placeholder.svg?height=192&width=384"
                    alt="Business Class Dining"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-2">Business Class Dining</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Multi-course dining experience created by world-renowned chefs, with meals served on-demand and a
                    curated selection of fine wines and champagne.
                  </p>
                  <div className="text-sm">
                    <div className="font-medium mb-1">Highlights:</div>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Chef-curated multi-course meals</li>
                      <li>Dine-on-demand service</li>
                      <li>Sommelier-selected wines</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Entertainment Section */}
        <section className="container py-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Entertainment & Connectivity</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay entertained and connected throughout your journey with our state-of-the-art entertainment system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Inflight Entertainment</h3>
              <p className="text-muted-foreground">
                Our state-of-the-art entertainment system features thousands of hours of content, including the latest
                movies, TV shows, music, games, and more. Available on seatback screens across all cabin classes.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Latest Hollywood and international films</li>
                <li>TV series, documentaries, and live sports</li>
                <li>Music playlists and channels</li>
                <li>Interactive games for all ages</li>
                <li>Dedicated kids' content</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium">Connectivity</h3>
              <p className="text-muted-foreground">
                Stay connected at 35,000 feet with our high-speed Wi-Fi, available on most of our fleet. Different
                packages are available to suit your needs.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>High-speed Wi-Fi available for purchase</li>
                <li>Complimentary for Business Class passengers</li>
                <li>Basic browsing package for Premium Economy</li>
                <li>USB power ports at every seat</li>
                <li>AC power outlets in Premium Economy and Business Class</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

