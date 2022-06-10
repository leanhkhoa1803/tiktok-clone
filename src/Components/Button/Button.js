import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  rounded,
  small,
  large,
  square,
  text,
  disabled,
  children,
  leftIcon,
  rightIcon,
  className,
  onClick,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };
  //remove events when button is disabled
  if (disabled) {
    Object.keys(props).forEach((propKey) => {
      if (propKey.startsWith('on') && typeof props[propKey] === 'function') {
        delete props[propKey];
      }
    });
  }
  if (to) {
    //check link global
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }
  const classes = cx('wrapper', {
    primary,
    outline,
    rounded,
    square,
    small,
    large,
    text,
    leftIcon,
    rightIcon,
    [className]: className,
    disabled,
  });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
