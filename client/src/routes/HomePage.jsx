import FeaturedPost from "../components/FeaturedPost";
import Categories from "../components/Categories";
import Breadcrumb from "../components/Breadcrumb";
import Introduction from "../components/Introduction";
import Postlist from "../components/Postlist";

const HomePage = () => {
  return (
    <>
      {/* Breadcrumb  */}

      <Breadcrumb />

      {/* Introduction  */}
      <Introduction />

      {/* Categories and Search bar  */}

      <Categories />

      {/* Featured post  */}
      <FeaturedPost />

      {/* Post list  */}
      <h1 className="text-center text-2xl text-gray-700 font-semibold">
        Recent Posts
      </h1>
      <Postlist/>
      <Postlist/>
      <Postlist/>
      <Postlist/>
      <Postlist/>
    </>
  );
};

export default HomePage;
