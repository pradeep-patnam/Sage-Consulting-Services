import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, LineChart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">About Us</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Learn about our mission, vision, and the team behind our success
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <Card>
              <CardHeader>
                <Target className="h-10 w-10 text-primary" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  To empower businesses with innovative solutions and strategic guidance for sustainable growth.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <LineChart className="h-10 w-10 text-primary" />
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  To be the leading consulting partner for businesses seeking excellence and transformation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary" />
                <CardTitle>Our Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A diverse group of experienced professionals dedicated to your success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

