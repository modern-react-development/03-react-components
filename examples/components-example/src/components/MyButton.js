function MyButton({ children, icon }) {
  return (
    <button>
      {icon ? '🤠' : ''}
      {children}
    </button>
  );
}

export default MyButton;
