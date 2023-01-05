import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";

const Post = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-white mt-6 rounded-md p-4">
        <div className="flex items-center space-x-2">
          <Image
            className="rounded-full w-10 h-10"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"
            alt="fbclone logo"
            height={40}
            width={40}
          />
          <div>
            <p className="font-medium">Shawn Harrington</p>
            <p className="text-xs text-gray-500">
              {new Date().toLocaleString()}
            </p>
          </div>
        </div>
        <p className="py-4">Dream Dining Room</p>
      </div>
      <div>
        {/* Define if any image */}
        <div className="relative h-60 md:h-96 bg-white">
          <Image
            src="https://images.pexels.com/photos/14918437/pexels-photo-14918437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            objectFit="cover"
            alt="cover"
          />
        </div>
        {/* Footer */}
        <div className="flex items-center justify-cente bg-white p-2">
          <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
            <FiThumbsUp className="h-4" />
            <p className="text-xs sm:text-base">Like</p>
          </div>
          <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
            <FaRegCommentAlt className="h-4" />
            <p className="text-xs sm:text-base">Comment</p>
          </div>
          <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
            <RiShareForwardLine className="h-4" />
            <p className="text-xs sm:text-base">Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
