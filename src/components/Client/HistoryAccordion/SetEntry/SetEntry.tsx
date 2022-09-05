import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { Set } from "../../../../data/interfaces";

interface Props {
  index: number;
  set: Set;
}

const SetEntry = ({ index, set }: Props) => {
  const handleDeleteClick = () => {
    console.log("delete", index);
  };

  return (
    <div className="d-flex justify-content-center" key={index}>
      <p className="mb-1 d-flex align-items-center">
        <strong className="mx-2">Set {index + 1}:</strong>
        {`${set.weight}lbs for  ${set.reps} reps`}
        <FontAwesomeIcon
          style={{ color: "red", paddingTop: "2px" }}
          className="mx-2"
          icon={faDeleteLeft}
          onClick={handleDeleteClick}
        />
      </p>
    </div>
  );
};

export default SetEntry;
