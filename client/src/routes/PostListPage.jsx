import { Link } from "react-router-dom";
import Postlist from "../components/Postlist";
import Search from "../components/Search";
import { useState } from "react";

const PostListPage = () => {

  const [open ,setOpen] = useState(true);

  const toggleFilter = ()=>{
    setOpen((prev)=>!prev)
  }
  return (
    <>
      <h1 className="mt-4 font-semibold text-green-600">Development Blog</h1>
      <button
            onClick={toggleFilter}
            className="block lg:hidden  mt-3 w-48 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
           {open ? "close filters" : "open filters"}
          </button>
      <div className="sm: flex flex-col-reverse lg:flex-row gap-8">
        {/* posts  */}
        <div className=" sm:w-full  lg:w-3/4 flex flex-col ">
          <Postlist />
          <Postlist />
          <Postlist />
          <Postlist />
          <Postlist />
          <Postlist />
          <Postlist />
          <Postlist />
          <Postlist />
        </div>
        {/* search and filters  */}
        
        {open && <div className="sm:w-full p-5 lg:w-1/4 flex flex-col h-max lg:sticky top-8">
          {/* search  */}
          <Search />
          {/* filters  */}

          <h2 className="mt-8 font-bold">Filters</h2>
          <div className="flex flex-col">
            <div className="flex items-center mb-4 mt-4">
              <input
                id="newest"
                name="sort"
                type="checkbox"
                value="newest"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 "
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 "
              >
                Newest
              </label>
            </div>

            <div className="flex items-center mb-4 ">
              <input
                id="most-popular"
                name="sort"
                type="checkbox"
                value="most popular"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 "
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 "
              >
                Most popular
              </label>
            </div>

            <div className="flex items-center mb-4 ">
              <input
                id="trending"
                name="sort"
                type="checkbox"
                value="trending"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 "
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 "
              >
                Trending
              </label>
            </div>

            <div className="flex items-center mb-4 ">
              <input
                id="oldest"
                name="sort"
                type="checkbox"
                value="oldest"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 "
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 "
              >
                Oldest
              </label>
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
        </div>}
      </div>
    </>
  );
};

export default PostListPage;
