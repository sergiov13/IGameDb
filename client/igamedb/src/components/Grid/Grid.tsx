type Props = {
  name: string;
  children: React.ReactNode;
  className?: string;
};

const Grid = ({ name, children, className }: Props) => (
  <div className={className}>
    <h2 className='text-xl font-bold pb-4'>{name}</h2>
    <div className='grid grid-cols-auto-fill gap-8'>{children}</div>
  </div>
);

export default Grid;
