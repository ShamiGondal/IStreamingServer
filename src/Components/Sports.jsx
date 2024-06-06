import { Link } from 'react-router-dom';

const Sports = () => {
  return (
   <>
    <div className='scrollable-container'>
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
    <h1 className='text-center font-bold from-cyan-400 text-xl mt-20 '>Football Live Streaming Links</h1>
    <div className='mt-12 flex flex-wrap '>
    <Link to={'./SkySports-Football'} className="block w-auto h-10 bg-blue-600 text-white font-bold text-center rounded-full py-2 px-4 my-2 mx-auto">
     Football Sky Sports
    </Link>
    </div>
    <h1 className='text-center font-bold from-cyan-400 text-xl mt-20 '>Arena Live Streaming Links</h1>
    <div className='mt-12 flex flex-wrap '>
    <Link to={'./SkySports-Arena'} className="block w-auto h-10 bg-blue-600 text-white font-bold text-center rounded-full py-2 px-4 my-2 mx-auto">
      Arena Sky Sports
    </Link>
    </div>
    <h1 className='text-center font-bold from-cyan-400 text-xl mt-20 '>Forumla 1 Live Streaming Links</h1>
    <div className='mt-12 flex flex-wrap '>
    <Link to={'./Sky-Sports-f1'} className="block w-auto h-10 bg-blue-600 text-white font-bold text-center rounded-full py-2 px-4 my-2 mx-auto">
      F1 Sky Sports
    </Link>
    </div>
    <h1 className='text-center font-bold from-cyan-400 text-xl mt-20 '>Actions Live Streaming Links</h1>
    <div className='mt-12 flex flex-wrap '>
    <Link to={'./SkySports-Actions'} className="block w-auto h-auto bg-blue-600 text-white font-bold text-center rounded-full py-2 px-4 my-2 mx-auto">
      Actions Sky Sports
    </Link>
    </div>
    <h1 className='text-center font-bold from-cyan-400 text-xl mt-20 '>Tenis Live Streaming Links</h1>
    <div className='mt-12 flex flex-wrap '>
    <Link to={'./Sky-Sports-Tenis'} className="block w-auto h-auto bg-blue-600 text-white font-bold text-center rounded-full py-2 px-4 my-2 mx-auto">
      Tenis Not working
    </Link>
    </div>
    <h1 className='text-center font-bold from-cyan-400 text-xl mt-20 '>Premier League Live Streaming Links</h1>
    <div className='mt-12 flex flex-wrap '>
    <Link to={'./SkySports-PremierLeague'} className="block w-auto h-auto bg-blue-600 text-white font-bold text-center rounded-full py-2 px-4 my-2 mx-auto">
      Premier League Not working
    </Link>
    </div>
    <h1 className='text-center font-bold from-cyan-400 text-xl mt-20 '>TNS Live Streaming Links</h1>
    <div className='mt-12 flex flex-wrap '>
    <Link to={'./TSN-TSN'} className="block w-auto h-auto bg-blue-600 text-white font-bold text-center rounded-full py-2 px-4 my-2 mx-auto">
      TNS Not working
    </Link>
    </div>
    
    </div>
   </>
  );
};

export default Sports;
