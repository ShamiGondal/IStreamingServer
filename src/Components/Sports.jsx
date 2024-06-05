import { Link } from 'react-router-dom';

const Sports = () => {
  return (
    <>
    <h1 className='text-center font-bold from-cyan-400 text-xl mt-20 '>Cricket Live Streaming Links</h1>
    <div className='mt-12 flex flex-wrap '>
    <Link to={'./Sky-Sports'} className="block w-40 h-10 bg-blue-600 text-white font-bold text-center rounded-full py-2 px-4 my-2 mx-auto">
      Sky Sports
    </Link>
    <Link to={'./Ten-Sports'} className="block w-40 h-10 bg-blue-600 text-white font-bold text-center rounded-full py-2 px-4 my-2 mx-auto">
      Ten Sports
    </Link>
    <Link to={'/Star-Sports'} className="block w-40 h-10 bg-blue-600 text-white font-bold text-center rounded-full py-2 px-4 my-2 mx-auto">
      Star Sports
    </Link>
    <Link to={'./Ptv-Sports'} className="block w-40 h-10 bg-blue-600 text-white font-bold text-center rounded-full py-2 px-4 my-2 mx-auto">
      Ptv Sport
    </Link>
    <Link to={'./Willow-Sports'} className="block w-40 h-10 bg-blue-600 text-white font-bold text-center rounded-full py-2 px-4 my-2 mx-auto">
      Willow Sports
    </Link>
    
    </div>
    </>
  );
};

export default Sports;
