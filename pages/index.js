export default function Home() {
  return (
    <div
      style={{
        background: "#020617",
        color: "white",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column"
      }}
    >
      <h1
        style={{
          fontSize: "60px",
          color: "#22c55e",
          marginBottom: "10px"
        }}
      >
        TradLink Network
      </h1>

      <p
        style={{
          color: "#94a3b8",
          fontSize: "20px",
          marginBottom: "20px"
        }}
      >
        One App for All Traders
      </p>

      <p
        style={{
          maxWidth: "600px",
          color: "#64748b",
          marginBottom: "30px"
        }}
      >
        AI-powered trading ecosystem with analytics,
        automation, community, and Lucy AI assistant.
      </p>

      <a href="/dashboard">
        <button
          style={{
            background: "#22c55e",
            color: "black",
            padding: "12px 30px",
            borderRadius: "10px",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Enter Dashboard
        </button>
      </a>
    </div>
  );
}
