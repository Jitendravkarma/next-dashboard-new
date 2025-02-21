import React from 'react'

const PageHeader = ({title}) => {
  return (
    <div className="bg-gray-200 py-5 border-t border-gray-300">
        <div className="max-w-screen-xl mx-auto p-4">
          <div className="grid lg:grid-cols-1 md:grid-cols-1  sm:gap-2 lg:gap-4">
            <div>
              <p className="text-3xl font-extrabold leading-tight capitalize">
                {title}
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PageHeader