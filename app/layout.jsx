import "@styles/globals.css" 

export const metadata={
    title: "promptopia",
    description: "Discover & Share AI Prompts"
}

const RootLayout = ({Children}) => {
  return (
    <html lang= "en">
        <body>
            <div className="main">
                <div className="gradient" />
            </div>
            <main className="app">
                {Children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout
