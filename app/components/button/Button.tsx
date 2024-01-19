import classNames from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: React.ReactNode;
};

const Button = ({ xl, children }: IButtonProps) => {
  const btnClass = classNames(
    'inline-block rounded-md text-center text-white bg-primary-500 hover:bg-primary-600',
    {
      'text-lg font-semibold py-2 px-4': !xl,
      'font-extrabold text-xl py-4 px-6': xl,
    }
  );

  return <div className={btnClass}>{children}</div>;
};

export { Button };
