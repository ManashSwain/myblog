import { Link } from "react-router-dom"
import Image from "../components/Image"

const SinglePostPage = () => {
  return (
   <>
   <div className="flex flex-col gap-8">
    {/* details  */}
    <div className="flex gap-8 mt-2">
      <div className="flex flex-col gap-8 lg:w-3/5">
              <h1 className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptatem magnam sint aspernatur corporis rem?</h1>
              <div>
                <p className="text-gray-500">
                     written by &nbsp;
                     <Link><span className="text-sm text-blue-800">John Doe &nbsp;</span></Link> 
                     on &nbsp;
                     <Link><span className="text-sm text-blue-800">Web Design &nbsp;</span></Link>
                     2 Hours ago
                     
                </p>
              </div>
              <p className="text-gray-500 font-medium">  Facere non esse impedit, possimus ratione accusantium, odio quod neque eius placeat ex dolore velit praesentium omnis maxime voluptatum odit modi voluptates tempora asperiores!Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nisi a velit, fugit dignissimos quae laboriosam. Facere non esse impedit, possimus ratione accusantium, odio quod neque eius placeat ex dolore velit praesentium omnis maxime voluptatum odit modi voluptates tempora asperiores!</p>
      </div>
      <div className=" hidden lg:block w-2/5 ">
        <Image src={"profile.jpg"} w="600"  className="rounded-2xl" />
      </div>
    </div>
    {/* content */}
    <div className="flex flex-col md:flex-row">
      <div className="md:w-3/4">fdg</div>

      {/* single post side menu  */}
      <div className="md:w-1/4 flex flex-col text-sm">
     <h2 className="">Author</h2>
       <div className="mt-4 flex gap-8 align-center">
        <Image src={"profile.jpg"} w={48} h={48} className={"rounded-full cursor-pointer"}/>
        <Link> <p className="text-blue-700 mt-2">John Doe</p></Link>
       </div>
       <p className="mt-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, recusandae.</p>
      </div>
    </div>
   </div>
    
   </>
  )
}

export default SinglePostPage
