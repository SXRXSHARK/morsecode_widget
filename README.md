Morse Code Widget

A simple, always-on-top desktop widget built with Electron that encodes text to Morse code and decodes Morse code back to text.

Features
Encode: Convert plain text into Morse code (letters, numbers, and common punctuation supported)
Decode: Convert Morse code back into readable text
Word separation using / (encoding) and automatic handling of / or triple-space (decoding)
Input validation with on-screen error messages for invalid characters or malformed Morse code
Convert on button click or by pressing Enter
Clean, dark-themed UI styled with Tailwind CSS
Tech Stack
Electron — desktop app shell
HTML, CSS (Tailwind via CDN), and vanilla JavaScript — widget UI and logic
Project Structure
.
├── main.js           # Electron entry point — creates the app window
├── morsecode.html     # Widget UI, styling, and encode/decode logic
└── package.json       # Project metadata and dependencies
Getting Started
Prerequisites
Node.js installed
Installation
bash
npm install
Run the app
bash
npm start

This launches a 500x500, always-on-top window displaying the Morse Code widget.

Usage
Type text or Morse code into the input box.
Select Encode (text → Morse) or Decode (Morse → text) from the dropdown.
Click Convert (or press Enter).
The result appears in the read-only output box below.

Notes:

Words are separated by/in Morse code output.
Only supported characters (A–Z, 0–9, and standard punctuation) can be encoded.
License

MIT
