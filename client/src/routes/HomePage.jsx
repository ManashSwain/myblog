import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      {/* Breadcrumb  */}

      <div className="flex mt-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-medium text-black  "
            >
              <svg
                className="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-black mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ms-1 text-sm font-medium text-blue-800  md:ms-2 ">
                Blog and Articles
              </span>
            </div>
          </li>
        </ol>
      </div>

      {/* Introduction  */}

      <div className="introduction flex flex-col items-center justify-between gap-4 mt-6 sm:flex-row">
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-800 ">Your Destination for creativity, Knowledge and Growth</h1>
        
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ">Write a Post</button>
      </div>
      <p className="mt-4 text-blue-800 font-medium">Discover insights, tips and trends to fuel your creativity and success.</p>

      {/* Categories and Search bar  */}


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


      {/* Featured post  */}

      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Featured Blog Posts</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content"/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Web Design</h3>
          <Link to="/test"><h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2></Link>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content"/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Development</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content"/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Database</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content"/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Search Engines</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Post list  */}
    </>
  );
};

export default HomePage;
