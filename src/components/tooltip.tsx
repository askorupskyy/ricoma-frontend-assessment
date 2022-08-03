import React, {useState} from "react";

export default function ToolTip({ desc, isActive }: { desc: string, isActive: boolean }) {
  if (isActive) {
    return (
      <div className="absolute z-50 bg-white ml-[150px] mt-[50px] w-[300px] p-4 rounded-lg drop-shadow-md">
        <p className="text-sm">{desc}</p>
      </div>
    )
  }
  else {
    return(<></>)
  }
}