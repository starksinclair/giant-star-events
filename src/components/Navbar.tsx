import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-purple-600"
          >
            <Link to="/">Giant Star Events</Link>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'Services', 'Gallery', 'About'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 hover:text-purple-600 transition-colors"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Side Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black md:hidden"
              onClick={toggleMenu}
            />
            
            {/* Side Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="fixed right-0 top-0 h-[100vh] w-1/2 bg-white md:hidden z-10"
            >
              <div className="flex flex-col p-6 bg-white ">
                <button 
                  className="self-end text-gray-600 hover:text-purple-600 mb-8"
                  onClick={toggleMenu}
                >
                  <X size={24} />
                </button>
                {['Home', 'Services', 'Gallery', 'About'].map((item) => (
                  <Link
                    key={item}
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-purple-600 transition-colors py-4 text-lg border-b border-gray-100"
                    onClick={toggleMenu}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;