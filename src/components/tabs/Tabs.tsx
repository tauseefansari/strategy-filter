import { ReactNode, useState } from "react";
import styles from "./tabs.module.css";
import { tabsContentByDate } from "../../utils/helper";

type Tab = {
  title: string;
  content: ReactNode;
};

type Props = {
  selectedDate: string;
  children: ReactNode;
};

const Tabs = ({ selectedDate, children }: Props) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabs: Tab[] = tabsContentByDate.map(({ title, contentsRecords }) => {
    const contentOfSelectedDate = contentsRecords[selectedDate];

    const content = contentOfSelectedDate ? (
      contentOfSelectedDate?.map(({ strategy, count }) => (
        <div key={strategy} className={styles.content}>
          <span>{strategy}</span>
          <span>
            &bull;{count} {count === 1 ? "Strategy" : "Strategies"}
          </span>
        </div>
      ))
    ) : (
      <div className={styles.noStrategy}>
        <span>There are no strategies</span>
        <span>for {selectedDate}</span>
      </div>
    );

    return { title, content };
  });

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  const selectedTabTitle = tabs[activeTabIndex].title;

  return (
    <>
      <div className={styles.tabsContainer}>
        {tabs.map(({ title }, index) => (
          <button
            key={title}
            onClick={() => handleTabClick(index)}
            className={`${styles.tab} ${
              index === activeTabIndex ? styles.active : ""
            }`}
          >
            {title}
          </button>
        ))}
      </div>
      <div className={styles.contentsContainer}>
        {children}
        {tabs.map(
          ({ title, content }) =>
            selectedTabTitle === title && (
              <div key={title} className={styles.contentsWrapper}>
                {content}
              </div>
            )
        )}
      </div>
    </>
  );
};

export default Tabs;
