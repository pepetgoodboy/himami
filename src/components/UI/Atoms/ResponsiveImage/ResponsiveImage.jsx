export default function ResponsiveImage({
  src,
  alt,
  loading,
  className,
  variant,
}) {
  return (
    <div className={`relative ${className}`} style={{ aspectRatio: "1 / 1" }}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={`absolute w-full h-full object-cover ${variant}`}
        width={100}
        height={100}
      />
    </div>
  );
}
