import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CalendarIcon, Plane, PlaneLanding, PlaneTakeoff } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function FlightStatusPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Flight Status</h1>
            <p className="text-muted-foreground">
              Check the status of your flight in real-time, including delays, gate changes, and more
            </p>
          </div>

          <Tabs defaultValue="flight-number" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="flight-number">Flight Number</TabsTrigger>
              <TabsTrigger value="route">Route</TabsTrigger>
              <TabsTrigger value="airport">Airport</TabsTrigger>
            </TabsList>

            <TabsContent value="flight-number">
              <Card>
                <CardHeader>
                  <CardTitle>Search by Flight Number</CardTitle>
                  <CardDescription>Enter the flight number to check its status</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="airline">Airline</Label>
                      <Select defaultValue="sj">
                        <SelectTrigger id="airline">
                          <SelectValue placeholder="Select airline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sj">SkyJet Airways (SJ)</SelectItem>
                          <SelectItem value="partner">Partner Airlines</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="flight-number">Flight Number</Label>
                      <Input id="flight-number" placeholder="e.g. 103" />
                    </div>
                    <div className="space-y-2">
                      <Label>Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant={"outline"} className="w-full justify-start text-left font-normal">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            <span>Select date</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Search Flight
                  </Button>
                </CardContent>
              </Card>

              {/* Example results (would normally show after search) */}
              <div className="mt-8 space-y-6">
                <h2 className="text-xl font-bold">Flight Status Results</h2>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Plane className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">SkyJet Airways</div>
                            <div className="text-sm text-muted-foreground">SJ 103 • May 15, 2024</div>
                          </div>
                        </div>
                        <Badge className="bg-green-600 text-white hover:bg-green-700">On Time</Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4">
                        <div>
                          <div className="flex items-start gap-2">
                            <PlaneTakeoff className="h-5 w-5 text-primary mt-1" />
                            <div>
                              <div className="text-sm text-muted-foreground">Departure</div>
                              <div className="text-xl font-bold">08:30 AM</div>
                              <div className="font-medium">New York (JFK)</div>
                              <div className="text-sm text-green-600 font-medium">On Time</div>
                              <div className="text-sm text-muted-foreground mt-1">Terminal 4 • Gate B12</div>
                            </div>
                          </div>
                        </div>

                        <div className="hidden md:flex flex-col items-center justify-center">
                          <div className="text-sm text-muted-foreground mb-1">7h 15m</div>
                          <div className="w-24 h-px bg-border relative">
                            <div className="absolute -top-1 left-0 w-2 h-2 rounded-full bg-primary"></div>
                            <div className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-primary"></div>
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">Nonstop</div>
                        </div>

                        <div>
                          <div className="flex items-start gap-2">
                            <PlaneLanding className="h-5 w-5 text-primary mt-1" />
                            <div>
                              <div className="text-sm text-muted-foreground">Arrival</div>
                              <div className="text-xl font-bold">08:45 PM</div>
                              <div className="font-medium">London (LHR)</div>
                              <div className="text-sm text-green-600 font-medium">On Time</div>
                              <div className="text-sm text-muted-foreground mt-1">Terminal 5 • Gate A23</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-sm bg-muted/50 p-3 rounded-md">
                        <div className="font-medium mb-1">Flight Information</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4">
                          <div>Aircraft: Boeing 787-9</div>
                          <div>Status: In Air</div>
                          <div>Flight Progress: 35%</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="route">
              <Card>
                <CardHeader>
                  <CardTitle>Search by Route</CardTitle>
                  <CardDescription>Enter departure and arrival airports to check flight status</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="departure">Departure Airport</Label>
                      <Input id="departure" placeholder="e.g. JFK" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="arrival">Arrival Airport</Label>
                      <Input id="arrival" placeholder="e.g. LHR" />
                    </div>
                    <div className="space-y-2">
                      <Label>Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant={"outline"} className="w-full justify-start text-left font-normal">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            <span>Select date</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Search Flights
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="airport">
              <Card>
                <CardHeader>
                  <CardTitle>Search by Airport</CardTitle>
                  <CardDescription>Check arrivals and departures for a specific airport</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="airport">Airport</Label>
                      <Input id="airport" placeholder="e.g. JFK" />
                    </div>
                    <div className="space-y-2">
                      <Label>Flight Type</Label>
                      <RadioGroup defaultValue="both" className="flex">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="arrivals" id="arrivals" />
                          <Label htmlFor="arrivals">Arrivals</Label>
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                          <RadioGroupItem value="departures" id="departures" />
                          <Label htmlFor="departures">Departures</Label>
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                          <RadioGroupItem value="both" id="both" />
                          <Label htmlFor="both">Both</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label>Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant={"outline"} className="w-full justify-start text-left font-normal">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            <span>Select date</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Search</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}

