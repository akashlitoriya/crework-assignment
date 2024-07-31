interface CardProps {
    task: {
        title: string;
        description: string | null,
        status: string,
        dueDate: string | null,
    };
    
}

export default function Card({task}: CardProps){
    return (
        <div className="bg-inp-gray p-3 rounded-lg border-black border-[1px]">
            <h1>{task.title}</h1>
        </div>
    )
}