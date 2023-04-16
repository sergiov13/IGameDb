import Link from 'next/link';
import Image from 'next/image';
//Components
import SearchInput from '../SearchInput/SearchInput'

// ?means its optional
type Props = {
  setQuery?: React.Dispatch<React.SetStateAction<string>>; // See setQuery in pages/index.tsx to get type of setQuery
}

// we can create a context to avoid drilling but since its obnly two we will ignore it for now
const Header = ({ setQuery }: Props) => (
  <div className="sticky flex top-0 z-40 w-full h-24 bg-zinc-900">
    <div className="flex justify-between w-full h-full m-auto max-w-7xl px-4">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <div className="invisible md:visible">
            <Image width="150" height="50" src='' alt='imdb-logo'/>
          </div>
          <div className='absolute md:invisible pt-2'>
            <Image width="42" height="42" src='' alt='imdb-logo-small'/>
          </div>
        </div>
      </Link>
      {setQuery ? (
        <div className="relative flex items-center">
          <SearchInput setQuery={setQuery} />
        </div>
      ) : null}
    </div>
  </div>
)

export default Header;