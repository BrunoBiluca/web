import { storagePath } from "../config/server";

class GameMapper {
  map = (res) => {
    const locale = "en-US";
    const dateOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    };

    var featuredImage = res.featured_image.formats.large
      ? res.featured_image.formats.large 
      : (
        res.featured_image.formats.medium
        ? res.featured_image.formats.medium
        : res.featured_image.formats.small
      );

    return {
      key: res.id,
      slug: res.slug,
      title: res.title,
      link: `/games/${res.slug}`,
      publishedAt: new Date(res.published_at).toLocaleString(locale, dateOptions),
      author: `${res.author.firstname} ${res.author.lastname}`,
      description: res.description,
      contentSummary: res.description_summary ? res.description_summary : res.description,
      gameplayDuration: res.gameplay_duration,
      // gamePackage: {
      //   url: storagePath + res.game_package.url,
      //   ...res.game_package
      // },
      gameStatus: res.game_status,
      gamePlayLink: res.online_play_link,
      itchioLink: res.itchio_link,
      featuredImage: {
        path: `${storagePath}${featuredImage.url}`,
        thumbnail: `${storagePath}${res.featured_image.formats.thumbnail.url}`,
        description: res.featured_image_description
      },
      categories: res.categories.map(c => {
        return {
          key: c.id,
          name: c.name,
          color: c.color
        };
      }),
      gallery: res.gallery.map(g => {
        return {
          key: g.id,
          name: g.name,
          path: `${storagePath}${g.url}`,
          thumbnail: g.formats
            ? `${storagePath}${g.formats.thumbnail.url}`
            : `${storagePath}${g.url}`
        }
      }),
      howToPlay: res.how_to_play
    };
  }
}

export default GameMapper;