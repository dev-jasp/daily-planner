import { useState } from 'react';
import Column from './Column';

function Board() {
    const [cards, setCards] = useState<any[]>([]); 

    return (
        <div className="flex h-screen w-full gap-3 overflow-scroll p-12">
            <Column 
                title="Monday" 
                headingColor="blue-500 font-bold" 
                cards={cards} 
                setCards={setCards} 
            />
            <Column 
                title="Tuesday" 
                headingColor="blue-500 font-bold" 
                cards={cards} 
                setCards={setCards} 
            />
            <Column 
                title="Wednesday" 
                headingColor="blue-500 font-bold" 
                cards={cards} 
                setCards={setCards} 
            />
            <Column 
                title="Thursday" 
                headingColor="blue-500 font-bold" 
                cards={cards} 
                setCards={setCards} 
            />
            <Column 
                title="Friday" 
                headingColor="blue-500 font-bold" 
                cards={cards} 
                setCards={setCards} 
            />
        </div>
    );
}

export default Board;
