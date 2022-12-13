import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";
import styles from "../styles/Home.module.css";

// Multiplying by 2 to account for device pixel ratio
const CANVAS_WIDTH = 720 * 2;
const CANVAS_HEIGHT = 720 * 2;

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div className={styles.container}>
      <Head>
        <title>FitBoysBoys Playground</title>
        <meta
          name="description"
          content="We learning to code and we are best of friends"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {`Welcome to `}
          <span className={styles.blue}>{`FitBoysBoys Playground`}</span>
        </h1>

        <canvas
          ref={canvasRef}
          className={styles.canvas}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
        />
        <div className={styles.buttonsContainer}>
          <button
            className={styles.button}
            onClick={() => {
              const x = Math.floor(Math.random() * CANVAS_WIDTH);
              const y = Math.floor(Math.random() * CANVAS_HEIGHT);
              const canvas = canvasRef.current;
              if (canvas == null) {
                return;
              }
              const ctx = canvas.getContext("2d");
              if (ctx) {
                ctx.beginPath();
                ctx.arc(x, y, 50, 0, 2 * Math.PI);
                ctx.fill();
              }
            }}
          >
            {`Add Circle`}
          </button>
          <button
            className={styles.button}
            onClick={() => {
              const canvas = canvasRef.current;
              if (canvas == null) {
                return;
              }
              const ctx = canvas.getContext("2d");
              if (ctx) {
                ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
              }
            }}
          >
            {`Clear Canvas`}
          </button>
          <button
            className={styles.button}
            onClick={() => {
              const x = Math.floor(Math.random() * CANVAS_WIDTH);
              const y = Math.floor(Math.random() * CANVAS_HEIGHT);
              const dimension = Math.max(50, Math.random() * 100);
              const canvas = canvasRef.current;
              if (canvas == null) {
                return;
              }
              const ctx = canvas.getContext("2d");
              if (ctx) {
                ctx.beginPath();
                ctx.rect(x, y, dimension, dimension);
                const hue = Math.floor(Math.random() * 360);
                ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
                ctx.fill();
                ctx.fillStyle = `rgb(0, 0, 0)`;
              }
            }}
          >
            {`Add Square`}
          </button>
          <button className={styles.button}>{`Click me`}</button>
          <button className={styles.button}>{`Click me`}</button>
          <button className={styles.button}>{`Click me`}</button>
          <button className={styles.button}>{`Click me`}</button>
          <button className={styles.button}>{`Click me`}</button>
        </div>
      </main>
    </div>
  );
}
