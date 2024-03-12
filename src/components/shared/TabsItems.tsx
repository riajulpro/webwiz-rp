"use client";
import { tabs } from "@/utils/mocks/PortfolioTab";
import { useState } from "react";

const TabsItems = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <div className="flex gap-[24px] mt-[16px]">
        {tabs.map((tab, index) => (
          <button
            onClick={() => setCurrentIndex(index)}
            key={index}
            className={`${index === currentIndex ? "active-tab" : "tab"}`}
          >
            {tab.tabName}
          </button>
        ))}
      </div>
    </>
  );
};

export default TabsItems;
