import { useState } from 'react';
import Column from './Column';

function Board() {
    const [cards, setCards] = useState<any[]>([]); 

    return (
        <div className="flex flex-col lg:flex-row gap-8 h-screen w-full px-14 py-12">
            <div className="flex gap-3 mb-40">
                <Column 
                title="Monday" 
                headingColor="blue-500 font-bold" 
                column=""
                cards={cards} 
                setCards={setCards} 
                
                />
            
                <Column 
                title="Tuesday" 
                headingColor="blue-500 font-bold" 
                column=""
                cards={cards} 
                setCards={setCards} 
                />
            </div>  
            <div className="flex gap-3 mb-40">
                <Column 
                title="Wednesday" 
                headingColor="blue-500 font-bold" 
                column=""
                cards={cards} 
                setCards={setCards} 
                />
                <Column 
                title="Thursday" 
                headingColor="blue-500 font-bold" 
                column=""
                cards={cards} 
                setCards={setCards} 
                />
            </div>
            {/* <div className="flex gap-3 mb-40">
                <Column 
                title="Friday" 
                headingColor="blue-500 font-bold" 
                column=""
                cards={cards} 
                setCards={setCards} 
                />
                <Column 
                title="Saturday" 
                headingColor="blue-500 font-bold" 
                column=""
                cards={cards} 
                setCards={setCards} 
                />
            </div>
            <div className="flex gap-3 pb-40">
                <Column 
                title="Sunday" 
                headingColor="blue-500 font-bold" 
                column=""
                cards={cards} 
                setCards={setCards} 
                />
            </div> */}
        </div>
    );
}
const PRESET_CARDS = [
    // BACKLOG
    { title: "Code!!!!!!", id: "1", column: "backlog" },
    { title: "SOX compliance checklist", id: "2", column: "backlog" },
    { title: "[SPIKE] Migrate to Azure", id: "3", column: "backlog" },
    { title: "Document Notifications service", id: "4", column: "backlog" },
    // TODO
    {
      title: "Research DB options for new microservice",
      id: "5",
      column: "todo",
    },
    { title: "Postmortem for outage", id: "6", column: "todo" },
    { title: "Sync with product on Q3 roadmap", id: "7", column: "todo" },
  
    // DOING
    {
      title: "Refactor context providers to use Zustand",
      id: "8",
      column: "doing",
    },
    { title: "Add logging to daily CRON", id: "9", column: "doing" },
    // DONE
    {
      title: "Set up DD dashboards for Lambda listener",
      id: "10",
      column: "done",
    },
  ];

export default Board;
