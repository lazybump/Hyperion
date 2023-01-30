import { useState } from "react";

interface TopicsType {
  id: number;
  name: string;
}

const topics: TopicsType[] = [
  { id: 1, name: "Industry Knowledge 1" },
  { id: 2, name: "Industry Knowledge 2" },
  { id: 3, name: "HTML Basics" },
  { id: 4, name: "Your First PHP Script" },
];

const MainContent = () => {
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
        <h2 className="text-center mb-6">Your progress (1/4) complete</h2>
        <div className="flex flex-col space-y-3">
          {topics.map((topic) => (
            <button
              key={topic.id}
              className="border-[1px] border-primary rounded-lg py-2 text-primary"
            >
              {topic.name}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainContent;
