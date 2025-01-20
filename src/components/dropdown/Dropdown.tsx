import { useState } from "react";
import DropdownSVG from "../../assets/svg/icon-dropdown.svg";
import styles from "./dropdown.module.css";

type Props = {
  options: string[];
};

const Dropdown = ({ options }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectDate = (option: string) => {
    setSelectedOption(option);
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
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
