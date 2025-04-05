import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Info, Shield } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import BookingSummary from "@/components/booking-summary"
import SeatMap from "@/components/seat-map"

export default function SeatSelectionPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container py-8">
        {/* Booking Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">
                1
              </div>
              <div className="text-sm mt-1">Flight</div>
            </div>
            <div className="flex-1 h-1 bg-primary"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">
                2
              </div>
              <div className="text-sm mt-1">Passengers</div>
            </div>
            <div className="flex-1 h-1 bg-primary"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">
                3
              </div>
              <div className="text-sm mt-1">Seats</div>
            </div>
            <div className="flex-1 h-1 bg-muted"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-medium">
                4
              </div>
              <div className="text-sm mt-1">Payment</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Seat Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Select Your Seats</CardTitle>
                <CardDescription>Choose seats for your outbound flight from JFK to LHR</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Seat Map Legend */}
                <div className="flex flex-wrap gap-4 p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded"></div>
                    <span className="text-sm">Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-primary border border-primary/70 rounded"></div>
                    <span className="text-sm">Selected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-500 border border-gray-600 rounded"></div>
                    <span className="text-sm">Occupied</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-amber-200 dark:bg-amber-900/40 border border-amber-300 dark:border-amber-800/60 rounded"></div>
                    <span className="text-sm">Premium ($35)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-200 dark:bg-blue-900/40 border border-blue-300 dark:border-blue-800/60 rounded"></div>
                    <span className="text-sm">Extra Legroom ($55)</span>
                  </div>
                </div>

                {/* Seat Map */}
                <SeatMap />

                {/* Selected Seats */}
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-3">Selected Seats</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-medium">Passenger 1:</span> John Smith
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-primary/10 text-primary hover:bg-primary/20">
                          Seat 14A
                        </Badge>
                        <span className="text-sm font-medium">$35.00</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-medium">Passenger 2:</span> Jane Smith
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-primary/10 text-primary hover:bg-primary/20">
                          Seat 14B
                        </Badge>
                        <span className="text-sm font-medium">$35.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground">
                  <Info className="h-4 w-4 inline-block mr-1" />
                  Seat selection is optional. If you don't select seats now, they will be assigned automatically at
                  check-in.
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/booking/payment" className="w-full">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Continue to Payment
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          {/* Booking Summary */}
          <div>
            <div className="sticky top-6 space-y-6">
              <BookingSummary
                flightNumber="SJ 103"
                departureAirport="JFK"
                departureCity="New York"
                departureTime="08:30 AM"
                departureDate="May 15, 2024"
                arrivalAirport="LHR"
                arrivalCity="London"
                arrivalTime="08:45 PM"
                arrivalDate="May 15, 2024"
                passengers={2}
                baseFare={549}
                taxes={85}
                fees={15}
                extras={[{ name: "Premium Seats", price: 70 }]}
              />

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Info className="h-4 w-4 text-primary" />
                      <Link href="#" className="hover:underline">
                        Seat Selection FAQ
                      </Link>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <Link href="#" className="hover:underline">
                        Accessibility Options
                      </Link>
                    </div>
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-primary" />
                      <Link href="#" className="hover:underline">
                        Payment Methods
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

