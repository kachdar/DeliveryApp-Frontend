import styles from './Input.module.css';

const Input = ({ type, placeholder }) => {
  return (
    <div className={styles['form-group']}>
      <input
        type={type}
        className={styles['form-control']}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Input;
