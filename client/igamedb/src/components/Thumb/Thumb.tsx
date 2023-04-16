import Image from 'next/image';

type Props = {
  imgUrl: string;
};

const Thumb = ({ imgUrl }: Props) => (
  <Image
    placeholder='blur'
    blurDataURL='/placeholder.jpg'
    className='rounded-lg cover'
    fill
    src={imgUrl}
    alt='thumb'
  />
);

export default Thumb;
