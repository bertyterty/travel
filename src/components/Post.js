import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.post}>
            <img src={props.imageUrl} className={styles.image} />
            <div>
                <p>
                    <span className={styles.locator}><FontAwesomeIcon icon={faLocationDot} /> </span>
                    <span className={styles.location}>{props.location.toUpperCase()} </span>
                    <a href={props.googleMapsUrl} target="_blank" className={styles.gmaps}>View on Google Maps</a>
                </p>
                <h2>{props.title}</h2>
                <h4>{props.startDate} - {props.endDate}</h4>
                <p className={styles.description}>{props.description}</p>
            </div>
        </div>
    );
}

export default Post;
