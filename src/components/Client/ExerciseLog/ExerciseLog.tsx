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
    <SurfaceCard className="secondary-bg">
      <Container>
        <Row>
          <Col>
            <div className="my-3">
              <h1 className=" ">Logs</h1>
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
            </div>
          </Col>
        </Row>
      </Container>
    </SurfaceCard>
  );
};

export default ExerciseLog;
