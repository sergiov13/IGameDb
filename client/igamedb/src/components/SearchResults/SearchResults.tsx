import Link from "next/link";

type Props = {
  name: string;
  // children: React.ReactNode;
  className?: string;
};

const SearchResults = ({ name, className }: Props) => (
  <div className=''>
        <li>
          <div className='text-center'>{name}</div>
        </li> 
  </div>
);

export default SearchResults;
