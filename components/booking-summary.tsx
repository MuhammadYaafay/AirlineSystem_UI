import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Plane, PlaneLanding, PlaneTakeoff } from "lucide-react"

interface BookingSummaryProps {
  flightNumber: string
  departureAirport: string
  departureCity: string
  departureTime: string
  departureDate: string
  arrivalAirport: string
  arrivalCity: string
  arrivalTime: string
  arrivalDate: string
  passengers: number
  baseFare: number
  taxes: number
  fees: number
  extras?: { name: string; price: number }[]
}

export default function BookingSummary({
  flightNumber,
  departureAirport,
  departureCity,
  departureTime,
  departureDate,
  arrivalAirport,
  arrivalCity,
  arrivalTime,
  arrivalDate,
  passengers,
  baseFare,
  taxes,
  fees,
  extras = [],
}: BookingSummaryProps) {
  const totalBaseFare = baseFare * passengers
  const totalTaxes = taxes * passengers
  const totalFees = fees * passengers
  const totalExtras = extras.reduce((sum, item) => sum + item.price, 0)
  const grandTotal = totalBaseFare + totalTaxes + totalFees + totalExtras

  return (
    <Card>
      <CardHeader>
        <CardTitle>Booking Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Flight Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Plane className="h-4 w-4 text-primary" />
            <span>SkyJet Airways {flightNumber}</span>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1">
              <PlaneTakeoff className="h-4 w-4 text-primary" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">{departureDate}</div>
              <div className="font-medium">{departureTime}</div>
              <div className="text-sm">
                {departureAirport}, {departureCity}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1">
              <PlaneLanding className="h-4 w-4 text-primary" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">{arrivalDate}</div>
              <div className="font-medium">{arrivalTime}</div>
              <div className="text-sm">
                {arrivalAirport}, {arrivalCity}
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Passenger Info */}
        <div>
          <div className="text-sm font-medium mb-2">Passengers</div>
          <div className="text-sm">
            {passengers} Adult{passengers > 1 ? "s" : ""}
          </div>
        </div>

        <Separator />

        {/* Price Breakdown */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              Base fare ({passengers} passenger{passengers > 1 ? "s" : ""})
            </span>
            <span>${totalBaseFare.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Taxes</span>
            <span>${totalTaxes.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Fees</span>
            <span>${totalFees.toFixed(2)}</span>
          </div>

          {extras.length > 0 && (
            <>
              <Separator />
              {extras.map((extra, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{extra.name}</span>
                  <span>${extra.price.toFixed(2)}</span>
                </div>
              ))}
            </>
          )}
        </div>

        <Separator />

        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>${grandTotal.toFixed(2)}</span>
        </div>
      </CardContent>
    </Card>
  )
}

