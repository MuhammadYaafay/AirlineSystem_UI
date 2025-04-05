import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock, Plane } from "lucide-react"

export default function TravelDeals() {
  return (
    <section className="bg-muted/40 py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Special Offers</h2>
            <p className="text-muted-foreground mt-2">Limited-time deals on flights and vacation packages</p>
          </div>
          <Button variant="link" className="hidden md:flex items-center gap-1 text-primary hover:text-primary/90">
            View all offers
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-primary/80 p-4 text-primary-foreground">
              <Badge variant="outline" className="bg-white/20 text-white border-white/40 hover:bg-white/20">
                Limited Time
              </Badge>
              <h3 className="text-xl font-bold mt-2">Summer Sale</h3>
              <p className="text-sm opacity-90 mt-1">Up to 25% off on international flights</p>
            </div>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Plane className="h-4 w-4 text-primary" />
                  <span className="text-sm">Multiple destinations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm">Travel period: Jun 1 - Aug 31, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm">Book by: May 15, 2024</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">View Deal</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 text-white">
              <Badge variant="outline" className="bg-white/20 text-white border-white/40 hover:bg-white/20">
                Weekend Getaway
              </Badge>
              <h3 className="text-xl font-bold mt-2">City Breaks</h3>
              <p className="text-sm opacity-90 mt-1">Flights + 2 nights hotel from $299</p>
            </div>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Plane className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">New York, Boston, Chicago</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">Travel period: May 1 - Jun 30, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">Book by: Apr 30, 2024</span>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">View Deal</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="bg-gradient-to-r from-amber-600 to-amber-800 p-4 text-white">
              <Badge variant="outline" className="bg-white/20 text-white border-white/40 hover:bg-white/20">
                Business Class
              </Badge>
              <h3 className="text-xl font-bold mt-2">Premium Experience</h3>
              <p className="text-sm opacity-90 mt-1">30% off on business class flights</p>
            </div>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Plane className="h-4 w-4 text-amber-600" />
                  <span className="text-sm">Europe & Asia destinations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-amber-600" />
                  <span className="text-sm">Travel period: Jun 15 - Sep 30, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-amber-600" />
                  <span className="text-sm">Book by: May 31, 2024</span>
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">View Deal</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mt-8 md:hidden">
          <Button variant="outline" className="flex items-center gap-1">
            View all offers
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

