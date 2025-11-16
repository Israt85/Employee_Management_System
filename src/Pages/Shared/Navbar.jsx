import { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, signout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signout();
      console.log("User logged out");
      setOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600 tracking-tight">
          AURORA<span className="text-gray-700">HR</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium items-center">
          <Link to="#features" className="hover:text-indigo-600">Features</Link>
          <Link to="#about" className="hover:text-indigo-600">About</Link>
          <Link to="/faq" className="hover:text-indigo-600">FAQ</Link>
          <Link to="/contact" className="hover:text-indigo-600">Contact</Link>

          {user ? (
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 cursor-pointer focus:outline-none"
              >
                <img
                  src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                  alt="User"
                  className="w-9 h-9 rounded-full border"
                />
                
              </button>

              {open && (
                <div className="absolute right-0 mt-3 w-48 bg-white shadow-lg border rounded-lg py-2 z-50">
                  <span className="font-medium text-blue-700 p-2 border-b-black border-b-2">{user.email}</span>
                  <Link
                    to="/dashboard/overview"
                    className="block px-4 py-3 hover:bg-gray-100 text-gray-700"
                    onClick={() => setOpen(false)}
                  >
                    Dashboard
                  </Link>

                  <hr className="my-1" />

                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="hover:text-indigo-600">Login</Link>
              <Link
                to="/signup"
                className="px-4 py-1.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;





