import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Info } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CheckinPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Online Check-in</h1>
            <p className="text-muted-foreground">
              Check in online to save time at the airport. Available from 24 hours to 90 minutes before departure.
            </p>
          </div>

          <Tabs defaultValue="booking-reference" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="booking-reference">Booking Reference</TabsTrigger>
              <TabsTrigger value="e-ticket">E-Ticket Number</TabsTrigger>
            </TabsList>

            <TabsContent value="booking-reference">
              <Card>
                <CardHeader>
                  <CardTitle>Check-in with Booking Reference</CardTitle>
                  <CardDescription>Enter your booking reference and last name to check-in online</CardDescription>
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

                  <Alert variant="default" className="bg-muted border-muted-foreground/20">
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      Online check-in is available from 24 hours up to 90 minutes before your scheduled departure time.
                    </AlertDescription>
                  </Alert>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Check In</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="e-ticket">
              <Card>
                <CardHeader>
                  <CardTitle>Check-in with E-Ticket Number</CardTitle>
                  <CardDescription>Enter your e-ticket number and last name to check-in online</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="ticket-number">E-Ticket Number</Label>
                      <Input id="ticket-number" placeholder="e.g. 0572467890123" />
                      <p className="text-sm text-muted-foreground">
                        13-digit number found on your e-ticket confirmation
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name-ticket">Last Name</Label>
                      <Input id="last-name-ticket" placeholder="Enter last name" />
                    </div>
                  </div>

                  <Alert variant="default" className="bg-muted border-muted-foreground/20">
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      Online check-in is available from 24 hours up to 90 minutes before your scheduled departure time.
                    </AlertDescription>
                  </Alert>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Check In</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Already Checked In?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  If you've already completed check-in, you can view and reprint your boarding pass.
                </p>
                <Button variant="outline" className="w-full">
                  Retrieve Boarding Pass
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Having Trouble?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  If you're experiencing issues with online check-in, our customer service team can help.
                </p>
                <Button variant="outline" className="w-full">
                  Contact Support
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

