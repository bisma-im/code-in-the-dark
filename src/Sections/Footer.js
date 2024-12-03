import React from 'react';
import logo from '../assets/img/LOGOCOMPETITIONWHITE-removebg-preview.png'
function Footer() {
  return (

    <div className="bg-black text-white py-10">
        <hr/>
      <div className="container mx-auto px-4">
      <div className="flex flex-col items-start">
            <img 
              src={logo}
              alt="Logo" 
              className="w-32 mb-6" 
            />
          </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Left Column (Logo) */}
          

          {/* Column 1 */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-lg text-purple-500">Pages</h3>
            <ul className="space-y-2">
            <li><a href="#" className="hover:text-purple-300">Loreemepsem</a></li>
            <li><a href="#" className="hover:text-purple-300">Loreemepsem</a></li>
            <li><a href="#" className="hover:text-purple-300">Loreemepsem</a></li>
            
            </ul>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-lg text-purple-500">Policies</h3>
            <ul className="space-y-2">
            <li><a href="#" className="hover:text-purple-300">Loreemepsem</a></li>
            <li><a href="#" className="hover:text-purple-300">Loreemepsem</a></li>

             
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-lg text-purple-500">Code in the Dark</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-300">Loreemepsem</a></li>
              <li><a href="#" className="hover:text-purple-300">Loreemepsem</a></li>
              <li><a href="#" className="hover:text-purple-300">Loreemepsem</a></li>

             
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Large Text */}
      <div className="text-center ">
        <p className="text-[500px] font-serif text-[#5A2D8C]">DARK</p>
      </div>
    </div>
  );
}

export default Footer;
