import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Clock, CreditCard, PlaneLanding, PlaneTakeoff, Share } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function MyBookingsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Manage My Bookings</h1>
            <p className="text-muted-foreground">
              View and manage your current bookings, make changes, or check in for your flight
            </p>
          </div>

          <Tabs defaultValue="retrieve" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="retrieve">Retrieve Booking</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming Trips</TabsTrigger>
            </TabsList>

            <TabsContent value="retrieve">
              <Card>
                <CardHeader>
                  <CardTitle>Retrieve Your Booking</CardTitle>
                  <CardDescription>Enter your booking details to view and manage your reservation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="booking-reference">Booking Reference</Label>
                      <Input id="booking-reference" placeholder="e.g. ABC123" />
                      <p className="text-sm text-muted-foreground">
                        6-character code found in your booking confirmation
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Enter last name" />
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Retrieve Booking
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="upcoming">
              <div className="space-y-8">
                {/* Login prompt for saved trips */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <h3 className="text-lg font-medium mb-2">Sign in to view your trips</h3>
                      <p className="text-muted-foreground mb-4">
                        Create an account or sign in to view all your upcoming and past trips in one place
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Sign In</Button>
                        <Button variant="outline">Create Account</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Example upcoming trips (would show after login) */}
                <div>
                  <h2 className="text-xl font-bold mb-4">Your Upcoming Trips</h2>

                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-6">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                          <div>
                            <Badge className="mb-2 bg-primary text-primary-foreground">Upcoming</Badge>
                            <div className="text-lg font-bold">New York to London</div>
                            <div className="text-sm text-muted-foreground">Booking reference: SJ1234567</div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <Button variant="outline" size="sm">
                              Modify
                            </Button>
                            <Button variant="outline" size="sm">
                              Check-in
                            </Button>
                            <Button variant="outline" size="sm">
                              <Share className="h-4 w-4 mr-1" /> Share
                            </Button>
                          </div>
                        </div>

                        <Separator />

                        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6">
                          <div>
                            <div className="flex items-start gap-2">
                              <PlaneTakeoff className="h-5 w-5 text-primary mt-1" />
                              <div>
                                <div className="text-sm text-muted-foreground">Outbound • Wed, May 15, 2024</div>
                                <div className="font-medium">SkyJet Airways SJ 103</div>
                                <div className="text-lg font-bold mt-1">08:30 AM</div>
                                <div className="font-medium">New York (JFK)</div>
                              </div>
                            </div>
                          </div>

                          <div className="hidden md:flex flex-col items-center justify-center">
                            <div className="text-sm text-muted-foreground mb-1">7h 15m</div>
                            <div className="w-24 h-px bg-border relative">
                              <div className="absolute -top-1 left-0 w-2 h-2 rounded-full bg-primary"></div>
                              <div className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <div className="text-sm text-muted-foreground mt-1">Nonstop</div>
                          </div>

                          <div>
                            <div className="flex items-start gap-2">
                              <PlaneLanding className="h-5 w-5 text-primary mt-1" />
                              <div>
                                <div className="text-sm text-muted-foreground">Wed, May 15, 2024</div>
                                <div className="text-lg font-bold mt-1">08:45 PM</div>
                                <div className="font-medium">London (LHR)</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6">
                          <div>
                            <div className="flex items-start gap-2">
                              <PlaneTakeoff className="h-5 w-5 text-primary mt-1" />
                              <div>
                                <div className="text-sm text-muted-foreground">Return • Wed, May 22, 2024</div>
                                <div className="font-medium">SkyJet Airways SJ 104</div>
                                <div className="text-lg font-bold mt-1">11:30 AM</div>
                                <div className="font-medium">London (LHR)</div>
                              </div>
                            </div>
                          </div>

                          <div className="hidden md:flex flex-col items-center justify-center">
                            <div className="text-sm text-muted-foreground mb-1">8h 10m</div>
                            <div className="w-24 h-px bg-border relative">
                              <div className="absolute -top-1 left-0 w-2 h-2 rounded-full bg-primary"></div>
                              <div className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                            <div className="text-sm text-muted-foreground mt-1">Nonstop</div>
                          </div>

                          <div>
                            <div className="flex items-start gap-2">
                              <PlaneLanding className="h-5 w-5 text-primary mt-1" />
                              <div>
                                <div className="text-sm text-muted-foreground">Wed, May 22, 2024</div>
                                <div className="text-lg font-bold mt-1">02:40 PM</div>
                                <div className="font-medium">New York (JFK)</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-muted/50 rounded-md">
                          <div className="flex items-center gap-2">
                            <div className="text-sm font-medium">2 Passengers</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <div className="text-sm font-medium">16 days until departure</div>
                          </div>
                          <div className="flex items-center gap-2 sm:ml-auto">
                            <CreditCard className="h-4 w-4 text-muted-foreground" />
                            <div className="text-sm font-medium">Fully paid</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Need to Make Changes?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  You can modify your booking, select seats, or add additional services to your reservation.
                </p>
                <Link href="/refunds-changes">
                  <Button variant="outline" className="w-full">
                    View Change Options
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ready to Check In?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Online check-in is available from 24 hours up to 90 minutes before your scheduled departure.
                </p>
                <Link href="/check-in">
                  <Button variant="outline" className="w-full">
                    Go to Check-in
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

