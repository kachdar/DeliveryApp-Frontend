import styles from './Input.module.css';

const Input = ({ type, placeholder, id, name, onChange, className }) => {
  return (
    <div className={styles['form-group']}>
      <input
        id={id}
        type={type}
        name={name}
        className={`${styles['form-control']} ${className}`}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default Input;
