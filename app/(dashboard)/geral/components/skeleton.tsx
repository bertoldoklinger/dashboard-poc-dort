export function SkeletonCard() {
  return (
    <div
      role="status"
      className="h-[430px] w-full animate-pulse space-y-4 divide-y divide-gray-200 rounded border border-gray-200 p-4 shadow dark:divide-gray-700 dark:border-gray-700 md:p-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
          <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700" />
        </div>
        <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700" />
      </div>
      <div className="flex items-center justify-between pt-4">
        <div>
          <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
        </div>
        <div>
          <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
          <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700" />
        </div>
        <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700" />
      </div>
      <div className="flex items-center justify-between pt-4">
        <div>
          <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
        </div>
        <div>
          <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
          <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700" />
        </div>
        <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700" />
      </div>
      <div className="flex items-center justify-between pt-4">
        <div>
          <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
        </div>
        <div>
          <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
          <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700" />
        </div>
        <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700" />
      </div>
      <div className="flex items-center justify-between pt-4">
        <div>
          <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
        </div>
        <div>
          <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
          <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700" />
        </div>
        <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700" />
      </div>
      <div className="flex items-center justify-between pt-4">
        <div>
          <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
        </div>

      </div>
    </div>

  )
}

export function SkeletonInfoCard() {
  return (
    <div
      role="status"
      className="h-40 w-full animate-pulse rounded border border-gray-200 p-4 shadow dark:border-gray-700 md:p-6"
    >

      <div className="mb-2.5 h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-700" />
      <div className="mb-10 h-2 w-48 rounded-full bg-gray-200 dark:bg-gray-700" />
      <div className="mt-1 flex items-baseline">
        <div className="h-4 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700" />
        <div className="ms-6 h-12 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700" />
        <div className="ms-6 h-16 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700" />
        <div className="ms-6 h-10 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700" />
        <div className="ms-6 h-8 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700" />
        <div className="ms-6 h-14 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700" />
        <div className="ms-6 h-14 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700" />
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}
