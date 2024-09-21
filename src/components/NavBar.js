// No need for this line as NavLink is not used.
// import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="flex flex-col md:flex-row justify-between px-4 py-4 bg-gray-800">
      <div className="text-white text-2xl md:text-3xl font-bold mb-4 md:mb-0">
        Portfolio
      </div>
      <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-lg md:text-xl">
        <li>
          <a href="#home" className="text-gray-400 hover:text-blue-500 hover:border-b-2 md:hover:border-b-4 hover:border-yellow-400">Home</a>
        </li>
        <li>
          <a href='#experience' className="text-gray-400 hover:text-blue-500 hover:border-b-2 md:hover:border-b-4 hover:border-yellow-400">Experience</a>
        </li>
        <li>
          <a href="#skills" className="text-gray-400 hover:text-blue-500 hover:border-b-2 md:hover:border-b-4 hover:border-yellow-400">Skills</a>
        </li>
        <li>
          <a href="#projects" className="text-gray-400 hover:text-blue-500 hover:border-b-2 md:hover:border-b-4 hover:border-yellow-400">Projects</a>
        </li>
        <li>
          <a href="#contact" className="text-gray-400 hover:text-blue-500 hover:border-b-2 md:hover:border-b-4 hover:border-yellow-400">Contact</a>
        </li>
      </ul>
    </div>
  );
}
