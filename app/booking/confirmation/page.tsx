import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Calendar, Check, Download, Plane, PlaneLanding, PlaneTakeoff, Printer, Share, User } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function ConfirmationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container py-8">
        {/* Success Message */}
        <div className="max-w-3xl mx-auto mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
            <Check className="h-8 w-8 text-green-600 dark:text-green-500" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Booking Confirmed!</h1>
          <p className="text-muted-foreground">
            Your booking has been confirmed and your tickets have been sent to your email.
          </p>
        </div>

        {/* Booking Reference */}
        <Card className="max-w-3xl mx-auto mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Booking Reference</div>
                <div className="text-2xl font-bold">SJ1234567</div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Printer className="h-4 w-4" />
                  <span>Print</span>
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Share className="h-4 w-4" />
                  <span>Share</span>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Date</div>
                <div className="font-medium">May 15, 2024</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Passengers</div>
                <div className="font-medium">2 Adults</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Total Paid</div>
                <div className="font-medium">$1,368.00</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Flight Details */}
        <Card className="max-w-3xl mx-auto mb-8">
          <CardHeader>
            <CardTitle>Flight Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Outbound Flight */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-primary/10 text-primary hover:bg-primary/20">
                  Outbound
                </Badge>
                <div className="text-sm text-muted-foreground">Wednesday, May 15, 2024</div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <PlaneTakeoff className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">08:30 AM</div>
                      <div>New York (JFK)</div>
                      <div className="text-sm text-muted-foreground">John F. Kennedy International Airport</div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex flex-col items-center justify-center">
                  <div className="text-xs text-muted-foreground mb-1">7h 15m</div>
                  <div className="w-24 h-px bg-border relative">
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">Nonstop</div>
                </div>

                <div className="flex-1">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <PlaneLanding className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">08:45 PM</div>
                      <div>London (LHR)</div>
                      <div className="text-sm text-muted-foreground">Heathrow Airport</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 p-4 bg-muted rounded-lg">
                <div className="flex items-center gap-2">
                  <Plane className="h-4 w-4 text-primary" />
                  <div>
                    <div className="text-sm font-medium">SkyJet Airways SJ 103</div>
                    <div className="text-xs text-muted-foreground">Boeing 787-9</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:ml-auto">
                  <User className="h-4 w-4 text-primary" />
                  <div>
                    <div className="text-sm font-medium">Seats</div>
                    <div className="text-xs text-muted-foreground">14A, 14B</div>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Return Flight */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40"
                >
                  Return
                </Badge>
                <div className="text-sm text-muted-foreground">Wednesday, May 22, 2024</div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <PlaneTakeoff className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">11:30 AM</div>
                      <div>London (LHR)</div>
                      <div className="text-sm text-muted-foreground">Heathrow Airport</div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex flex-col items-center justify-center">
                  <div className="text-xs text-muted-foreground mb-1">8h 10m</div>
                  <div className="w-24 h-px bg-border relative">
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">Nonstop</div>
                </div>

                <div className="flex-1">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <PlaneLanding className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">02:40 PM</div>
                      <div>New York (JFK)</div>
                      <div className="text-sm text-muted-foreground">John F. Kennedy International Airport</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 p-4 bg-muted rounded-lg">
                <div className="flex items-center gap-2">
                  <Plane className="h-4 w-4 text-primary" />
                  <div>
                    <div className="text-sm font-medium">SkyJet Airways SJ 104</div>
                    <div className="text-xs text-muted-foreground">Boeing 787-9</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:ml-auto">
                  <User className="h-4 w-4 text-primary" />
                  <div>
                    <div className="text-sm font-medium">Seats</div>
                    <div className="text-xs text-muted-foreground">22C, 22D</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Passenger Information */}
        <Card className="max-w-3xl mx-auto mb-8">
          <CardHeader>
            <CardTitle>Passenger Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-lg">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Passenger 1</div>
                  <div className="font-medium">Mr. John Smith</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Passport</div>
                  <div className="font-medium">US1234567</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-lg">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Passenger 2</div>
                  <div className="font-medium">Mrs. Jane Smith</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Passport</div>
                  <div className="font-medium">US7654321</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Information */}
        <Card className="max-w-3xl mx-auto mb-8">
          <CardHeader>
            <CardTitle>Payment Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="text-muted-foreground">Payment Method</div>
                <div className="font-medium">Visa •••• 4242</div>
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Base fare (2 passengers)</span>
                  <span>$1,098.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Taxes and fees</span>
                  <span>$200.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Premium seats</span>
                  <span>$70.00</span>
                </div>
              </div>
              <Separator />
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>$1,368.00</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-xl font-semibold">Next Steps</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Calendar className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-medium mb-1">Check-in Online</h3>
                  <p className="text-sm text-muted-foreground">Check-in opens 24 hours before your flight</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Plane className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-medium mb-1">Manage Booking</h3>
                  <p className="text-sm text-muted-foreground">Make changes to your booking if needed</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <User className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-medium mb-1">Join Rewards</h3>
                  <p className="text-sm text-muted-foreground">Earn points on your flights and get benefits</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Manage My Booking</Button>
            <Link href="/">
              <Button variant="outline">Return to Home</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

