import React from 'react'

const LineGradient = ({ width = "w-full" }) => {
    return (
      <div className={`h-2.5 ${width} bg-gradient-to-r from-blue-500 to-[#0C2D48] `}></div>
    );
  };
  
  export default LineGradient;