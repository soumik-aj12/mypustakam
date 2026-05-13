import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Cart from "../../screens/Cart/Cart";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div>
      <Navbar setIsCartOpen={setIsCartOpen} />
      <main>
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
