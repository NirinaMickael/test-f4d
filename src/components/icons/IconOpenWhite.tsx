const IconOpenWhite: React.FC<{ width?: string; height?: string,fill?:string }> = ({
  width = "26px",
  height = "26px",
  fill
}) => {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 38 26"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="38" height="6" rx="3" />
        <rect y="10" width="38" height="6" rx="3" />
        <rect y="20" width="38" height="6" rx="3" />
      </svg>
    </div>
  );
};

export default IconOpenWhite;
