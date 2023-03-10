import { useState } from "react";
import TopicButton from "./TopicButton";

interface TopicType {
  id: number;
  name: string;
  isActive: boolean;
}

const MainContent = () => {
  // array of button objects for each topic
  const [topics, setTopics] = useState<TopicType[]>([
    { id: 1, name: "Industry Knowledge 1", isActive: false },
    { id: 2, name: "Industry Knowledge 2", isActive: false },
    { id: 3, name: "HTML Basics", isActive: false },
    { id: 4, name: "Your First PHP Script", isActive: false },
  ]);

  const toggleColor = (id: number) => {
    setTopics((prev) => {
      return prev.map((topic) => {
        // Guard clause. If the current button wasn't clicked, just return it as it was before
        if (topic.id !== id) return topic;
        // If it was clicked, return a new object
        return {
          ...topic,
          isActive: !topic.isActive, // inverts the boolean value, allowing change in color
        };
      });
    });
  };

  const totalCompletedTopics = topics.filter((topic) => topic.isActive).length;

  return (
    <main className="bg-white m-4 p-8 lg:px-20 lg:py-14 rounded-md max-w-4xl lg:col-span-2">
      <section className="grid grid-cols-3 grid-rows-2 items-center lg:items-stretch lg:justify-items-start">
        <img
          src="/assets/images/beginner-php-fundamentals.png"
          className="h-12 lg:row-span-2 lg:h-auto"
        />
        <h1 className="col-span-2 text-xl lg:text-2xl">
          Web Development Bootcamp Trial
        </h1>
        <a
          href="/"
          className="bg-primary text-white text-sm rounded-lg px-4 py-2 col-start-2 col-span-2 flex justify-around border border-primary font-bold self-end lg:col-span-1 lg:px-8 lg:text-base lg:space-x-2"
        >
          <span>Continue your trial</span>
          <span>&gt;</span>
        </a>
      </section>
      <section className="border-t mt-8 lg:mt-16 pt-8">
        <h2 className="text-center lg:text-left mb-6 text-base lg:text-lg">
          Your progress
          <span className="font-medium ml-1">
            ({totalCompletedTopics}/4 complete)
          </span>
        </h2>
        <div className="flex flex-col space-y-3 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0">
          {topics.map((topic) => (
            <TopicButton key={topic.id} {...topic} handleClick={toggleColor} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainContent;
