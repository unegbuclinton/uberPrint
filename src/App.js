import { useState } from 'react';
import AddImage from './components/AddImage';
import AddText from './components/AddText';
import CanvasComponent from './components/CanvasComponent';
import HamburgerMenu from './components/HamburgerMenu';
import Nav from './components/Nav';
import ProductMenu from './components/ProductMenu';
function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [product, setProduct] = useState(false);
  const [addImage, setAddImage] = useState(false);
  const [addText, setAddText] = useState(false);

  const showHamburger = () => {
    setShowMenu(true);
  };
  return (
    <div className="relative overflow-hidden">
      <Nav onClick={showHamburger} />
      <CanvasComponent
        product={() => setProduct(true)}
        addImage={() => setAddImage(true)}
        addText={() => setAddText(true)}
      />
      <div
        className={`absolute top-0  w-full transition-all	duration-1500 ease-in ${
          showMenu ? 'translate-x-0' : '-translate-x-full'
        } `}
      >
        <HamburgerMenu onClose={() => setShowMenu(false)} />
      </div>
      <div
        className={`${
          product || addImage || addText ? 'fixed' : 'hidden'
        } block top-11 bottom-0 left-0 right-0 bg-black opacity-70`}
      ></div>
      <div
        className={`${product ? 'block' : 'hidden'} absolute top-10 w-full `}
      >
        <ProductMenu onClose={() => setProduct(false)} />
      </div>

      <div
        className={`${addImage ? 'block' : 'hidden'} absolute top-10 w-full `}
      >
        <AddImage onClose={() => setAddImage(false)} />
      </div>

      <div
        className={`${addText ? 'block' : 'hidden'} absolute top-10 w-full `}
      >
        <AddText onClose={() => setAddText(false)} />
      </div>
    </div>
  );
}

export default App;
