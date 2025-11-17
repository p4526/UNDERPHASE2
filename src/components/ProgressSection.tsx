import ProgressDots from "./ProgressDots";
import Button from "./Button";

interface Props {
  step: number;
  buttonLabel: string;
  onClick?: () => void;
}

export default function ProgressSection({ step, buttonLabel, onClick }: Props) {
  return (
    <div className="progress-section">

      <ProgressDots step={step} />
      <Button label={buttonLabel} onClick={onClick} />

    </div>

  );
}