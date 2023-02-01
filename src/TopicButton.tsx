interface TopicButtonProps {
  id: number;
  name: string;
  handleClick: (param: number) => void;
  isActive: boolean;
}

const TopicButton = ({ id, name, handleClick, isActive }: TopicButtonProps) => {
  return (
    <button
      className={`border-[1px] border-primary rounded-lg py-2 ${
        isActive ? "bg-primary text-white" : "bg-white text-primary"
      }`}
      onClick={() => handleClick(id)}
    >
      {name}
      {/* Characters inside the span represent a check-mark in Unicode */}
      <span className={`font-bold ml-4 ${isActive ? "inline" : "hidden"}`}>
        &#x2713;
      </span>
    </button>
  );
};

export default TopicButton;
