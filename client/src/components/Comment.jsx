import { Link } from "react-router-dom"
import Image from "./Image"

const Comment = () => {
  return (
    <>
    <div className=" w-full my-4 bg-purple-50 p-4 md:p-6 rounded-lg shadow-md  mx-auto">
  <div className="flex flex-col sm:flex-row items-start sm:items-center">
    
    <Image src={"profile.jpg"} w={"36"} h={"36"} className={"rounded-full"}/>
    <div className="sm:ml-4 mt-2 sm:mt-0">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center">
        <Link><h2 className="text-lg font-semibold">John Doe</h2></Link>
        
        <span className="text-sm text-gray-500 sm:ml-4 mt-1 sm:mt-0">2 days ago</span>
      </div>
      <p className="mt-2 text-gray-700">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error eveniet, vel quos saepe ullam assumenda ea dolor delectus iusto labore. Dolor necessitatibus excepturi ad? Possimus illo eveniet consequuntur molestias neque.
      </p>
    </div>
  </div>
</div>

    
    </>
  )
}

export default Comment
