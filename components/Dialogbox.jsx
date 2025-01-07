export default function DialogBox({ message, type, onClose }) {
  if (!message) return null; // Don't render if no message

  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div
      className={`fixed top-0 w-full py-2 text-white text-center ${bgColor}`}
    >
      <p>{message}</p>
      <button
        className="absolute top-2 right-4 text-white font-bold"
        onClick={onClose}
      >
        ✖
      </button>
    </div>
  );
}
