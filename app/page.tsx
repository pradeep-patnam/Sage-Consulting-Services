import { ArrowRight, BarChart, Users, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                Welcome to Consulting Portal
              </h1>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Professional consulting services to help your business grow and succeed
              </p>
            </div>
            <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90">
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <Card>
              <CardHeader>
                <BarChart className="h-10 w-10 text-primary" />
                <CardTitle>Services Overview</CardTitle>
                <CardDescription>Comprehensive consulting solutions for your business needs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We offer strategic planning, market analysis, and operational optimization services.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary" />
                <CardTitle>Latest News</CardTitle>
                <CardDescription>Stay updated with industry trends and insights</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Regular updates on market trends, industry news, and best practices.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Mail className="h-10 w-10 text-primary" />
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>Connect with our expert consultants</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Schedule a consultation to discuss your business needs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

