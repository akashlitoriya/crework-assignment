import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useState } from 'react';
import axios from 'axios';


const TaskBoard = () => {


//   const onDragEnd = (result: { destination: any; source?: any; }) => {
//     if (!result.destination) return;
//     const { source, destination } = result;

//     if (source.droppableId !== destination.droppableId) {
//       const sourceColumn = columns[source.droppableId];
//       const destColumn = columns[destination.droppableId];
//       const sourceTasks = [...sourceColumn.tasks];
//       const destTasks = [...destColumn.tasks];
//       const [removed] = sourceTasks.splice(source.index, 1);
//       destTasks.splice(destination.index, 0, removed);
//       setColumns({
//         ...columns,
//         [source.droppableId]: {
//           ...sourceColumn,
//           tasks: sourceTasks,
//         },
//         [destination.droppableId]: {
//           ...destColumn,
//           tasks: destTasks,
//         },
//       });

//       // Update task status in the database
//       axios.post('/api/updateTaskStatus', {
//         taskId: removed.id,
//         newStatus: destination.droppableId,
//       });
//     } else {
//       const column = columns[source.droppableId];
//       const copiedTasks = [...column.tasks];
//       const [removed] = copiedTasks.splice(source.index, 1);
//       copiedTasks.splice(destination.index, 0, removed);
//       setColumns({
//         ...columns,
//         [source.droppableId]: {
//           ...column,
//           tasks: copiedTasks,
//         },
//       });
//     }
//   };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {/* <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="todo">
            </Droppable>
      </DragDropContext> */}
    </div>
  );
};

export default TaskBoard;