# Payment Gateway Template

A modern, responsive payment gateway interface built with React, TypeScript, and Tailwind CSS.

## Features

- Clean, professional payment form UI
- Multiple payment method options (Credit/Debit Card, Apple Pay, PayPal)
- Order summary with expandable details
- Responsive design for all device sizes
- Built with React 18, TypeScript, and Tailwind CSS



## Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/Payment-Gateway-Template.git
cd Payment-Gateway-Template
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   └── payment/
│       ├── ApplePayForm.tsx
│       ├── Header.tsx
│       ├── OrderSummary.tsx
│       ├── PayPalForm.tsx
│       ├── PaymentForm.tsx
│       ├── PaymentMethodSelector.tsx
│       └── PaymentPage.tsx
├── types/
│   └── payment.ts
├── App.tsx
├── index.css
└── main.tsx
```

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (for icons)

## License

MIT

## Acknowledgment

- Design inspiration from modern payment gateways
- Icons provided by Lucide React
