# StudyNotion - Full Stack EdTech Platform

StudyNotion is a premium, fully-functional, and highly interactive full-stack EdTech platform. It enables students to explore, buy, and consume educational courses, while empowering instructors to seamlessly create and manage courses to reach a wide audience.

---

## 🌟 Key Features

### For Students
- **Course Catalog & Details**: Explore course catalogs by categories (e.g., Web Development, AI/ML, etc.) and view detailed course descriptions, curriculum, pricing, and reviews.
- **Interactive Learning**: Watch course lectures via an integrated, responsive video player and track course completion progress.
- **Cart & Payments**: Add courses to a cart and securely purchase them using integrated **Razorpay** payment gateway services.
- **Student Dashboard**: Track enrolled courses, view completion percentages, and manage profile information.

### For Instructors
- **Course Builder**: Easily create courses, add sections, and upload subsections (lectures) with video support.
- **Interactive Dashboards**: Monitor statistics, course lists, total sales, enrolled student numbers, and earnings.
- **Course Management**: Edit draft or published courses, modify thumbnails, update lecture details, or delete sections.

### For Administrators
- **Category Control**: Manage and create core platform categories that define the catalog structure.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React.js, Redux Toolkit (State Management), Tailwind CSS, React Router (Routing), Swiper (Sliders), Video-React (Video Player), React Hook Form |
| **Backend** | Node.js, Express.js, JWT Authentication, bcrypt (Hashing), OTP Generator, Nodemailer (Email verification/receipts) |
| **Database** | MongoDB (NoSQL), Mongoose (ODM) |
| **Cloud Services** | Cloudinary (Media upload & storage), Razorpay (Payment gateway) |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) database instance

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/thepranaygupta/react-tailwind-css-starter-pack.git
   cd "Mega Project"
   ```

2. **Install Frontend Dependencies** (at root):
   ```bash
   npm install
   ```

3. **Install Backend Dependencies**:
   ```bash
   cd server
   npm install
   cd ..
   ```

---

## ⚙️ Environment Configuration

Set up configuration files before running the project.

### Frontend Environment (Root Directory)
Create a `.env` file in the root directory:
```env
REACT_APP_BASE_URL=http://localhost:4000/api/v1
```

### Backend Environment (`/server` Directory)
Create a `.env` file in the `/server` directory:
```env
PORT=4000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

# Nodemailer
MAIL_HOST=smtp.gmail.com
MAIL_USER=your_email_address
MAIL_PASS=your_app_password

# Razorpay
RAZORPAY_KEY=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret

# Cloudinary
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
FOLDER_NAME=CodeHelp
```

---

## 💻 Running the Project

You can run both the frontend and backend servers concurrently with a single command from the root directory:

```bash
npm run dev
```

- **Frontend client** will run at: `http://localhost:3000`
- **Backend server** will run at: `http://localhost:4000`
