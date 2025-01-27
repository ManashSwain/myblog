import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import {useUser} from "@clerk/clerk-react"


const Write = () => {
  const {isLoaded , isSignedIn} = useUser();

  if( !isLoaded){
     return <div>Loading...</div>
  }
  if(isLoaded && !isSignedIn){
   return <div>You should login</div>
  }

  return (
    <>
      <h1 className="mt-4 font-bold text-green-500">Create a new post</h1>
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="col-span-full mt-4">
              {/* cover Image  */}
              <label
                htmlFor="cover-photo"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Add a cover Image
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <svg
                    className="mx-auto size-12 text-gray-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="mt-4 flex text-sm/6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs/5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>

            {/* Title  */}

            <div className="sm:col-span-3 mt-4">
              <label
                htmlFor="title-name"
                className="block text-sm/6  text-gray-900 font-semibold"
              >
                Add Title
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="title-name"
                  id="title-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            {/* category  */}

            <div className="sm:col-span-3">
              <label
                htmlFor="category"
                className="block text-sm/6 font-semibold text-gray-900 mt-4"
              >
                choose a category
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="category"
                  name="category"
                  autoComplete="category-name"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 font-medium"
                >
                  <option value="general">General</option>
                  <option value="web-design">Web Design</option>
                  <option value="development">Development</option>
                  <option value="databases">Databases</option>
                  <option value="search-engines">Search Engines</option>
                  <option value="marketing">Marketing</option>
                </select>
                <svg
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* short description  */}

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="description"
                  className="block text-sm/6 font-bold text-gray-900"
                >
                  Short Description
                </label>
                <div className="mt-2">
                  <textarea
                    name="description"
                    id="description"
                    rows="3"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* text editor  */}

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
              <div className="col-span-full ">
                <label
                  htmlFor="description"
                  className="block text-sm/6 font-bold text-gray-900"
                >
                  Blog content
                </label>
                <div className="mt-2">
                  <ReactQuill
                    theme="snow"
                    className="block w-full h-72 rounded-md "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm/6 font-semibold text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Post
          </button>
        </div>
      </form>
    </>
  );
};

export default Write;
