import { storagePath } from 'config/server';

class ArticleMapper {
  map = (res) => {
    const locale = "en-US";
    const dateOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    };

    let featureImage = res.featured_image.formats.large 
      ? res.featured_image.formats.large.url
      : (
        res.featured_image.formats.medium 
        ? res.featured_image.formats.medium.url
        : res.featured_image.formats.small.url
      )

    return {
      key: res.id,
      slug: res.slug,
      link: `/articles/${res.slug}`,
      title: res.title,
      publishedAt: new Date(res.published_at).toLocaleString(locale, dateOptions),
      author: `${res.author.firstname} ${res.author.lastname}`,
      featuredImage: {
        thumbnail: `${storagePath}${res.featured_image.formats.thumbnail.url}`,
        path: `${storagePath}${featureImage}`,
        description: res.featured_image_description
      },
      categories: res.categories.map(c => {
        return {
          key: c.id,
          name: c.name,
          color: c.color
        };
      }),
      contentSummary: res.content_summary ? res.content_summary : res.content,
      content: res.content
    };
  }
}

export default ArticleMapper;