import { Link } from "react-router-dom";

const Postlist = () => {
  return (
    <>
      {/* <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br className="hidden lg:inline-block"/>readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
  </div>
</section> */}

      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden md:flex">
          {/* <!-- Image Section --> */}
          <div className="md:w-1/3">
            <img
              src="https://dummyimage.com/720x400"
              alt="Card Image"
              className="w-full h-48 md:h-full object-cover"
            />
          </div>

          {/* <!-- Content Section --> */}
          <div className="p-6 md:w-2/3 flex flex-col justify-between">
            {/* <!-- Date and Category --> */}
            <div className="text-sm text-gray-500 flex items-center space-x-2">
              <span>Mar 16, 2020</span>
              <Link>
                <span className="bg-gray-200 text-gray-700 text-xs font-medium py-1 px-2 rounded-full">
                  Marketing
                </span>
              </Link>
            </div>

            {/* <!-- Title --> */}
            <Link>
              <h2 className="mt-2 text-xl font-semibold text-gray-800">
                Boost your conversion rate
              </h2>
            </Link>
            {/* <!-- Description --> */}
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Illo sint voluptas. Error voluptatem culpa eligendi. Hic vel totam
              vitae illo. Non aliquid explicabo necessitatibus unde. Sed
              exercitationem placeat consectetur nulla deserunt vel iusto
              corrupti dicta laboris incidunt.
            </p>
            <Link to='test'><p className=" text-blue-800 underline text-sm">Read more</p></Link>

            {/* <!-- Author Section --> */}
            <div className="mt-4 flex items-center">
              <img
                src="https://dummyimage.com/720x400"
                alt="Author Image"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="ml-3">
                <Link>
                  {" "}
                  <p className="text-sm font-medium text-gray-800">
                    Michael Foster
                  </p>
                </Link>
                <p className="text-xs text-gray-500">Co-Founder / CTO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Postlist;
