import classNames from 'classnames';
import style from './Text.module.css';
import PropTypes from 'prop-types';

export const Text = prop => {
  const {
    As = 'span',
    color = 'black',
    size,
    tsize,
    dsize,
    className,
    children,
    href,
    center,
    left,
    medium,
    bold,
    onClick,
  } = prop;

  const classes = classNames(
    className,
    style[color],
    {[style.center]: center},
    {[style.left]: left},
    {[style.medium]: medium},
    {[style.bold]: bold},
    {[style[`fs${size}`]]: size},
    {[style[`fst${size}`]]: tsize},
    {[style[`fsd${size}`]]: dsize},
  );

  return <As className={classes} onClick={onClick} href={href}>{children}</As>;
};

Text.propTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
  ]),
  href: PropTypes.string,
  center: PropTypes.bool,
};
