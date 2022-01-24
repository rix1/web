import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={[
        className,
        'font-bold',
        'transition-all duration-150',
        'px-8 py-2 rounded-full text-[#332A00] bg-gradient-to-tr from-[#FC9C0C] to-[#FFD930]',
        'hover:bg-yellow-300 hover:bg-blend-multiply active:bg-blend-multiply active:bg-yellow-400',
      ].join(' ')}
    >
      {children}
    </button>
  );
};

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const ButtonLink = ({ children, className, href }: ButtonLinkProps) => {
  return (
    <Link href={href}>
      <a
        className={[
          className,
          'font-bold',
          'transition-all duration-150',
          'px-8 py-2 rounded-full text-[#332A00] bg-gradient-to-tr from-[#FC9C0C] to-[#FFD930]',
          'hover:bg-yellow-300 hover:bg-blend-multiply active:bg-blend-multiply active:bg-yellow-400',
        ].join(' ')}
      >
        {children}
      </a>
    </Link>
  );
};

export default Button;