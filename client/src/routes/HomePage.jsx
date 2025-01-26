import FeaturedPost from "../components/FeaturedPost";
import Categories from "../components/Categories";
import Breadcrumb from "../components/Breadcrumb";

const HomePage = () => {
  return (
    <>
      {/* Breadcrumb  */}

     <Breadcrumb/>

      {/* Introduction  */}

      <div className="introduction flex flex-col items-center justify-between gap-4 mt-6 sm:flex-row">
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-800 ">Your Destination for creativity, Knowledge and Growth</h1>
        
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ">Write a Post</button>
      </div>
      <p className="mt-4 text-blue-800 font-medium">Discover insights, tips and trends to fuel your creativity and success.</p>

      {/* Categories and Search bar  */}


      <Categories/>


      {/* Featured post  */}
      <FeaturedPost/>
  
      {/* Post list  */}
      <h1 className="text-center text-2xl text-gray-700 font-semibold">Recent Posts</h1>
    </>
  );
};

export default HomePage;
