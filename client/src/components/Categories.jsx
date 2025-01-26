import { Link } from "react-router-dom"

const Categories = () => {
  return (
    <>
    <div className="flex flex-col lg:flex-row justify-center items-center bg-white p-4 mt-4 rounded-lg gap-4">
  {/* Filters Section */}
  <div className="flex flex-wrap justify-center lg:justify-between gap-4 w-full lg:w-3/4">
    <Link to="/posts?cat=all">
      <span className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">
        All Posts
      </span>
    </Link>
    <Link to="/posts?cat=web-design">
      <span className="cursor-pointer hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 focus:outline-none hover:text-white">
        Web Design
      </span>
    </Link>
    <Link to="/posts?cat=development">
      <span className="cursor-pointer hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 focus:outline-none hover:text-white">
        Development
      </span>
    </Link>
    <Link to="/posts?cat=databases">
      <span className="cursor-pointer hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 focus:outline-none hover:text-white">
        Databases
      </span>
    </Link>
    <Link to="/posts?cat=search-engines">
      <span className="cursor-pointer hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 focus:outline-none hover:text-white">
        Search Engines
      </span>
    </Link>
    <Link to="/posts?cat=marketing">
      <span className="cursor-pointer hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 focus:outline-none hover:text-white">
        Marketing
      </span>
    </Link>
  </div>

  {/* Searchbox Section */}
  <div className="w-full lg:w-1/4">
    <form className="w-full">
      <label htmlFor="default-search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search Blogs..."
          required
        />
      </div>
    </form>
  </div>
</div>
    </>
  )
}

export default Categories
