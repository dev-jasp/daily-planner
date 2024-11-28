import { useState } from 'react';
import Column from './Column';

function Board() {
    const [cards, setCards] = useState<any[]>([]); 

    return (
        <div className="flex flex-col gap-8 h-screen w-full px-14 py-12">
            <div className="flex gap-3 mb-40">
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
            </div>
            <div className="flex gap-3 mb-40">
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
            </div>
            <div className="flex gap-3 mb-40">
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
            </div>
            <div className="flex gap-3 mb-40">
                <Column 
                title="Sunday" 
                headingColor="blue-500 font-bold" 
                cards={cards} 
                setCards={setCards} 
                />
            </div>
        </div>
    );
}

export default Board;
