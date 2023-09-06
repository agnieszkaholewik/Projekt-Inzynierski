import Category from "../models/category";
import subCategory from "../models/subcategory";

export const CATEGORIES = [
    new Category('c1', 'Healthy Body', '#ffc0cb'),
    new Category('c2', 'Healthy Mind', '#dda0dd'),
    new Category('c3', 'Notifications', '#b0e0e6'),
];

export const SUBCATEGORIES = [
    new subCategory('s1', 'c1', 'Workouts', '#87cefa'),
    new subCategory('s2', 'c1', 'Health Calculators', '#e6e6fa'),
    new subCategory('s3', 'c1', 'Progress Tracker', '#ffdab9'),
    new subCategory('s4', 'c1', 'Stopwatch', '#fff0f5'),

    new subCategory('s5', 'c2', 'Mood Tracker', '#f08080'),
    new subCategory('s6', 'c2', 'Breathing Exercises', '#afeeee'),
    new subCategory('s7', 'c2', 'Affirmations', '#d8bfd8'),
    new subCategory('s8', 'c2', 'Mini Game', '#ffe4e1'),

    new subCategory('s9', 'c3', 'Drink Water', '#87ceeb'),
    new subCategory('s10', 'c3', 'Exercise', '#dda0dd'),
    new subCategory('s11', 'c3', 'Sleep', '#1e90ff'),
    new subCategory('s12', 'c3', 'Your Own', '#e9967a'),
];