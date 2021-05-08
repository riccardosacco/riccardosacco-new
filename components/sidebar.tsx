import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar() {
  return (
    <aside className="fixed z-10 flex flex-col w-64 h-full p-4 border-r border-gray-200 top-16">
      <div className="text-center">
        <Image
          className="rounded-full"
          src="/avatar.png"
          alt="Riccardo Sacco"
          width={160}
          height={160}
        />
        <p className="text-sm tracking-wide text-gray-600">
          Hi, my name is Riccardo Sacco and I'm a Full Stack Developer. Welcome
          to my website!
        </p>
        <div className="flex mt-2 justify-evenly">
          <a href="#" className="p-2 bg-blue-700 rounded-full">
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              className="w-4 h-4 text-white"
            />
          </a>
          <a href="#" className="p-2 bg-gray-700 rounded-full">
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="w-4 h-4 text-white"
            />
          </a>
          <a href="#" className="p-2 bg-blue-500 rounded-full">
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="w-4 h-4 text-white"
            />
          </a>
        </div>
      </div>
      <div></div>
    </aside>
  );
}
