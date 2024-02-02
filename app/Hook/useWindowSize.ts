"use client"


import { useState, useEffect} from "react";


function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
    });

    
    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== 'undefined') {
        const resizeFunction = function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
          });
        }
        // Handler to call on window resize
      
        // Add event listener
        window.addEventListener("resize", resizeFunction);
       
        // Call handler right away so state gets updated with initial window size
        resizeFunction()
      
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", resizeFunction);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }
  

  export default useWindowSize;