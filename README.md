# Recipe Hub

Recipe Hub is a small React application (Vite) for discovering meals, viewing recipe details, and saving favorites. It uses a simple meals API wrapper located at `src/api/mealsApi.js` and a lightweight component-based UI in `src/components`.

**Features**

- **Search:** Quickly search meals by name.
- **Recipe details:** View ingredients, instructions, and images for a selected meal.
- **Favorites:** Save and manage favorite recipes across the app.
- **Responsive UI:** Mobile-first layouts and simple, accessible components.

**Tech Stack**

- React + Vite
- JavaScript (ESM)
- Plain CSS

**Project Structure (important files)**

- `src/main.jsx` — application entry
- `src/App.jsx` — main app layout and routing
- `src/pages` — page components (`Home`, `Favorite`, `RecipeDetails`, `Landing`)
- `src/components` — UI components used across pages
- `src/context/RecipeContext.jsx` — app state (favorites, search, selected recipe)
- `src/api/mealsApi.js` — API wrapper used for fetching meal data

**Getting Started**

Prerequisites: Node 16+ and npm (or yarn).

1. Install dependencies

```
npm install
```

2. Run the dev server

```
npm run dev
```

3. Build for production

```
npm run build
```

4. Preview the production build

```
npm run preview
```

**Usage**

- Open the app in your browser (Vite will print the local dev URL).
- Use the search bar to find recipes by name, click a recipe to view details, and click the favorite action to save it to the Favorites page.

**API**

The app calls the meals API through `src/api/mealsApi.js`. If you want to swap or mock the backend for testing, update that module accordingly.

**Contributing**

- Fork the repo and open a pull request for new features or fixes.
- Keep changes focused and include a brief description of what and why.

**License**

This project is available under the MIT License.

---

If you'd like, I can also add badges, a demo link, or expand setup notes (environment variables or testing). Want me to run the dev server or commit these changes for you?

