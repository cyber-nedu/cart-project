import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "FoodHub | Home",
  description: "Order from the best local restaurants with FoodHub. Fresh, fast, and reliable food delivery at your fingertips.",
  keywords: ["food delivery", "restaurants", "online ordering", "FoodHub", "meals"],
  authors: [{ name: "Ernest Daniel Chinedu" }],

    }

export default function Home() {
  return (
    <HomeClient />
  );
};