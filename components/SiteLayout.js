import Link from "next/link";

const SiteLayout = ({ children }) => (
  <div className="bg-gray-100 font-sans leading-normal tracking-normal">
    <nav id="header" className="fixed w-full z-10 top-0">
      <div
        id="progress"
        className="h-1 z-20 top-0"
      ></div>

      <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
        <div className="pl-4">
          <Link href="/">
            <a className="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl">
              Rick and Morty
            </a>
          </Link>
        </div>
        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <Link href="/characters">
                <a className="inline-block py-2 px-4 text-gray-900 font-bold no-underline">
                  Les personnages
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container w-full md:max-w-3xl mx-auto pt-20">
    <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
      {children}
      </div>
    </div>
    <footer className="bg-white border-t border-gray-400 shadow mt-8">
      <div className="container max-w-4xl mx-auto flex py-8">
        <div className="w-full mx-auto flex flex-wrap">
          <div className="flex w-full md:w-1/2 ">
            <div className="px-8">
              <h3 className="font-bold text-gray-900">About</h3>
              <p className="py-4 text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas vel mi ut felis tempus commodo nec id erat. Suspendisse
                consectetur dapibus velit ut lacinia. @marmelab
              </p>
            </div>
          </div>

          <div className="flex w-full md:w-1/2">
            <div className="px-8">
              <h3 className="font-bold text-gray-900">Social</h3>
              <ul className="list-reset items-center text-sm pt-3">
                <li>
                  <a
                    className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1"
                    href="#"
                  >
                    Add social link
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1"
                    href="#"
                  >
                    Add social link
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1"
                    href="#"
                  >
                    Add social link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default SiteLayout;
