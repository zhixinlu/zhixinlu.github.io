/* An exact Gaussian steady-state example. The point cloud is static in the HTML.
   Arrow lengths share one fixed scale and represent j/p, not the full SDE drift. */
(() => {
  'use strict';
  const center = 210;
  const coordinateScale = 48;
  const velocityScale = 9;

  document.querySelectorAll('[data-current-demo]').forEach((demo) => {
    const slider = demo.querySelector('[data-current-slider]');
    const output = demo.querySelector('[data-current-output]');
    const outputLabel = demo.querySelector('[data-current-output-label]');
    const direction = demo.querySelector('[data-current-direction]');
    const description = demo.querySelector('[data-current-description]');
    const arrows = [...demo.querySelectorAll('[data-current-x]')];
    if (!slider || !output || !direction || !description) return;
    let mathReady = false;

    const render = () => {
      const omega = Number(slider.value);
      const value = (omega > 0 ? '+' : '') + omega.toFixed(1);
      const sense = omega > 0 ? 'Counterclockwise current' : omega < 0 ? 'Clockwise current' : 'Zero current';
      const message = omega === 0
        ? 'Zero current. Inward drift and diffusion balance.'
        : `${sense}. Snapshot density is unchanged.`;
      // Preserve the prefix and typeset the changing number in the same TeX font.
      if (mathReady) {
        output.replaceChildren(window.MathJax.tex2svg(value));
      } else {
        output.textContent = value;
      }
      if (outputLabel) outputLabel.setAttribute('aria-label', `Circulation omega equals ${value}`);
      direction.textContent = message;
      slider.setAttribute('aria-valuetext', `${value}; ${sense.toLowerCase()}`);
      description.textContent = `A fixed cloud of illustrative independent Gaussian samples, with current velocity arrows for omega ${value}. ${message} Arrows show probability-current velocity j divided by p, not the full drift.`;

      arrows.forEach((arrow) => {
        const x = Number(arrow.dataset.currentX);
        const y = Number(arrow.dataset.currentY);
        const anchorX = center + coordinateScale * x;
        const anchorY = center - coordinateScale * y;
        // The mathematical vector is omega * (-y, x); SVG's vertical axis is reversed.
        const dx = -omega * y * velocityScale;
        const dy = -omega * x * velocityScale;
        const length = Math.hypot(dx, dy);
        if (length === 0) {
          arrow.setAttribute('d', '');
          return;
        }
        const ux = dx / length;
        const uy = dy / length;
        const startX = anchorX - dx / 2;
        const startY = anchorY - dy / 2;
        const tipX = anchorX + dx / 2;
        const tipY = anchorY + dy / 2;
        const head = Math.min(5, length * .32);
        const wing = head * .55;
        const fmt = (n) => n.toFixed(2);
        arrow.setAttribute('d', `M ${fmt(startX)} ${fmt(startY)} L ${fmt(tipX)} ${fmt(tipY)} M ${fmt(tipX - head * ux - wing * uy)} ${fmt(tipY - head * uy + wing * ux)} L ${fmt(tipX)} ${fmt(tipY)} L ${fmt(tipX - head * ux + wing * uy)} ${fmt(tipY - head * uy - wing * ux)}`);
      });
    };

    slider.disabled = false;
    slider.addEventListener('input', render);
    render();
    if (window.MathJax?.startup?.promise) {
      window.MathJax.startup.promise.then(() => {
        mathReady = true;
        render();
      });
    }
  });
})();
