function ImageShow({ image }) {
  return (
    <div>
      <img alt={image.alt_description} src={image.urls.small_s3} />
    </div>
  );
}

export default ImageShow;
