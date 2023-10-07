import { lazy } from "react";
const Widgets = {
  CategoryFilter: lazy(() => import("./Widgets/category-filters")),
  Navbar: lazy(() => import("./Widgets/navbar")),
  Pagination: lazy(() => import("./Widgets/pagination")),
  ProductCard: lazy(() => import("./Widgets/product-card")),
  ShoppingCard: lazy(() => import("./Widgets/shopping-card")),
  // Add more screen imports as needed
};

export { Widgets };
