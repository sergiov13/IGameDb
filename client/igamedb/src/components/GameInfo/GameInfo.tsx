import Image from 'next/image';
// Components
import Thumb from '../Thumb/Thumb';
import Pill from '../Pill/Pill';
// Types
import { Companies, Platform, Genre } from '../../../api/types';

type Props = {
  thumbUrl: string;
  backgroundImgUrl: string;
  name: string;
  year: string;
  description: string;
  rating: string;
  companies: Companies[];
  platforms: Platform[];
  genres: Genre[];
};

const MovieInfo = ({
  thumbUrl,
  backgroundImgUrl,
  name,
  year,
  description,
  platforms,
  companies,
  rating
}: Props) => (
  <div className='relative w-full h-auto p-4'>
    <div className='relative h-full min-h-128 flex flex-col md:flex-row max-w-7xl p-4 m-auto z-10 rounded-xl bg-zinc-800 bg-opacity-90'>
      <div className='relative w-full h-96 md:h-auto md:w-1/3'>
        <Thumb imgUrl={thumbUrl} />
        <div className='absolute top-4 left-4 rounded-full bg-white w-10 h-10 flex justify-center items-center text-black text-sm font-bold'>
          {""}
        </div>
      </div>
       <div className='text-white px-0 py-4 md:py-0 text-center md:text-left md:px-8 w-full md:w-2/3'>
        <h2 className='text-2xl md:text-4xl font-bold pb-4'>
          {name} ({year})
        </h2>
        <h3 className='text-lg font-bold'>Description</h3>
        <p className='mb-6 text-sm md:text-lg'>{description}</p>
        <div>
          <div>
             <h3 className='text-lg font-bold'>Compan{companies.length > 1 ? 'ies' : 'y'}</h3> 
            <div>
              {companies ? companies.map(company => (
                <p key={company.type}>{company.name}</p>
              )) : null}
            </div> 
          </div>
           <div className='mt-8'>
            <h3 className='text-lg font-bold'>Game Platforms</h3>
            {platforms ? platforms.map(platform => (
              <Pill key={platform.id} text={`${platform.name}`} />
              )): null}
          </div> 
        </div>
      </div>
    </div>
    <Image
      priority
      placeholder='blur'
      blurDataURL='/placeholder.jpg'
      objectFit='cover'
      objectPosition='center'
      fill
      src={backgroundImgUrl}
      alt='thumb'
    />
  </div>
);

export default MovieInfo;
