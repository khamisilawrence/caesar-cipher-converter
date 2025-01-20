# Caesar Cipher Converter

The **Caesar Cipher Converter** is a web application that allows users to encrypt and decrypt text using the Caesar Cipher method. This tool supports internationalization, enabling users to select their preferred language for text processing. Additionally, the application includes features such as a dark/light mode toggle and accurate decryption logic leveraging dictionary-based analysis.

---

## Features

### Core Functionality

- **Encryption**: Encrypt text by shifting characters by a user-defined value.
- **Decryption**: Automatically detect the shift value of encrypted text and decrypt it.
- **Internationalization**: Supports multiple languages, including English, Spanish, French, German, and others.
- **Theme Toggle**: Switch between light and dark themes using a visually intuitive button.

### Advanced Features

- **Accurate Decryption**: Utilizes a dictionary-based algorithm to determine the most likely shift value for encrypted text.
- **Copy-to-Clipboard**: Copy encrypted or decrypted results directly from the UI.

---

## Technologies Used

- Framework: [Astro](https://astro.build/)
- Language: [TypeScript](https://www.typescriptlang.org/)
- Styling: [TailwindCSS](https://tailwindcss.com/)

---

## Setup Instructions

### Prerequisites

- **Node.js** (v16 or later)
- **NPM** or **Yarn** (for dependency management)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/khamisilawrence/caesar-cipher-converter.git
   cd caesar-cipher-converter
   ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the development server:

    ```bash
    npm run dev
    ```

4. Open your browser and navigate to:

    ```bash
    http://localhost:3000
    ```

---

## Usage Instructions

### Encryption

1. Navigate to the Encrypt tab.
2. Enter the text to encrypt in the input field.
3. Specify the shift value using the input box.
4. Click Encrypt to generate the encrypted text.

### Decryption

1. Navigate to the Decrypt tab.
2. Enter the text to decrypt in the input field.
3. Click Decrypt to automatically detect the shift and display the decrypted text.

### Theme Toggle

- Use the theme toggle button to switch between dark and light modes.

### Copy-to-Clipboard

- Click the copy icon next to the result to copy the output.

---

## Directory Structure

```python
caesar-cipher-converter/
├── src/
│   ├── components/
│   │   ├── CaesarForm.astro  # Main form for encrypting and decrypting text
│   │   ├── CopyIcon.astro    # Copy-to-clipboard functionality
│   │   ├── Footer.astro      # Footer component
│   │   ├── Header.astro      # Header component
│   │   ├── ThemeToggle.astro # Dark/light mode toggle
│   ├── layouts/
│   │   └── BaseLayout.astro  # Base layout structure
│   ├── pages/
│   │   └── index.astro       # Main page of the application
│   ├── styles/
│   │   └── globals.css       # Global CSS styles
│   └── utils/
│       ├── alphabets.ts      # Language-specific alphabets
│       ├── caesarCipher.ts   # Cipher logic
│       ├── determineShift.ts # Algorithm to detect shift values
│       ├── dictionary.ts     # Dictionary loading and caching logic
├── public/
│   ├── favicon.ico           # Application favicon
│   └── assets/               # Static assets
├── astro.config.mjs          # Astro configuration
├── package.json              # Project dependencies
└── tailwind.config.mjs       # TailwindCSS configuration
```

---

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit).

---

## Acknowledgments

- Inspired by classical Caesar Cipher encryption.
