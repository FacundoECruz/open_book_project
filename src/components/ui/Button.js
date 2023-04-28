function Button({ width, height, bgColor, innerText, type = "" }) {
  return (
    <button
      style={{
        width: { width },
        height: { height },
        backgroundColor: { bgColor },
      }}
      type={type}
    >
      {innerText}
    </button>
  );
}

export default Button;
