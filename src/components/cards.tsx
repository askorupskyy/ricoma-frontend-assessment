import { useStore } from '@stores/main.store';
import { MachineCard } from './card';

export const MachineCards = () => {
  const { machines } = useStore();

  return (
    <div className="flex items-center justify-center flex-col md:flex-row">
      {machines.map((props) => (
        <div key={props.name} className="w-[360px] md:w-[260px] lg:w-[360px] mr-0 md:mr-2 lg:mr-12 last:mr-0 mb-5 md:mb-0 last:mb-0">
          <MachineCard {...props} />
        </div>
      ))}
    </div>
  );
};
