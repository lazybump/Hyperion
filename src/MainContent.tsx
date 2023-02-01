import { useState } from "react";
import TopicCard from "./TopicCard";

interface TopicsType {
  id: number;
  name: string;
  isClicked: boolean;
}

const topics: TopicsType[] = [
  { id: 1, name: "Industry Knowledge 1", isClicked: false },
  { id: 2, name: "Industry Knowledge 2", isClicked: false },
  { id: 3, name: "HTML Basics", isClicked: false },
  { id: 4, name: "Your First PHP Script", isClicked: false },
];

interface CompletedTopicType {
  id: number;
}

const MainContent = () => {
  // Array of ID objects. Each one represents a different topic button
  const [completedTopics, setCompletedTopics] = useState<CompletedTopicType[]>(
    []
  );

  const handleClick = (id: number) => {
    console.log(id);

    setCompletedTopics((prev) => {
      // tries to find the topic object in the completed list
      const retrievedTopic = prev.find((topic) => topic.id === id);
      // if it exists in the array...
      if (retrievedTopic) {
        return prev.filter((topic) => topic.id !== id);
      } else {
        return [...prev, { id }];
      }
    });
  };

  const total = completedTopics.length;

  return (
    <main className="bg-white m-4 p-8 rounded-md">
      <section className="grid grid-cols-2 grid-rows-2 items-center">
        <img
          src="/assets/images/beginner-php-fundamentals.png"
          className="h-12"
        />
        <h1 className="text-sm">Web Development Bootcamp Trial</h1>
        <button className="col-start-2 bg-primary text-white text-sm rounded-lg py-2">
          Continue your trial
        </button>
      </section>
      <section className="border-t mt-8 pt-8">
        <h2 className="text-center mb-6">Your progress ({total}/4) complete</h2>
        <div className="flex flex-col space-y-3">
          {topics.map((topic) => (
            <TopicCard key={topic.id} {...topic} handleClick={handleClick} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainContent;
