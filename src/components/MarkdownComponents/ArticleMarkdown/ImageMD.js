import Image from "components/Image/Image";

export function ImageMD({ node, className, imageBasePath }) {
  function imagePath(image) {
    return `${imageBasePath}/${image}`;
  }

  return (
    <Image className={className}
      src={imagePath(node.properties.src)}
      alt={node.properties.alt} />
  );
}
