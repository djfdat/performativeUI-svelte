/* ============================================================
   The ASCII Hero — a grid of characters that ripples around
   the cursor. The "we are serious engineers" signal.
   No three.js. No shader. Just a 2D field and a distance function.
   ============================================================ */

const CHAR_RAMP = " .`'\",:;Il!i><~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$";
const COLS = 78;
const ROWS = 22;

export function mountAsciiHero(el) {
  const cols = COLS;
  const rows = ROWS;

  // baseline pattern: a soft radial gradient + diagonal stripes,
  // so the field has structure even with no cursor.
  const baseField = new Float32Array(cols * rows);
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const nx = (x / cols) * 2 - 1;
      const ny = (y / rows) * 2 - 1;
      const r = Math.sqrt(nx * nx + ny * ny);
      const stripes = 0.5 + 0.5 * Math.sin(nx * 6 + ny * 2);
      const radial = 1 - Math.min(1, r * 1.2);
      baseField[y * cols + x] = 0.25 * stripes + 0.55 * radial;
    }
  }

  let mouseX = -999;
  let mouseY = -999;
  let lastFrame = 0;

  const render = (t) => {
    if (t - lastFrame < 50) {
      requestAnimationFrame(render);
      return;
    }
    lastFrame = t;

    const time = t * 0.001;
    let out = "";

    // We have to know the cell size to map cursor px → grid (cx,cy).
    // Use the rendered <pre>'s box.
    const rect = el.getBoundingClientRect();
    const cellW = rect.width / cols;
    const cellH = rect.height / rows;
    const cx = (mouseX - rect.left) / cellW;
    const cy = (mouseY - rect.top) / cellH;

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const base = baseField[y * cols + x];

        // a slow wave so it's never fully static
        const wave =
          0.15 *
          Math.sin(x * 0.18 + time * 1.4) *
          Math.cos(y * 0.22 - time * 1.1);

        // cursor ripple
        const dx = x - cx;
        const dy = (y - cy) * 1.8; // chars are taller than they are wide
        const d = Math.sqrt(dx * dx + dy * dy);
        const ripple =
          mouseX > 0
            ? 1.4 * Math.exp(-(d * d) / 80) -
              0.6 * Math.exp(-((d - 6) * (d - 6)) / 30)
            : 0;

        const v = Math.max(0, Math.min(1, base + wave + ripple));
        const i = Math.floor(v * (CHAR_RAMP.length - 1));
        out += CHAR_RAMP[i];
      }
      out += "\n";
    }
    el.textContent = out;
    requestAnimationFrame(render);
  };

  el.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  el.addEventListener("mouseleave", () => {
    mouseX = -999;
    mouseY = -999;
  });

  requestAnimationFrame(render);
}
