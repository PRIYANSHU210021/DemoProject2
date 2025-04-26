/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#0eb582",
        "light-green": "#f0fdfa",
        "light-color": "#777",
        "light-white": "#eee",
        black: "#444",
        white: "#fff",
      },
      boxShadow: {
        custom: "0 .5rem 1rem rgba(0,0,0,.1)", // Custom shadow
      },
      borderWidth: {
        custom: "0.1rem", // Custom border width
      },
    },
  },
  plugins: [],
};



$green: #0eb582;        // Tailwind: `text-[#0eb582]` (Custom, closest: `text-teal-500`)
$light-green: #f0fdfa;  // Tailwind: `text-teal-50`
$light-color: #777777;  // Tailwind: `text-gray-500`
$light-white: #eeeeee;  // Tailwind: `text-gray-200`
$black: #444444;        // Tailwind: `text-gray-700`
$white: #ffffff;        // Tailwind: `text-white`


-----
Glad you liked it! Let me explain how it works step by step. 🚀  

---

## **How React Router Works in Your Case**
### **1️⃣ BrowserRouter (`App.js`)**
- `BrowserRouter` is a wrapper that **enables routing** in your app.
- Inside it, we define multiple `<Route>` components.
- Each `<Route>` links a **URL path** to a **React component**.

```jsx
<Router>
  <Routes>
    <Route path="/" element={<PYQ />} />         // Root path (Homepage)
    <Route path="/semester" element={<Semester />} />  // Semester Page
  </Routes>
</Router>
```
👉 **Effect:**  
- When user visits `/`, they see the `PYQ` component.  
- When user visits `/semester`, they see the `Semester` component.

---

### **2️⃣ `useNavigate()` (PYQ.js)**
- The `useNavigate()` hook allows us to **programmatically change the URL**.

```jsx
const navigate = useNavigate(); // Hook for navigation
```
- When the **"Click Here"** button is clicked, this line executes:

```jsx
onClick={() => navigate("/semester")}
```
- It **updates the URL** to `/semester`, and React Router **automatically renders** the `Semester` component.

---

### **3️⃣ How the Components Switch**
#### **Before Clicking:**
- `URL: http://localhost:3000/`
- `PYQ` component is visible.

#### **After Clicking "Click Here":**
- `navigate("/semester")` updates the URL.
- `React Router` sees `/semester` and **renders the Semester component**.

#### **Going Back**
- User can press the **browser's back button** to go back to `/`.

---

### **🔹 What Happens Behind the Scenes?**
1. **React Router listens** to URL changes.
2. `useNavigate` **updates the URL** dynamically.
3. The `Routes` component **switches the displayed component** based on the current path.

---

## **🎯 Why This Approach is Better?**
✅ **No Full Page Refresh** → Faster & Smooth Navigation.  
✅ **Better User Experience** → Works like a real app, not just webpages.  
✅ **Scalable** → You can add more routes (e.g., `/dashboard`, `/profile`) easily.  

🚀 Now your app works like a **Single Page Application (SPA)** with dynamic routing! 🎉

-----