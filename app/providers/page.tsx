import { Suspense } from "react"
import ProviderSearch from "./ProviderSearch"

export default function ProvidersPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProviderSearch />
    </Suspense>
  )
}

