import clsx from 'clsx';

export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <div className={clsx('container mx-auto px-2', className)}>{children}</div>;
};
