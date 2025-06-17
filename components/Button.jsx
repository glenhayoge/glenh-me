import Link from 'next/link';
import PropTypes from 'prop-types';

const Button = ({ href, label, className = '', ...props }) => {
  return (
    <Link href={href} passHref>
      <div className={`before:ease text-center relative py-1 rounded-full w-40 overflow-hidden border border-gray-400 dark:border-gray-500 text-sm text-gray-500 shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-gray-600 dark:hover:shadow-yellow-500 hover:before:-translate-x-40 ${className}`} {...props}>
        {label}
      </div>
    </Link>
  );
};

Button.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;

