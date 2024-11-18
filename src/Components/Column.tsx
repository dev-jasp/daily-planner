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
            </div>
        </div>
    );
};

export default Column;
