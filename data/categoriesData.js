import Category from "../models/category";
import subCategory from "../models/subcategory";
import subcatIcon from "../models/subcatIcon";
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const bodyIcon=<Ionicons name="body" size={30} color="white" />
const brainIcon=<FontAwesome5 name="brain" size={30} color="white" />
const notifIcon=<Ionicons name="notifications" size={30} color="white" />


export const CATEGORIES = [
    new Category('c1', 'Healthy Body', '#6495ed', bodyIcon),
    new Category('c2', 'Healthy Mind', '#dda0dd', brainIcon),
    new Category('c3', 'Notifications', '#20b2aa', notifIcon),
];

const heartIcon=<FontAwesome5 name="heartbeat" size={150} color="black" />
const headIcon=<MaterialCommunityIcons name="head-heart-outline" size={150} color="black" />
const reminderIcon=<MaterialCommunityIcons name="reminder" size={150} color="black" />
const plusIcon=<AntDesign name="plus" size={24} color="white" />

export const SUBCATEGORIES = [
    new subCategory('s1', 'c1', 'Workouts', '#87cefa'),
    new subCategory('s2', 'c1', 'Health Calculators', '#0000cd'),
    new subCategory('s3', 'c1', 'Progress Tracker', '#000080'),
    new subCategory('s4', 'c1', 'Stopwatch', '#6495ed'),

    new subCategory('s5', 'c2', 'Mood Tracker', '#da70d6'),
    new subCategory('s6', 'c2', 'Breathing Exercises', '#8a2be2'),
    new subCategory('s7', 'c2', 'Affirmations', '#9370db'),
    new subCategory('s8', 'c2', 'Mini Game', '#ff69b4'),

    new subCategory('s9', 'c3', 'Drink Water', '#5f9ea0'),
    new subCategory('s10', 'c3', 'Exercise', '#66cdaa'),
    new subCategory('s11', 'c3', 'Sleep', '#48d1cc'),
    new subCategory('s12', 'c3', 'Add', '#008080', plusIcon),
];

export const SUBCATICON =[
    new subcatIcon('m1','c1', heartIcon),
    new subcatIcon('m2','c2',headIcon),
    new subcatIcon('m3','c3',reminderIcon)
]