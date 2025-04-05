import { Award, Clock, CreditCard, Globe, HeartHandshake, Shield } from "lucide-react"

export default function WhyChooseUs() {
  return (
    <section className="container py-12 md:py-16 lg:py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Why Choose SkyJet Airways</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Experience the difference with our award-winning service and commitment to excellence
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center p-6">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
            <Award className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-medium mb-2">Award-Winning Service</h3>
          <p className="text-muted-foreground">
            Recognized for excellence in customer service and in-flight experience
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-6">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
            <Globe className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-medium mb-2">Global Network</h3>
          <p className="text-muted-foreground">Connecting you to over 150 destinations across 6 continents</p>
        </div>

        <div className="flex flex-col items-center text-center p-6">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-medium mb-2">Safety First</h3>
          <p className="text-muted-foreground">Committed to the highest safety standards in the industry</p>
        </div>

        <div className="flex flex-col items-center text-center p-6">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
            <CreditCard className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-medium mb-2">Flexible Payment Options</h3>
          <p className="text-muted-foreground">Multiple payment methods and flexible installment plans</p>
        </div>

        <div className="flex flex-col items-center text-center p-6">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-medium mb-2">Punctuality</h3>
          <p className="text-muted-foreground">One of the best on-time performance records in the industry</p>
        </div>

        <div className="flex flex-col items-center text-center p-6">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
            <HeartHandshake className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-medium mb-2">Customer Satisfaction</h3>
          <p className="text-muted-foreground">97% customer satisfaction rate with dedicated support</p>
        </div>
      </div>
    </section>
  )
}

