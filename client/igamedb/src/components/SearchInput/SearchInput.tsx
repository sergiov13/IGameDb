import React from 'react';
import Image from 'next/image';

type Props = {
  setQuery: React.Dispatch<React.SetStateAction<string>>; // See setQuery in pages/index.tsx to get type of setQuery
}

const TIME = 700 //ms it will wait before re rendering when input is changing

//const SearchInput: ReactFC<Props> = ({setQuery}) =>{ 
//Same as doing whats below 
//REACT 18 useTransition startTransition to set different rtansitions urgent its gonna hit the api mul;tiple times
//so thats why we are debouncing
const SearchInput =({setQuery}: Props) => {
  const [text, setText] = React.useState('');
  const timer = React.useRef<NodeJS.Timeout>();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>)  => {
    const value = e.currentTarget.value;
    
    clearTimeout(timer.current);

    setText(value);

    timer.current = setTimeout(() => {
      setQuery(value);
    }, TIME);
  }

  return (
    <>
      <input className="h-10 pr-14 md:w-96 rounded-full p-4 text-md bg-zinc-700 text-white focus:outline-none focus:border focus:border-solid focus:border-cyan-200" 
        type="text" 
        placeholder="Search Movie" 
        value={text} 
        onChange={handleInput}/>
      <div className="absolute right-4 top-9">
        {/* <Image width="30" height="32" src="/tmdb-logo.svg" alt="tmdb-logo"/> */}
      </div>
    </>
  )
}

export default SearchInput;