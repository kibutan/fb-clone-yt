import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { session, useSession } from "next-auth/client";
import Image from "next/image";

function InputBox() {
  const [session] = useSession();
  const sendPost = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6 ">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            type="text"
            className="h-12 rounded-full bg-gray-100 focus:outline-none flex-grow"
            placeholder={`What's on your mind, ${session.user.name}?`}
          />
          <button hidden type="submit" onClick={sendPost}>
            submit
          </button>
        </form>
      </div>
      <div className=" flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div className="inputIcon">
          <CameraIcon className="h-7 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
        </div>{" "}
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-500" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
