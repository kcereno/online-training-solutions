import { Container, Row, Col } from "react-bootstrap";
import { HistoryEntry } from "../../../data/interfaces";
import SurfaceCard from "../../../UI/SurfaceCard/SurfaceCard";
import HistoryAccordion from "../../Shared/HistoryAccordion/HistoryAccordion";
import "./ExerciseLog.css";

interface Props {
  history: HistoryEntry[];
}

const ExerciseLog = ({ history }: Props) => {
  return (
    <SurfaceCard>
      <Container>
        <Row>
          <Col className="my-2">
            <h2 className="pt-2">Logs</h2>
            <hr
              style={{
                width: "100%",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "5px",
              }}
            />
            <HistoryAccordion history={history} />
          </Col>
        </Row>
      </Container>
    </SurfaceCard>
  );
};

export default ExerciseLog;
