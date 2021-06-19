import React from 'react'

export const Loader = () => {
  return (
    <span className="block h-10 w-10 relative mx-auto my-10">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-10 w-10 bg-indigo-500" />
    </span>
  )
}
