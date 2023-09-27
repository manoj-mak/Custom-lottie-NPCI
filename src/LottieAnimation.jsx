import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "/src/assets/npci-lottie-revision1.json";

const IDS = {
  rupayTop: "rupay-top",
  rupayBottom: "rupay-bottom",
  upiLite: "upi-lite",
  rupayOTG: "rupay-otg",
  upi: "upi",
  nfs: "nfs",
  fastag1: "fastag-1",
  fastag2: "fastag-2",
  cts: "cts",
  nach: "nach",
  imps: "imps",
  ipo: "ipo",
  aeps: "aeps",
};

function Tooltip({ text, position }) {
  return (
    <div
      className="tooltip"
      style={{
        left: position.x,
        top: position.y,
        position: "absolute",
        zIndex: 100,
      }}
    >
      <div className="tooltip-card">
        <span style={{ fontWeight: 800, fontSize: 18, marginBottom: 5, color:'#1b52ab'}}>
          {text}
        </span>
        <span>bla bla bla</span>
      </div>
    </div>
  );
}

function LottieAnimation() {
  const [ActiveLayer, setActiveLayer] = useState("");
  const [TooltipText, setTooltipText] = useState("");
  const [TooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const DetectClick = () => {
    for (const id in IDS) {
      let element = document.querySelector(`#${IDS[id]}`);
      if (element) {
        element.addEventListener("mousedown", function (e) {
          setActiveLayer(IDS[id]);
          Redirect(IDS[id]);
        });
      } else {
        console.log(`${IDS[id]} not found`);
      }
    }
  };

  const DetectHover = () => {
    for (const id in IDS) {
      let element = document.querySelector(`#${IDS[id]}`);
      if (element) {
        element.addEventListener("mouseover", function (e) {
          setActiveLayer(IDS[id]);
          setTooltipText(IDS[id]);
          setTooltipPosition({ x: e.clientX, y: e.clientY });

        });
        element.addEventListener("mouseout", function (e) {
          setActiveLayer("");
          setTooltipText("");
        });
      } else {
        console.log(`${IDS[id]} not found`);
      }
    }
  };

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      DetectHover();
    }
    DetectClick();
  }, []);

  const Redirect = (id) => {
    let url = "";
    if (id === "rupay-top" || id === "rupay-bottom" || id === "rupay-otg") {
      url = "https://npci-new.allsocialassets.com/what-we-do/rupay";
    } else if (id === "upi-lite") {
      url = "https://npci-new.allsocialassets.com/what-we-do/upi";
    } else if (id === "upi") {
      url = "https://npci-new.allsocialassets.com/what-we-do/upi";
    } else if (id === "nfs") {
      url = "https://npci-new.allsocialassets.com/what-we-do/nfs";
    } else if (id === "fastag-1" || id === "fastag-2") {
      url = "https://npci-new.allsocialassets.com/what-we-do/netc-fastag";
    } else if (id === "cts") {
      url = "https://npci-new.allsocialassets.com/what-we-do/cts";
    } else if (id === "nach") {
      url = "https://npci-new.allsocialassets.com/what-we-do/nach";
    } else if (id === "imps") {
      url = "https://npci-new.allsocialassets.com/what-we-do/imps";
    } else if (id === "ipo") {
      url = "https://npci-new.allsocialassets.com/what-we-do/ipo";
    } else if (id === "aeps") {
      url = "https://npci-new.allsocialassets.com/what-we-do/aeps";
    }

    if (url) {
      window.location.href = url;
    }
  };

  return (
    <div className="animation-container">
      <Lottie animationData={animationData} loop autoplay />
      {ActiveLayer && <Tooltip text={TooltipText} position={TooltipPosition} />}
    </div>
  );
}

export default LottieAnimation;
