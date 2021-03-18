import Link from "next/link";

const SiteLayout = ({ children }) => (
  <div className="bg-white antialiased">
    <div className="max-w-xl mx-auto px-8">
      <nav>
        <div className="py-4 flex-shrink-0 flex items-center">
          <Link href="/">
            <a className="ml-8 font-medium text-gray-900">Home</a>
          </Link>
          <Link href="/characters">
            <a className="ml-8 font-medium text-gray-900">les personnages</a>
          </Link>
        </div>
      </nav>
    </div>
    <div className="max-w-xl mx-auto px-8">
      {children}
    </div>
  </div>
);

export default SiteLayout;
