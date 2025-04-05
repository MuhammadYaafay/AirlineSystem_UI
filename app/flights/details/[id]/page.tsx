import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  LuggageIcon as Baggage,
  Clock,
  Coffee,
  CreditCard,
  Info,
  Shield,
  Utensils,
  Wifi,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import FlightDetailCard from "@/components/flight-detail-card"
import PriceBreakdown from "@/components/price-breakdown"
import FareOptions from "@/components/fare-options"

export default function FlightDetailsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-6">
          <Link href="/flights/search" className="text-muted-foreground hover:text-foreground">
            Search Results
          </Link>
          <ArrowRight className="h-3 w-3 text-muted-foreground" />
          <span>Flight Details</span>
        </div>

        {/* Flight Summary */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-2xl font-semibold">
              <span>New York (JFK)</span>
              <ArrowRight className="h-5 w-5 text-muted-foreground" />
              <span>London (LHR)</span>
            </div>
            <div className="text-muted-foreground">May 15, 2024 • SkyJet Airways • Flight SJ 103</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">$649</div>
              <div className="text-sm text-muted-foreground">per passenger</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Flight Details */}
            <Card>
              <CardHeader>
                <CardTitle>Flight Details</CardTitle>
                <CardDescription>Outbound • Wednesday, May 15, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <FlightDetailCard
                  airline="SkyJet Airways"
                  flightNumber="SJ 103"
                  aircraft="Boeing 787-9"
                  departureDate="Wed, May 15, 2024"
                  departureTime="08:30 AM"
                  departureAirport="JFK"
                  departureCity="New York"
                  arrivalDate="Wed, May 15, 2024"
                  arrivalTime="08:45 PM"
                  arrivalAirport="LHR"
                  arrivalCity="London"
                  duration="7h 15m"
                  stops={0}
                />
              </CardContent>
            </Card>

            {/* Fare Options */}
            <Card>
              <CardHeader>
                <CardTitle>Select Fare</CardTitle>
                <CardDescription>Choose the fare that best suits your needs</CardDescription>
              </CardHeader>
              <CardContent>
                <FareOptions />
              </CardContent>
            </Card>

            {/* Baggage Information */}
            <Card>
              <CardHeader>
                <CardTitle>Baggage Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center p-4 border rounded-lg">
                    <div className="text-muted-foreground mb-2">Carry-on</div>
                    <Baggage className="h-8 w-8 mb-2 text-primary" />
                    <div className="font-medium">1 × 8kg</div>
                    <div className="text-sm text-muted-foreground">56 × 36 × 23 cm</div>
                  </div>
                  <div className="flex flex-col items-center p-4 border rounded-lg">
                    <div className="text-muted-foreground mb-2">Checked Baggage</div>
                    <Baggage className="h-8 w-8 mb-2 text-primary" />
                    <div className="font-medium">1 × 23kg</div>
                    <div className="text-sm text-muted-foreground">Included in fare</div>
                  </div>
                  <div className="flex flex-col items-center p-4 border rounded-lg">
                    <div className="text-muted-foreground mb-2">Extra Baggage</div>
                    <Baggage className="h-8 w-8 mb-2 text-primary" />
                    <div className="font-medium">$60 per bag</div>
                    <div className="text-sm text-muted-foreground">Up to 23kg</div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  <Info className="h-4 w-4 inline-block mr-1" />
                  Additional or overweight baggage can be purchased during check-in or by managing your booking.
                </div>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardHeader>
                <CardTitle>Onboard Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center p-4 border rounded-lg">
                    <Wifi className="h-6 w-6 mb-2 text-primary" />
                    <div className="font-medium">Wi-Fi</div>
                    <div className="text-xs text-center text-muted-foreground">Available for purchase</div>
                  </div>
                  <div className="flex flex-col items-center p-4 border rounded-lg">
                    <Utensils className="h-6 w-6 mb-2 text-primary" />
                    <div className="font-medium">Meals</div>
                    <div className="text-xs text-center text-muted-foreground">Complimentary meal service</div>
                  </div>
                  <div className="flex flex-col items-center p-4 border rounded-lg">
                    <Coffee className="h-6 w-6 mb-2 text-primary" />
                    <div className="font-medium">Beverages</div>
                    <div className="text-xs text-center text-muted-foreground">Complimentary drinks</div>
                  </div>
                  <div className="flex flex-col items-center p-4 border rounded-lg">
                    <div className="h-6 w-6 mb-2 text-primary flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="6" width="20" height="12" rx="2" />
                        <path d="M6 2v4" />
                        <path d="M18 2v4" />
                        <path d="M6 18v4" />
                        <path d="M18 18v4" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                      </svg>
                    </div>
                    <div className="font-medium">Entertainment</div>
                    <div className="text-xs text-center text-muted-foreground">Seatback screens with movies</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Price Summary */}
          <div className="space-y-6">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>Price Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <PriceBreakdown baseFare={549} taxes={85} fees={15} passengers={2} />
              </CardContent>
              <CardFooter className="flex-col gap-4">
                <Link href="/booking/passenger-info">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Continue to Passenger Details
                  </Button>
                </Link>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4" />
                  <span>Secure payment with SSL encryption</span>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-primary" />
                    <Link href="#" className="hover:underline">
                      Payment Options
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <Baggage className="h-4 w-4 text-primary" />
                    <Link href="#" className="hover:underline">
                      Baggage Policy
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <Link href="#" className="hover:underline">
                      Cancellation Policy
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

