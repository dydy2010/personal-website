"""
Generate a minimal, valid one-page placeholder resume PDF.

Why a script: hand-writing a PDF's cross-reference (xref) byte offsets is
error-prone. Python computes the offsets correctly so the file always opens.

Usage:
    python3 scripts/make_placeholder_pdf.py
Output:
    public/resume.pdf
Replace the output later with Dongyuan's real, web-safe resume PDF.
"""

import os

OUT = os.path.join("public", "resume.pdf")

# Each PDF object as bytes. We will compute their byte offsets as we write.
lines = [
    b"BT /F1 20 Tf 72 720 Td (Dongyuan Gao) Tj ET",
    b"BT /F1 13 Tf 72 696 Td (Data Scientist & AI Engineer - Switzerland) Tj ET",
    b"BT /F1 12 Tf 72 660 Td (Placeholder resume. Replace with the web-safe version.) Tj ET",
]
stream = b"\n".join(lines)

objects = [
    b"<< /Type /Catalog /Pages 2 0 R >>",
    b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] "
    b"/Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>",
    b"<< /Length " + str(len(stream)).encode() + b" >>\nstream\n" + stream + b"\nendstream",
    b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
]

buf = bytearray(b"%PDF-1.4\n")
offsets = []
for i, obj in enumerate(objects, start=1):
    offsets.append(len(buf))
    buf += str(i).encode() + b" 0 obj\n" + obj + b"\nendobj\n"

xref_pos = len(buf)
buf += b"xref\n0 " + str(len(objects) + 1).encode() + b"\n"
buf += b"0000000000 65535 f \n"
for off in offsets:
    buf += ("%010d 00000 n \n" % off).encode()

buf += b"trailer\n<< /Size " + str(len(objects) + 1).encode() + b" /Root 1 0 R >>\n"
buf += b"startxref\n" + str(xref_pos).encode() + b"\n%%EOF"

os.makedirs("public", exist_ok=True)
with open(OUT, "wb") as f:
    f.write(buf)

print(f"Wrote {OUT} ({len(buf)} bytes)")
