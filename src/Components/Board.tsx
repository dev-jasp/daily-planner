import { useState } from 'react';
import Column from './Column';

function Board() {
    const [cards, setCards] = useState<any[]>([]); 

    return (
        <div className="grid grid-cols-2 gap-3 h-screen w-full  px-14 py-12">
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
            <Column 
                title="Saturday" 
                headingColor="blue-500 font-bold" 
                cards={cards} 
                setCards={setCards} 
            />
            <Column 
                title="Sunday" 
                headingColor="blue-500 font-bold" 
                cards={cards} 
                setCards={setCards} 
            />
        </div>
    );
}

export default Board;
