import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AlertCircle, Headphones, Search } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function FAQsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/40 py-12">
          <div className="container">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold tracking-tight mb-2">Frequently Asked Questions</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about booking, baggage, check-in, and more
              </p>
            </div>

            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input className="pl-10" placeholder="Search for answers..." />
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="container py-12">
          <Tabs defaultValue="booking" className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-8">
              <TabsTrigger value="booking">Booking</TabsTrigger>
              <TabsTrigger value="check-in">Check-in</TabsTrigger>
              <TabsTrigger value="baggage">Baggage</TabsTrigger>
              <TabsTrigger value="changes">Changes & Cancellations</TabsTrigger>
              <TabsTrigger value="loyalty">SkyJet Rewards</TabsTrigger>
              <TabsTrigger value="travel">Travel Experience</TabsTrigger>
            </TabsList>

            <TabsContent value="booking" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Booking Questions</CardTitle>
                  <CardDescription>Common questions about booking flights with SkyJet Airways</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>How do I book a flight on SkyJet Airways?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">You can book a flight with SkyJet Airways through several channels:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            <strong>Online:</strong> Visit our website at skyjetairways.com and use our booking engine
                            to search for and book flights.
                          </li>
                          <li>
                            <strong>Mobile App:</strong> Download the SkyJet Airways mobile app from the App Store or
                            Google Play Store.
                          </li>
                          <li>
                            <strong>Phone:</strong> Call our reservation center at 1-800-SKY-JETS (1-800-759-5387).
                          </li>
                          <li>
                            <strong>Travel Agent:</strong> Book through your preferred travel agent.
                          </li>
                          <li>
                            <strong>Airport Ticket Counter:</strong> Visit any SkyJet Airways ticket counter at the
                            airport.
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger>What payment methods are accepted?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">SkyJet Airways accepts the following payment methods:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Credit cards (Visa, MasterCard, American Express, Discover)</li>
                          <li>Debit cards with a Visa or MasterCard logo</li>
                          <li>PayPal (online bookings only)</li>
                          <li>SkyJet Airways gift cards</li>
                          <li>SkyJet Rewards points (for eligible redemptions)</li>
                          <li>Bank transfers (for group bookings)</li>
                        </ul>
                        <p className="mt-4 text-sm text-muted-foreground">
                          Note: Some payment methods may not be available in all countries or for all booking channels.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger>How can I select seats for my flight?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">You can select your seats during the booking process or after booking:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            <strong>During booking:</strong> After selecting your flight, you'll be prompted to choose
                            seats before payment.
                          </li>
                          <li>
                            <strong>After booking:</strong> Log in to your account on our website or mobile app, go to
                            "My Bookings," select your flight, and choose "Seat Selection."
                          </li>
                          <li>
                            <strong>Check-in:</strong> You can also select or change seats during online check-in, which
                            opens 24 hours before departure.
                          </li>
                        </ul>
                        <p className="mt-4 text-sm text-muted-foreground">
                          Standard seat selection is complimentary for SkyJet Rewards Gold and Platinum members. Other
                          passengers may need to pay a fee for advance seat selection, depending on the fare type.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger>Can I book flights for someone else?</AccordionTrigger>
                      <AccordionContent>
                        <p>
                          Yes, you can book flights for other passengers. When making the reservation, simply enter
                          their details in the passenger information section. Make sure to use their name exactly as it
                          appears on their government-issued ID or passport that they'll use for travel.
                        </p>
                        <p className="mt-4">
                          If you're booking for multiple passengers, you'll need to provide information for each person.
                          The confirmation and updates will be sent to the contact email address you provide during
                          booking.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                      <AccordionTrigger>How far in advance can I book a flight?</AccordionTrigger>
                      <AccordionContent>
                        <p>
                          SkyJet Airways allows bookings up to 330 days in advance. Our flight schedules are typically
                          published in phases, so not all future flights may be available for booking at once.
                        </p>
                        <p className="mt-4">
                          For the best fares, we recommend booking at least 21-60 days before domestic flights and
                          60-120 days before international flights, though this can vary based on destination and travel
                          season.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="check-in" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Check-in Questions</CardTitle>
                  <CardDescription>Information about the check-in process</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>When can I check in for my flight?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">Check-in times vary by location and flight type:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            <strong>Online and Mobile Check-in:</strong> Available from 24 hours up to 90 minutes before
                            scheduled departure.
                          </li>
                          <li>
                            <strong>Airport Kiosk Check-in:</strong> Available from 24 hours up to 60 minutes before
                            domestic flights and up to 90 minutes before international flights.
                          </li>
                          <li>
                            <strong>Counter Check-in:</strong> Opens 3 hours before departure for international flights
                            and 2 hours for domestic flights.
                          </li>
                        </ul>
                        <p className="mt-4 text-sm text-muted-foreground">
                          We recommend arriving at the airport at least 2 hours before domestic flights and 3 hours
                          before international flights.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger>How do I check in online?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">To check in online:</p>
                        <ol className="list-decimal pl-5 space-y-2">
                          <li>Visit our website or open the SkyJet Airways mobile app</li>
                          <li>Click or tap on "Check-in" in the main menu</li>
                          <li>Enter your booking reference and last name</li>
                          <li>Select the passengers who are checking in</li>
                          <li>Choose or confirm your seats</li>
                          <li>Download or send your boarding pass to your email or mobile device</li>
                        </ol>
                        <p className="mt-4 text-sm text-muted-foreground">
                          If you're checking bags, you'll still need to visit the bag drop counter at the airport to
                          deposit your luggage.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger>What documents do I need for check-in?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">Required documents depend on your destination:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            <strong>Domestic Flights:</strong> Government-issued photo ID (driver's license, passport,
                            etc.)
                          </li>
                          <li>
                            <strong>International Flights:</strong> Valid passport (with at least 6 months validity
                            beyond your return date), visa (if required), and any required health documentation
                          </li>
                          <li>
                            <strong>All Flights:</strong> Boarding pass (printed or mobile)
                          </li>
                        </ul>
                        <p className="mt-4">
                          Additional documentation may be required for unaccompanied minors, infants, or passengers with
                          special needs.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger>What happens if I miss the check-in deadline?</AccordionTrigger>
                      <AccordionContent>
                        <p>
                          If you miss the check-in deadline, you may not be able to board your flight. Our check-in
                          deadlines are:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-4">
                          <li>90 minutes before departure for international flights</li>
                          <li>60 minutes before departure for domestic flights</li>
                        </ul>
                        <p className="mt-4">
                          If you arrive after the check-in deadline, please proceed to the SkyJet Airways customer
                          service desk. Depending on availability, we may be able to accommodate you on a later flight,
                          though change fees and fare differences may apply.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="baggage" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Baggage Questions</CardTitle>
                  <CardDescription>Information about baggage allowances, fees, and policies</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What is the baggage allowance?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">Baggage allowances vary by fare type, route, and loyalty status:</p>
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left p-2">Fare Type</th>
                                <th className="text-left p-2">Carry-On</th>
                                <th className="text-left p-2">Checked Bags</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="p-2">Economy Light</td>
                                <td className="p-2">1 personal item</td>
                                <td className="p-2">Not included (fees apply)</td>
                              </tr>
                              <tr className="border-b">
                                <td className="p-2">Economy Standard</td>
                                <td className="p-2">1 personal item + 1 carry-on</td>
                                <td className="p-2">1 bag (up to 23kg/50lbs)</td>
                              </tr>
                              <tr className="border-b">
                                <td className="p-2">Economy Flex</td>
                                <td className="p-2">1 personal item + 1 carry-on</td>
                                <td className="p-2">2 bags (up to 23kg/50lbs each)</td>
                              </tr>
                              <tr>
                                <td className="p-2">Business Class</td>
                                <td className="p-2">1 personal item + 1 carry-on</td>
                                <td className="p-2">2 bags (up to 32kg/70lbs each)</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="mt-4 text-sm text-muted-foreground">
                          SkyJet Rewards members may receive additional baggage allowances based on their tier status.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger>What are the baggage size and weight limits?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">Size and weight limits for baggage:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            <strong>Personal Item:</strong> Must fit under the seat in front of you (40 x 30 x 15 cm /
                            16 x 12 x 6 inches)
                          </li>
                          <li>
                            <strong>Carry-On Bag:</strong> Must fit in the overhead bin (55 x 40 x 23 cm / 22 x 16 x 9
                            inches), maximum weight 10kg/22lbs
                          </li>
                          <li>
                            <strong>Checked Baggage:</strong> Maximum linear dimensions (length + width + height) of 158
                            cm/62 inches
                          </li>
                        </ul>
                        <p className="mt-4">
                          Weight limits for checked baggage vary by fare type and route, ranging from 23kg/50lbs to
                          32kg/70lbs per bag. Bags exceeding these limits will incur overweight fees.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger>How much do extra bags cost?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">Fees for additional or overweight baggage:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            <strong>First Additional Bag:</strong> $35-$60 (domestic), $60-$100 (international)
                          </li>
                          <li>
                            <strong>Second Additional Bag:</strong> $50-$75 (domestic), $100-$150 (international)
                          </li>
                          <li>
                            <strong>Overweight Bag (23-32kg/50-70lbs):</strong> $100 per bag
                          </li>
                          <li>
                            <strong>Oversized Bag (158-203cm/62-80 inches):</strong> $100 per bag
                          </li>
                        </ul>
                        <p className="mt-4 text-sm text-muted-foreground">
                          Fees are lower when purchased online in advance. Additional fees apply for bags beyond the
                          third checked bag.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger>What items are prohibited in baggage?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">The following items are prohibited in both carry-on and checked baggage:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Explosives, fireworks, and flares</li>
                          <li>Compressed gases and aerosols (except for personal care items in limited quantities)</li>
                          <li>Flammable liquids and solids</li>
                          <li>Oxidizers and organic peroxides</li>
                          <li>Toxic or infectious substances</li>
                          <li>Radioactive materials</li>
                          <li>Corrosives</li>
                          <li>Firearms and ammunition (except under specific conditions for checked baggage)</li>
                          <li>Sharp objects in carry-on baggage</li>
                        </ul>
                        <p className="mt-4">
                          Additional restrictions may apply based on destination country regulations. For a complete
                          list, please visit our Dangerous Goods page or check with the relevant authorities.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="changes" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Changes & Cancellations</CardTitle>
                  <CardDescription>Information about modifying or canceling your booking</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>How do I change my flight?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">You can change your flight through several channels:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            <strong>Online:</strong> Log in to "My Bookings" on our website or mobile app, select your
                            flight, and choose "Change Flight"
                          </li>
                          <li>
                            <strong>Phone:</strong> Call our customer service at 1-800-SKY-JETS (1-800-759-5387)
                          </li>
                          <li>
                            <strong>Airport:</strong> Visit a SkyJet Airways ticket counter
                          </li>
                        </ul>
                        <p className="mt-4">
                          Change fees and fare differences may apply depending on your fare type and the timing of your
                          change. Changes must be made before your scheduled departure time.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger>What are the fees for changing or canceling my flight?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">Change and cancellation fees vary by fare type:</p>
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left p-2">Fare Type</th>
                                <th className="text-left p-2">Change Fee</th>
                                <th className="text-left p-2">Cancellation Fee</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="p-2">Economy Light</td>
                                <td className="p-2">Not permitted</td>
                                <td className="p-2">Not permitted</td>
                              </tr>
                              <tr className="border-b">
                                <td className="p-2">Economy Standard</td>
                                <td className="p-2">$100 + fare difference</td>
                                <td className="p-2">$150 (travel credit)</td>
                              </tr>
                              <tr className="border-b">
                                <td className="p-2">Economy Flex</td>
                                <td className="p-2">No fee (fare difference may apply)</td>
                                <td className="p-2">No fee (full refund)</td>
                              </tr>
                              <tr>
                                <td className="p-2">Business Class</td>
                                <td className="p-2">No fee (fare difference may apply)</td>
                                <td className="p-2">No fee (full refund)</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="mt-4 text-sm text-muted-foreground">
                          All changes and cancellations must be made at least 24 hours before scheduled departure to be
                          eligible for these policies.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger>Can I get a refund if I cancel my flight?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">
                          Refund eligibility depends on your fare type and the timing of your cancellation:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            <strong>Economy Light:</strong> Non-refundable
                          </li>
                          <li>
                            <strong>Economy Standard:</strong> Cancellation fee applies; remaining value provided as a
                            travel credit valid for 12 months
                          </li>
                          <li>
                            <strong>Economy Flex:</strong> Fully refundable to original payment method if cancelled at
                            least 24 hours before departure
                          </li>
                          <li>
                            <strong>Business Class:</strong> Fully refundable to original payment method if cancelled at
                            least 3 hours before departure
                          </li>
                        </ul>
                        <p className="mt-4">
                          All tickets, regardless of fare type, are eligible for a full refund if cancelled within 24
                          hours of booking, provided the booking was made at least 7 days before the scheduled
                          departure.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger>What if SkyJet Airways changes or cancels my flight?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">
                          If SkyJet Airways changes or cancels your flight, you have the following options:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            <strong>Minor Schedule Changes (less than 2 hours):</strong> We'll automatically rebook you
                            on the new flight. You can accept this change or request an alternative.
                          </li>
                          <li>
                            <strong>Significant Schedule Changes (2+ hours):</strong> You can accept the new flight,
                            choose an alternative flight, or request a full refund.
                          </li>
                          <li>
                            <strong>Flight Cancellations:</strong> You'll be rebooked on the next available flight or
                            offered a full refund to your original form of payment.
                          </li>
                        </ul>
                        <p className="mt-4">
                          We'll notify you of any changes via email and/or SMS. You can also check your flight status on
                          our website or mobile app.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="loyalty" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>SkyJet Rewards Questions</CardTitle>
                  <CardDescription>Information about our loyalty program</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>How do I join SkyJet Rewards?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">Joining SkyJet Rewards is free and easy:</p>
                        <ol className="list-decimal pl-5 space-y-2">
                          <li>Visit our website or open the SkyJet Airways mobile app</li>
                          <li>Click or tap on "SkyJet Rewards" in the main menu</li>
                          <li>Select "Join Now"</li>
                          <li>Fill out the registration form with your personal information</li>
                          <li>Create a password</li>
                          <li>Accept the terms and conditions</li>
                          <li>Submit your application</li>
                        </ol>
                        <p className="mt-4">
                          Once registered, you'll receive your SkyJet Rewards number immediately, and you can start
                          earning points on your next flight.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger>How do I earn SkyJet Rewards points?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">You can earn SkyJet Rewards points in several ways:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            <strong>Flights:</strong> Earn points based on the amount spent on SkyJet Airways flights
                            and partner airlines
                          </li>
                          <li>
                            <strong>Credit Cards:</strong> Earn points on everyday purchases with SkyJet Airways
                            co-branded credit cards
                          </li>
                          <li>
                            <strong>Hotel Partners:</strong> Earn points on stays at partner hotels
                          </li>
                          <li>
                            <strong>Car Rentals:</strong> Earn points when renting cars from partner companies
                          </li>
                          <li>
                            <strong>Shopping:</strong> Earn points through the SkyJet Rewards shopping portal
                          </li>
                          <li>
                            <strong>Dining:</strong> Earn points at participating restaurants
                          </li>
                        </ul>
                        <p className="mt-4">
                          Your earning rate for flights depends on your membership tier: Blue members earn 5 points per
                          $1, Silver members earn 7 points per $1, Gold members earn 10 points per $1, and Platinum
                          members earn 15 points per $1.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger>How do I redeem SkyJet Rewards points?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">You can redeem your SkyJet Rewards points for:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            <strong>Flight Rewards:</strong> Use points for flights on SkyJet Airways and partner
                            airlines
                          </li>
                          <li>
                            <strong>Upgrades:</strong> Upgrade your seat to Premium Economy or Business Class
                          </li>
                          <li>
                            <strong>Extra Services:</strong> Pay for extra baggage, seat selection, lounge access, and
                            more
                          </li>
                          <li>
                            <strong>Shopping:</strong> Redeem for merchandise, gift cards, and experiences through our
                            rewards catalog
                          </li>
                          <li>
                            <strong>Charitable Donations:</strong> Donate your points to partner charities
                          </li>
                        </ul>
                        <p className="mt-4">
                          To redeem, log in to your SkyJet Rewards account on our website or mobile app, navigate to
                          "Use Points," and follow the instructions for your desired redemption option.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger>How do I achieve elite status?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">
                          SkyJet Rewards has four membership tiers with the following annual requirements:
                        </p>
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left p-2">Tier</th>
                                <th className="text-left p-2">Qualifying Miles</th>
                                <th className="text-left p-2">Flight Segments</th>
                                <th className="text-left p-2">Qualifying Spend</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="p-2">Blue</td>
                                <td className="p-2">Enrollment</td>
                                <td className="p-2">Enrollment</td>
                                <td className="p-2">Enrollment</td>
                              </tr>
                              <tr className="border-b">
                                <td className="p-2">Silver</td>
                                <td className="p-2">25,000</td>
                                <td className="p-2">30</td>
                                <td className="p-2">$3,000</td>
                              </tr>
                              <tr className="border-b">
                                <td className="p-2">Gold</td>
                                <td className="p-2">50,000</td>
                                <td className="p-2">60</td>
                                <td className="p-2">$6,000</td>
                              </tr>
                              <tr>
                                <td className="p-2">Platinum</td>
                                <td className="p-2">100,000</td>
                                <td className="p-2">100</td>
                                <td className="p-2">$12,000</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="mt-4">
                          You only need to meet one of the three criteria (miles, segments, or spend) to qualify for a
                          tier. Status is valid for the remainder of the qualification year plus the entire following
                          year.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="travel" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Travel Experience Questions</CardTitle>
                  <CardDescription>Information about your onboard experience and services</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What meals are served on SkyJet Airways flights?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">Meal service varies by flight duration and cabin class:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            <strong>Short-haul flights (under 3 hours):</strong>
                            <ul className="list-disc pl-5 mt-1">
                              <li>Economy: Complimentary snacks and beverages</li>
                              <li>Business: Light meal or enhanced snack service with premium beverages</li>
                            </ul>
                          </li>
                          <li>
                            <strong>Medium-haul flights (3-6 hours):</strong>
                            <ul className="list-disc pl-5 mt-1">
                              <li>Economy: Complimentary meal with beverages</li>
                              <li>Premium Economy: Enhanced meal with wider beverage selection</li>
                              <li>Business: Multi-course meal with premium wines and spirits</li>
                            </ul>
                          </li>
                          <li>
                            <strong>Long-haul flights (over 6 hours):</strong>
                            <ul className="list-disc pl-5 mt-1">
                              <li>Economy: Multiple meal services with snacks available between meals</li>
                              <li>Premium Economy: Enhanced meals with premium beverages and mid-flight snacks</li>
                              <li>
                                Business: Chef-designed multi-course meals with sommelier-selected wines, on-demand
                                dining on select routes
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <p className="mt-4">
                          Special meals (vegetarian, vegan, kosher, etc.) are available on all flights with meal service
                          when requested at least 24 hours before departure.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger>Is Wi-Fi available on SkyJet Airways flights?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">Wi-Fi availability and pricing:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            Wi-Fi is available on most of our fleet, with coverage expanding to all aircraft by the end
                            of the year
                          </li>
                          <li>
                            Three Wi-Fi packages are available:
                            <ul className="list-disc pl-5 mt-1">
                              <li>Messaging: $5 (allows messaging apps only)</li>
                              <li>Browse: $15 (for web browsing and email)</li>
                              <li>Stream: $25 (for streaming video and audio)</li>
                            </ul>
                          </li>
                          <li>Business Class passengers receive complimentary full-flight Wi-Fi access</li>
                          <li>Premium Economy passengers receive a complimentary basic browsing package</li>
                          <li>
                            SkyJet Rewards Gold and Platinum members receive discounted or complimentary Wi-Fi depending
                            on the route
                          </li>
                        </ul>
                        <p className="mt-4 text-sm text-muted-foreground">
                          Wi-Fi service may be limited or unavailable on some routes due to geographic restrictions.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger>What entertainment options are available onboard?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">Our in-flight entertainment system offers:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            <strong>Movies:</strong> Latest Hollywood releases, international films, classics, and
                            documentaries
                          </li>
                          <li>
                            <strong>TV Shows:</strong> Full seasons of popular series, comedies, dramas, and
                            documentaries
                          </li>
                          <li>
                            <strong>Music:</strong> Curated playlists, albums, and radio channels across various genres
                          </li>
                          <li>
                            <strong>Games:</strong> Interactive games for all ages
                          </li>
                          <li>
                            <strong>Reading Material:</strong> Digital magazines and newspapers
                          </li>
                          <li>
                            <strong>Moving Map:</strong> Real-time flight tracking and information
                          </li>
                        </ul>
                        <p className="mt-4">
                          Entertainment is available on seatback screens on most aircraft. On some shorter routes,
                          streaming entertainment to your personal device is available via the SkyJet Airways mobile
                          app.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger>What should I do if I have a complaint or feedback?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">
                          We value your feedback and have several channels for addressing complaints or sharing your
                          experience:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>
                            <strong>During Your Flight:</strong> Speak with a flight attendant or the purser about any
                            immediate concerns
                          </li>
                          <li>
                            <strong>At the Airport:</strong> Visit a SkyJet Airways customer service desk
                          </li>
                          <li>
                            <strong>After Your Flight:</strong>
                            <ul className="list-disc pl-5 mt-1">
                              <li>Submit feedback through our website or mobile app</li>
                              <li>Email customer.relations@skyjetairways.com</li>
                              <li>Call our customer service at 1-800-SKY-JETS (1-800-759-5387)</li>
                              <li>
                                Write to us at: Customer Relations, SkyJet Airways, PO Box 12345, New York, NY 10001
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <p className="mt-4">
                          We aim to respond to all complaints within 7 business days. For complex issues, resolution may
                          take up to 30 days. Your feedback helps us improve our service.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Additional Help */}
        <section className="bg-muted/40 py-12">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Need More Help?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                If you couldn't find the answer you were looking for, our customer service team is here to help
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <Headphones className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Contact Customer Service</h3>
                    <p className="text-muted-foreground mb-4">
                      Speak with a representative for personalized assistance
                    </p>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Contact Us
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <AlertCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Travel Updates</h3>
                    <p className="text-muted-foreground mb-4">
                      Check for travel advisories, weather alerts, and operational updates
                    </p>
                    <Link href="/help/travel-updates">
                      <Button variant="outline" className="w-full">
                        View Updates
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <Search className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Baggage Information</h3>
                    <p className="text-muted-foreground mb-4">Learn about baggage policies, allowances, and tracking</p>
                    <Link href="/help/baggage">
                      <Button variant="outline" className="w-full">
                        Baggage Info
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

