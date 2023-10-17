import styles from '@/app/components/cards/cards.module.css'

const Card = ({name, image, lvl}) => {
    return(
        <div className={styles.container}>
            <p>{name}</p>
            <img className={styles.image} src={image} alt='card_image'/>
            <p>Max level:{lvl}</p>
        </div>
    );
}

export default Card;