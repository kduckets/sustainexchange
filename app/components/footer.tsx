import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">SustainConnect</h3>
            <p className="text-sm text-gray-400">Connecting sustainability seekers with top-tier service providers.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">For Seekers</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/find-providers" className="hover:text-green-400">
                  Find Providers
                </Link>
              </li>
              <li>
                <Link href="/post-rfp" className="hover:text-green-400">
                  Post RFP
                </Link>
              </li>
              <li>
                <Link href="/seeker-resources" className="hover:text-green-400">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">For Providers</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/join-as-provider" className="hover:text-green-400">
                  Join as Provider
                </Link>
              </li>
              <li>
                <Link href="/provider-dashboard" className="hover:text-green-400">
                  Provider Dashboard
                </Link>
              </li>
              <li>
                <Link href="/advertise" className="hover:text-green-400">
                  Advertise
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-green-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-green-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-green-400">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} SustainConnect. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

