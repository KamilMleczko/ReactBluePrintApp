
const NavbarT = () => {
  return (
    <header className="bg-violet-900 text-shadow-blue-200 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="space-x-4 flex ">
          <h3 className="text-2xl font-bold">Logo</h3>
          <a href="/" className="hover:text-gray-200">
            Home
          </a>
          <a href="/test" className="hover:text-gray-200">
            Test Page
          </a>
          <a href="#" className="hover:text-gray-200">
            Contact
          </a>

          <img className="w-8 h-8" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="logo" />
        </nav>
      </div>
    </header>
  );
};

export default NavbarT;