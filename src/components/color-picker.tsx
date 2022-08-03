import { MouseEventHandler } from "react";
import { Check } from "tabler-icons-react";

export default function ColorPicker({ productColors, selectedColor, onSelect }: {productColors: string[], selectedColor: string, onSelect: any}) {
  return (
    <div className="flex items-center mb-6 p-1 rounded-full" style={{backgroundColor: 'rgba(208, 208, 208, 0.8)'}}>
      {productColors.map((color, i) => (
        <div
          style={{ backgroundColor: color }}
          key={i}
          className={`w-5 h-5 rounded-full flex justify-center items-center cursor-pointer ${i !== 0 && i !== productColors.length - 1 && 'mx-1'}`}
          onClick={() => { onSelect(productColors[i]) }}
        >
          {selectedColor === productColors[i] && <Check size={12} strokeWidth={2} color={'#ffffff'} />}
        </div>
      ))}
    </div>
  )
}