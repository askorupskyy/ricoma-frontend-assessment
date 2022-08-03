export default function Indicator({ count }: {count: number}) {
  return (
    <div className="absolute bottom-3 left-3 border-[#131921] border-2 text-[11px] z-50 bg-[#0076FF] text-white px-[5px] rounded-full">
      <span>{count}</span>
    </div>
  )
}