export const LoadingText = () => {
  return (
    <span className="flex items-center gap-1 text-white">
      {/* <span className="mr-1">Loading</span> */}
      <span className="animate-bounce [animation-delay:0ms] w-2 h-2 bg-gray-100 mr-1 rounded-full"></span>
      <span className="animate-bounce [animation-delay:150ms] w-2 h-2 bg-gray-100 mr-1 rounded-full"></span>
      <span className="animate-bounce [animation-delay:300ms] w-2 h-2 bg-gray-100 mr-1 rounded-full"></span>
    </span>
  )
}
