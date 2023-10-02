import { animate } from "framer-motion";

export const SlideLeftToRight = (ref, duration) => {
    return animate(ref.current, {
        opacity: [0, 1],
        x: [(window.innerWidth / 2) * -1, 0]
      }, 
      { 
        type: "spring",
        duration: duration ? duration : .3
    })
}

export const DropTopToDown = (ref, duration) => {
    return animate(ref.current, {
        opacity: [0, 1],
        y: [100, 0],
      },
      { 
        type: "tween",
        ease: "linear",
        duration: duration ? duration : .3
    })
}

export const DropDownToTop = (ref, duration) => {
  return animate(ref.current, {
      opacity: [0, 1],
      y: [-100, 0],
    },
    { 
      type: "tween",
      ease: "linear",
      duration: duration ? duration : .3
  })
}