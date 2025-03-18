import Link from "next/link"

export function Footer() {
  return (
      <footer className="border-t">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8">
          <div className="flex-1 space-y-4">
            <div className="text-lg font-medium">Sage Consulting Services</div>
            <p className="text-sm text-muted-foreground">Represents a connection between GSIs and insurance</p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/services/tax-compliance" className="text-muted-foreground hover:text-foreground">
                    Gift Compliance
                  </Link>
                </li>
                <li>
                  <Link href="/services/gift-approval" className="text-muted-foreground hover:text-foreground">
                    Gift Approval Assessment
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t">
          <div className="container flex flex-col gap-4 py-6 text-center text-sm md:flex-row md:gap-6 md:text-left">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Sage Consulting Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  )
}

