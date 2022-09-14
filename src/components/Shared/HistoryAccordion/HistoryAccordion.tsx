import { HistoryEntry } from "../../../data/interfaces";
import CustomAccordion from "../../../UI/CustomAccordion/CustomAccordion";

interface Props {
  history: HistoryEntry[];
}

const HistoryAccordion = ({ history }: Props) => {
  return <CustomAccordion elements={history} />;
};

export default HistoryAccordion;
