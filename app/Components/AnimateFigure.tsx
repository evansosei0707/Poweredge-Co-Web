"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation, TargetAndTransition } from "framer-motion";


// ... (other imports)

const AnimateFigure: React.FC<{ item: operationVital }> = ({ item }) => {

    const controls = useAnimation();

    useEffect(() => {
      controls.start({ value: item.figure, transition: { duration: 1 } } as TargetAndTransition);
    }, [controls, item.figure]);


    return (
        <motion.p
            animate={controls} 
            className="text-[44px] leading-[44px] whitespace-nowrap min-w-[172px] "
            style={{
                position: "sticky",
                top: 0,
                padding: "1rem",
                borderRadius: "5px",
            }}
        >
            {item.figure}
            {item.append}
        </motion.p>
    );
};

export default AnimateFigure;
