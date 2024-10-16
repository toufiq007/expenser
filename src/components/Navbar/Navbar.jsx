import { LogoIcon } from "../../assets/svgicons/svgIcons";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="flex max-w-7xl items-center bg-[#F9FAFB] w-full justify-between py-1 mt-2 border px-4 rounded-md mx-auto">
          {/* <!-- Logo --> */}
          <div>
            {/* <img src="./assets/image/favicon.svg" className="h-14" /> */}
            <LogoIcon />
          </div>

          {/* <!-- Menu --> */}
          <div className="hidden md:block">
            <ul className="flex gap-4 text-gray-500 font-medium">
              <li>Home</li>
              <li>App</li>
              <li>Account</li>
              <li>Export</li>
            </ul>
          </div>

          {/* <!-- Button --> */}
          <div className="px-6 py-2 bg-teal-600 text-white w-fit rounded-md">
            Get App
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
