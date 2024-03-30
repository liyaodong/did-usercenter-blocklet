import clsx from 'clsx';

export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <div className={clsx('container mx-auto', className)}>{children}</div>;
};
