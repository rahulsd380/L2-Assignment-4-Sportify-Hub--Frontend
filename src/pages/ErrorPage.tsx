import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ErrorPage = () => {
    return (
        <div>
            <Navbar/>
      <div className="flex justify-center gap-12 font-Roboto mt-10">
        <h1 className="text-[330px] leading-none font-bold bg-gradient-to-r from-sky-400 to-blue-500 text-transparent bg-clip-text">4</h1>

        <div className="size-80 bg-[#e0f5eb] rounded-full flex items-center justify-center">
          <div className="size-60 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full"></div>
        </div>
        <h1 className="text-[330px] leading-none font-bold bg-gradient-to-r from-sky-400 to-blue-500 text-transparent bg-clip-text">4</h1>

      </div>

      <div className='flex flex-col justify-center mt-10'>
      <h1 className="text-3xl leading-none font-bold text-neutral-60 text-center"><span className='bg-gradient-to-r from-sky-400 to-blue-500 text-transparent bg-clip-text'>Oh!</span> This is not the way to go!</h1>
      <p className='text-center mt-2'>Looks like you have losted somewhere.</p>
      <Link to={'/'} className="mt-6 px-4 py-3 bg-gradient-to-r from-sky-400 to-blue-500 rounded-md text-white font-semibold max-w-[170px] mx-auto">
        Try Another Path
      </Link>
      </div>
    </div>
    );
};

export default ErrorPage;