import { useState } from "react";

const WHATSAPP_NUMBER = "919876543210"; // Replace with your actual WhatsApp number (with country code, no + sign)
const DEFAULT_MESSAGE = "Hi Tositos India! I'd like to know more about your franchise opportunities.";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      id="whatsapp-floating-btn"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: isHovered ? "10px" : "0px",
        backgroundColor: "#25D366",
        color: "#fff",
        borderRadius: "60px",
        padding: isHovered ? "14px 24px 14px 18px" : "16px",
        boxShadow: isHovered
          ? "0 8px 30px rgba(37, 211, 102, 0.5), 0 0 0 6px rgba(37, 211, 102, 0.15)"
          : "0 6px 24px rgba(37, 211, 102, 0.4)",
        cursor: "pointer",
        transition: "all 0.35s cubic-bezier(0.65, 0, 0.35, 1)",
        textDecoration: "none",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
      }}
    >
      {/* WhatsApp SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        style={{
          width: "28px",
          height: "28px",
          flexShrink: 0,
          filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.15))",
        }}
      >
        <path d="M16.004 0C7.165 0 .003 7.16.003 15.997c0 2.82.737 5.573 2.138 7.998L.012 32l8.22-2.096a15.94 15.94 0 007.77 1.988h.006C24.842 31.892 32 24.732 32 15.997 32 7.16 24.842 0 16.004 0zm0 29.295a13.32 13.32 0 01-6.99-1.97l-.502-.297-5.2 1.325 1.387-4.97-.33-.525A13.28 13.28 0 012.6 15.997c0-7.4 6.006-13.4 13.404-13.4 7.396 0 13.4 6 13.4 13.4 0 7.4-6.004 13.398-13.4 13.398zm7.346-10.033c-.403-.2-2.384-1.175-2.753-1.31-.37-.133-.64-.2-.908.2-.268.4-1.04 1.31-1.275 1.578-.235.268-.47.3-.873.1-.403-.2-1.702-.627-3.242-2-1.198-1.068-2.006-2.388-2.24-2.79-.234-.403-.025-.62.176-.82.18-.18.403-.47.604-.703.2-.234.268-.4.403-.668.134-.268.067-.502-.033-.703-.1-.2-.908-2.188-1.244-2.995-.327-.786-.66-.68-.908-.693-.235-.01-.502-.013-.77-.013-.268 0-.703.1-1.072.502-.37.4-1.41 1.376-1.41 3.356 0 1.98 1.443 3.893 1.644 4.16.2.268 2.838 4.334 6.878 6.076.962.415 1.712.663 2.298.85.965.307 1.844.263 2.538.16.774-.116 2.384-.975 2.72-1.916.335-.94.335-1.748.234-1.915-.1-.168-.368-.268-.77-.47z" />
      </svg>

      {/* Tooltip label on hover */}
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "14px",
          fontWeight: 600,
          whiteSpace: "nowrap",
          overflow: "hidden",
          maxWidth: isHovered ? "160px" : "0px",
          opacity: isHovered ? 1 : 0,
          transition: "all 0.35s cubic-bezier(0.65, 0, 0.35, 1)",
          letterSpacing: "0.01em",
        }}
      >
        Chat with us
      </span>

      {/* Pulse ring animation */}
      <span
        style={{
          position: "absolute",
          inset: "-4px",
          borderRadius: "60px",
          border: "2px solid rgba(37, 211, 102, 0.4)",
          animation: "wa-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
          pointerEvents: "none",
        }}
      />

      <style>{`
        @keyframes wa-ping {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          75%, 100% {
            transform: scale(1.35);
            opacity: 0;
          }
        }
      `}</style>
    </a>
  );
};

export default WhatsAppButton;
