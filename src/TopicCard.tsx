interface TopicCardProps {
  id: number;
  name: string;
  handleClick: (param: number) => void;
  isClicked: boolean;
}

const TopicCard = ({ id, name, handleClick, isClicked }: TopicCardProps) => {
  return (
    <button
      className={`border-[1px] border-primary rounded-lg py-2 text-primary ${
        isClicked ? "bg-primary text-white" : ""
      }`}
      onClick={() => handleClick(id)}
    >
      {name}
      <span className="font-bold">&#x2713;</span>
    </button>
  );
};

export default TopicCard;
