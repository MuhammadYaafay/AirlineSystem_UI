import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, CreditCard, Gift, Globe, Medal, Plane, Shield, Star, User } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function LoyaltyProgramPage() {
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
              alt="SkyJet Rewards"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="container absolute inset-0 z-20 flex items-center">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">SkyJet Rewards</h1>
              <p className="text-xl text-white/90">
                Earn points, unlock benefits, and enjoy exclusive privileges with our loyalty program
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Join Now
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="container py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Program Overview</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              SkyJet Rewards is designed to recognize and reward our most loyal customers with benefits that enhance
              your travel experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Plane className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Earn Points</h3>
                  <p className="text-muted-foreground">
                    Earn points every time you fly with SkyJet Airways or our partner airlines, as well as through
                    everyday spending with our credit card partners.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Medal className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Tier Status</h3>
                  <p className="text-muted-foreground">
                    Progress through our membership tiers—Silver, Gold, and Platinum—to unlock enhanced benefits and
                    exclusive privileges.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Gift className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Redeem Rewards</h3>
                  <p className="text-muted-foreground">
                    Use your points for flight rewards, upgrades, extra baggage allowance, lounge access, and exclusive
                    merchandise from our partners.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Membership Tiers */}
        <section className="bg-muted/40 py-12">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Membership Tiers</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore the benefits of each membership tier and start your journey towards elite status
              </p>
            </div>

            <Tabs defaultValue="blue" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="blue">Blue</TabsTrigger>
                <TabsTrigger value="silver">Silver</TabsTrigger>
                <TabsTrigger value="gold">Gold</TabsTrigger>
                <TabsTrigger value="platinum">Platinum</TabsTrigger>
              </TabsList>

              <TabsContent value="blue" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Star className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Blue</h3>
                        <p className="text-sm text-muted-foreground">Entry Level</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Begin your journey with SkyJet Rewards and enjoy basic benefits as soon as you join. Blue
                      membership is our entry-level tier that introduces you to the program and starts you on the path
                      toward elite status.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Earn 5 points per $1 spent on flights</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Online account management</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Redeem points for flights and upgrades</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Special member-only promotions</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle>How to Qualify</CardTitle>
                        <CardDescription>Join for free and start earning points immediately</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="p-4 bg-primary/5 rounded-lg">
                          <h4 className="font-medium mb-2">Requirements</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                              <User className="h-4 w-4 text-primary" />
                              <span>Free registration</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Shield className="h-4 w-4 text-primary" />
                              <span>No minimum flight requirements</span>
                            </li>
                          </ul>
                        </div>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          Join SkyJet Rewards
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="silver" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-500 flex items-center justify-center">
                        <Star className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Silver</h3>
                        <p className="text-sm text-muted-foreground">Mid-Tier Status</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Silver membership unlocks additional benefits to enhance your travel experience. Enjoy priority
                      services and bonus points to make your journeys more rewarding.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>All Blue benefits</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Earn 7 points per $1 spent on flights</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Priority check-in</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Extra 10kg baggage allowance</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Priority waitlist</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle>How to Qualify</CardTitle>
                        <CardDescription>Reach Silver status by meeting these requirements</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="p-4 bg-primary/5 rounded-lg">
                          <h4 className="font-medium mb-2">Annual Requirements (any one)</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                              <Plane className="h-4 w-4 text-primary" />
                              <span>25,000 qualifying miles</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CreditCard className="h-4 w-4 text-primary" />
                              <span>30 flight segments</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Globe className="h-4 w-4 text-primary" />
                              <span>$3,000 qualifying spend</span>
                            </li>
                          </ul>
                        </div>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          Track Your Progress
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="gold" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center">
                        <Star className="h-5 w-5 text-amber-900" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Gold</h3>
                        <p className="text-sm text-muted-foreground">Premium Status</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Gold membership represents a significant commitment to SkyJet Airways and rewards you with premium
                      benefits. Enjoy exclusive services that make your travel experience seamless.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>All Silver benefits</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Earn 10 points per $1 spent on flights</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Lounge access for you and a guest</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Priority boarding</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Guaranteed seat availability</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Complimentary upgrades when available</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle>How to Qualify</CardTitle>
                        <CardDescription>Reach Gold status by meeting these requirements</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="p-4 bg-primary/5 rounded-lg">
                          <h4 className="font-medium mb-2">Annual Requirements (any one)</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                              <Plane className="h-4 w-4 text-primary" />
                              <span>50,000 qualifying miles</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CreditCard className="h-4 w-4 text-primary" />
                              <span>60 flight segments</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Globe className="h-4 w-4 text-primary" />
                              <span>$6,000 qualifying spend</span>
                            </li>
                          </ul>
                        </div>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          Track Your Progress
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="platinum" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                        <Star className="h-5 w-5 text-slate-200" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Platinum</h3>
                        <p className="text-sm text-muted-foreground">Elite Status</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Our highest tier of membership, Platinum status offers the ultimate in premium travel experiences.
                      Enjoy exclusive benefits and personalized service at every step of your journey.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>All Gold benefits</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Earn 15 points per $1 spent on flights</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Dedicated concierge service</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Complimentary upgrades with higher priority</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Additional checked baggage allowance (3 x 32kg)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Exclusive Platinum events and offers</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Partner airline elite status recognition</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle>How to Qualify</CardTitle>
                        <CardDescription>Reach Platinum status by meeting these requirements</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="p-4 bg-primary/5 rounded-lg">
                          <h4 className="font-medium mb-2">Annual Requirements (any one)</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                              <Plane className="h-4 w-4 text-primary" />
                              <span>100,000 qualifying miles</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CreditCard className="h-4 w-4 text-primary" />
                              <span>100 flight segments</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Globe className="h-4 w-4 text-primary" />
                              <span>$12,000 qualifying spend</span>
                            </li>
                          </ul>
                        </div>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          Track Your Progress
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Earning Points */}
        <section className="container py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Earning Points</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to earn SkyJet Rewards points and accelerate your journey to elite status
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Flights</CardTitle>
                <CardDescription>Earn points every time you fly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Earn points based on the amount you spend on SkyJet Airways flights and with our partner airlines.
                  Your earning rate depends on your membership tier:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Membership Tier</th>
                        <th className="text-left p-2">Points per $1</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2">Blue</td>
                        <td className="p-2">5 points</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Silver</td>
                        <td className="p-2">7 points</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Gold</td>
                        <td className="p-2">10 points</td>
                      </tr>
                      <tr>
                        <td className="p-2">Platinum</td>
                        <td className="p-2">15 points</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground">
                  Points are calculated based on the base fare and carrier-imposed surcharges, excluding taxes and fees.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Partners</CardTitle>
                <CardDescription>Earn points with our partners</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Expand your earning potential with our extensive partner network:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Credit Card Partners</span>
                      <p className="text-sm text-muted-foreground">
                        Earn points on everyday purchases with our co-branded credit cards
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Hotel Partners</span>
                      <p className="text-sm text-muted-foreground">
                        Earn points on stays at over 20,000 hotels worldwide
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Car Rental Partners</span>
                      <p className="text-sm text-muted-foreground">Earn points on car rentals with major providers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Retail Partners</span>
                      <p className="text-sm text-muted-foreground">
                        Shop with our partners and earn points on your purchases
                      </p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-2">
                  View All Partners
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Redeeming Points */}
        <section className="bg-muted/40 py-12">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Redeeming Points</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Use your SkyJet Rewards points for a variety of rewards and experiences
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <Plane className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Flight Rewards</h3>
                    <p className="text-muted-foreground mb-4">
                      Redeem your points for flights to over 150 destinations worldwide, with no blackout dates.
                    </p>
                    <Badge className="bg-primary text-primary-foreground">From 10,000 points</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <Medal className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Upgrades</h3>
                    <p className="text-muted-foreground mb-4">
                      Use your points to upgrade to Premium Economy or Business Class for a more comfortable journey.
                    </p>
                    <Badge className="bg-primary text-primary-foreground">From 15,000 points</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <Gift className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Extra Services</h3>
                    <p className="text-muted-foreground mb-4">
                      Redeem points for extra baggage, lounge access, seat selection, and other travel enhancements.
                    </p>
                    <Badge className="bg-primary text-primary-foreground">From 5,000 points</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <CreditCard className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Shopping</h3>
                    <p className="text-muted-foreground mb-4">
                      Redeem your points for merchandise, gift cards, and experiences through our rewards catalog.
                    </p>
                    <Badge className="bg-primary text-primary-foreground">From 2,000 points</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Partner Airlines</h3>
                    <p className="text-muted-foreground mb-4">
                      Use your points for flights with our partner airlines to expand your travel options.
                    </p>
                    <Badge className="bg-primary text-primary-foreground">From 12,000 points</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <Star className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Exclusive Experiences</h3>
                    <p className="text-muted-foreground mb-4">
                      Redeem points for unique experiences, including VIP events, concerts, and sports packages.
                    </p>
                    <Badge className="bg-primary text-primary-foreground">From 25,000 points</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Explore Rewards Catalog
              </Button>
            </div>
          </div>
        </section>

        {/* Family Pooling */}
        <section className="container py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Family Points Pooling</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Combine points with family members to reach rewards faster
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-4">How Family Pooling Works</h3>
              <p className="text-muted-foreground mb-6">
                Our Family Points Pooling feature allows up to six family members to combine their SkyJet Rewards points
                into a single account, making it easier to earn enough points for flight rewards and upgrades.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Create a Family Pool</h4>
                    <p className="text-sm text-muted-foreground">
                      Any SkyJet Rewards member can create a family pool and invite up to five additional family members
                      to join.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <CreditCard className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Contribute Points</h4>
                    <p className="text-sm text-muted-foreground">
                      Each family member can choose how many of their points to contribute to the pool, with options for
                      one-time or automatic contributions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <Gift className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Redeem Together</h4>
                    <p className="text-sm text-muted-foreground">
                      The pool owner can redeem points for rewards that benefit any family member in the pool.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Family Pooling Benefits</CardTitle>
                <CardDescription>Why pool your points with family members</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Reach reward thresholds faster by combining points</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Prevent points from expiring by keeping accounts active</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Maximize the value of points earned by infrequent travelers</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Book travel for family members using pooled points</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>No fees for pooling or transferring points between family members</span>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="text-center">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Create Family Pool</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/10 py-12">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Join SkyJet Rewards Today</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Start earning points, enjoying benefits, and elevating your travel experience with SkyJet Airways
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Join Now - It's Free
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

