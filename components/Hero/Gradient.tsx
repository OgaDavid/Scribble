import React from "react";

const Gradient = () => {
  return (
    <div className="_absolute">
      <div className="_absolute inset-0 justify-center">
        <div className="_shape-one opacity-50 bg-[#7837be8c] _bg-blur" />
        <div className="_shape-two opacity-50 bg-[#6c47ff8d] _bg-blur" />
        <div className="_shape-three opacity-50 bg-pink-400 _bg-blur" />
      </div>
    </div>
  );
};

export default Gradient;
