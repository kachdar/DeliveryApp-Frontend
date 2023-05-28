import styles from './Card.module.css';
const Card = (props) => {
  return (
    <div
      className={`${props.className} ${styles.card}`}
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default Card;
