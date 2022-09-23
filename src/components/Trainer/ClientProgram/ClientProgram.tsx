import { Button, Container, Table } from "react-bootstrap";
import { AssignedExercise } from "../../../data/interfaces";
import { Col } from "react-bootstrap";
import SurfaceCard from "../../../UI/SurfaceCard/SurfaceCard";
import Separator from "../../../UI/Separator/Separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./ClientProgram.scss";

interface Props {
  program: AssignedExercise[];
  addExercise: () => void;
  deleteExercise: (exerciseName: string) => void;
  editExercise: (exerciseName: string) => void;
}

const ClientProgram = ({
  program,
  addExercise,
  deleteExercise,
  editExercise,
}: Props) => {
  const handleAddButtonClick = () => {
    addExercise();
  };

  const handleDeleteButtonClick = (exerciseName: string) => {
    deleteExercise(exerciseName);
  };

  const handleEditButtonClick = (exerciseName: string) => {
    editExercise(exerciseName);
  };

  return (
    <SurfaceCard className="mb-3">
      <Container>
        <Col className="d-flex justify-content-between align-items-center my-2 ">
          <h2 className="section">Program</h2>
          <Button
            style={{ height: "70%" }}
            variant="primary"
            onClick={handleAddButtonClick}
          >
            +
          </Button>
        </Col>
        <Separator width={100} />
        <Table bordered hover variant="dark" className="text-center my-3">
          <thead>
            <tr>
              <th>Exercise</th>
              <th>Target Weight</th>
              <th>Reps</th>
              <th>Sets</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {program.map((exercise: AssignedExercise) => {
              return (
                <tr key={exercise.name}>
                  <th>{exercise.name}</th>
                  <th>{exercise.weight}</th>
                  <th>{exercise.reps}</th>
                  <th>{exercise.sets}</th>

                  <th>
                    <div className="">
                      <FontAwesomeIcon
                        className="mx-2"
                        icon={faTrashCan}
                        onClick={() => handleDeleteButtonClick(exercise.name)}
                        style={{ color: "red" }}
                      />
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        onClick={() => {
                          handleEditButtonClick(exercise.name);
                        }}
                        style={{ color: "yellow" }}
                      />
                    </div>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </SurfaceCard>
  );
};

export default ClientProgram;
