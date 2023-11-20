export const metadata = {
    title: "Uplifting Quotes",
    description: "A Collection of dailly affirmations to help you stay positive and motivated"

}


export default function Layout({ children }) {
    return (
        <main className="m-4 p-8 dark:bg-zinc-800 bg-zinc-300 text-amber rounded-xl">
            {children}
        </main>
    )
}