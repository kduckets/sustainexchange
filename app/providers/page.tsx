import { Suspense } from "react"
import ProviderSearch from "./ProviderSearch"
import { LoadingState } from "../components/LoadingState"

export default function ProvidersPage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <ProviderSearch />
    </Suspense>
  )
}

