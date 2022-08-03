import { MouseEventHandler } from "react"
import { Minus, Plus } from "tabler-icons-react"


function CounterIcon({ icon, onClick }: { icon: any, onClick: MouseEventHandler<HTMLDivElement> }) {
  return (
    <div className="bg-[#F0F0F5] text-[#6E70FF] rounded-full" style={{ width: 25, height: 25 }} onClick={onClick}>
      <div style={{transform: 'scale(0.7)'}}>
        {icon}
      </div>
    </div>
  )
}

export default function Counter({ count, onIncrement, onDecrement }: {count: number, onIncrement: MouseEventHandler<HTMLDivElement>, onDecrement: MouseEventHandler<HTMLDivElement>}) {
  return (
    <div className="flex flex-row">
      <CounterIcon icon={<Minus/>} onClick={onDecrement} />
      <span className="mx-4">{count}</span>
      <CounterIcon icon={<Plus/>} onClick={onIncrement}/>
    </div>
  )
}