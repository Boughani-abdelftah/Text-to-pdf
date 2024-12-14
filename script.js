document.getElementById('generatePdfBtn').addEventListener('click', async () => {
  const { jsPDF } = window.jspdf;
  const inputText = document.getElementById('inputText').value;

  if (!inputText.trim()) {
    alert('يرجى إدخال النص!');
    return;
  }

  // إنشاء ملف PDF
  const pdf = new jsPDF();
  pdf.text(inputText, 10, 10);

  // تحويل PDF إلى رابط قابل للتنزيل
  const pdfData = pdf.output('blob');

  // إظهار رابط التحميل
  const downloadLink = document.getElementById('downloadLink');
  const downloadLinkContainer = document.getElementById('downloadLinkContainer');
  downloadLink.href = URL.createObjectURL(pdfData);
  downloadLinkContainer.style.display = 'block';
});
