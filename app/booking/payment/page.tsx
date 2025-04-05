import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { CreditCard, Info, Lock, Shield } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import BookingSummary from "@/components/booking-summary"

export default function PaymentPage() {
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
            <div className="flex-1 h-1 bg-primary"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">
                4
              </div>
              <div className="text-sm mt-1">Payment</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
                <CardDescription>Choose your preferred payment method</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="credit-card" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="credit-card">Credit Card</TabsTrigger>
                    <TabsTrigger value="paypal">PayPal</TabsTrigger>
                    <TabsTrigger value="apple-pay">Apple Pay</TabsTrigger>
                  </TabsList>

                  <TabsContent value="credit-card" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input id="cardName" placeholder="John Smith" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <div className="relative">
                          <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                            <svg
                              width="24"
                              height="16"
                              viewBox="0 0 24 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width="24" height="16" rx="2" fill="#1A1F71" />
                            </svg>
                            <svg
                              width="24"
                              height="16"
                              viewBox="0 0 24 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width="24" height="16" rx="2" fill="#FF5F00" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiryMonth">Expiry Month</Label>
                        <Select>
                          <SelectTrigger id="expiryMonth">
                            <SelectValue placeholder="MM" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                              <SelectItem key={month} value={month.toString().padStart(2, "0")}>
                                {month.toString().padStart(2, "0")}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="expiryYear">Expiry Year</Label>
                        <Select>
                          <SelectTrigger id="expiryYear">
                            <SelectValue placeholder="YY" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                              <SelectItem key={year} value={year.toString().slice(-2)}>
                                {year}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" maxLength={4} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="billingAddress">Billing Address</Label>
                      <Input id="billingAddress" placeholder="Street address" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="City" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State/Province</Label>
                        <Input id="state" placeholder="State" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zipCode">Zip/Postal Code</Label>
                        <Input id="zipCode" placeholder="Zip code" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Select>
                        <SelectTrigger id="country">
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

                    <div className="flex items-center space-x-2">
                      <Checkbox id="saveCard" />
                      <Label htmlFor="saveCard">Save card for future payments</Label>
                    </div>
                  </TabsContent>

                  <TabsContent value="paypal" className="space-y-6">
                    <div className="flex flex-col items-center justify-center p-8 border rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-4">PayPal</div>
                      <p className="text-center text-muted-foreground mb-6">
                        You will be redirected to PayPal to complete your payment securely.
                      </p>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">Continue with PayPal</Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="apple-pay" className="space-y-6">
                    <div className="flex flex-col items-center justify-center p-8 border rounded-lg">
                      <div className="text-2xl font-bold mb-4">Apple Pay</div>
                      <p className="text-center text-muted-foreground mb-6">
                        Complete your payment securely with Apple Pay.
                      </p>
                      <Button className="bg-black hover:bg-gray-800 text-white">Pay with Apple Pay</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Billing Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Billing Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
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
              </CardContent>
              <CardFooter className="flex-col gap-4">
                <div className="text-sm text-muted-foreground mb-2">
                  <Lock className="h-4 w-4 inline-block mr-1" />
                  Your payment information is encrypted and secure.
                </div>
                <Link href="/booking/confirmation" className="w-full">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Complete Booking
                  </Button>
                </Link>
                <div className="text-xs text-center text-muted-foreground">
                  By clicking "Complete Booking", you agree to our{" "}
                  <Link href="#" className="text-primary hover:underline">
                    Terms and Conditions
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </div>
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
                        Payment FAQ
                      </Link>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <Link href="#" className="hover:underline">
                        Security Information
                      </Link>
                    </div>
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-primary" />
                      <Link href="#" className="hover:underline">
                        Accepted Payment Methods
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

