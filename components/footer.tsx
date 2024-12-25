import { Activity } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto max-w-7xl px-4 py-8 md:py-12">
        <div className="grid gap-12 text-center md:grid-cols-3">
          <div className="flex flex-col items-center space-y-4">
            <Link href="/coimpact/sites" className="flex items-center space-x-2">
              <Activity className="h-6 w-6" />
              <span className="font-bold"><strong>CO-IMPACT</strong> Sites</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto">
              Advancing cancer research through international collaboration
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Guidelines
                </Link>
              </li>
              <li>
                <Link href="/publications" className="text-muted-foreground hover:text-foreground">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 CoImpact Registry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

