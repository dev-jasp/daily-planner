import React, { useState } from 'react';

interface ColumnProps {
    title: string;
    headingColor: string;
    column: string;
    cards: any[];
    setCards: React.Dispatch<React.SetStateAction<any[]>>; 
}

const Column: React.FC<ColumnProps> = ({ title, headingColor, column, cards, setCards }) => {
    const [active, setActive] = useState(false);

    return (
        <div className="w-56 shrink-0">
            <div className="mb-3 flex items-center justify-between">
                <h3 className={`text-${headingColor}`}>{title}</h3>
                <span className="rounded text-sm text-neutral-400">{cards.length}</span>
            </div>
            <div
            className= {`${ active ? "bg-neutral-800/50" : "bg-neutral-800-0"}`} 
            ></div>
        </div>
    );
};

export default Column;
