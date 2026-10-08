// The bundled TeX-to-SVG renderer includes the classic MathJax TeX font paths.
// Keep rendering local and independent of browser fonts or third-party CDNs.
window.MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)']],
    displayMath: [['\\[', '\\]']],
    packages: ['base', 'ams', 'newcommand', 'configmacros'],
  },
  svg: {
    fontCache: 'local',
  },
  options: {
    enableMenu: false,
  },
};
