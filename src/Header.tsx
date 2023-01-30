const Header = () => {
  return (
    <header className="bg-red-300 p-3">
      <nav className="flex items-center justify-around bg-green-300">
        <img src="/assets/images/url.png" alt="/" className="h-4" />
        <p className="text-sm">Get mentor support</p>
        <div className="flex space-x-1 items-center">
          <img
            src="/assets/images/student.png"
            alt="profile"
            className="h-5 rounded-full"
          />
          <span>Profile</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
