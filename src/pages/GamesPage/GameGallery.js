import styles from "./GamesPage.module.css"

const GameGallery = ({ game }) => (
  <div>
    <h2>Gallery</h2>
    <div className={styles.gallery}>
      {game
        .gallery
        .map((g, i) =>
          <div key={i} className={styles.galleryItem}>
            <a
              href={g.path}
              target="_blank"
              rel="noreferrer"
            >
              <img src={g.thumbnail} alt={g.name} />
            </a>
          </div>
        )}
    </div>
  </div>
)

export default GameGallery;