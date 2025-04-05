import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  AlertCircle,
  AlertTriangle,
  Bell,
  Calendar,
  Clock,
  CloudSnow,
  Globe,
  Info,
  Plane,
  Umbrella,
} from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TravelUpdatesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/40 py-12">
          <div className="container">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold tracking-tight mb-2">Travel Updates</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Stay informed about travel advisories, weather alerts, and operational updates
              </p>
            </div>

            <Alert className="max-w-3xl mx-auto bg-amber-100 dark:bg-amber-900/20 border-amber-400 dark:border-amber-800 text-amber-800 dark:text-amber-300">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Important Notice</AlertTitle>
              <AlertDescription>
                Check this page regularly for the latest travel updates. Information can change rapidly due to weather,
                operational requirements, or other unforeseen circumstances.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Main Content */}
        <section className="container py-12">
          <Tabs defaultValue="alerts" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="alerts">Current Alerts</TabsTrigger>
              <TabsTrigger value="weather">Weather Updates</TabsTrigger>
              <TabsTrigger value="operational">Operational Updates</TabsTrigger>
              <TabsTrigger value="destinations">Destination Advisories</TabsTrigger>
            </TabsList>

            <TabsContent value="alerts" className="space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Current Travel Alerts</h2>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Last updated: April 6, 2025, 10:30 AM UTC</span>
                </div>
              </div>

              <div className="space-y-6">
                <Alert className="bg-red-100 dark:bg-red-900/20 border-red-400 dark:border-red-800 text-red-800 dark:text-red-300">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>High Priority</AlertTitle>
                  <AlertDescription>
                    <div className="space-y-2">
                      <p>
                        <strong>Severe Weather in Northeast United States:</strong> Multiple flight cancellations and
                        delays affecting New York (JFK, LGA), Boston (BOS), and Philadelphia (PHL) due to winter storm
                        conditions. This situation is expected to continue through April 8, 2025.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge
                          variant="outline"
                          className="bg-red-100 dark:bg-red-900/20 border-red-400 dark:border-red-800 text-red-800 dark:text-red-300"
                        >
                          Flight Cancellations
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-red-100 dark:bg-red-900/20 border-red-400 dark:border-red-800 text-red-800 dark:text-red-300"
                        >
                          Significant Delays
                        </Badge>
                      </div>
                      <div className="mt-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-red-400 dark:border-red-800 text-red-800 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/40"
                        >
                          Check Flight Status
                        </Button>
                      </div>
                    </div>
                  </AlertDescription>
                </Alert>

                <Alert className="bg-amber-100 dark:bg-amber-900/20 border-amber-400 dark:border-amber-800 text-amber-800 dark:text-amber-300">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Medium Priority</AlertTitle>
                  <AlertDescription>
                    <div className="space-y-2">
                      <p>
                        <strong>Airport Construction at Dubai International (DXB):</strong> Terminal 1 renovation work
                        may cause longer wait times at check-in and security. Passengers are advised to arrive 3 hours
                        before international departures. Construction expected to continue until June 2025.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge
                          variant="outline"
                          className="bg-amber-100 dark:bg-amber-900/20 border-amber-400 dark:border-amber-800 text-amber-800 dark:text-amber-300"
                        >
                          Longer Processing Times
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-amber-100 dark:bg-amber-900/20 border-amber-400 dark:border-amber-800 text-amber-800 dark:text-amber-300"
                        >
                          Arrive Early
                        </Badge>
                      </div>
                    </div>
                  </AlertDescription>
                </Alert>

                <Alert className="bg-amber-100 dark:bg-amber-900/20 border-amber-400 dark:border-amber-800 text-amber-800 dark:text-amber-300">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Medium Priority</AlertTitle>
                  <AlertDescription>
                    <div className="space-y-2">
                      <p>
                        <strong>IT System Maintenance:</strong> Our online check-in system will be unavailable on April
                        10, 2025, from 01:00 to 05:00 UTC due to scheduled maintenance. Passengers are advised to check
                        in at the airport during this time.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge
                          variant="outline"
                          className="bg-amber-100 dark:bg-amber-900/20 border-amber-400 dark:border-amber-800 text-amber-800 dark:text-amber-300"
                        >
                          System Maintenance
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-amber-100 dark:bg-amber-900/20 border-amber-400 dark:border-amber-800 text-amber-800 dark:text-amber-300"
                        >
                          Check-in Affected
                        </Badge>
                      </div>
                    </div>
                  </AlertDescription>
                </Alert>

                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Low Priority</AlertTitle>
                  <AlertDescription>
                    <div className="space-y-2">
                      <p>
                        <strong>New Security Procedures at London Heathrow (LHR):</strong> Enhanced security screening
                        measures have been implemented at Terminal 3. Passengers should allow extra time for security
                        processing.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="outline">Security Update</Badge>
                        <Badge variant="outline">Allow Extra Time</Badge>
                      </div>
                    </div>
                  </AlertDescription>
                </Alert>
              </div>

              <div className="flex justify-center">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Bell className="h-4 w-4 mr-2" />
                  Subscribe to Travel Alerts
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="weather" className="space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Weather Updates</h2>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Last updated: April 6, 2025, 09:15 AM UTC</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader className="bg-red-100 dark:bg-red-900/20 border-b border-red-200 dark:border-red-800">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <CloudSnow className="h-5 w-5 text-red-600 dark:text-red-400" />
                        <span>Winter Storm Warning</span>
                      </CardTitle>
                      <Badge className="bg-red-600 text-white">Active</Badge>
                    </div>
                    <CardDescription>Northeast United States</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">April 6-8, 2025</span>
                      </div>
                      <p className="text-muted-foreground">
                        A major winter storm is affecting the Northeast United States with heavy snowfall, strong winds,
                        and potential icing conditions. Airports in the region are experiencing significant disruptions.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium">Affected Airports:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>New York (JFK) - Significant delays and cancellations</li>
                        <li>New York (LGA) - Significant delays and cancellations</li>
                        <li>Boston (BOS) - Significant delays and cancellations</li>
                        <li>Philadelphia (PHL) - Moderate delays and some cancellations</li>
                        <li>Washington D.C. (IAD) - Minor delays</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium">Passenger Information:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Flexible rebooking options available for affected flights</li>
                        <li>Change fees waived for flights to/from affected airports</li>
                        <li>Passengers advised to check flight status before traveling to the airport</li>
                      </ul>
                    </div>

                    <Button className="w-full">Check Your Flight Status</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="bg-amber-100 dark:bg-amber-900/20 border-b border-amber-200 dark:border-amber-800">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Umbrella className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                        <span>Monsoon Advisory</span>
                      </CardTitle>
                      <Badge className="bg-amber-600 text-white">Active</Badge>
                    </div>
                    <CardDescription>Southeast Asia</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">April 5-15, 2025</span>
                      </div>
                      <p className="text-muted-foreground">
                        The monsoon season is causing heavy rainfall and potential flooding in parts of Southeast Asia.
                        Some airports in the region may experience delays due to reduced visibility and strong winds.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium">Affected Airports:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Bangkok (BKK) - Occasional delays during heavy rainfall</li>
                        <li>Ho Chi Minh City (SGN) - Minor delays possible</li>
                        <li>Manila (MNL) - Moderate delays during thunderstorms</li>
                        <li>Jakarta (CGK) - Minor delays possible</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium">Passenger Information:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Flights operating but may experience delays</li>
                        <li>Allow extra time for airport transfers due to potential road flooding</li>
                        <li>Check local weather conditions before traveling to the airport</li>
                      </ul>
                    </div>

                    <Button className="w-full">Check Your Flight Status</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="bg-muted border-b">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Umbrella className="h-5 w-5 text-muted-foreground" />
                        <span>Fog Advisory</span>
                      </CardTitle>
                      <Badge variant="outline">Monitoring</Badge>
                    </div>
                    <CardDescription>Northern Europe</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">April 7-9, 2025</span>
                      </div>
                      <p className="text-muted-foreground">
                        Seasonal fog conditions are expected in parts of Northern Europe, potentially affecting
                        visibility at several airports. Morning flights may experience delays during dense fog periods.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium">Airports to Monitor:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>London (LHR) - Morning delays possible</li>
                        <li>Amsterdam (AMS) - Morning delays possible</li>
                        <li>Frankfurt (FRA) - Minor delays possible</li>
                        <li>Brussels (BRU) - Minor delays possible</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium">Passenger Information:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Most flights expected to operate as scheduled</li>
                        <li>Morning flights (before 10:00 AM local time) may experience delays</li>
                        <li>Check flight status before traveling to the airport</li>
                      </ul>
                    </div>

                    <Button variant="outline" className="w-full">
                      Check Your Flight Status
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="bg-muted border-b">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <CloudSnow className="h-5 w-5 text-muted-foreground" />
                        <span>Seasonal Weather Update</span>
                      </CardTitle>
                      <Badge variant="outline">Informational</Badge>
                    </div>
                    <CardDescription>Global Network</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">April 2025</span>
                      </div>
                      <p className="text-muted-foreground">
                        Seasonal weather patterns may affect various regions in our network. This information is
                        provided to help you plan your travel during the month of April.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium">Regional Weather Patterns:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>North America: Spring storms in central and eastern regions</li>
                        <li>Europe: Variable conditions with occasional rain in western areas</li>
                        <li>Asia: Monsoon season beginning in Southeast Asia</li>
                        <li>Australia: Mild autumn conditions with occasional rainfall</li>
                        <li>Middle East: Increasing temperatures with occasional sandstorms</li>
                      </ul>
                    </div>

                    <Button variant="outline" className="w-full">
                      View Detailed Weather Forecast
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-center">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Bell className="h-4 w-4 mr-2" />
                  Subscribe to Weather Alerts
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="operational" className="space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Operational Updates</h2>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Last updated: April 6, 2025, 08:45 AM UTC</span>
                </div>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>System Maintenance</CardTitle>
                      <Badge className="bg-amber-600 text-white">Scheduled</Badge>
                    </div>
                    <CardDescription>April 10, 2025, 01:00-05:00 UTC</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Our online check-in system will be unavailable during the scheduled maintenance window. This
                      maintenance is necessary to implement system improvements and ensure continued reliability.
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-medium">Affected Services:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Online check-in</li>
                        <li>Seat selection</li>
                        <li>Booking management</li>
                        <li>Mobile app check-in</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium">Alternative Options:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Airport check-in counters will be available</li>
                        <li>Self-service kiosks at the airport will be operational</li>
                        <li>Customer service phone lines will remain open</li>
                      </ul>
                    </div>

                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertDescription>
                        We apologize for any inconvenience this may cause. Normal service will resume immediately after
                        the maintenance window.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Terminal Changes at London Heathrow (LHR)</CardTitle>
                      <Badge>Ongoing</Badge>
                    </div>
                    <CardDescription>Effective April 1, 2025</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      SkyJet Airways has relocated its operations at London Heathrow Airport from Terminal 3 to Terminal
                      5. This change affects all SkyJet Airways flights to and from London Heathrow.
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-medium">Important Information:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>All check-in, baggage drop, and customer service facilities are now in Terminal 5</li>
                        <li>SkyJet Airways lounges are located near gates A10-A15 in Terminal 5</li>
                        <li>Minimum connection times between SkyJet Airways flights have been reduced</li>
                        <li>
                          Passengers connecting to partner airlines in other terminals should allow additional time
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium">Terminal 5 Facilities:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Enhanced check-in area with more self-service kiosks</li>
                        <li>Expanded security screening capacity</li>
                        <li>New SkyJet Airways flagship lounge with improved amenities</li>
                        <li>Direct access to Heathrow Express train service</li>
                      </ul>
                    </div>

                    <Button variant="outline" className="w-full">
                      View Terminal Map
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>New Routes Announcement</CardTitle>
                      <Badge className="bg-green-600 text-white">New</Badge>
                    </div>
                    <CardDescription>Starting June 1, 2025</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      SkyJet Airways is pleased to announce the launch of several new routes to enhance our global
                      network. Tickets for these routes are now available for booking.
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-medium">New Routes:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>New York (JFK) to Athens (ATH) - Daily service</li>
                        <li>London (LHR) to Cape Town (CPT) - 5 times weekly</li>
                        <li>Tokyo (HND) to Sydney (SYD) - 3 times weekly</li>
                        <li>Dubai (DXB) to Bali (DPS) - 4 times weekly</li>
                        <li>Singapore (SIN) to San Francisco (SFO) - Daily service</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium">Special Introductory Offers:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Bonus SkyJet Rewards points for inaugural flights</li>
                        <li>Special fares for bookings made before May 15, 2025</li>
                        <li>Complimentary seat selection for all fare types</li>
                      </ul>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Book New Routes
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Aircraft Fleet Update</CardTitle>
                      <Badge variant="outline">Informational</Badge>
                    </div>
                    <CardDescription>Ongoing Fleet Modernization</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      SkyJet Airways continues its fleet modernization program with the introduction of new aircraft and
                      the retirement of older models. These changes will enhance fuel efficiency, reduce environmental
                      impact, and improve passenger comfort.
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-medium">Fleet Updates:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>5 new Airbus A350-1000 aircraft joining the long-haul fleet</li>
                        <li>10 new Boeing 737 MAX 10 aircraft for medium-haul routes</li>
                        <li>Phased retirement of Boeing 767 aircraft by end of 2025</li>
                        <li>Cabin retrofits for existing Airbus A330 fleet with new interiors</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium">Passenger Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Enhanced cabin comfort with improved seating</li>
                        <li>Latest in-flight entertainment systems</li>
                        <li>Improved cabin air quality and humidity</li>
                        <li>Reduced noise levels</li>
                        <li>Increased fuel efficiency and reduced carbon emissions</li>
                      </ul>
                    </div>

                    <Button variant="outline" className="w-full">
                      Learn More About Our Fleet
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="destinations" className="space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Destination Advisories</h2>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Last updated: April 5, 2025, 14:20 UTC</span>
                </div>
              </div>

              <Alert className="bg-muted border-muted-foreground/20">
                <Globe className="h-4 w-4" />
                <AlertDescription>
                  The following advisories are provided for informational purposes only. Passengers are encouraged to
                  check official government travel advisories and entry requirements for their destination before
                  travel.
                </AlertDescription>
              </Alert>

              <div className="space-y-6">
                <Card>
                  <CardHeader className="bg-red-100 dark:bg-red-900/20 border-b border-red-200 dark:border-red-800">
                    <div className="flex items-center justify-between">
                      <CardTitle>Japan - Entry Requirements Update</CardTitle>
                      <Badge className="bg-red-600 text-white">Important</Badge>
                    </div>
                    <CardDescription>Effective April 15, 2025</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <p className="text-muted-foreground">
                      Japan has announced new entry requirements for all international travelers. These changes will
                      affect all passengers traveling to Japan on or after April 15, 2025.
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-medium">New Requirements:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Digital Travel Authorization (DTA) required before travel</li>
                        <li>Application must be submitted at least 72 hours before departure</li>
                        <li>Processing fee of ¥3,000 (approximately $20 USD)</li>
                        <li>Valid passport with at least 6 months validity</li>
                        <li>Proof of onward or return travel</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium">Passenger Action Required:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Apply for DTA through the official Japanese government website</li>
                        <li>Ensure all passport details match your booking exactly</li>
                        <li>Keep a digital or printed copy of your DTA confirmation</li>
                      </ul>
                    </div>

                    <Alert className="bg-red-100 dark:bg-red-900/20 border-red-400 dark:border-red-800 text-red-800 dark:text-red-300">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        Passengers without a valid DTA will not be permitted to board flights to Japan.
                      </AlertDescription>
                    </Alert>

                    <Button className="w-full">Japan DTA Application Portal</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="bg-amber-100 dark:bg-amber-900/20 border-b border-amber-200 dark:border-amber-800">
                    <div className="flex items-center justify-between">
                      <CardTitle>Thailand - Visa Policy Change</CardTitle>
                      <Badge className="bg-amber-600 text-white">Important</Badge>
                    </div>
                    <CardDescription>Effective May 1, 2025</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <p className="text-muted-foreground">
                      Thailand has announced changes to its visa policy affecting tourists from several countries. These
                      changes will take effect on May 1, 2025.
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-medium">Key Changes:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Visa-free stay period extended from 30 to 45 days for eligible countries</li>
                        <li>New e-Visa system replacing visa-on-arrival for certain nationalities</li>
                        <li>Proof of accommodation for entire stay now required</li>
                        <li>Proof of funds (minimum $500 USD per person) may be requested</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium">Affected Countries:</h4>
                      <p className="text-sm text-muted-foreground">
                        The new e-Visa requirement affects travelers from 18 countries previously eligible for
                        visa-on-arrival, including China, India, Saudi Arabia, and Taiwan. Travelers from the US, UK,
                        EU, Australia, and Canada remain eligible for visa-free entry with the extended 45-day stay
                        period.
                      </p>
                    </div>

                    <Button variant="outline" className="w-full">
                      Check Visa Requirements by Nationality
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>United Arab Emirates - Public Holiday</CardTitle>
                      <Badge variant="outline">Informational</Badge>
                    </div>
                    <CardDescription>April 10-13, 2025</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <p className="text-muted-foreground">
                      The United Arab Emirates will observe Eid al-Fitr public holidays from April 10-13, 2025. This may
                      affect travel to and within the UAE during this period.
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-medium">Travel Considerations:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Expect increased passenger traffic at Dubai (DXB) and Abu Dhabi (AUH) airports</li>
                        <li>Allow extra time for airport procedures and security</li>
                        <li>Some government offices and services may be closed or operating with limited hours</li>
                        <li>Hotel availability may be limited and rates may be higher</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium">Airport Operations:</h4>
                      <p className="text-sm text-muted-foreground">
                        All SkyJet Airways flights to and from the UAE will operate as scheduled during the holiday
                        period. Our ground services and customer service teams will be fully operational.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Australia - Customs Regulations Update</CardTitle>
                      <Badge variant="outline">Informational</Badge>
                    </div>
                    <CardDescription>Effective Immediately</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <p className="text-muted-foreground">
                      Australian Customs and Border Protection has implemented stricter biosecurity measures for all
                      incoming international travelers. These measures are now in effect.
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-medium">New Regulations:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Enhanced screening for food, plant, and animal products</li>
                        <li>Mandatory declaration of all food items, regardless of packaging</li>
                        <li>Increased penalties for undeclared items (up to AUD $2,664)</li>
                        <li>Additional detector dog teams and biosecurity officers at international terminals</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium">Passenger Recommendations:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Declare all food, plant material, and animal products on your Incoming Passenger Card</li>
                        <li>When in doubt, declare items rather than risk penalties</li>
                        <li>Allow extra time for customs and biosecurity processing</li>
                        <li>Consider disposing of food items before arrival</li>
                      </ul>
                    </div>

                    <Button variant="outline" className="w-full">
                      Australian Biosecurity Information
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-center">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Bell className="h-4 w-4 mr-2" />
                  Subscribe to Destination Updates
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/40 py-12">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Stay Informed</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Get the latest travel updates delivered directly to your inbox or mobile device
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Bell className="h-4 w-4 mr-2" />
                Subscribe to Alerts
              </Button>
              <Button variant="outline">
                <Plane className="h-4 w-4 mr-2" />
                Download Mobile App
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

