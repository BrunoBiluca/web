import styles from "GamesPage.module.css"

const GamesGallery = (props) => {
  const { game } = props

  return (
    <div>
      <h2>Gallery</h2>
      <div className={styles.gallery}>
        {
          game
            .gallery
            .map(g =>
              <div key={g.key} className={styles.galleryItem}>
                <a
                  href={g.path}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={g.thumbnail} alt={g.name} />
                </a>
              </div>
            )
        }
      </div>
    </div>
  )
}

export default GamesGallery;