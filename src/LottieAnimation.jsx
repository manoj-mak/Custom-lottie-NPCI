import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "/src/assets/revised-npci.json";

const IDS = {
  rupayTop: "RuPay-top",
  rupayBottom: "RuPay-bottom",
  upiLite: "UPI-Lite",
  rupayOTG: "RuPay-otg",
  upi: "UPI",
  nfs: "NFS",
  fastag1: "Fastag-1",
  fastag2: "Fastag-2",
  cts: "CTS",
  nach: "NACH",
  imps: "IMPS",
  ipo: "IPO",
  aeps: "AePS",
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
        <span
          style={{
            fontWeight: 800,
            fontSize: 18,
            marginBottom: 5,
            color: "#1b52ab",
          }}
        >
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
    if (id === "RuPay-top" || id === "RuPay-bottom" || id === "RuPay-otg") {
      url = "https://npci-new.allsocialassets.com/what-we-do/rupay";
    } else if (id === "UPI-Lite") {
      url = "https://npci-new.allsocialassets.com/what-we-do/upi";
    } else if (id === "UPI") {
      url = "https://npci-new.allsocialassets.com/what-we-do/upi";
    } else if (id === "NFS") {
      url = "https://npci-new.allsocialassets.com/what-we-do/nfs";
    } else if (id === "Fastag-1" || id === "Fastag-2") {
      url = "https://npci-new.allsocialassets.com/what-we-do/netc-fastag";
    } else if (id === "CTS") {
      url = "https://npci-new.allsocialassets.com/what-we-do/cts";
    } else if (id === "NACH") {
      url = "https://npci-new.allsocialassets.com/what-we-do/nach";
    } else if (id === "IMPS") {
      url = "https://npci-new.allsocialassets.com/what-we-do/imps";
    } else if (id === "IPO") {
      url = "https://npci-new.allsocialassets.com/what-we-do/ipo";
    } else if (id === "Aeps") {
      url = "https://npci-new.allsocialassets.com/what-we-do/aeps";
    }

    if (url) {
      window.location.href = url;
    }
  };

  return (
    <div className="animation-container">
      <Lottie animationData={animationData} loop autoplay renderer="svg" />
      {ActiveLayer && <Tooltip text={TooltipText} position={TooltipPosition} />}
    </div>
  );
}

export default LottieAnimation;
