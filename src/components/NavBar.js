import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex flex-col md:flex-row justify-between px-4 py-4 bg-gray-800">
      {/* Portfolio on the left */}
      <div className="text-white text-2xl md:text-3xl font-bold mb-4 md:mb-0">
        Portfolio
      </div>

      {/* Navigation links on the right */}
      <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-lg md:text-xl">
        <li>
          <a
            href="#home"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 border-b-2 md:border-b-4 border-yellow-400"
                : "text-gray-400 hover:text-blue-500 hover:border-b-2 md:hover:border-b-4 hover:border-yellow-400"
            }
          >
            Home
          </a>
        </li>

        <li>
          <a  
          href='#experience'    
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 border-b-2 md:border-b-4 border-yellow-400"
                : "text-gray-400 hover:text-blue-500 hover:border-b-2 md:hover:border-b-4 hover:border-yellow-400"
            }
          >
            Experience
          </a>
        </li>

        <li>
          <a  
            href="#skills"         
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 border-b-2 md:border-b-4 border-yellow-400"
                : "text-gray-400 hover:text-blue-500 hover:border-b-2 md:hover:border-b-4 hover:border-yellow-400"
            }
          >
            Skills
          </a>
        </li>

        <li>
          <a  
            href="#projects"        
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 border-b-2 md:border-b-4 border-yellow-400"
                : "text-gray-400 hover:text-blue-500 hover:border-b-2 md:hover:border-b-4 hover:border-yellow-400"
            }
          >
            Projects
          </a>
        </li>

        <li>
          <a         
          href="#contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 border-b-2 md:border-b-4 border-yellow-400"
                : "text-gray-400 hover:text-blue-500 hover:border-b-2 md:hover:border-b-4 hover:border-yellow-400"
            }
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
