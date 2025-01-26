import Image from "../components/Image"

const SinglePostPage = () => {
  return (
   <>
   <div className="flex flex-col gap-8">
    {/* details  */}
    <div className="flex gap-8">
      <div className="flex flex-col gap-8 lg:w-3/5">

      </div>
      <div className=" hidden lg:block w-2/5">
        <Image src={"profile.jpg"}/>
      </div>
    </div>
    {/* content */}
    <div>
      <div className=""></div>
      <div className=""></div>
    </div>
   </div>
    
   </>
  )
}

export default SinglePostPage
