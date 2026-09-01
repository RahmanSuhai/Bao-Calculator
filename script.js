function valueOf(id) {
  const value = Number(document.getElementById(id).value);
  return Number.isFinite(value) && value > 0 ? value : 0;
}

function calc() {
  let total = 0;

  // A4 photocopy uses: muka surat × set = total muka surat.
  const a4pages = valueOf("a4pages");
  const a4sets = valueOf("a4sets");
  const a4copy = a4pages * a4sets;

  const a3copy = valueOf("a3copy");
  const iccopy = valueOf("iccopy");
  const a4bw = valueOf("a4bw");
  const a410 = valueOf("a410");
  const a450 = valueOf("a450");
  const a4100 = valueOf("a4100");
  const a3bw = valueOf("a3bw");

  document.getElementById("a4copyTotal").textContent = `${a4copy} ms`;

  // Photocopy A4 - pricing is based on the final total muka surat.
  if (a4copy <= 5) total += a4copy * 0.20;
  else if (a4copy <= 10) total += (5 * 0.20) + ((a4copy - 5) * 0.10);
  else total += (5 * 0.20) + (5 * 0.10) + ((a4copy - 10) * 0.05);

  // Photocopy A3
  if (a3copy <= 10) total += a3copy * 0.50;
  else total += (10 * 0.50) + ((a3copy - 10) * 0.30);

  // Photocopy IC - flat RM0.20 per piece.
  total += iccopy * 0.20;

  // Printing A4 Black & White
  if (a4bw <= 10) total += a4bw * 0.50;
  else total += (10 * 0.50) + ((a4bw - 10) * 0.30);

  // Printing A4 Colour 10%
  if (a410 <= 10) total += a410 * 0.80;
  else total += (10 * 0.80) + ((a410 - 10) * 0.60);

  // Printing A4 Colour 50%
  if (a450 <= 10) total += a450 * 1.80;
  else total += (10 * 1.80) + ((a450 - 10) * 1.30);

  // Printing A4 Colour 100%
  if (a4100 <= 10) total += a4100 * 3.00;
  else total += (10 * 3.00) + ((a4100 - 10) * 2.00);

  // Printing A3 Black & White
  if (a3bw <= 10) total += a3bw * 1.00;
  else total += (10 * 1.00) + ((a3bw - 10) * 0.50);

  document.getElementById("total").textContent = total.toFixed(2);
}

document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", calc);
});

function resetCalc() {
  document.querySelectorAll("input").forEach((input) => {
    input.value = 0;
  });
  calc();
  document.getElementById("a4pages").focus();
}

calc();
