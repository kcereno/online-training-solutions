import { Container, Row, Col } from "react-bootstrap";
import { HistoryEntry } from "../../../data/interfaces";
import SurfaceCard from "../../../UI/SurfaceCard/SurfaceCard";
import HistoryAccordion from "../../Shared/HistoryAccordion/HistoryAccordion";
import "./ExerciseLog.scss";

interface Props {
  history: HistoryEntry[];
}

const ExerciseLog = ({ history }: Props) => {
  const emptyHistoryErrorMessage = (
    <h3 className="text-center my-4">No History Data</h3>
  );

  return (
    <SurfaceCard>
      <Container>
        <Row>
          <Col className="my-2">
            <h2 className=" ">Logs</h2>
            <hr
              style={{
                width: "100%",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "5px",
              }}
            />
            {history.length === 0 ? (
              emptyHistoryErrorMessage
            ) : (
              <HistoryAccordion history={history} />
            )}
          </Col>
        </Row>
      </Container>
    </SurfaceCard>
  );
};

export default ExerciseLog;
