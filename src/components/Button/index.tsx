import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children?: React.ReactNode;
  onClickButton?: () => void;
}

const Button = ({ children, onClickButton }: ButtonProps) => {
  return (
    <button onClick={onClickButton} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
