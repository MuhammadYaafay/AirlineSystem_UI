import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { AlertCircle, Baby, Heart, Info, ShipWheelIcon as Wheelchair } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function SpecialAssistancePage() {
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
              alt="Special Assistance"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="container absolute inset-0 z-20 flex items-center">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Special Assistance</h1>
              <p className="text-xl text-white/90">
                We're committed to making air travel accessible and comfortable for all passengers
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container py-12">
          <div className="max-w-4xl mx-auto">
            <Alert className="mb-8">
              <Info className="h-4 w-4" />
              <AlertDescription>
                Please request special assistance at least 48 hours before your flight to ensure we can best accommodate
                your needs.
              </AlertDescription>
            </Alert>

            <Tabs defaultValue="mobility" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="mobility">Mobility Assistance</TabsTrigger>
                <TabsTrigger value="medical">Medical Conditions</TabsTrigger>
                <TabsTrigger value="traveling-with">Traveling With</TabsTrigger>
                <TabsTrigger value="request">Request Assistance</TabsTrigger>
              </TabsList>

              <TabsContent value="mobility" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Mobility Assistance</h2>
                  <p className="text-muted-foreground mb-6">
                    We offer a range of services to assist passengers with mobility needs, ensuring a smooth and
                    comfortable journey from check-in to arrival.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <Wheelchair className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle>Wheelchair Services</CardTitle>
                      </div>
                      <CardDescription>Assistance for passengers with limited mobility</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        We provide complimentary wheelchair assistance throughout your journey:
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>From check-in to the departure gate</li>
                        <li>Boarding and deplaning assistance</li>
                        <li>Between gates during connections</li>
                        <li>From arrival gate to baggage claim</li>
                      </ul>
                      <p className="text-sm text-muted-foreground mt-2">
                        Our staff are trained to provide respectful and efficient assistance for passengers with varying
                        mobility needs.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <Heart className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle>Accessible Seating</CardTitle>
                      </div>
                      <CardDescription>Seating options for passengers with mobility needs</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        We offer several seating options to accommodate passengers with mobility needs:
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Seats with movable armrests for easier transfers</li>
                        <li>Bulkhead seats with extra legroom</li>
                        <li>Seats near lavatories for passengers with limited mobility</li>
                        <li>Priority seating for passengers with service animals</li>
                      </ul>
                      <p className="text-sm text-muted-foreground mt-2">
                        These seats can be requested during booking or by contacting our Special Assistance team.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Mobility Equipment Handling</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p>We understand the importance of your mobility equipment and handle it with care:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Wheelchairs, walkers, and other mobility devices are transported free of charge</li>
                          <li>Battery-powered mobility devices are accepted with proper preparation</li>
                          <li>Mobility equipment is given priority handling to minimize wait times</li>
                          <li>
                            Gate-checking of wheelchairs is available for passengers who prefer to use their own
                            wheelchair until boarding
                          </li>
                        </ul>
                        <Alert>
                          <Info className="h-4 w-4" />
                          <AlertDescription>
                            Please inform us about your mobility equipment at least 48 hours before your flight to
                            ensure proper handling.
                          </AlertDescription>
                        </Alert>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Accessible Airport Facilities</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p>We work with airports to ensure accessibility throughout your journey:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Accessible check-in counters at appropriate heights</li>
                          <li>Priority security screening lanes</li>
                          <li>Accessible restrooms throughout terminals</li>
                          <li>Elevators and ramps for level changes</li>
                          <li>Visual and audio announcements for flight information</li>
                        </ul>
                        <p className="text-sm text-muted-foreground mt-2">
                          Specific accessibility features may vary by airport. Contact our Special Assistance team for
                          information about particular airports.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Service Animals</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p>We welcome trained service animals on board to assist passengers with disabilities:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Service animals travel free of charge in the cabin</li>
                          <li>No kennels required for properly harnessed service animals</li>
                          <li>Service animals must remain on the floor at the passenger's feet</li>
                          <li>Documentation may be required for international flights</li>
                        </ul>
                        <Alert>
                          <AlertCircle className="h-4 w-4" />
                          <AlertDescription>
                            Emotional support animals are subject to our pet policy and may need to travel in the cargo
                            hold.
                          </AlertDescription>
                        </Alert>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              <TabsContent value="medical" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Medical Conditions</h2>
                  <p className="text-muted-foreground mb-6">
                    We provide accommodations for passengers with various medical conditions to ensure a safe and
                    comfortable flight.
                  </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Oxygen Requirements</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p>For passengers requiring supplemental oxygen:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Portable oxygen concentrators (POCs) are permitted on board if they are FAA-approved models
                          </li>
                          <li>
                            You must bring enough batteries to power your POC for 150% of your expected travel time
                          </li>
                          <li>Medical Certificate (Fit to Fly) may be required for passengers with oxygen needs</li>
                          <li>Oxygen cylinders are not permitted for use on board</li>
                        </ul>
                        <p className="text-sm text-muted-foreground mt-2">
                          Please notify us at least 48 hours before your flight if you plan to travel with a POC.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Medication and Medical Devices</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p>Guidelines for traveling with medication and medical devices:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Medication should be kept in original packaging with prescription labels</li>
                          <li>Carry a doctor's note for injectable medications or controlled substances</li>
                          <li>Medical devices (CPAP, insulin pumps, etc.) do not count toward carry-on limits</li>
                          <li>
                            Liquid medications are exempt from the 3-1-1 liquids rule but must be declared at security
                          </li>
                        </ul>
                        <Alert>
                          <Info className="h-4 w-4" />
                          <AlertDescription>
                            Always pack essential medications and medical devices in your carry-on luggage, not in
                            checked baggage.
                          </AlertDescription>
                        </Alert>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Allergies</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p>For passengers with severe allergies:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>We cannot guarantee allergen-free environments on our flights</li>
                          <li>Pre-boarding is available to wipe down your seating area</li>
                          <li>
                            Passengers with severe nut allergies can request that nuts not be served in their immediate
                            area
                          </li>
                          <li>
                            Passengers should carry necessary medications (e.g., EpiPens) in their carry-on luggage
                          </li>
                        </ul>
                        <p className="text-sm text-muted-foreground mt-2">
                          Please inform our staff about severe allergies at the time of booking and again at check-in.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Recent Surgery or Injury</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p>For passengers who have recently undergone surgery or sustained an injury:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Medical clearance may be required if you've had surgery within 10 days of your flight</li>
                          <li>Extra legroom seats can be requested for passengers with casts or immobilizers</li>
                          <li>Assistance with luggage and boarding is available upon request</li>
                          <li>Passengers with full leg casts may need to purchase additional seats for comfort</li>
                        </ul>
                        <Alert>
                          <AlertCircle className="h-4 w-4" />
                          <AlertDescription>
                            For your safety, we may require a "Fit to Fly" certificate from your doctor if you've had
                            recent surgery or have a serious injury.
                          </AlertDescription>
                        </Alert>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              <TabsContent value="traveling-with" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Traveling With Special Companions</h2>
                  <p className="text-muted-foreground mb-6">
                    Information for passengers traveling with infants, children, or companions requiring special
                    assistance.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <Baby className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle>Infants and Young Children</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Special services for families traveling with infants and young children:
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          Bassinets available on long-haul flights for infants under 6 months (limited availability)
                        </li>
                        <li>Priority boarding for families with children under 2 years</li>
                        <li>Changing tables available in select lavatories</li>
                        <li>Special meals for children available with advance request</li>
                        <li>Strollers can be used until boarding and are available immediately upon arrival</li>
                      </ul>
                      <p className="text-sm text-muted-foreground mt-2">
                        Infants under 2 years can travel on an adult's lap or in their own seat using an approved car
                        seat.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <Heart className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle>Passengers Requiring Assistance</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Support for passengers traveling with companions who require assistance:
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Adjacent seating for passengers and their caregivers</li>
                        <li>Assistance with boarding and deplaning</li>
                        <li>Support for passengers with cognitive or developmental disabilities</li>
                        <li>Accommodation for passengers who require assistance with eating or personal care</li>
                      </ul>
                      <p className="text-sm text-muted-foreground mt-2">
                        Please inform us of specific needs during booking to ensure appropriate accommodations.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Unaccompanied Minors</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p>Our Unaccompanied Minor service ensures children traveling alone receive special care:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Available for children aged 5-14 traveling without an adult</li>
                          <li>Children aged 15-17 may use the service upon request</li>
                          <li>Dedicated staff escort children throughout their journey</li>
                          <li>Special identification and documentation procedures</li>
                          <li>Entertainment and meals provided during the flight</li>
                        </ul>
                        <p className="text-sm text-muted-foreground mt-2">
                          Additional fees apply for the Unaccompanied Minor service. Bookings must be made at least 48
                          hours in advance.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Expectant Mothers</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p>Guidelines for pregnant passengers:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Up to 28 weeks: No restrictions or medical certificate required</li>
                          <li>28-36 weeks: Medical certificate required, issued within 72 hours of travel</li>
                          <li>
                            After 36 weeks (single pregnancy) or 32 weeks (multiple pregnancy): Travel not recommended
                          </li>
                        </ul>
                        <Alert>
                          <Info className="h-4 w-4" />
                          <AlertDescription>
                            The medical certificate must state the estimated due date, confirm the pregnancy is
                            progressing normally, and state that the passenger is fit to fly.
                          </AlertDescription>
                        </Alert>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Elderly Passengers</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p>Services available for elderly passengers:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Wheelchair assistance throughout the airport</li>
                          <li>Priority boarding and deplaning</li>
                          <li>Assistance with luggage</li>
                          <li>Special meals upon request</li>
                          <li>Seating accommodations for comfort and accessibility</li>
                        </ul>
                        <p className="text-sm text-muted-foreground mt-2">
                          These services are complimentary but should be requested at least 48 hours before your flight.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              <TabsContent value="request" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Request Special Assistance</h2>
                  <p className="text-muted-foreground mb-6">
                    How to request special assistance for your upcoming flight with SkyJet Airways.
                  </p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>How to Request Assistance</CardTitle>
                    <CardDescription>
                      Follow these steps to ensure your special assistance needs are met
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1 shrink-0">
                          <span className="font-medium">1</span>
                        </div>
                        <div>
                          <h3 className="font-medium">During Booking</h3>
                          <p className="text-sm text-muted-foreground">
                            Select the special assistance options that apply to you when making your reservation online,
                            or inform our reservation agent if booking by phone.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1 shrink-0">
                          <span className="font-medium">2</span>
                        </div>
                        <div>
                          <h3 className="font-medium">After Booking</h3>
                          <p className="text-sm text-muted-foreground">
                            If you've already booked your flight, you can add special assistance requests by:
                          </p>
                          <ul className="list-disc pl-5 space-y-1 mt-2 text-sm text-muted-foreground">
                            <li>Logging into your account and updating your booking</li>
                            <li>Contacting our Special Assistance team directly</li>
                            <li>Calling our customer service center</li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1 shrink-0">
                          <span className="font-medium">3</span>
                        </div>
                        <div>
                          <h3 className="font-medium">At the Airport</h3>
                          <p className="text-sm text-muted-foreground">
                            Confirm your special assistance needs with our check-in staff. Arrive at least 2 hours
                            before your flight to ensure adequate time for processing and assistance.
                          </p>
                        </div>
                      </div>
                    </div>

                    <Alert className="bg-muted border-muted-foreground/20">
                      <Info className="h-4 w-4" />
                      <AlertDescription>
                        Please request special assistance at least 48 hours before your flight to ensure availability.
                        Last-minute requests will be accommodated when possible, but cannot be guaranteed.
                      </AlertDescription>
                    </Alert>

                    <Separator />

                    <div>
                      <h3 className="font-medium mb-4">Contact Our Special Assistance Team</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          Call Special Assistance
                        </Button>
                        <Button variant="outline" className="w-full">
                          Email Special Assistance
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Required Documentation</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Depending on your specific needs, you may need to provide the following documentation:
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Medical Certificate (Fit to Fly) for certain medical conditions</li>
                        <li>Documentation for service animals</li>
                        <li>Prescription information for medical equipment or medications</li>
                        <li>Doctor's statement for portable oxygen concentrators</li>
                      </ul>
                      <p className="text-sm text-muted-foreground mt-2">
                        Our Special Assistance team can advise you on the specific documentation required for your
                        situation.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Frequently Asked Questions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger>Is there a fee for special assistance services?</AccordionTrigger>
                          <AccordionContent>
                            <p>
                              No, SkyJet Airways provides special assistance services free of charge to passengers who
                              require them.
                            </p>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                          <AccordionTrigger>Can I bring my own wheelchair to the gate?</AccordionTrigger>
                          <AccordionContent>
                            <p>
                              Yes, you can use your personal wheelchair up to the aircraft door. Our staff will then
                              store your wheelchair in the cargo hold and return it to you upon arrival, either at the
                              aircraft door or in the baggage claim area.
                            </p>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                          <AccordionTrigger>What if my needs change after booking?</AccordionTrigger>
                          <AccordionContent>
                            <p>
                              You can update your special assistance requests at any time by contacting our Special
                              Assistance team or customer service. We recommend making any changes at least 48 hours
                              before your flight.
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/10 py-12">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">We're Here to Help</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Our dedicated Special Assistance team is available to answer your questions and ensure your travel needs
              are met
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Request Special Assistance
              </Button>
              <Button variant="outline">Contact Customer Service</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

