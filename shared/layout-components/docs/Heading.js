import Link from "next/link"

export const Heading = ({title})=>{
  return (
    <h2 className="text-2xl capitalize font-semibold my-3">{title}</h2>
  )
}

export const Heading_Two = ({title})=>{
  return (
    <h5 className="text-base capitalize font-semibold my-5">{title}</h5>
  )
}

export const Para = ({para})=>{
  return (
    <p className="text-base text-gray-600">{para}</p>
  )
}

export const CustomLink = ({href, title, target="_blank"})=>{
  return (
    <Link href={href} target={target} className="text-blue-500 font-semibold hover:underline">{title}</Link>
  )
}

export const Code = ({title})=>{
  return(
    <b><code>'{title}'</code></b>
  )
}

export const LoadImage = ({title="doc image", url})=>{
  return (
    <Link className="" href={`/assets/docs/${url}`} target="_blank">
      <img src={`/assets/docs/${url}`} alt={title} className="block mt-5 mb-7 border cursor-pointer rounded-md hover:shadow-md" title="Click for full size"/>
    </Link>
  )
}

export const CmdBox = ({cmd})=>{
  return (
    <div className="bg-gray-700 text-gray-300 p-4 rounded-md shadow-md my-5">
      <span className="text-xs text-gray-400">cmd</span>
      <div className="flex gap-1 sm:gap-2 flex-wrap items-center text-xs sm:text-base">
        <span><span>C</span><span>\</span><span>Users</span><span>\</span>XYZ{">"}</span>
        <span>{cmd}</span>
      </div>
    </div>
  )
}