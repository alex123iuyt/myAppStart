import React, { useEffect, useRef } from "react";

const BackgroundEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const rand = (min, max) => Math.random() * (max - min) + min;

    let ctx;
    let canvas = canvasRef.current;
    let items = [];
    const colors = [
      ["#002aff", "#009ff2"],
      ["#0054ff", "#27e49b"],
      ["#202bc5", "#873dcc"],
    ];
    const count = 5;
    const blur = [100, 100];
    const radius = [60, 120];

    const changeCanvas = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const adjX = 0.5;
      const adjY = 0.5;
      const adjBlur = 0.2;

      items.forEach((item) => {
        if (
          (item.x + item.initialXDirection * adjX >= canvas.width &&
            item.initialXDirection !== 0) ||
          (item.x + item.initialXDirection * adjX <= 0 &&
            item.initialXDirection !== 0)
        ) {
          item.initialXDirection *= -1;
        }
        if (
          (item.y + item.initialYDirection * adjY >= canvas.height &&
            item.initialYDirection !== 0) ||
          (item.y + item.initialYDirection * adjY <= 0 &&
            item.initialYDirection !== 0)
        ) {
          item.initialYDirection *= -1;
        }

        if (
          (item.blur + item.initialBlurDirection * adjBlur >= radius[1] &&
            item.initialBlurDirection !== 0) ||
          (item.blur + item.initialBlurDirection * adjBlur <= radius[0] &&
            item.initialBlurDirection !== 0)
        ) {
          item.initialBlurDirection *= -1;
        }

        item.x += item.initialXDirection * adjX;
        item.y += item.initialYDirection * adjY;
        item.blur += item.initialBlurDirection * adjBlur;
        ctx.beginPath();
        ctx.filter = `blur(${item.blur}px)`;
        const grd = ctx.createLinearGradient(
          item.gradient[0],
          item.gradient[1],
          item.gradient[2],
          item.gradient[3]
        );
        grd.addColorStop(0, item.colorOne);
        grd.addColorStop(1, item.colorTwo);
        ctx.fillStyle = grd;
        ctx.arc(item.x, item.y, item.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
      });

      window.requestAnimationFrame(changeCanvas);
    };

    const initializeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx = canvas.getContext("2d");
      ctx.globalCompositeOperation = "lighter";

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      items = Array.from({ length: count }, () => {
        const thisRadius = rand(radius[0], radius[1]);
        const thisBlur = rand(blur[0], blur[1]);
        const x = rand(-100, canvas.width + 100);
        const y = rand(-100, canvas.height + 100);
        const colorIndex = Math.floor(rand(0, colors.length));
        const colorOne = colors[colorIndex][0];
        const colorTwo = colors[colorIndex][1];

        ctx.beginPath();
        ctx.filter = `blur(${thisBlur}px)`;
        const grd = ctx.createLinearGradient(
          x - thisRadius / 2,
          y - thisRadius / 2,
          x + thisRadius,
          y + thisRadius
        );

        grd.addColorStop(0, colorOne);
        grd.addColorStop(1, colorTwo);
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.arc(x, y, thisRadius, 0, Math.PI * 2);
        ctx.closePath();

        const directionX = Math.round(rand(-99, 99) / 100);
        const directionY = Math.round(rand(-99, 99) / 100);

        return {
          x,
          y,
          blur: thisBlur,
          radius: thisRadius,
          initialXDirection: directionX,
          initialYDirection: directionY,
          initialBlurDirection: directionX,
          colorOne,
          colorTwo,
          gradient: [
            x - thisRadius / 2,
            y - thisRadius / 2,
            x + thisRadius,
            y + thisRadius,
          ],
        };
      });

      window.requestAnimationFrame(changeCanvas);
    };

    initializeCanvas();
    window.addEventListener("resize", initializeCanvas);
    return () => {
      window.removeEventListener("resize", initializeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "1000px" }} />;
};

export default BackgroundEffect;
