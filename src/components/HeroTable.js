import HeroItem from "./HeroItem";

function HeroTable({ items }) {

    return (
        <main className='container'>
            <div className='heroesBox'>
                {    
                    items.map(item =>
                        <HeroItem item = {item}  ></HeroItem>
                    )
                }
            </div>
        </main>
    )
}

export default HeroTable;