export const GradientBar: React.FC = () => {
  return (
    <div
      className="h-28 from-primary to-secondary -mb-20"
      style={{
        backgroundImage: 'linear-gradient(66deg, rgb(106 136 141) 0%, rgb(159 144 173) 100%)',
      }}></div>
  );
};
