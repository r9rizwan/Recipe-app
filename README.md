Certainly! Here is a clean, professional `README.md` file tailored to your project. It includes the concise description we discussed and covers the specific functionality and tech stack you've implemented.

---

# 🍳 Recipe Explorer

A sleek, responsive **Recipe Management Dashboard** built with **React 18, TypeScript, and Tailwind CSS**.

**Key Features:**

- **Shadcn UI** components & Dynamic Dark Mode.
- **Context API** for global state & Favorites counter.
- **Real-time API** fetching from DummyJSON with local CRUD simulation.
- Responsive navigation via **React Router DOM**.

---

## Functionality

- **Browse Recipes:** Explore a wide variety of dishes fetched directly from an external API.
- **Theme Management:** Toggle between Light and Dark modes seamlessly using React Context.
- **Favorites System:** Save your favorite recipes with a single click. A real-time counter in the Navbar tracks your collection.
- **Recipe Management:** Add new custom recipes to your list or remove unwanted ones (Local State CRUD).
- **Detailed View:** Deep-dive into specific recipes to see ingredients, instructions, and nutritional facts.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop viewing.

---

## Tech Stack

| Technology       | Purpose                  |
| ---------------- | ------------------------ |
| **React 18**     | UI Library               |
| **TypeScript**   | Type Safety              |
| **Tailwind CSS** | Styling                  |
| **Shadcn UI**    | Accessible UI Components |
| **React Router** | Client-side Routing      |
| **Context API**  | Global State Management  |
| **Axios**        | API Fetching             |
| **Lucide React** | Iconography              |

---

## Installation & Setup

Follow these steps to get the project running locally:

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/recipe-explorer.git
cd recipe-explorer

```

2. **Install dependencies:**

```bash
npm install

```

3. **Install Shadcn UI components:**
   _(If you are setting this up from scratch, ensure you have initialized Shadcn and added the required components)_

```bash
npx shadcn-ui@latest add button card badge input skeleton

```

4. **Required Libraries:**

```bash
npm install react-router-dom axios lucide-react clsx tailwind-merge

```

5. **Start the development server:**

```bash
npm run dev

```

---

## Project Structure

The project follows a modular structure for scalability:

- `src/components`: UI fragments, layouts, and recipe-specific components.
- `src/context`: Global state for Theme and Recipe/Favorite data.
- `src/hooks`: Custom hooks for clean logic separation.
- `src/services`: API call configurations.
- `src/pages`: Main view entries for the router.
