import Comment from "./Comment";

const Comments = () => {
  return (
    <>
      <form>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 mt-8 ">
          <div className="px-4 py-2 bg-white rounded-t-lg ">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows="4"
              className="w-full px-0 text-sm text-gray-900 bg-white border-0  focus:ring-0 "
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between px-3 py-2 border-t  border-gray-200">
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
            >
              Post comment
            </button>
          </div>
        </div>
      </form>

      {/* single comments section  */}
      
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      
    </>
  );
};

export default Comments;
