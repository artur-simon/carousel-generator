# LinkedIn Carousel PDF Generator

A web-based tool for creating and exporting LinkedIn carousels as PDFs. This application allows users to create visually appealing carousel posts with customizable slides, backgrounds, and text styling.

## Features

- Create multiple slides with custom text and styling
- Upload and customize background images
- Set background colors and opacity
- Customize text color, size, and font
- Add user profile information with profile picture
- Real-time preview of slides
- Export carousel as PDF
- Responsive design

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Zustand (State Management)
- html2canvas (PDF Generation)
- jsPDF (PDF Creation)
- React Color (Color Picker)
- React Dropzone (File Upload)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/linkedin-carousel-pdf-generator.git
cd linkedin-carousel-pdf-generator
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Enter your profile information (name, handle, and profile picture)
2. Create slides using the "Add Slide" button
3. Customize each slide with:
   - Text content
   - Background color/image
   - Text styling (color, size, font)
   - Background opacity
4. Preview your carousel in real-time
5. Export the carousel as a PDF when ready

## PDF Export

The exported PDF will maintain the following specifications:
- 1080x1080 pixels per slide (LinkedIn's recommended size)
- High-quality image rendering
- Preserved styling and formatting
- One slide per page

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
