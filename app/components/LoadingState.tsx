import { Loader2 } from "lucide-react"

export function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
      <h2 className="text-2xl font-semibold text-gray-700">Loading providers...</h2>
      <p className="text-gray-500">Please wait while we fetch the best sustainability experts for you.</p>
    </div>
  )
}

