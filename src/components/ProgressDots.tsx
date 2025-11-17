interface Props {
  step: number; // 1~3
}

export default function ProgressDots({ step }: Props) {
  return (
    <div className="Dots" style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
      {[1, 2, 3].map((num) => (
        <div
          key={num}
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: num === step ? "#D4EAF7" : "#B7BEC8"
          }}
        ></div>
      ))}
    </div>
  );
}