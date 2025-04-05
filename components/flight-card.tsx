import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wifi, Utensils, Clock, Plane } from "lucide-react"

interface FlightCardProps {
  airline: string
  flightNumber: string
  departureTime: string
  departureAirport: string
  arrivalTime: string
  arrivalAirport: string
  duration: string
  stops: number
  stopAirport?: string
  price: number
  featured?: boolean
}

export default function FlightCard({
  airline,
  flightNumber,
  departureTime,
  departureAirport,
  arrivalTime,
  arrivalAirport,
  duration,
  stops,
  stopAirport,
  price,
  featured = false,
}: FlightCardProps) {
  return (
    <Card
      className={`overflow-hidden ${featured ? "border-primary/30 bg-primary/5 dark:bg-primary/10 dark:border-primary/20" : ""}`}
    >
      {featured && (
        <div className="bg-primary text-primary-foreground text-xs font-medium py-1 px-3 text-center">Best Value</div>
      )}
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4">
          <div className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Airline Info */}
              <div className="flex items-center gap-3 min-w-[120px]">
                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                  <Plane className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">{airline}</div>
                  <div className="text-xs text-muted-foreground">{flightNumber}</div>
                </div>
              </div>

              {/* Flight Times */}
              <div className="flex flex-1 items-center gap-3">
                <div className="text-center">
                  <div className="text-lg font-bold">{departureTime}</div>
                  <div className="text-sm font-medium">{departureAirport}</div>
                </div>

                <div className="flex-1 flex flex-col items-center px-4">
                  <div className="text-xs text-muted-foreground mb-1">{duration}</div>
                  <div className="w-full h-px bg-border relative">
                    {stops > 0 && (
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-muted-foreground"></div>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {stops === 0 ? "Nonstop" : `${stops} stop${stops > 1 ? "s" : ""}`}
                    {stopAirport && ` (${stopAirport})`}
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-lg font-bold">{arrivalTime}</div>
                  <div className="text-sm font-medium">{arrivalAirport}</div>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="flex flex-wrap gap-3 mt-4">
              <Badge variant="outline" className="text-xs">
                <Wifi className="h-3 w-3 mr-1" />
                Wi-Fi
              </Badge>
              <Badge variant="outline" className="text-xs">
                <Utensils className="h-3 w-3 mr-1" />
                Meal
              </Badge>
              <Badge variant="outline" className="text-xs">
                <Clock className="h-3 w-3 mr-1" />
                On-time (95%)
              </Badge>
            </div>
          </div>

          {/* Price and CTA */}
          <div className="flex flex-row md:flex-col items-center justify-between md:justify-center bg-muted/50 p-4 md:p-6 md:min-w-[180px]">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">${price}</div>
              <div className="text-xs text-muted-foreground">per passenger</div>
            </div>
            <Button className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">Select</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

