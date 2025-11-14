import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FilterDevice.css";

type Color = { name: string; hex: string };
type Device = { id: number; name: string; img?: string; colors: Color[] };

export default function FilterDevice() {
  const [selectedTab, setSelectedTab] = useState<"iphone" | "galaxy">("iphone");
  const [selectedDevice, setSelectedDevice] = useState<number | null>(null);
  const navigate = useNavigate();

  // 아이폰 목록
  const iphoneDevices: Device[] = [
    {
      id: 1,
      name: "아이폰 17 Pro Max",
      img: "/images/iphone17promax.png",
      colors: [
        { name: "코스믹 오렌지", hex: "#F78843" },
        { name: "딥블루", hex: "#49547E" },
        { name: "실버", hex: "#E7E7E7" },
      ],
    },
    {
      id: 2,
      name: "아이폰 17 Pro",
      img: "/images/iphone17pro.png",
      colors: [
        { name: "코스믹 오렌지", hex: "#F78843" },
        { name: "딥블루", hex: "#49547E" },
        { name: "실버", hex: "#E7E7E7" },
      ],
    },
    {
      id: 3,
      name: "아이폰 17 Air",
      img: "/images/iphone17air.png",
      colors: [
        { name: "블루", hex: "#3B82F6" },
        { name: "핑크", hex: "#F472B6" },
        { name: "옐로", hex: "#FACC15" },
      ],
    },
    {
      id: 4,
      name: "아이폰 17",
      img: "/images/iphone17.png",
      colors: [
        { name: "블랙", hex: "#111111" },
        { name: "화이트", hex: "#FFFFFF" },
      ],
    },
    {
      id: 5,
      name: "아이폰 16 Pro Max",
      img: "/images/iphone16promax.png",
      colors: [
        { name: "블루", hex: "#2E5AAC" },
        { name: "그레이", hex: "#9CA3AF" },
        { name: "블랙", hex: "#111111" },
      ],
    },
    {
      id: 6,
      name: "아이폰 16 Pro",
      img: "/images/iphone16pro.png",
      colors: [
        { name: "블랙", hex: "#111111" },
        { name: "화이트", hex: "#FFFFFF" },
      ],
    },
    {
      id: 7,
      name: "아이폰 16 +",
      img: "/images/iphone16plus.png",
      colors: [
        { name: "블루", hex: "#60A5FA" },
        { name: "그레이", hex: "#D1D5DB" },
        { name: "블랙", hex: "#111111" },
      ],
    },
    {
      id: 8,
      name: "아이폰 16",
      img: "/images/iphone16.png",
      colors: [
        { name: "핑크", hex: "#F9A8D4" },
        { name: "블루", hex: "#93C5FD" },
        { name: "화이트", hex: "#FFFFFF" },
      ],
    },
  ];
  //갤럭시 목록
  const galaxyDevices: Device[] = [
    {
      id: 1,
      name: "갤럭시Z Fold",
      img: "/images/galaxyZfold6.png",
      colors: [
        { name: "블루", hex: "#3B5BA9" },
        { name: "그레이", hex: "#C0C6CF" },
        { name: "화이트", hex: "#E5E7EB" },
        { name: "블랙", hex: "#0B0B0B" },
      ],
    },
    {
      id: 2,
      name: "갤럭시Z Flip",
      img: "/images/galaxyZflip6.png",
      colors: [
        { name: "네이비", hex: "#243A73" },
        { name: "핑크", hex: "#EB4899" },
        { name: "레드", hex: "#EF4444" },
        { name: "블랙", hex: "#111111" },
      ],
    },
    {
      id: 3,
      name: "갤럭시S25 Ultra",
      img: "/images/galaxyS25ultra.png",
      colors: [
        { name: "블루", hex: "#7BA1D8" },
        { name: "그레이", hex: "#C7C7C7" },
        { name: "베이지", hex: "#D6C7B2" },
        { name: "블랙", hex: "#000000" },
      ],
    },
    {
      id: 4,
      name: "갤럭시S25 Edge",
      img: "/images/galaxyS25edge.png",
      colors: [
        { name: "블루", hex: "#7BA1D8" },
        { name: "그레이", hex: "#C7C7C7" },
        { name: "베이지", hex: "#D6C7B2" },
        { name: "블랙", hex: "#000000" },
      ],
    },
    {
      id: 5,
      name: "갤럭시S25 +",
      img: "/images/galaxyS25plus.png",
      colors: [
        { name: "블루", hex: "#7BA1D8" },
        { name: "네이비", hex: "#304C89" },
        { name: "그레이", hex: "#C7C7C7" },
        { name: "블랙", hex: "#000000" },
      ],
    },
    {
      id: 6,
      name: "갤럭시S25",
      img: "/images/galaxyS25.png",
      colors: [
        { name: "스카이", hex: "#CDEAF7" },
        { name: "그레이", hex: "#C7C7C7" },
        { name: "베이지", hex: "#D6C7B2" },
        { name: "블랙", hex: "#000000" },
      ],
    },
  ];

  const devices = selectedTab === "iphone" ? iphoneDevices : galaxyDevices;

  const handleNext = () => {
    if (selectedDevice === null) {
      alert("기기를 선택해주세요!");
      return;
    }
    navigate("/carrier");
  };

  return (
    <div className="device-page">
      {/* 광고 배너 */}
      <div className="ad-banner">
        <div className="ad-text">

          <p style={{ fontSize: "18px", fontWeight: "bold", color: "#111111" }}>
            사용할 기종을 선택주세요!
          </p>
          <p style={{ fontSize: "15px", color: "#A0A6AD" }}>
            요정이 최저가로 찾아줄게요!
          </p>
        </div>
      </div>

      {/* 탭 영역 */}
      <div className="tab-container">
        <button
          className={`tab-button ${selectedTab === "iphone" ? "active" : "inactive"}`}
          onClick={() => {
            setSelectedTab("iphone");
            setSelectedDevice(null);
          }}
        >
          아이폰
        </button>
        <button
          className={`tab-button ${selectedTab === "galaxy" ? "active" : "inactive"}`}
          onClick={() => {
            setSelectedTab("galaxy");
            setSelectedDevice(null);
          }}
        >
          갤럭시
        </button>
      </div>

      {/* 기기 카드 리스트 */}
      <div className="device-list">
        {devices.map((device) => (
          <div
            key={device.id}
            className={`device-card ${selectedDevice === device.id ? "selected" : ""}`}
            onClick={() => setSelectedDevice(device.id)}
          >
            {device.img ? (
              <img
                src={device.img}
                alt={device.name}
                width={64}
                height={64}
                style={{ borderRadius: 8, objectFit: "cover" }}
              />
            ) : (
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 8,
                  background: "#CBD5E1",
                }}
              />
            )}

            <div style={{ marginLeft: 12, display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
              <div style={{ fontWeight: 600, color: "#111111" }}>{device.name}</div>
              <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                {device.colors.map((c) => (
                  <span
                    key={c.hex}
                    aria-hidden="true"
                    title={c.name}
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: 9999,
                      border: "1px solid rgba(0,0,0,0.2)",
                      background: c.hex,
                      display: "inline-block",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 버튼 뒤 그라데이션 (오버레이 전용) */}
      <div className="bottom-fade" aria-hidden="true" />

      {/* 페이지 인디케이터 */}
      <div className="page-indicator">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>

      {/* 다음 버튼 */}
      <button className="next-button" onClick={handleNext}>
        다음으로
      </button>
    </div>
  );
}
