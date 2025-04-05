import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  AlertCircle,
  Clock,
  Facebook,
  Globe,
  Headphones,
  Instagram,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Twitter,
} from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactUsPage() {
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
              alt="Contact Us"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="container absolute inset-0 z-20 flex items-center">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Contact Us</h1>
              <p className="text-xl text-white/90">
                We're here to help with any questions or concerns about your travel experience
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Call Us</h3>
                  <p className="text-muted-foreground mb-4">Speak directly with our customer service representatives</p>
                  <div className="font-medium">1-800-SKY-JETS</div>
                  <div className="text-sm text-muted-foreground">(1-800-759-5387)</div>
                  <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Live Chat</h3>
                  <p className="text-muted-foreground mb-4">Chat with our support team for immediate assistance</p>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Start Chat</Button>
                  <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Available 6AM-10PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Email Us</h3>
                  <p className="text-muted-foreground mb-4">Send us an email and we'll respond within 24 hours</p>
                  <div className="font-medium">support@skyjetairways.com</div>
                  <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Response within 24 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="contact-form" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="contact-form">Contact Form</TabsTrigger>
              <TabsTrigger value="offices">Global Offices</TabsTrigger>
              <TabsTrigger value="social">Social Media</TabsTrigger>
            </TabsList>

            <TabsContent value="contact-form">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Send Us a Message</CardTitle>
                      <CardDescription>
                        Fill out the form below and we'll get back to you as soon as possible
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="first-name">First Name</Label>
                            <Input id="first-name" placeholder="Enter your first name" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="last-name">Last Name</Label>
                            <Input id="last-name" placeholder="Enter your last name" />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" placeholder="Enter your email address" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number (Optional)</Label>
                            <Input id="phone" placeholder="Enter your phone number" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="booking-reference">Booking Reference (Optional)</Label>
                          <Input id="booking-reference" placeholder="Enter your booking reference if applicable" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="inquiry-type">Inquiry Type</Label>
                          <Select>
                            <SelectTrigger id="inquiry-type">
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="booking">Booking Assistance</SelectItem>
                              <SelectItem value="changes">Changes & Cancellations</SelectItem>
                              <SelectItem value="baggage">Baggage Inquiries</SelectItem>
                              <SelectItem value="refunds">Refunds & Compensation</SelectItem>
                              <SelectItem value="loyalty">SkyJet Rewards</SelectItem>
                              <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea id="message" placeholder="Please provide details about your inquiry" rows={5} />
                        </div>

                        <div className="space-y-2">
                          <Label>Preferred Contact Method</Label>
                          <RadioGroup defaultValue="email" className="flex flex-col space-y-1">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="email" id="email-contact" />
                              <Label htmlFor="email-contact">Email</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="phone" id="phone-contact" />
                              <Label htmlFor="phone-contact">Phone</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          Submit
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <div className="font-medium">Customer Service</div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          <span>1-800-SKY-JETS (1-800-759-5387)</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Mail className="h-4 w-4" />
                          <span>support@skyjetairways.com</span>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <div className="font-medium">Baggage Services</div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          <span>1-800-SKY-BAGS (1-800-759-2247)</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Mail className="h-4 w-4" />
                          <span>baggage@skyjetairways.com</span>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <div className="font-medium">SkyJet Rewards</div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          <span>1-800-SKY-RWDS (1-800-759-7937)</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Mail className="h-4 w-4" />
                          <span>rewards@skyjetairways.com</span>
                        </div>
                      </div>

                      <Alert>
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Response Time</AlertTitle>
                        <AlertDescription>
                          We aim to respond to all inquiries within 24 hours. For urgent matters, please call our
                          customer service line for immediate assistance.
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="offices">
              <Card>
                <CardHeader>
                  <CardTitle>Global Offices</CardTitle>
                  <CardDescription>Find SkyJet Airways offices around the world</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="space-y-3">
                      <div className="font-medium text-lg">New York (Headquarters)</div>
                      <div className="flex items-start gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 shrink-0 mt-1" />
                        <span>SkyJet Tower, 123 Aviation Blvd, New York, NY 10001, USA</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <span>+1 (212) 555-1000</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <span>nyc@skyjetairways.com</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Mon-Fri: 8AM-8PM, Sat: 9AM-5PM</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="font-medium text-lg">London</div>
                      <div className="flex items-start gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 shrink-0 mt-1" />
                        <span>SkyJet House, 45 Aviation Way, London, E14 5HP, UK</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <span>+44 (0) 20 7946 0500</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <span>london@skyjetairways.com</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Mon-Fri: 9AM-6PM, Sat: 10AM-4PM</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="font-medium text-lg">Tokyo</div>
                      <div className="flex items-start gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 shrink-0 mt-1" />
                        <span>SkyJet Building, 7-1 Haneda Airport, Ota City, Tokyo 144-0041, Japan</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <span>+81 3 5757 9000</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <span>tokyo@skyjetairways.com</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Mon-Fri: 9AM-7PM, Sat: 10AM-5PM</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="font-medium text-lg">Dubai</div>
                      <div className="flex items-start gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 shrink-0 mt-1" />
                        <span>SkyJet Center, Dubai International Airport, Dubai, UAE</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <span>+971 4 366 9000</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <span>dubai@skyjetairways.com</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Sun-Thu: 8AM-8PM, Fri: 9AM-12PM</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="font-medium text-lg">Sydney</div>
                      <div className="flex items-start gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 shrink-0 mt-1" />
                        <span>SkyJet House, 200 Airport Drive, Sydney Airport, NSW 2020, Australia</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <span>+61 2 8338 9000</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <span>sydney@skyjetairways.com</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Mon-Fri: 9AM-5PM, Sat: 10AM-2PM</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="font-medium text-lg">Singapore</div>
                      <div className="flex items-start gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 shrink-0 mt-1" />
                        <span>SkyJet Office, 80 Airport Boulevard, Changi Airport, Singapore 819642</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <span>+65 6543 9000</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <span>singapore@skyjetairways.com</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>Mon-Fri: 9AM-6PM, Sat: 9AM-1PM</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <Button variant="outline" className="gap-2">
                      <Globe className="h-4 w-4" />
                      View All Locations
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="social">
              <Card>
                <CardHeader>
                  <CardTitle>Connect With Us</CardTitle>
                  <CardDescription>
                    Follow us on social media for the latest updates, promotions, and travel inspiration
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center text-center p-6 border rounded-lg">
                      <Facebook className="h-12 w-12 text-blue-600 mb-4" />
                      <h3 className="text-lg font-medium mb-2">Facebook</h3>
                      <p className="text-muted-foreground mb-4">
                        Follow us for travel inspiration, promotions, and customer service
                      </p>
                      <Button variant="outline" className="w-full">
                        @SkyJetAirways
                      </Button>
                    </div>

                    <div className="flex flex-col items-center text-center p-6 border rounded-lg">
                      <Twitter className="h-12 w-12 text-sky-500 mb-4" />
                      <h3 className="text-lg font-medium mb-2">Twitter</h3>
                      <p className="text-muted-foreground mb-4">
                        Real-time updates, travel alerts, and customer support
                      </p>
                      <Button variant="outline" className="w-full">
                        @SkyJet
                      </Button>
                    </div>

                    <div className="flex flex-col items-center text-center p-6 border rounded-lg">
                      <Instagram className="h-12 w-12 text-pink-600 mb-4" />
                      <h3 className="text-lg font-medium mb-2">Instagram</h3>
                      <p className="text-muted-foreground mb-4">
                        Beautiful destination photos and behind-the-scenes content
                      </p>
                      <Button variant="outline" className="w-full">
                        @SkyJetAirways
                      </Button>
                    </div>
                  </div>

                  <div className="mt-12">
                    <h3 className="text-xl font-bold mb-6">Social Customer Service</h3>
                    <div className="bg-muted/40 p-6 rounded-lg">
                      <div className="flex items-start gap-4">
                        <Headphones className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <div>
                          <p className="mb-4">
                            Our social media team is available to assist you with any questions or concerns. For faster
                            service on social media, please:
                          </p>
                          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            <li>Send a direct message rather than posting publicly</li>
                            <li>Include your booking reference if applicable</li>
                            <li>Avoid sharing sensitive personal information</li>
                            <li>Allow up to 2 hours for a response during business hours</li>
                          </ul>
                          <div className="mt-4 text-sm text-muted-foreground">
                            Social media support hours: 8AM-10PM daily
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <Footer />
    </div>
  )
}

