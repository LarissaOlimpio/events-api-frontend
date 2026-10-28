# Events Platform Frontend

A modern event management platform frontend built with React, TypeScript, TanStack Router, TanStack Query, and Tailwind CSS.

This application serves as the frontend for an Event Management API developed with Spring Boot, providing authentication, event administration, coupon management, user management, and role-based access control.

## Features

### Authentication

- User registration
- Secure login
- Forgot password flow (in development)
- HTTP-only cookie authentication
- Role-based authorization
- Protected routes

### Authorization

The application supports three user roles:

| Role      | Description                                        |
| --------- | -------------------------------------------------- |
| VIEWER    | Default role assigned during registration          |
| ORGANIZER | Can manage events and related resources            |
| ADMIN     | Full system access, including user role management |

Only administrators can promote users to higher permission levels.

### Event Management

- View events
- Create events (Organizer/Admin)
- Manage event information
- Manage event locations

### Coupon Management

- Create discount coupons
- Associate coupons with events
- Manage promotion codes

### User Management

- User registration
- Profile visualization
- Role administration (Admin only)

---

# Tech Stack

## Frontend

- React
- TypeScript
- Vite
- TanStack Router
- TanStack Query
- React Hook Form
- Zod
- Axios
- Tailwind CSS

## Backend

- Spring Boot
- Spring Security
- JWT Authentication
- PostgreSQL
- Role-Based Access Control (RBAC)

---

# Project Structure

```text
src
├── assets
│
├── components
│   └── ui
│       ├── button.tsx
│       ├── input.tsx
│       └── label.tsx
│
├── contexts
│   └── AuthContext.tsx
│
├── features
│   └── auth
│       ├── hooks
│       │   └── useCurrentUser.ts
│       │
│       ├── schemas
│       │   ├── loginSchema.ts
│       │   ├── signupSchema.ts
│       │   └── forgotPasswordSchema.ts
│       │
│       ├── types
│       │   └── auth.types.ts
│       │   ├── currentUser.type.ts
│       │   └── signup.type.ts
│       │         │
│       ├── AuthLayout.tsx
│       ├── LoginForm.tsx
│       ├── SignupForm.tsx
│       └── ForgotPasswordForm.tsx
│
├── lib
│   └── queryClient.ts
│
├── routes
│   ├── login.tsx
│   ├── signup.tsx
│   ├── forgot-password.tsx
│   └── __root.tsx
│
├── services
│   ├── api.ts
│   ├── authService.ts
│   └── signupService.ts
│
├── main.tsx
└── index.css
```

---

# Authentication Flow

The application follows a secure authentication strategy using HTTP-only cookies.

## Login Process

```text
User Login
      │
      ▼
POST /auth/login
      │
      ▼
Backend validates credentials
      │
      ▼
HTTP-only Cookie created
      │
      ▼
Frontend invalidates "me" query
      │
      ▼
GET /auth/me
      │
      ▼
Authenticated User Loaded
```

---

# User Session Management

Instead of storing access tokens in localStorage, the application relies on:

- HTTP-only cookies
- TanStack Query cache
- Current user endpoint (`/auth/me`)

This approach:

- Improves security
- Reduces XSS attack risks
- Centralizes authentication state
- Aligns with modern production practices

---

# Current User Query

User information is retrieved through:

```http
GET /auth/me
```

Expected response:

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@email.com",
  "role": "VIEWER"
}
```

The result is cached by TanStack Query under:

```ts
["me"];
```

and reused across the entire application.

---

# Form Validation

All forms use:

- React Hook Form
- Zod

Validation examples:

### Login

- Required email
- Valid email format
- Minimum password length

### Signup

- Name required
- Letters only
- Valid email
- Password requirements
- Password confirmation

### Forgot Password

- Valid email format
- Required field validation

---

# Environment Variables

Create a `.env` file:

```env
VITE_API_URL=http://localhost:8080
```

For production:

```env
VITE_API_URL=https://api.example.com
```

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd events-platform-frontend
```

Install dependencies:

```bash
npm install
```

or

```bash
pnpm install
```

---

# Running the Project

Start the development server:

```bash
npm run dev
```

or

```bash
pnpm dev
```

Application:

```text
http://localhost:5173
```

---

# Build

Generate a production build:

```bash
npm run
```
