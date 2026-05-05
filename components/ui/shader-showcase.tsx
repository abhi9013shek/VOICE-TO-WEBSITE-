"use client"
import { useEffect, useRef, useState } from "react"
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react"
import { motion } from "framer-motion"
import { html } from "framer-motion/client"

export default function ShaderShowcase() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        const handleMouseEnter = () => setIsActive(true)
        const handleMouseLeave = () => setIsActive(false)

        const container = containerRef.current
        if (container) {
            container.addEventListener("mouseenter", handleMouseEnter)
            container.addEventListener("mouseleave", handleMouseLeave)
        }

        return () => {
            if (container) {
                container.removeEventListener("mouseenter", handleMouseEnter)
                container.removeEventListener("mouseleave", handleMouseLeave)
            }
        }
    }, [])

    return (
        <div ref={containerRef} className="min-h-screen bg-black relative overflow-hidden">
            <svg className="absolute inset-0 w-0 h-0">
                <defs>
                    <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
                        <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
                        <feColorMatrix
                            type="matrix"
                            values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
                            result="tint"
                        />
                    </filter>
                    <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                            result="gooey"
                        />
                        <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
                    </filter>
                    <filter id="logo-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="50%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#0891b2" />
                    </linearGradient>
                    <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="30%" stopColor="#06b6d4" />
                        <stop offset="70%" stopColor="#f97316" />
                        <stop offset="100%" stopColor="#f62a2aff" />
                    </linearGradient>
                    <filter id="text-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
            </svg>

            <MeshGradient
                className="absolute inset-0 w-full h-full"
                colors={["#000000", "#06b6d4", "#0891b2", "#164e63", "#f97316"]}
                speed={0.3}
            />
            <MeshGradient

                className="absolute inset-0 w-full h-full opacity-60"
                colors={["#000000", "#ffffff", "#06b6d4", "#f97316"]}
                speed={0.2}
                wire-frame="true"
                background-Color="transparent"
            />

            <header className="relative z-20 flex items-center justify-between p-6">
                <motion.div
                    className="flex items-center group cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <motion.svg
                        fill="currentColor"
                        viewBox="0 0 752 768"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="size-10 text-white group-hover:drop-shadow-lg transition-all duration-300"
                        style={{
                            filter: "url(#logo-glow)",
                        }}
                        whileHover={{
                            fill: "url(#logo-gradient)",
                            rotate: [0, -2, 2, 0],
                            transition: {
                                fill: { duration: 0.3 },
                                rotate: { duration: 0.6, ease: "easeInOut" },
                            },
                        }}
                    >
                        {/* Path 1 — main body (draw animation applied here) */}
                        <motion.path
                            d="M123.770889,657.463684 C89.003830,649.587097 68.348137,620.600647 68.008530,588.055420 C67.876297,575.383240 71.423477,563.331299 77.750618,552.276489 C117.630394,482.598572 157.571335,412.955597 197.473862,343.290680 C229.346207,287.645416 261.200867,231.990005 293.043579,176.327805 C299.164276,165.628662 304.892517,154.693253 311.317047,144.181763 C336.938080,102.262085 402.055939,97.366074 430.127838,144.273361 C460.995483,195.852310 490.240997,248.402664 520.141907,300.559204 C535.132690,326.707733 549.990967,352.932220 564.967468,379.088959 C566.390686,381.574646 567.015991,383.682526 565.420959,386.473938 C553.689880,407.004089 541.990967,427.554749 530.558472,448.251617 C528.073364,452.750458 525.212219,454.468964 519.951172,454.442047 C475.128815,454.212646 430.304840,454.294891 385.481323,454.310913 C378.910248,454.313263 377.808990,456.031891 381.034271,461.680267 C403.164581,500.436676 425.197632,539.250793 447.698792,577.791321 C451.722260,584.682800 452.627319,589.731506 448.043243,597.002625 C436.327728,615.585449 425.648285,634.825867 414.737366,653.907837 C412.559296,657.717041 409.849884,659.162170 405.496307,659.159180 C316.349396,659.096924 227.202362,659.172852 138.055435,659.107849 C133.432663,659.104492 128.810593,658.090942 123.770889,657.463684 M337.952728,247.418640 C299.468903,314.407959 260.976318,381.392242 222.504349,448.388367 C197.548080,491.847839 172.620514,535.323792 147.684296,578.794800 C145.091888,583.314026 145.856842,584.737549 151.054626,584.751221 C167.549240,584.794495 184.044052,584.770935 200.538788,584.769897 C252.855606,584.766724 305.172424,584.768494 357.489227,584.734741 C359.570679,584.733398 362.062164,585.469849 363.430634,583.185852 C364.636719,581.172791 363.327393,579.380371 362.309357,577.637817 C357.690338,569.731384 353.054047,561.834595 348.499237,553.891174 C329.951660,521.544800 311.473999,489.158234 292.842590,456.860291 C290.752991,453.237915 290.817505,450.331818 292.907776,446.730225 C304.274689,427.144775 315.665863,407.565338 326.517761,387.693909 C329.808990,381.667145 333.875885,379.861145 340.440094,379.895203 C384.246307,380.122498 428.054352,380.027832 471.861725,379.968719 C479.065186,379.958984 479.752686,378.702515 476.274658,372.595917 C442.657654,313.571686 409.028351,254.554474 375.386169,195.544601 C372.398041,190.303299 371.252075,190.288727 367.970886,195.284653 C367.241028,196.395950 366.609680,197.572601 365.946014,198.726654 C356.733978,214.745193 347.524261,230.765060 337.952728,247.418640 z"
                            initial={{ pathLength: 1 }}
                            whileHover={{
                                pathLength: [1, 0, 1],
                                transition: { duration: 1.2, ease: "easeInOut" },
                            }}
                        />
                        {/* Path 2 — right accent piece */}
                        <path d="M610.081421,457.930176 C629.432251,491.591309 649.433716,524.489258 667.549988,558.394531 C690.266785,600.909668 661.104004,653.521179 613.208191,658.313049 C596.423157,659.992371 579.590698,658.914246 562.782288,659.069458 C538.627747,659.292542 514.469788,659.152771 490.313263,659.156006 C482.307831,659.157104 482.007874,658.621521 486.022156,651.457458 C497.418060,631.119629 508.916168,610.838196 520.158691,590.416016 C522.442566,586.267456 525.145386,584.600220 529.988647,584.666077 C549.976379,584.938171 569.970032,584.800476 589.961304,584.761169 C591.887573,584.757385 593.970764,585.320862 595.794312,583.787964 C596.177490,580.868469 594.151489,578.857422 592.871704,576.636292 C582.564209,558.748169 572.251282,540.862244 561.755615,523.084473 C559.815125,519.797668 559.842590,517.304443 561.755432,513.948242 C573.463257,493.406433 584.899231,472.709808 596.475037,452.092407 C597.827576,449.683350 598.695251,446.888000 601.631104,444.862152 C605.542419,448.410034 607.307434,453.301147 610.081421,457.930176 z" />
                    </motion.svg>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        {[
                            { left: 35, top: 45, x: 5 },
                            { left: 65, top: 25, x: -8 },
                            { left: 25, top: 75, x: 12 },
                            { left: 55, top: 65, x: -3 },
                            { left: 45, top: 35, x: 8 },
                            { left: 75, top: 55, x: -10 },
                        ].map((val, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-white/60 rounded-full"
                                style={{
                                    left: `${val.left}%`,
                                    top: `${val.top}%`,
                                }}
                                animate={{
                                    y: [-10, -20, -10],
                                    x: [0, val.x, 0],
                                    opacity: [0, 1, 0],
                                    scale: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: i * 0.2,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Navigation */}
                <nav className="flex items-center space-x-2">
                    <a
                        href="#"
                        className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
                    >
                        Features
                    </a>
                    <a
                        href="#"
                        className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
                    >
                        Pricing
                    </a>
                    <a
                        href="#"
                        className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
                    >
                        Docs
                    </a>
                </nav>

                {/* Login Button Group with Arrow */}
                <div id="gooey-btn" className="relative flex items-center group" style={{ filter: "url(#gooey-filter)" }}>
                    <button className="absolute right-0 px-2.5 py-2 rounded-full bg-white text-black font-normal text-xm transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-19 z-0">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </button>
                    <button className="px-6 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10">
                        Login
                    </button>
                </div>
            </header>

            <main className="absolute bottom-8 left-8 z-20 max-w-2xl">
                <div className="text-left">
                    <motion.div
                        className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm mb-6 relative border border-white/10"
                        style={{
                            filter: "url(#glass-effect)",
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent rounded-full" />
                        <span className="text-white/90 text-sm font-medium relative z-10 tracking-wide">
                            ✨ New Paper Shaders Experience
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-none tracking-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <motion.span
                            className="block font-light text-white/90 text-4xl md:text-5xl lg:text-6xl mb-2 tracking-wider"
                            style={{
                                background: "linear-gradient(135deg, #ffffff 0%, #06b6d4 30%, #f97316 70%, #ffffff 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                filter: "url(#text-glow)",
                            }}
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                            }}
                        >
                            Create websites
                        </motion.span>
                        <span className="block font-black text-white drop-shadow-2xl">With Your</span>
                        <span className="block font-light text-white/80 italic">Voice / text</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg font-light text-white/70 mb-8 leading-relaxed max-w-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        Create stunning visual experiences with our advanced shader technology. Interactive lighting, smooth
                        animations, and beautiful effects that respond to your every move.
                    </motion.p>

                    <motion.div
                        className="flex items-center gap-6 flex-wrap"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                    >
                        <motion.button
                            className="px-10 py-4 rounded-full bg-transparent border-2 border-white/30 text-white font-medium text-sm transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/50 hover:text-cyan-100 cursor-pointer backdrop-blur-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Pricing
                        </motion.button>
                        <motion.button
                            className="px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-orange-500 text-white font-semibold text-sm transition-all duration-300 hover:from-cyan-400 hover:to-orange-400 cursor-pointer shadow-lg hover:shadow-xl"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Started
                        </motion.button>
                    </motion.div>
                </div>
            </main>
        </div>
    )
}
