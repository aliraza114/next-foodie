import Link from "next/link";

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

            </main>
        </>
    )
}