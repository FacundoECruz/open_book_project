function Button({ width, height, bgColor, innerText, type = "" }) {
  return (
    <button
      style={{
        width,
        height,
        backgroundColor: bgColor,
      }}
      type={type}
    >
      {innerText}
    </button>
  );
}

export default Button;
