import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AlertCircle, ExternalLink, FileText, Info, StampIcon as Passport } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function TravelDocumentsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Travel Documents</h1>
            <p className="text-muted-foreground">
              Information about required travel documents for international and domestic flights
            </p>
          </div>

          <Tabs defaultValue="passport-visa" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="passport-visa">Passport & Visa</TabsTrigger>
              <TabsTrigger value="covid">COVID-19 Requirements</TabsTrigger>
              <TabsTrigger value="faqs">FAQs</TabsTrigger>
            </TabsList>

            <TabsContent value="passport-visa">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Passport & Visa Requirements</CardTitle>
                  <CardDescription>Essential documentation required for international travel</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Passport Requirements</h3>
                    <p>
                      All international travelers must have a valid passport. Most countries require that your passport:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Is valid for at least 6 months beyond your planned stay</li>
                      <li>Has at least two blank visa pages</li>
                      <li>Is in good condition without damage</li>
                    </ul>

                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertDescription>
                        Check your passport expiration date before booking international travel. Processing times for
                        renewals can take several weeks.
                      </AlertDescription>
                    </Alert>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Visa Information</h3>
                    <p>Visa requirements vary by destination and your nationality. It is your responsibility to:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Check visa requirements for your destination and any transit countries</li>
                      <li>Apply for required visas with sufficient time before travel</li>
                      <li>Ensure all visa information matches your passport exactly</li>
                    </ul>

                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Important</AlertTitle>
                      <AlertDescription>
                        SkyJet Airways is not responsible for passengers denied boarding or entry due to improper
                        documentation. We recommend checking official government sources for the most up-to-date
                        requirements.
                      </AlertDescription>
                    </Alert>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <ExternalLink className="h-4 w-4 mr-2" /> Visa Requirements Checker
                    </Button>
                    <Button variant="outline">
                      <Passport className="h-4 w-4 mr-2" /> Embassy Information
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Domestic Travel Documents</CardTitle>
                  <CardDescription>Required identification for domestic flights</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>For domestic flights within the United States, adult passengers (18+) must present a valid:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>REAL ID-compliant driver's license</li>
                    <li>U.S. passport or passport card</li>
                    <li>U.S. military ID</li>
                    <li>Permanent resident card</li>
                    <li>Foreign passport</li>
                    <li>Other approved government-issued photo ID</li>
                  </ul>

                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      Beginning May 7, 2025, all air travelers 18+ must have a REAL ID-compliant license or another
                      acceptable form of ID for domestic air travel within the United States.
                    </AlertDescription>
                  </Alert>

                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Children Under 18</h4>
                    <p className="text-muted-foreground">
                      Children under 18 are not required to provide identification when traveling with a companion
                      domestically, but it's always recommended to carry some form of ID.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="covid">
              <Card>
                <CardHeader>
                  <CardTitle>COVID-19 Travel Requirements</CardTitle>
                  <CardDescription>Health and safety requirements for international travel</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert className="bg-amber-100 dark:bg-amber-900/20 border-amber-400 dark:border-amber-800 text-amber-800 dark:text-amber-300">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Important Notice</AlertTitle>
                    <AlertDescription>
                      COVID-19 travel requirements continue to evolve. The information below is subject to change.
                      Always check the latest requirements for your specific destination before travel.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Current Requirements</h3>
                    <p>
                      While many countries have eased COVID-19 related entry restrictions, some destinations still
                      require:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Proof of vaccination against COVID-19</li>
                      <li>Negative COVID-19 test results taken within a specified timeframe</li>
                      <li>Health declaration forms</li>
                      <li>Proof of travel insurance with COVID-19 coverage</li>
                    </ul>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Vaccination Requirements</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <p>
                            When required, passengers must show proof of vaccination that meets the following criteria:
                          </p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Issued by an authorized vaccine provider</li>
                            <li>Shows passenger name matching travel documents</li>
                            <li>Shows vaccine type and date(s) administered</li>
                            <li>
                              Meet the destination's definition of "fully vaccinated" (often includes booster doses)
                            </li>
                          </ul>
                          <p className="text-sm text-muted-foreground mt-2">
                            Accepted vaccines vary by country. Some countries only accept specific vaccine brands or
                            combinations.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger>Testing Requirements</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <p>When required, COVID-19 tests must usually meet these criteria:</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Taken within the specified timeframe before departure (typically 24-72 hours)</li>
                            <li>Be either PCR or rapid antigen tests (varies by destination)</li>
                            <li>Include passenger details matching travel documents</li>
                            <li>Include test date, time, type, and result</li>
                            <li>Be issued by an authorized testing facility</li>
                          </ul>
                          <p className="text-sm text-muted-foreground mt-2">
                            Self-administered tests are generally not accepted unless they are verified by a telehealth
                            provider.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger>Health Forms & Contact Tracing</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <p>Some countries require:</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Digital health declaration forms before departure</li>
                            <li>Contact tracing information</li>
                            <li>Proof of accommodation for the duration of stay</li>
                            <li>Health insurance with COVID-19 coverage</li>
                          </ul>
                          <p className="text-sm text-muted-foreground mt-2">
                            These forms are typically available on the official government websites of your destination
                            country.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <ExternalLink className="h-4 w-4 mr-2" /> Check Requirements by Destination
                    </Button>
                    <Button variant="outline">
                      <FileText className="h-4 w-4 mr-2" /> COVID-19 Travel Updates
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="faqs">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>Common questions about travel documents and requirements</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What documents do I need for international travel?</AccordionTrigger>
                      <AccordionContent>
                        <p>For international travel, you typically need:</p>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                          <li>A passport valid for at least 6 months beyond your stay</li>
                          <li>Any required visas for your destination and transit countries</li>
                          <li>Return or onward tickets</li>
                          <li>Proof of sufficient funds for your stay</li>
                          <li>Any health-related documents required by your destination</li>
                        </ul>
                        <p className="mt-2">
                          Requirements vary by destination and your nationality, so always check specific requirements
                          for your trip.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger>How do I know if I need a visa?</AccordionTrigger>
                      <AccordionContent>
                        <p>Visa requirements depend on:</p>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                          <li>Your nationality (the country that issued your passport)</li>
                          <li>The country you're visiting</li>
                          <li>The purpose of your visit (tourism, business, study, etc.)</li>
                          <li>The length of your planned stay</li>
                        </ul>
                        <p className="mt-2">
                          Check visa requirements through the embassy or consulate of your destination country, or use
                          our Visa Requirements Checker tool on this page.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger>What happens if I don't have the right travel documents?</AccordionTrigger>
                      <AccordionContent>
                        <p>If you don't have the proper travel documents:</p>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                          <li>You may be denied boarding at your departure airport</li>
                          <li>You may be denied entry upon arrival at your destination</li>
                          <li>You may be required to take the next available flight back to your origin</li>
                          <li>You may face additional costs for new flights</li>
                          <li>Your travel insurance might not cover these situations</li>
                        </ul>
                        <p className="mt-2">
                          It's your responsibility to ensure you have all required documents before travel. Airlines,
                          including SkyJet Airways, are required by law to check documents before boarding and may deny
                          boarding if requirements are not met.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger>Do I need a passport for domestic flights?</AccordionTrigger>
                      <AccordionContent>
                        <p>For domestic flights within the United States:</p>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                          <li>Adults (18+) need a valid government-issued photo ID, such as a driver's license</li>
                          <li>
                            Beginning May 7, 2025, you'll need a REAL ID-compliant license or another acceptable ID
                          </li>
                          <li>A passport is always acceptable but not required for domestic travel</li>
                          <li>
                            Children under 18 traveling with an adult typically don't need ID for domestic flights
                          </li>
                        </ul>
                        <p className="mt-2">
                          Similar rules apply for domestic flights in many other countries, though specific requirements
                          vary.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                      <AccordionTrigger>What documents do children need to travel?</AccordionTrigger>
                      <AccordionContent>
                        <p>Documents required for children vary by situation:</p>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                          <li>
                            <strong>International travel:</strong> All children, regardless of age, need a passport
                          </li>
                          <li>
                            <strong>Domestic travel:</strong> Children under 18 typically don't need ID when traveling
                            with an adult
                          </li>
                          <li>
                            <strong>Children traveling alone or with only one parent:</strong> May require additional
                            documentation including:
                          </li>
                          <ul className="list-disc pl-5 space-y-1 mt-1">
                            <li>Consent letter from the absent parent(s)</li>
                            <li>Birth certificate showing parentage</li>
                            <li>Court documents for sole custody situations</li>
                          </ul>
                        </ul>
                        <p className="mt-2">
                          Requirements vary by country. Check specific requirements with the embassy or consulate of
                          your destination country.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Still Have Questions?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our customer service team can provide guidance on travel document requirements for your specific
                  itinerary.
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
                <CardTitle>Embassy & Consular Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Find contact information for embassies and consulates worldwide for official visa and entry
                  requirements.
                </p>
                <Button variant="outline" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" /> Embassy Directory
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

