interface TopicButtonProps {
  id: number;
  name: string;
  handleClick: (param: number) => void;
  isActive: boolean;
}

const TopicButton = ({ id, name, handleClick, isActive }: TopicButtonProps) => {
  return (
    <button
      className={`rounded-md py-2 ${
        isActive ? "bg-primary text-white" : "bg-white text-primary"
      }`}
      onClick={() => handleClick(id)}
    >
      {name}
      {/* Characters inside the span represent a check-mark in Unicode */}
      <span
        className={`font-bold relative left-3 ${
          isActive ? "inline" : "invisible"
        }`}
      >
        &#x2713;
      </span>
    </button>
  );
};

export default TopicButton;
