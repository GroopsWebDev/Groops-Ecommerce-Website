import type { group } from '@prisma/client'
import CircularProgressBar from '../circular_progress_bar';

const Row = () => {

  
  return (
    <div className="p-10">
      <h1 className="mb-10 text-2xl">Groups that help you save</h1>

      <div className='flex flex-row justify-between items-center'>
        <CircularProgressBar percentage={30}/>
        <CircularProgressBar percentage={30}/>
        <CircularProgressBar percentage={30}/>
        <CircularProgressBar percentage={30}/>
        <CircularProgressBar percentage={30}/>
      </div>
    </div>
  );
};

export default Row