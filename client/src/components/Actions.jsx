import Image from "./Image"

const Actions = () => {
  return (
    <>
    <div className="flex flex-col">
        {/* save post  */}
        <div className="flex flex-row gap-4">
           <Image src={"profile.jpg"} w={"24"} h={"24"}/>  
           <p>Save this post</p>  
        </div>

        {/* delete post  */}
        <div className="flex flex-row gap-4">
           <Image src={"profile.jpg"} w={"24"} h={"24"}/>  
           <p className="text-red-700">Save this post</p>  
        </div>
    </div>
    </>
  )
}

export default Actions
