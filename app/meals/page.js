import MealsGrid from "@/components/meals/meal-grid";
import Link from "next/link";
import { getMeals } from '@/lib/meals';
import classes from './page.module.css';
import { Suspense } from "react";

async function Meals() {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />
}

export default function MealsPage() {

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
                <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
                    <Meals />
                </Suspense>
            </main>
        </>
    )
}