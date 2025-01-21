import { useState } from "react";
import DropdownSVG from "../../assets/svg/icon-dropdown.svg";
import styles from "./dropdown.module.css";

type Props = {
  options: string[];
  onChange: (date: string) => void;
  initialSelectedOption: string;
};

const Dropdown = ({ options, initialSelectedOption, onChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(initialSelectedOption);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectDate = (option: string) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownContainer}>
      <button className={styles.dropdownHeader} onClick={toggleDropdown}>
        <span>{selectedOption}</span>{" "}
        <span
          className={`${styles.arrow} ${
            isOpen ? styles.arrowUp : styles.arrowDown
          }`}
        >
          <DropdownSVG />
        </span>
      </button>
      <ul className={`${styles.dropdownList} ${isOpen ? styles.open : ""}`}>
        {options.map((option, index) => (
          <li
            key={index}
            className={styles.dropdownItem}
            onClick={() => selectDate(option)}
          >
            {option.replace(/-/g, " ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
