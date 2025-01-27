import { Link } from "react-router-dom"
import Postlist from "../components/Postlist"
import Search from "../components/Search"


const PostListPage = () => {
  return (
    <>
     <h1 className="mt-4 font-semibold text-green-600">Development Blog</h1>
      <div className="sm: flex flex-col-reverse lg:flex-row gap-8">
        {/* posts  */}
        <div className=" sm:w-full  lg:w-3/4 flex flex-col ">
          <Postlist/>
          <Postlist/>
          <Postlist/>
          <Postlist/>
          <Postlist/>
          <Postlist/>
          <Postlist/>
          <Postlist/>
          <Postlist/>
        </div>
        {/* search and filters  */}
        <div className="sm:w-full p-5 lg:w-1/4 flex flex-col h-max lg:sticky top-8">
        {/* search  */}
           <Search/>
           {/* filters  */}

           <h2 className="mt-8 font-bold">Filters</h2>
           <div className="flex flex-col">
             

<div className="flex items-center mb-4 mt-4">
    <input id="newest" type="checkbox" value="newest" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 "/>
    <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 ">Newest</label>
</div>

<div className="flex items-center mb-4 ">
    <input id="most-popular" type="checkbox" value="most popular" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 "/>
    <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 ">Most popular</label>
</div>

<div className="flex items-center mb-4 ">
    <input id="trending" type="checkbox" value="trending" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 "/>
    <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 ">Trending</label>
</div>

<div className="flex items-center mb-4 ">
    <input id="oldest" type="checkbox" value="oldest" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 "/>
    <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 ">Oldest</label>
</div>

  
           </div>

           {/* categories  */}
           <h2 className="mt-8 font-bold">Categories</h2>
            <div>
              <Link>
                <p className="underline mt-6">All</p>
              </Link>
              <Link>
                <p className="underline mt-2">Web Design</p>
              </Link>
              <Link>
                <p className="underline mt-2">Development</p>
              </Link>
              <Link>
                <p className="underline mt-2">Databases</p>
              </Link>
              <Link>
                <p className="underline mt-2">Search Engines</p>
              </Link>
              <Link>
                <p className="underline mt-2">Marketing</p>
              </Link>
            </div>
        </div>
      </div>
    </>
  )
}

export default PostListPage
