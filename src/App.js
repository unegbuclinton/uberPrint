import { useState } from 'react';
import CanvasComponent from './components/CanvasComponent';
import HamburgerMenu from './components/HamburgerMenu';
import Nav from './components/Nav';
function App() {
  const [showMenu, setShowMenu] = useState(false);

  const showHamburger = () => {
    setShowMenu(true);
  };
  return (
    <div className="relative">
      <Nav onClick={showHamburger} />
      <CanvasComponent />
      <div
        className={`absolute top-0  w-full transition-all	duration-1500 ease-in ${
          showMenu ? 'translate-x-0' : '-translate-x-full'
        } `}
      >
        <HamburgerMenu onClose={() => setShowMenu(false)} />
      </div>
    </div>
  );
}

export default App;
