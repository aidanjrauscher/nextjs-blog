import "../styles/global.css"


//top level component across all pages; can store state across pages
let App = ({Component, pageProps})=>{
    return (
        <Component {...pageProps} />
    );
}


export default App;