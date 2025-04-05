import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CreditCard, Info, Shield } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import BookingSummary from "@/components/booking-summary"

export default function PassengerInfoPage() {
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
            <div className="flex-1 h-1 bg-muted"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-medium">
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
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>We'll use these details to send your booking confirmation and updates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Passenger 1 */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Passenger 1 (Adult)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title1">Title</Label>
                    <Select defaultValue="mr">
                      <SelectTrigger id="title1">
                        <SelectValue placeholder="Select title" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mr">Mr</SelectItem>
                        <SelectItem value="mrs">Mrs</SelectItem>
                        <SelectItem value="ms">Ms</SelectItem>
                        <SelectItem value="dr">Dr</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="firstName1">First Name</Label>
                    <Input id="firstName1" placeholder="As shown on ID/passport" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName1">Last Name</Label>
                    <Input id="lastName1" placeholder="As shown on ID/passport" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dob1">Date of Birth</Label>
                    <Input id="dob1" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nationality1">Nationality</Label>
                    <Select>
                      <SelectTrigger id="nationality1">
                        <SelectValue placeholder="Select nationality" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="passportNumber1">Passport Number</Label>
                    <Input id="passportNumber1" placeholder="Enter passport number" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="passportExpiry1">Passport Expiry Date</Label>
                    <Input id="passportExpiry1" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="passportCountry1">Passport Issuing Country</Label>
                    <Select>
                      <SelectTrigger id="passportCountry1">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <Checkbox id="frequentFlyer1" />
                  <Label htmlFor="frequentFlyer1">Add frequent flyer number</Label>
                </div>
              </CardContent>
            </Card>

            {/* Passenger 2 */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Passenger 2 (Adult)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title2">Title</Label>
                    <Select defaultValue="mrs">
                      <SelectTrigger id="title2">
                        <SelectValue placeholder="Select title" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mr">Mr</SelectItem>
                        <SelectItem value="mrs">Mrs</SelectItem>
                        <SelectItem value="ms">Ms</SelectItem>
                        <SelectItem value="dr">Dr</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="firstName2">First Name</Label>
                    <Input id="firstName2" placeholder="As shown on ID/passport" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName2">Last Name</Label>
                    <Input id="lastName2" placeholder="As shown on ID/passport" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dob2">Date of Birth</Label>
                    <Input id="dob2" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nationality2">Nationality</Label>
                    <Select>
                      <SelectTrigger id="nationality2">
                        <SelectValue placeholder="Select nationality" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="passportNumber2">Passport Number</Label>
                    <Input id="passportNumber2" placeholder="Enter passport number" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="passportExpiry2">Passport Expiry Date</Label>
                    <Input id="passportExpiry2" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="passportCountry2">Passport Issuing Country</Label>
                    <Select>
                      <SelectTrigger id="passportCountry2">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <Checkbox id="frequentFlyer2" />
                  <Label htmlFor="frequentFlyer2">Add frequent flyer number</Label>
                </div>
              </CardContent>
            </Card>

            {/* Travel Insurance */}
            <Card>
              <CardHeader>
                <CardTitle>Travel Insurance</CardTitle>
                <CardDescription>Protect your trip with comprehensive travel insurance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4 relative">
                    <div className="absolute top-0 right-0 p-2">
                      <Checkbox id="basicInsurance" />
                    </div>
                    <div className="font-medium mb-2">Basic Coverage</div>
                    <div className="text-sm text-muted-foreground mb-4">
                      Trip cancellation, medical emergencies, and baggage protection
                    </div>
                    <div className="font-bold text-primary">$24.99 per passenger</div>
                  </div>
                  <div className="border rounded-lg p-4 relative">
                    <div className="absolute top-0 right-0 p-2">
                      <Checkbox id="premiumInsurance" />
                    </div>
                    <div className="font-medium mb-2">Premium Coverage</div>
                    <div className="text-sm text-muted-foreground mb-4">
                      Everything in Basic plus flight delays, personal liability, and 24/7 assistance
                    </div>
                    <div className="font-bold text-primary">$39.99 per passenger</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 pt-2">
                  <Checkbox id="noInsurance" />
                  <Label htmlFor="noInsurance">No, I don't want travel insurance</Label>
                </div>
              </CardContent>
            </Card>

            {/* Terms and Conditions */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="termsConditions" className="mt-1" />
                    <Label htmlFor="termsConditions" className="text-sm">
                      I have read and agree to the{" "}
                      <Link href="#" className="text-primary hover:underline">
                        Terms and Conditions
                      </Link>
                      ,{" "}
                      <Link href="#" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                      , and{" "}
                      <Link href="#" className="text-primary hover:underline">
                        Fare Rules
                      </Link>
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="marketingEmails" className="mt-1" />
                    <Label htmlFor="marketingEmails" className="text-sm">
                      I would like to receive special offers, promotions, and updates via email
                    </Label>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/booking/seat-selection" className="w-full">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Continue to Seat Selection
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
                        Passenger Information FAQ
                      </Link>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <Link href="#" className="hover:underline">
                        Privacy Policy
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

