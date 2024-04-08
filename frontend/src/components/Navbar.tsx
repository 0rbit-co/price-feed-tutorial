const Navbar = () => {
  return (
    <nav className="bg-white py-4 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img className="h-8 md:h-10" src="/favicon.svg" alt="Logo" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;