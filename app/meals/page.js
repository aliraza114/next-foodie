import MealsGrid from "@/components/meals/meal-grid";
import Link from "next/link";
import { getMeals } from '@/lib/meals';
import classes from './page.module.css';

export default async function MealsPage() {
    const meals = await getMeals();

    return (
        <>
            <header className={classes.header}>
                <h1> Delecious meal created <span className={classes.highlight}>by you</span> </h1>
                <p>
                    Choose your favourite recepie and cook yourself. It is easy 
                </p>
                <p className={classes.cta}>
                    <Link href={'/meals/share'}>Share your Favourite Recipe</Link>
                </p>
            </header>
            <main className={classes.main}>
                <MealsGrid meals={meals} />
            </main>
        </>
    )
}