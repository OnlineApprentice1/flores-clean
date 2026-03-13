"use client"

import { usePathname } from "next/navigation"
import BottomCTABar from "./BottomCTABar"

// Renders the bottom CTA bar on all pages except /contact
export default function BottomCTABarWrapper() {
  const pathname = usePathname()

  if (pathname === "/contact") return null

  return <BottomCTABar />
}
