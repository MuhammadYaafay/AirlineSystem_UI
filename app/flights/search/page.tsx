import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { ArrowLeftRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FlightCard from "@/components/flight-card"
import Link from "next/link"

export default function FlightSearchPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full md:w-80 space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Filters</CardTitle>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/90 hover:bg-background">
                    Reset
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Price Range */}
                <div className="space-y-3">
                  <h3 className="font-medium">Price Range</h3>
                  <div className="space-y-4">
                    <Slider defaultValue={[400]} max={2000} step={10} />
                    <div className="flex items-center justify-between">
                      <span className="text-sm">$0</span>
                      <span className="text-sm font-medium">$400</span>
                      <span className="text-sm">$2,000</span>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Stops */}
                <div className="space-y-3">
                  <h3 className="font-medium">Stops</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="nonstop" />
                      <Label htmlFor="nonstop">Nonstop</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="1stop" />
                      <Label htmlFor="1stop">1 Stop</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="2plusstops" />
                      <Label htmlFor="2plusstops">2+ Stops</Label>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Airlines */}
                <div className="space-y-3">
                  <h3 className="font-medium">Airlines</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="skyjet" defaultChecked />
                      <Label htmlFor="skyjet">SkyJet Airways</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="delta" />
                      <Label htmlFor="delta">Delta Airlines</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="united" />
                      <Label htmlFor="united">United Airlines</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="american" />
                      <Label htmlFor="american">American Airlines</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="british" />
                      <Label htmlFor="british">British Airways</Label>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Departure Time */}
                <div className="space-y-3">
                  <h3 className="font-medium">Departure Time</h3>
                  <RadioGroup defaultValue="anytime">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="anytime" id="anytime" />
                      <Label htmlFor="anytime">Anytime</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="morning" id="morning" />
                      <Label htmlFor="morning">Morning (5:00 AM - 11:59 AM)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="afternoon" id="afternoon" />
                      <Label htmlFor="afternoon">Afternoon (12:00 PM - 5:59 PM)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="evening" id="evening" />
                      <Label htmlFor="evening">Evening (6:00 PM - 11:59 PM)</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Separator />

                {/* Duration */}
                <div className="space-y-3">
                  <h3 className="font-medium">Duration</h3>
                  <div className="space-y-4">
                    <Slider defaultValue={[12]} max={30} step={1} />
                    <div className="flex items-center justify-between">
                      <span className="text-sm">0h</span>
                      <span className="text-sm font-medium">Max 12h</span>
                      <span className="text-sm">30h</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Flight Results */}
          <div className="flex-1 space-y-6">
            {/* Search Summary */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-muted p-4 rounded-lg">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-lg font-medium">
                  <span>New York (JFK)</span>
                  <ArrowLeftRight className="h-4 w-4" />
                  <span>London (LHR)</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  May 15, 2024 - May 22, 2024 • 2 Passengers • Economy
                </div>
              </div>
              <Button variant="outline" size="sm">
                Change Search
              </Button>
            </div>

            {/* Sort Options */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">143</span> results found
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">Sort by:</span>
                <Select defaultValue="recommended">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recommended">Recommended</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="duration">Duration</SelectItem>
                    <SelectItem value="departure">Departure Time</SelectItem>
                    <SelectItem value="arrival">Arrival Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Flight Cards */}
            <div className="space-y-4">
              <Link href="/flights/details/1" className="block">
                <FlightCard
                  airline="SkyJet Airways"
                  flightNumber="SJ 103"
                  departureTime="08:30 AM"
                  departureAirport="JFK"
                  arrivalTime="08:45 PM"
                  arrivalAirport="LHR"
                  duration="7h 15m"
                  stops={0}
                  price={649}
                  featured={true}
                />
              </Link>

              <Link href="/flights/details/2" className="block">
                <FlightCard
                  airline="British Airways"
                  flightNumber="BA 178"
                  departureTime="10:15 AM"
                  departureAirport="JFK"
                  arrivalTime="10:30 PM"
                  arrivalAirport="LHR"
                  duration="7h 15m"
                  stops={0}
                  price={689}
                  featured={false}
                />
              </Link>

              <Link href="/flights/details/3" className="block">
                <FlightCard
                  airline="Delta Airlines"
                  flightNumber="DL 4372"
                  departureTime="01:45 PM"
                  departureAirport="JFK"
                  arrivalTime="02:15 AM"
                  arrivalAirport="LHR"
                  duration="7h 30m"
                  stops={0}
                  price={712}
                  featured={false}
                />
              </Link>

              <Link href="/flights/details/4" className="block">
                <FlightCard
                  airline="SkyJet Airways"
                  flightNumber="SJ 105"
                  departureTime="06:20 PM"
                  departureAirport="JFK"
                  arrivalTime="06:50 AM"
                  arrivalAirport="LHR"
                  duration="7h 30m"
                  stops={0}
                  price={599}
                  featured={false}
                />
              </Link>

              <Link href="/flights/details/5" className="block">
                <FlightCard
                  airline="American Airlines"
                  flightNumber="AA 100"
                  departureTime="09:30 AM"
                  departureAirport="JFK"
                  arrivalTime="11:45 PM"
                  arrivalAirport="LHR"
                  duration="9h 15m"
                  stops={1}
                  stopAirport="BOS"
                  price={542}
                  featured={false}
                />
              </Link>
            </div>

            {/* Load More */}
            <div className="flex justify-center pt-4">
              <Button variant="outline">Load More Flights</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

