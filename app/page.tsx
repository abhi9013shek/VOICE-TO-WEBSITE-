import ShaderShowcase from "@/components/ui/shader-showcase"

export default function Home() {
  return (
    <div className="w-full">
      <ShaderShowcase />

      {/* How It Works Section */}
      <section
        style={{
          width: "100%",
          padding: "80px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "55fr 45fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
          {/* Left — Video Preview */}
          <div
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <video
              src="/Whisk_jjtylngnzidn4ctmtudnyiwl1ezm00so5ugztqg.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                display: "block",
                borderRadius: "20px",
              }}
            />
          </div>

          {/* Right — Steps */}
          <div>
            <h2
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: "40px",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              As Easy as Talking
            </h2>

            {[
              {
                title: "Step 1 — Open the app",
                desc: "No download. Just open the website on your phone or laptop.",
              },
              {
                title: "Step 2 — Answer 8 simple questions",
                desc: "App asks in Hindi or English. You just speak — no typing needed.",
              },
              {
                title: "Step 3 — Confirm your answers",
                desc: "See what you said on screen. Tap yes or re-record instantly.",
              },
              {
                title: "Step 4 — Preview your website",
                desc: "Your shop website appears live. Pick from 3 beautiful designs.",
              },
              {
                title: "Step 5 — Go live for free",
                desc: "One tap publishes your website. Get a shareable link instantly.",
              },
            ].map((step, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "24px",
                }}
              >
                <span
                  style={{
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    display: "block",
                    marginBottom: "4px",
                  }}
                >
                  {step.title}
                </span>
                <p
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "1.1rem",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}