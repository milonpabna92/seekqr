function generateQRCode() {
  const text = document.getElementById("text").value;
  const qrcodeContainer = document.getElementById("qrcode");
  qrcodeContainer.innerHTML = ""; // clear previous QR
  if (!text) return;

  QRCode.toCanvas(text, { width: 220 }, function (err, canvas) {
    if (err) return console.error(err);
    qrcodeContainer.appendChild(canvas);
    document.getElementById("downloadBtn").style.display = "inline-block";
  });
}

function downloadQRCode() {
  const canvas = document.querySelector("#qrcode canvas");
  const url = canvas.toDataURL("image/png");
  const a = document.createElement("a");
  a.href = url;
  a.download = "qrcode.png";
  a.click();
}
