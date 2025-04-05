import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function RefundsChangesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Refunds & Changes</h1>
            <p className="text-muted-foreground">
              Make changes to your booking, cancel your flight, or request a refund
            </p>
          </div>

          <Tabs defaultValue="retrieve" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="retrieve">Retrieve Booking</TabsTrigger>
              <TabsTrigger value="policies">Policies</TabsTrigger>
              <TabsTrigger value="fees">Change Fees</TabsTrigger>
            </TabsList>

            <TabsContent value="retrieve">
              <Card>
                <CardHeader>
                  <CardTitle>Retrieve Your Booking to Make Changes</CardTitle>
                  <CardDescription>Enter your booking details to modify, cancel, or request a refund</CardDescription>
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

              <Alert className="mt-6">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Important</AlertTitle>
                <AlertDescription>
                  Changes and cancellations must be made at least 24 hours before departure. Different fare types have
                  different change and cancellation policies. Review the policy for your fare type before proceeding.
                </AlertDescription>
              </Alert>
            </TabsContent>

            <TabsContent value="policies">
              <Card>
                <CardHeader>
                  <CardTitle>Change and Cancellation Policies</CardTitle>
                  <CardDescription>Review our policies for different fare types and ticket classes</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Economy Light Fares</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <p>Economy Light tickets are our most restrictive fare type:</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Changes: Not permitted</li>
                            <li>Cancellations: Not permitted</li>
                            <li>No-show: Ticket value is forfeited</li>
                          </ul>
                          <p className="text-sm text-muted-foreground mt-2">
                            We recommend purchasing travel insurance if you choose an Economy Light fare.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger>Economy Standard Fares</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <p>Economy Standard tickets provide more flexibility:</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Changes: Permitted with a change fee of $100 plus any fare difference</li>
                            <li>
                              Cancellations: Permitted with a cancellation fee of $150; remaining value provided as a
                              travel credit
                            </li>
                            <li>No-show: $200 fee; remaining value provided as a travel credit</li>
                          </ul>
                          <p className="text-sm text-muted-foreground mt-2">
                            All changes must be made at least 24 hours before departure.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger>Economy Flex Fares</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <p>Economy Flex tickets offer maximum flexibility:</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Changes: Permitted with no change fee (fare difference may apply)</li>
                            <li>
                              Cancellations: Full refund to original payment method if cancelled at least 24 hours
                              before departure
                            </li>
                            <li>No-show: $50 fee; remaining value eligible for refund</li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger>Business Class Fares</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <p>Business Class tickets include premium flexibility:</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Changes: Permitted with no change fee (fare difference may apply)</li>
                            <li>
                              Cancellations: Full refund to original payment method if cancelled at least 3 hours before
                              departure
                            </li>
                            <li>No-show: $100 fee; remaining value eligible for refund</li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                      <AccordionTrigger>Special Circumstances</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <p>We understand that certain circumstances may require special consideration:</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>
                              Medical emergencies: Change and cancellation fees may be waived with proper documentation
                            </li>
                            <li>Bereavement: Special policies apply for immediate family emergencies</li>
                            <li>
                              Flight disruptions: If SkyJet Airways cancels or significantly delays your flight, you may
                              be entitled to a full refund regardless of fare type
                            </li>
                          </ul>
                          <p className="text-sm text-muted-foreground mt-2">
                            Contact our customer service team directly for assistance with special circumstances.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="fees">
              <Card>
                <CardHeader>
                  <CardTitle>Change and Cancellation Fees</CardTitle>
                  <CardDescription>
                    Review the fees associated with different change and cancellation scenarios
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2">Fare Type</th>
                          <th className="text-left p-2">Change Fee</th>
                          <th className="text-left p-2">Cancellation Fee</th>
                          <th className="text-left p-2">No-show Policy</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2">Economy Light</td>
                          <td className="p-2">Not permitted</td>
                          <td className="p-2">Not permitted</td>
                          <td className="p-2">Ticket value forfeited</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">Economy Standard</td>
                          <td className="p-2">$100 + fare difference</td>
                          <td className="p-2">$150 (travel credit)</td>
                          <td className="p-2">$200 fee (travel credit)</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">Economy Flex</td>
                          <td className="p-2">No fee (fare difference may apply)</td>
                          <td className="p-2">No fee (full refund)</td>
                          <td className="p-2">$50 fee (refundable)</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">Business Class</td>
                          <td className="p-2">No fee (fare difference may apply)</td>
                          <td className="p-2">No fee (full refund)</td>
                          <td className="p-2">$100 fee (refundable)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <Alert className="mt-6">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Additional Information</AlertTitle>
                    <AlertDescription>
                      Fare differences may apply for flight changes. If the new flight is more expensive, you'll need to
                      pay the difference. If it's less expensive, the handling of the fare difference depends on your
                      fare type.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  If you need assistance with changes or cancellations, our customer service team is here to help.
                </p>
                <Link href="/help/contact-us">
                  <Button variant="outline" className="w-full">
                    Contact Customer Service
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>View My Bookings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Access your existing bookings to make changes, select seats, or add services.
                </p>
                <Link href="/my-bookings">
                  <Button variant="outline" className="w-full">
                    Go to My Bookings
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

