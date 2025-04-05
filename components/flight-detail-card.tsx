import { Badge } from "@/components/ui/badge"
import { Plane, PlaneLanding, PlaneTakeoff } from "lucide-react"

interface FlightDetailCardProps {
  airline: string
  flightNumber: string
  aircraft: string
  departureDate: string
  departureTime: string
  departureAirport: string
  departureCity: string
  arrivalDate: string
  arrivalTime: string
  arrivalAirport: string
  arrivalCity: string
  duration: string
  stops: number
}

export default function FlightDetailCard({
  airline,
  flightNumber,
  aircraft,
  departureDate,
  departureTime,
  departureAirport,
  departureCity,
  arrivalDate,
  arrivalTime,
  arrivalAirport,
  arrivalCity,
  duration,
  stops,
}: FlightDetailCardProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b">
        <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
          <Plane className="h-5 w-5" />
        </div>
        <div>
          <div className="font-medium">{airline}</div>
          <div className="text-sm text-muted-foreground">
            {flightNumber} • {aircraft}
          </div>
        </div>
        <Badge variant="outline" className="ml-auto">
          {stops === 0 ? "Nonstop" : `${stops} stop${stops > 1 ? "s" : ""}`}
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4">
        {/* Departure */}
        <div className="flex items-start gap-4">
          <div className="mt-1">
            <PlaneTakeoff className="h-5 w-5 text-primary" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">{departureDate}</div>
            <div className="text-xl font-bold">{departureTime}</div>
            <div className="font-medium">{departureAirport}</div>
            <div className="text-sm text-muted-foreground">{departureCity}</div>
          </div>
        </div>

        {/* Flight Path */}
        <div className="flex flex-col items-center justify-center py-4 px-6">
          <div className="text-sm font-medium text-muted-foreground mb-2">{duration}</div>
          <div className="w-full h-px bg-border relative">
            <div className="absolute -top-1 left-0 w-2 h-2 rounded-full bg-primary"></div>
            <div className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-primary"></div>
          </div>
          <div className="text-xs text-muted-foreground mt-2">
            {stops === 0 ? "Nonstop flight" : `${stops} stop${stops > 1 ? "s" : ""}`}
          </div>
        </div>

        {/* Arrival */}
        <div className="flex items-start gap-4">
          <div className="mt-1">
            <PlaneLanding className="h-5 w-5 text-primary" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">{arrivalDate}</div>
            <div className="text-xl font-bold">{arrivalTime}</div>
            <div className="font-medium">{arrivalAirport}</div>
            <div className="text-sm text-muted-foreground">{arrivalCity}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

