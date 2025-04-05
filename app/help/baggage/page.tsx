import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { AlertCircle, Briefcase, Clock, Info, Luggage, Package } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function BaggagePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
          <div className="relative h-[300px]">
            <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
            <img
              src="/placeholder.svg?height=300&width=1200"
              alt="Baggage Information"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="container absolute inset-0 z-20 flex items-center">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Baggage Information</h1>
              <p className="text-xl text-white/90">
                Everything you need to know about baggage allowances, fees, and policies
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container py-12">
          <Tabs defaultValue="allowances" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="allowances">Allowances</TabsTrigger>
              <TabsTrigger value="fees">Fees & Policies</TabsTrigger>
              <TabsTrigger value="restricted">Restricted Items</TabsTrigger>
              <TabsTrigger value="special">Special Items</TabsTrigger>
              <TabsTrigger value="tracking">Tracking & Claims</TabsTrigger>
            </TabsList>

            <TabsContent value="allowances" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Baggage Allowances</CardTitle>
                  <CardDescription>Allowances vary by fare type, route, and loyalty status</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Carry-On Baggage</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-2">Fare Type</th>
                            <th className="text-left p-2">Personal Item</th>
                            <th className="text-left p-2">Carry-On Bag</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-2">Economy Light</td>
                            <td className="p-2">1 (under seat)</td>
                            <td className="p-2">Not included</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">Economy Standard</td>
                            <td className="p-2">1 (under seat)</td>
                            <td className="p-2">1 (overhead bin)</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">Economy Flex</td>
                            <td className="p-2">1 (under seat)</td>
                            <td className="p-2">1 (overhead bin)</td>
                          </tr>
                          <tr>
                            <td className="p-2">Business Class</td>
                            <td className="p-2">1 (under seat)</td>
                            <td className="p-2">1 (overhead bin)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="flex items-start gap-2">
                        <Info className="h-4 w-4 text-primary shrink-0 mt-1" />
                        <p className="text-sm text-muted-foreground">
                          Personal item: Maximum dimensions 40 x 30 x 15 cm (16 x 12 x 6 inches)
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Info className="h-4 w-4 text-primary shrink-0 mt-1" />
                        <p className="text-sm text-muted-foreground">
                          Carry-on bag: Maximum dimensions 55 x 40 x 23 cm (22 x 16 x 9 inches), maximum weight 10 kg
                          (22 lbs)
                        </p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-medium mb-4">Checked Baggage</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-2">Fare Type</th>
                            <th className="text-left p-2">Domestic Flights</th>
                            <th className="text-left p-2">International Flights</th>
                            <th className="text-left p-2">Weight Limit</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-2">Economy Light</td>
                            <td className="p-2">Not included</td>
                            <td className="p-2">Not included</td>
                            <td className="p-2">23 kg (50 lbs)</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">Economy Standard</td>
                            <td className="p-2">1 bag</td>
                            <td className="p-2">1 bag</td>
                            <td className="p-2">23 kg (50 lbs)</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">Economy Flex</td>
                            <td className="p-2">2 bags</td>
                            <td className="p-2">2 bags</td>
                            <td className="p-2">23 kg (50 lbs)</td>
                          </tr>
                          <tr>
                            <td className="p-2">Business Class</td>
                            <td className="p-2">2 bags</td>
                            <td className="p-2">2 bags</td>
                            <td className="p-2">32 kg (70 lbs)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="flex items-start gap-2">
                        <Info className="h-4 w-4 text-primary shrink-0 mt-1" />
                        <p className="text-sm text-muted-foreground">
                          Maximum dimensions per bag: 158 cm (62 inches) total linear dimensions (length + width +
                          height)
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Info className="h-4 w-4 text-primary shrink-0 mt-1" />
                        <p className="text-sm text-muted-foreground">
                          Overweight and oversized baggage fees apply for items exceeding these limits
                        </p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-medium mb-4">SkyJet Rewards Member Benefits</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-2">Membership Tier</th>
                            <th className="text-left p-2">Additional Allowance</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-2">Blue</td>
                            <td className="p-2">Standard allowance</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">Silver</td>
                            <td className="p-2">+10 kg (22 lbs) per bag</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">Gold</td>
                            <td className="p-2">+1 additional checked bag</td>
                          </tr>
                          <tr>
                            <td className="p-2">Platinum</td>
                            <td className="p-2">+1 additional checked bag + 10 kg (22 lbs) per bag</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Important Note</AlertTitle>
                    <AlertDescription>
                      Baggage allowances may vary for codeshare flights operated by partner airlines. Please check the
                      operating carrier's baggage policy if your flight is not operated by SkyJet Airways.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="fees" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Baggage Fees & Policies</CardTitle>
                  <CardDescription>Information about additional baggage fees and related policies</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Additional Baggage Fees</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-2">Fee Type</th>
                            <th className="text-left p-2">Domestic Flights</th>
                            <th className="text-left p-2">International Flights</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-2">First Checked Bag (Economy Light)</td>
                            <td className="p-2">$35</td>
                            <td className="p-2">$60</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">Second Checked Bag</td>
                            <td className="p-2">$45</td>
                            <td className="p-2">$100</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">Third Checked Bag</td>
                            <td className="p-2">$150</td>
                            <td className="p-2">$200</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">Overweight Bag (23-32 kg / 50-70 lbs)</td>
                            <td className="p-2">$100</td>
                            <td className="p-2">$100</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">Severely Overweight Bag (32-45 kg / 70-100 lbs)</td>
                            <td className="p-2">$200</td>
                            <td className="p-2">$200</td>
                          </tr>
                          <tr>
                            <td className="p-2">Oversized Bag (158-203 cm / 62-80 inches)</td>
                            <td className="p-2">$100</td>
                            <td className="p-2">$100</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="flex items-start gap-2">
                        <Info className="h-4 w-4 text-primary shrink-0 mt-1" />
                        <p className="text-sm text-muted-foreground">
                          Fees are lower when purchased online in advance. Prices shown are for online purchase.
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Info className="h-4 w-4 text-primary shrink-0 mt-1" />
                        <p className="text-sm text-muted-foreground">
                          Bags over 45 kg (100 lbs) or with linear dimensions exceeding 203 cm (80 inches) must be
                          shipped as cargo.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-medium mb-4">Baggage Policies</h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Check-in Deadlines</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-4">
                            To ensure your baggage reaches your destination with you, please observe these check-in
                            deadlines:
                          </p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li>Domestic flights: 45 minutes before departure</li>
                            <li>International flights: 60 minutes before departure</li>
                            <li>Flights to/from certain destinations may have earlier deadlines</li>
                          </ul>
                          <p className="mt-4 text-sm text-muted-foreground">
                            Baggage accepted after these deadlines may not be loaded onto your flight.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2">
                        <AccordionTrigger>Baggage Identification</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-4">All baggage must be properly identified:</p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li>External identification tag with your name, address, and phone number</li>
                            <li>Internal identification in case external tags are lost</li>
                            <li>Remove old airline tags and barcodes to prevent confusion</li>
                            <li>Distinctive markings or colorful tags can help you identify your bag quickly</li>
                          </ul>
                          <p className="mt-4">
                            SkyJet Airways provides complimentary baggage tags at check-in counters.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3">
                        <AccordionTrigger>Pooled Baggage Allowance</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-4">
                            Passengers traveling together on the same reservation may pool their baggage allowance:
                          </p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li>Available for family members or companions on the same booking</li>
                            <li>Total number of bags cannot exceed the combined allowance</li>
                            <li>Individual bag weight and size limits still apply</li>
                            <li>Not available for group bookings of 10 or more passengers</li>
                          </ul>
                          <p className="mt-4">
                            To utilize pooled baggage allowance, all passengers must check in together.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4">
                        <AccordionTrigger>Prepaid Baggage</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-4">Save money by purchasing additional baggage allowance in advance:</p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li>Up to 40% discount when purchased during booking</li>
                            <li>Up to 30% discount when added through "Manage Booking" before check-in</li>
                            <li>Up to 20% discount when added during online check-in</li>
                            <li>Full price applies for baggage added at the airport</li>
                          </ul>
                          <p className="mt-4">
                            Prepaid baggage is non-refundable unless your flight is canceled by SkyJet Airways.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  <Alert className="bg-muted border-muted-foreground/20">
                    <Clock className="h-4 w-4" />
                    <AlertDescription>
                      Baggage fees and policies are subject to change. Please check the latest information before your
                      flight by visiting our website or contacting customer service.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="restricted" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Restricted and Prohibited Items</CardTitle>
                  <CardDescription>Items that are restricted or not permitted in baggage</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert className="bg-red-100 dark:bg-red-900/20 border-red-400 dark:border-red-800 text-red-800 dark:text-red-300">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Safety First</AlertTitle>
                    <AlertDescription>
                      For the safety of all passengers and crew, certain items are restricted or prohibited from being
                      carried on board or in checked baggage. Failure to comply may result in denied boarding,
                      penalties, or legal action.
                    </AlertDescription>
                  </Alert>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Prohibited in Both Carry-On and Checked Baggage</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <h4 className="font-medium">Explosives and Flammable Items</h4>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Fireworks and pyrotechnics</li>
                          <li>Flares and signal devices</li>
                          <li>Gunpowder and blasting caps</li>
                          <li>Gasoline, lighter fluid, and other fuels</li>
                          <li>Matches (more than one small pack)</li>
                          <li>Flammable paints and thinners</li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">Gases and Pressurized Containers</h4>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Compressed gas cylinders (except medical oxygen with approval)</li>
                          <li>Tear gas and pepper spray</li>
                          <li>Camping gas and fuel containers</li>
                          <li>Aerosols (except for personal care items in limited quantities)</li>
                          <li>Fire extinguishers</li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">Toxic and Infectious Substances</h4>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Poisons and toxic chemicals</li>
                          <li>Biological hazards and infectious substances</li>
                          <li>Medical or infectious waste</li>
                          <li>Materials capable of irritating or incapacitating</li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">Other Dangerous Goods</h4>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Radioactive materials</li>
                          <li>Strong magnets</li>
                          <li>Corrosive materials (acids, alkalis, wet-cell batteries)</li>
                          <li>Oxidizers and organic peroxides</li>
                          <li>Mercury (except in small medical devices)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-medium mb-4">Prohibited in Carry-On Baggage Only</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <h4 className="font-medium">Sharp Objects</h4>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Knives and cutting instruments (any length)</li>
                          <li>Scissors with blades longer than 4 inches</li>
                          <li>Box cutters and razor blades (not in a cartridge)</li>
                          <li>Ice picks and screwdrivers longer than 7 inches</li>
                          <li>Darts and throwing stars</li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">Sporting Goods</h4>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Baseball bats, golf clubs, hockey sticks</li>
                          <li>Ski poles, lacrosse sticks</li>
                          <li>Billiard cues, cricket bats</li>
                          <li>Bows and arrows</li>
                          <li>Martial arts equipment</li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">Firearms and Weapons</h4>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>All firearms and ammunition</li>
                          <li>Replica or toy guns</li>
                          <li>Stun guns and tasers</li>
                          <li>Parts of firearms (except scopes)</li>
                          <li>Flare guns and starter pistols</li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">Tools</h4>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Hammers, drills, and saws</li>
                          <li>Wrenches and pliers longer than 7 inches</li>
                          <li>Crowbars and pry bars</li>
                          <li>Power tools</li>
                          <li>Blowtorches</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-medium mb-4">Restricted Items (Special Conditions Apply)</h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Firearms and Ammunition</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-4">
                            Firearms may be transported in checked baggage only under these conditions:
                          </p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li>Must be unloaded and locked in a hard-sided container</li>
                            <li>Must be declared at check-in</li>
                            <li>Ammunition must be packed separately in original packaging or ammo boxes</li>
                            <li>Maximum 5kg (11lbs) of ammunition per passenger</li>
                            <li>Subject to local laws at departure, transit, and arrival points</li>
                          </ul>
                          <p className="mt-4 text-sm text-muted-foreground">
                            Advance notification (at least 24 hours) is required. Additional fees may apply.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2">
                        <AccordionTrigger>Liquids, Aerosols, and Gels (LAGs)</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-4">
                            For carry-on baggage, the following restrictions apply to liquids, aerosols, and gels:
                          </p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li>Maximum container size of 100ml (3.4oz) each</li>
                            <li>All containers must fit in a single, transparent, resealable plastic bag</li>
                            <li>Maximum bag size is 1 liter (approximately 20cm x 20cm)</li>
                            <li>One bag per passenger</li>
                            <li>Must be presented separately at security screening</li>
                          </ul>
                          <p className="mt-4">
                            Exceptions include medications, baby food/milk, and duty-free items purchased after security
                            (which must be sealed in a security tamper-evident bag with proof of purchase).
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3">
                        <AccordionTrigger>Electronic Devices and Batteries</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-4">
                            Lithium batteries and electronic devices are subject to these restrictions:
                          </p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li>
                              Devices containing lithium batteries should be carried in cabin baggage when possible
                            </li>
                            <li>
                              Spare lithium batteries must be individually protected and carried in cabin baggage only
                            </li>
                            <li>
                              Lithium ion batteries exceeding 100Wh but not exceeding 160Wh require airline approval
                            </li>
                            <li>Lithium ion batteries exceeding 160Wh are prohibited</li>
                            <li>Maximum of two spare batteries between 100Wh and 160Wh per passenger</li>
                            <li>
                              E-cigarettes and vaping devices must be carried in cabin baggage only and cannot be used
                              or charged on board
                            </li>
                          </ul>
                          <p className="mt-4 text-sm text-muted-foreground">
                            Damaged, defective, or recalled lithium batteries are prohibited.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4">
                        <AccordionTrigger>Medical Items and Medications</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-4">Medical necessities are generally permitted with proper documentation:</p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li>Prescription medications in original labeled containers</li>
                            <li>Medical cannabis with proper documentation (subject to destination country laws)</li>
                            <li>Syringes and needles when accompanied by injectable medication</li>
                            <li>CPAP and other medical devices (subject to additional screening)</li>
                            <li>
                              Liquid medications exceeding 100ml require a doctor's note and are subject to additional
                              screening
                            </li>
                          </ul>
                          <p className="mt-4">
                            We recommend carrying medications in your carry-on baggage and bringing a doctor's note for
                            any prescription medications, especially controlled substances.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      This list is not exhaustive. Regulations may vary by country and are subject to change. When in
                      doubt, please contact our customer service team before your flight.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="special" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Special Items</CardTitle>
                  <CardDescription>Guidelines for transporting special or oversized items</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Sporting Equipment</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card className="border border-muted">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                              <Package className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">Golf Equipment</h4>
                              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                <li>One golf bag containing clubs, balls, and shoes</li>
                                <li>Maximum weight: 23kg (50lbs)</li>
                                <li>Counts as one checked bag</li>
                                <li>Hard-sided cases recommended</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border border-muted">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                              <Package className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">Ski/Snowboard Equipment</h4>
                              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                <li>One pair of skis/poles or one snowboard</li>
                                <li>One boot bag</li>
                                <li>Maximum weight: 23kg (50lbs)</li>
                                <li>Counts as one checked bag</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border border-muted">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                              <Package className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">Bicycles</h4>
                              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                <li>Must be packed in a hard-sided case or box</li>
                                <li>Handlebars must be fixed sideways</li>
                                <li>Pedals must be removed or fixed inward</li>
                                <li>Tires must be deflated</li>
                                <li>Special handling fee: $150</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border border-muted">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                              <Package className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">Fishing Equipment</h4>
                              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                <li>Two rods, one reel, one landing net, one pair of boots</li>
                                <li>Maximum weight: 23kg (50lbs)</li>
                                <li>Counts as one checked bag</li>
                                <li>Rods must be in protective case</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-medium mb-4">Musical Instruments</h3>
                    <p className="text-muted-foreground mb-4">
                      Musical instruments can be transported as carry-on, checked baggage, or in some cases, with their
                      own seat:
                    </p>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Carry-On Instruments</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-4">
                            Small instruments that fit in the overhead bin or under the seat can be brought as carry-on
                            baggage:
                          </p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li>Must fit in overhead bin (55 x 40 x 23 cm) or under the seat</li>
                            <li>Counts as your carry-on baggage allowance</li>
                            <li>Early boarding is available to ensure overhead space</li>
                            <li>Examples: violins, violas, flutes, clarinets</li>
                          </ul>
                          <p className="mt-4 text-sm text-muted-foreground">
                            We recommend using a hard case for protection.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2">
                        <AccordionTrigger>Checked Instruments</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-4">Larger instruments can be checked, with these guidelines:</p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li>Must be in a hard-sided case</li>
                            <li>Maximum weight: 32kg (70lbs)</li>
                            <li>Maximum dimensions: 203cm (80 inches) linear</li>
                            <li>Special handling fee may apply for oversized items</li>
                            <li>Fragile tags will be applied, but we recommend insurance</li>
                          </ul>
                          <p className="mt-4 text-sm text-muted-foreground">
                            Loosen strings on stringed instruments to prevent damage from temperature and pressure
                            changes.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3">
                        <AccordionTrigger>Cabin Seat for Instruments</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-4">
                            For valuable or fragile instruments that are too large for the overhead bin:
                          </p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li>Purchase an additional seat for your instrument</li>
                            <li>Maximum dimensions: height 135cm (53 inches), width 55cm (22 inches)</li>
                            <li>Must be secured with a seat belt</li>
                            <li>Cannot be placed in emergency exit rows</li>
                            <li>Must be booked in advance by contacting our reservation center</li>
                          </ul>
                          <p className="mt-4">
                            Examples of instruments typically requiring a seat: cellos, guitars, saxophones.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-medium mb-4">Other Special Items</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <h4 className="font-medium">Baby Equipment</h4>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>One stroller and one car seat per child free of charge</li>
                          <li>Can be checked at check-in or at the gate</li>
                          <li>Strollers over 10kg must be checked at check-in</li>
                          <li>Collapsible strollers can be stored in overhead bins if space permits</li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">Mobility Devices</h4>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Wheelchairs and mobility aids transported free of charge</li>
                          <li>Not counted toward baggage allowance</li>
                          <li>Battery-powered devices subject to special handling procedures</li>
                          <li>Notify airline at least 48 hours in advance</li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">Fragile Items</h4>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Artwork, antiques, electronics should be properly packaged</li>
                          <li>Consider purchasing excess valuation coverage</li>
                          <li>Limited liability for fragile items</li>
                          <li>Fragile tags available but do not guarantee special handling</li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">Perishable Items</h4>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Must be properly packaged to prevent leakage</li>
                          <li>Dry ice limited to 2.5kg (5.5lbs) per passenger</li>
                          <li>Package must allow release of carbon dioxide gas</li>
                          <li>No liability for spoilage due to delays</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      For any special items not listed here, please contact our customer service at least 48 hours
                      before your flight for guidance.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tracking" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Baggage Tracking & Claims</CardTitle>
                  <CardDescription>
                    Information about tracking your baggage and filing claims for delayed, damaged, or lost baggage
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Baggage Tracking</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-muted-foreground mb-4">
                          SkyJet Airways offers real-time baggage tracking through our mobile app and website. You can
                          track your checked baggage from check-in to arrival at your destination.
                        </p>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                              <Briefcase className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium">How to Track Your Baggage</h4>
                              <p className="text-sm text-muted-foreground">
                                Use your baggage tag number or booking reference to track your baggage status. The
                                baggage tag number is printed on the claim stub attached to your boarding pass.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                              <Luggage className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium">Baggage Status Updates</h4>
                              <p className="text-sm text-muted-foreground">
                                Receive notifications about your baggage status through the SkyJet Airways mobile app.
                                Enable push notifications to stay informed about your baggage throughout your journey.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Card className="bg-muted/40">
                        <CardHeader>
                          <CardTitle className="text-base">Track Your Baggage</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <label htmlFor="baggage-tag" className="text-sm font-medium">
                                Baggage Tag Number
                              </label>
                              <Input id="baggage-tag" placeholder="Enter 10-digit baggage tag number" />
                            </div>
                            <div className="text-center">
                              <p className="text-xs text-muted-foreground mb-2">- OR -</p>
                            </div>
                            <div className="space-y-2">
                              <label htmlFor="booking-reference" className="text-sm font-medium">
                                Booking Reference
                              </label>
                              <Input id="booking-reference" placeholder="Enter 6-character booking reference" />
                            </div>
                            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                              Track Baggage
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-medium mb-4">Delayed Baggage</h3>
                    <p className="text-muted-foreground mb-4">
                      If your baggage doesn't arrive with your flight, please follow these steps:
                    </p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        Report the delayed baggage at the SkyJet Airways baggage service counter before leaving the
                        airport
                      </li>
                      <li>
                        Complete a Property Irregularity Report (PIR) with your contact information and baggage details
                      </li>
                      <li>Receive a reference number for tracking your claim</li>
                      <li>Keep all receipts for essential items purchased due to the baggage delay</li>
                      <li>Track the status of your delayed baggage using the reference number</li>
                    </ol>
                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground">
                        Most delayed baggage is located and delivered within 24-48 hours. We offer compensation for
                        reasonable expenses incurred due to baggage delays according to our baggage delay policy.
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-medium mb-4">Damaged Baggage</h3>
                    <p className="text-muted-foreground mb-4">If your baggage is damaged during transport, please:</p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        Report the damage immediately at the SkyJet Airways baggage service counter before leaving the
                        airport
                      </li>
                      <li>Complete a Property Irregularity Report (PIR) describing the damage</li>
                      <li>Show the damaged baggage to our staff for inspection</li>
                      <li>Provide purchase receipts or valuations if available</li>
                      <li>Keep the damaged baggage for possible further inspection</li>
                    </ol>
                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground">
                        Claims for damaged baggage must be submitted within 7 days of receiving your baggage. Normal
                        wear and tear (scratches, scuffs, dents, etc.) is not considered damage.
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-medium mb-4">Lost Baggage</h3>
                    <p className="text-muted-foreground mb-4">
                      If your baggage has not been located within 21 days, it may be considered lost. In this case:
                    </p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Our baggage services team will contact you to begin the lost baggage claim process</li>
                      <li>Complete a detailed inventory of the contents of your baggage</li>
                      <li>Provide original purchase receipts for high-value items when available</li>
                      <li>Submit your claim within 30 days of the flight</li>
                    </ol>
                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground">
                        Compensation for lost baggage is subject to the limitations of liability established by the
                        Montreal Convention or other applicable regulations, and our conditions of carriage.
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-medium mb-4">Liability Limitations</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-2">Type of Travel</th>
                            <th className="text-left p-2">Maximum Liability</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-2">International (Montreal Convention)</td>
                            <td className="p-2">1,288 SDR (approximately $1,780 USD)</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">Domestic (US Flights)</td>
                            <td className="p-2">$3,800 USD</td>
                          </tr>
                          <tr>
                            <td className="p-2">Excess Valuation</td>
                            <td className="p-2">Up to $5,000 USD with additional fee</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground">
                        SkyJet Airways is not liable for fragile or perishable items, electronics, jewelry, cash,
                        business documents, or other high-value items. We recommend carrying these items in your
                        carry-on baggage.
                      </p>
                    </div>
                  </div>

                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Important</AlertTitle>
                    <AlertDescription>
                      Always report baggage issues before leaving the airport. Claims reported after leaving the airport
                      may be more difficult to process and may affect your eligibility for compensation.
                    </AlertDescription>
                  </Alert>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      File a Baggage Claim
                    </Button>
                    <Button variant="outline">Contact Baggage Services</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/40 py-12">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Need More Information?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Our baggage specialists are available to answer any questions about your specific baggage needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Contact Baggage Services
              </Button>
              <Link href="/help/faqs">
                <Button variant="outline">View FAQs</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

