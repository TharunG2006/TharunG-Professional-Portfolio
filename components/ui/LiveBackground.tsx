"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export const LiveBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme, systemTheme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: false });
        if (!ctx) return;

        let animationFrameId: number;

        const currentTheme = theme === "system" ? systemTheme : theme;
        const isDark = currentTheme === "dark";
        const particleColor = isDark ? "rgba(167, 139, 250, 0.5)" : "rgba(255, 181, 167, 0.8)";
        const lineColor = isDark ? "rgba(45, 212, 191, 0.12)" : "rgba(163, 207, 205, 0.25)";
        const bgColor = isDark ? "#0f172a" : "#fdfbf7";

        let w = 0;
        let h = 0;

        const resizeCanvas = () => {
            w = window.innerWidth;
            h = window.innerHeight;
            canvas.width = w;
            canvas.height = h;
        };

        const N = 50;
        const px = new Float32Array(N);
        const py = new Float32Array(N);
        const pSize = new Float32Array(N);
        const pSpeedX = new Float32Array(N);
        const pSpeedY = new Float32Array(N);

        const init = () => {
            for (let i = 0; i < N; i++) {
                px[i] = Math.random() * w;
                py[i] = Math.random() * h;
                pSize[i] = Math.random() * 2 + 1;
                pSpeedX[i] = (Math.random() - 0.5) * 0.5;
                pSpeedY[i] = (Math.random() - 0.5) * 0.5;
            }
        };

        const maxDist = 120;
        const maxDistSq = maxDist * maxDist;

        let lastFrameTime = 0;
        const frameInterval = 1000 / 30;

        const animate = (timestamp: number) => {
            animationFrameId = requestAnimationFrame(animate);

            const delta = timestamp - lastFrameTime;
            if (delta < frameInterval) return;
            lastFrameTime = timestamp - (delta % frameInterval);

            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, w, h);

            for (let i = 0; i < N; i++) {
                px[i] += pSpeedX[i];
                py[i] += pSpeedY[i];
                if (px[i] > w || px[i] < 0) pSpeedX[i] = -pSpeedX[i];
                if (py[i] > h || py[i] < 0) pSpeedY[i] = -pSpeedY[i];
            }

            ctx.beginPath();
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 1;
            for (let i = 0; i < N; i++) {
                for (let j = i + 1; j < N; j++) {
                    const dx = px[i] - px[j];
                    const dy = py[i] - py[j];
                    const distSq = dx * dx + dy * dy;
                    if (distSq < maxDistSq) {
                        ctx.moveTo(px[i], py[i]);
                        ctx.lineTo(px[j], py[j]);
                    }
                }
            }
            ctx.stroke();

            ctx.fillStyle = particleColor;
            ctx.beginPath();
            for (let i = 0; i < N; i++) {
                ctx.moveTo(px[i] + pSize[i], py[i]);
                ctx.arc(px[i], py[i], pSize[i], 0, Math.PI * 2);
            }
            ctx.fill();
        };

        const handleMouseMove = (e: MouseEvent) => {
            const mx = e.clientX;
            const my = e.clientY;
            for (let i = 0; i < N; i++) {
                const dx = mx - px[i];
                const dy = my - py[i];
                const distSq = dx * dx + dy * dy;
                if (distSq < 22500) {
                    px[i] -= dx * 0.02;
                    py[i] -= dy * 0.02;
                }
            }
        };

        window.addEventListener("resize", resizeCanvas);
        window.addEventListener("mousemove", handleMouseMove, { passive: true });

        resizeCanvas();
        init();
        animationFrameId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme, systemTheme]);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            />
        </div>
    );
};
