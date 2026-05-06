import ShaderShowcase from "@/components/ui/shader-showcase"

export default function Home() {
  return (
    <div className="w-full">
      <ShaderShowcase />

      {/* Video Section */}
      <section
        style={{
          width: "100%",
          backgroundColor: "#000",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "80px 24px",
          gap: "48px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            textAlign: "center",
            background: "linear-gradient(135deg, #ffffff 0%, #06b6d4 40%, #f97316 70%, #ffffff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            margin: 0,
          }}
        >
          HOW IT WORKS
        </h2>
        <video
          src="/Whisk_jjtylngnzidn4ctmtudnyiwl1ezm00so5ugztqg.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            maxWidth: "800px",
            borderRadius: "24px",
            display: "block",
            boxShadow: "0 0 60px rgba(255,255,255,0.05)",
          }}
        />
      </section>
    </div>
  )
}