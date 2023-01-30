function App() {
  return (
    <div className="bg-slate-100 h-screen">
      <header className="bg-white p-4">
        <div className="flex items-center justify-around">
          <img src="/assets/images/url.png" alt="/" className="h-4" />
          <p>Get mentor support</p>
          <div className="flex space-x-2">
            <img
              src="/assets/images/student.png"
              alt="profile"
              className="h-8 rounded-full"
            />
            <span>Profile</span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
