/* ============================================================
   The Node Graph — particles.js init that ships purple dots
   connected by lines, drifting, repulsing on hover.
   The platonic AI background. We didn't invent this. Nobody did.
   ============================================================ */
export function mountNodeGraph(elId) {
  if (!window.particlesJS) {
    console.warn("[node-graph] particles.js not loaded");
    return;
  }
  window.particlesJS(elId, {
    particles: {
      number: { value: 70, density: { enable: true, value_area: 900 } },
      color: { value: ["#a78bfa", "#f0abfc", "#67e8f9"] },
      shape: { type: "circle" },
      opacity: {
        value: 0.55,
        random: true,
        anim: { enable: true, speed: 0.6, opacity_min: 0.15, sync: false },
      },
      size: {
        value: 2.2,
        random: true,
        anim: { enable: true, speed: 1.4, size_min: 0.4, sync: false },
      },
      line_linked: {
        enable: true,
        distance: 140,
        color: "#7c3aed",
        opacity: 0.35,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.9,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        attract: { enable: false },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 180, line_linked: { opacity: 0.8 } },
        push: { particles_nb: 4 },
      },
    },
    retina_detect: true,
  });
}
