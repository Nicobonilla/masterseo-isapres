import classNames from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: React.ReactNode;
  onClick?: () => void | Promise<string> ; // Agregar prop para manejar el clic
};

const Button = ({ xl, children, onClick }: IButtonProps) => {
  const btnClass = classNames(
    'mt-6 w-full sm:w-auto inline-block rounded-md text-center text-white bg-primary-500 hover:bg-primary-600',
    {
      'text-lg font-semibold py-2 px-4': !xl,
      'font-extrabold text-xl py-4 px-6': xl,
    }
  );

  return <div className={btnClass} onClick={onClick}>{children}</div>;
};

export { Button };
