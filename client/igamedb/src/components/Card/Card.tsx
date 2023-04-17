import Thumb from '../Thumb/Thumb';

type Props = {
  imgUrl: string;
  name: string;
}
const Card = ({imgUrl, name}: Props) =>( 
<div className="h-80 rounded-lg shadow-md shadow-black/5 dark:shadow-black/30">
  <div className="relative h-full"  >
    <Thumb imgUrl={imgUrl} />
    <div className="absolute w-full bottom-0 px-4 py-2 rounded-b-xl bg-zinc-800">
      <h2 className="text-cyan-200 text-center text-sm truncate">{name}</h2>
    </div>
  </div>
</div>
)

export default Card;