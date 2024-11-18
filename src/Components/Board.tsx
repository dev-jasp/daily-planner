import { useState } from 'react';
import Column from './Column';

function Board() {
    const [cards, setCards] = useState<any[]>([]); 

    return (
        <div className="flex h-full w-full gap-3 overflow-scroll p-12">
            <Column 
                title="Backlog" 
                column="backlog" 
                headingColor="blue-500" 
                cards={cards} 
                setCards={setCards} 
            />
            <Column 
                title="In progress" 
                column="doing" 
                headingColor="blue-500" 
                cards={cards} 
                setCards={setCards} 
            />
            <Column 
                title="Complete" 
                column="done" 
                headingColor="blue-500" 
                cards={cards} 
                setCards={setCards} 
            />
        </div>
    );
}

export default Board;
