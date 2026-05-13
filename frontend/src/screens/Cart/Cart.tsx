import "./Cart.css";
import { Minus, Plus, X } from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";

type CartProps = {
  isOpen: boolean;
  onClose: () => void;
};

const cartItems = [
  {
    id: 1,
    title: "The Alchemist's Garden",
    author: "Evelyn Thorne",
    quantity: 1,
    price: 32,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
  },

  {
    id: 2,
    title: "Silent Echoes",
    author: "Marcus Vane",
    quantity: 2,
    price: 48,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
];

const overlayVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
  },
};

const drawerVariants: Variants = {
  hidden: {
    x: "100%",
  },

  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 28,
    },
  },

  exit: {
    x: "100%",
    transition: {
      duration: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 12,
  },

  visible: (index: number) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: index * 0.08,
      duration: 0.35,
    },
  }),
};

const Cart = ({ isOpen, onClose }: CartProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 z-50 bg-on-surface/20 backdrop-blur-sm flex justify-end"
        >
          {/* Overlay Click */}
          <div className="flex-1" onClick={onClose} />

          {/* Drawer */}
          <motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-md h-full bg-surface shadow-2xl flex flex-col border-l border-outline-variant/20"
          >
            {/* Header */}
            <div className="px-margin-mobile py-stack-md flex justify-between items-center border-b border-outline-variant/10">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Your Selection
              </h2>

              <button
                onClick={onClose}
                className="p-2 hover:bg-surface-container transition-colors rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-margin-mobile py-stack-md space-y-stack-md">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex gap-4 group"
                >
                  {/* Image */}
                  <div className="w-20 aspect-3/4 rounded-lg overflow-hidden shrink-0 ambient-shadow">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <h3 className="font-headline-md text-[18px] text-on-surface leading-tight mb-1">
                        {item.title}
                      </h3>

                      <p className="font-body-md text-label-md text-on-surface-variant">
                        {item.author}
                      </p>
                    </div>

                    <div className="flex justify-between items-end">
                      {/* Quantity */}
                      <div className="flex items-center bg-surface-container rounded-full px-2 py-1">
                        <button className="p-1 hover:text-primary transition-colors">
                          <Minus className="w-4 h-4" />
                        </button>

                        <span className="px-3 font-label-md text-label-md">
                          {item.quantity}
                        </span>

                        <button className="p-1 hover:text-primary transition-colors">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Price */}
                      <span className="font-headline-md text-label-md text-primary">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cart;
