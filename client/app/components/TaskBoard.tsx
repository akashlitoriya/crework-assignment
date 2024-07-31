"use client"
import {Draggable, Droppable } from 'react-beautiful-dnd';
import { DndContext } from "../context/DndContext";
import { useState, useEffect } from 'react';
import { getTodoTask, getDoneTask, getInProgressTask, getUnderReviewTask } from '../services/taskService';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setDoneList, setInProgressList, setTodoList, setUnderReviewList } from '../store/taskSlice'
import { useDispatch } from 'react-redux';
import Card from './Card';


const TaskBoard = () => {
    const dispatch = useDispatch();
    const token = useSelector((state: RootState) => state.example.token);
    const todoList = useSelector((state: RootState) => state.task.todo);
    const doneList = useSelector((state: RootState) => state.task.done);
    const inProgressList = useSelector((state: RootState) => state.task.inProgress);
    const underReviewList = useSelector((state: RootState) => state.task.underReview);
    useEffect(() => {
        getTasks()
    }, [])

    async function getTasks() {
        const todo = await getTodoTask(token);
        dispatch(setTodoList(todo))
        const done = await getDoneTask(token);
        dispatch(setDoneList(done))
        const inProgress = await getInProgressTask(token);
        dispatch(setInProgressList(inProgress))
        const underReview = await getUnderReviewTask(token);
        dispatch(setUnderReviewList(underReview))
    }
    const onDragEnd = (result: { destination: any; source?: any; }) => {
        if (!result.destination) return;
        const { source, destination } = result;

        // if (source.droppableId !== destination.droppableId) {
        //   const sourceColumn = columns[source.droppableId];
        //   const destColumn = columns[destination.droppableId];
        //   const sourceTasks = [...sourceColumn.tasks];
        //   const destTasks = [...destColumn.tasks];
        //   const [removed] = sourceTasks.splice(source.index, 1);
        //   destTasks.splice(destination.index, 0, removed);
        //   setColumns({
        //     ...columns,
        //     [source.droppableId]: {
        //       ...sourceColumn,
        //       tasks: sourceTasks,
        //     },
        //     [destination.droppableId]: {
        //       ...destColumn,
        //       tasks: destTasks,
        //     },
        //   });

        //   // Update task status in the database
        //   axios.post('/api/updateTaskStatus', {
        //     taskId: removed.id,
        //     newStatus: destination.droppableId,
        //   });
        // } else {
        //   const column = columns[source.droppableId];
        //   const copiedTasks = [...column.tasks];
        //   const [removed] = copiedTasks.splice(source.index, 1);
        //   copiedTasks.splice(destination.index, 0, removed);
        //   setColumns({
        //     ...columns,
        //     [source.droppableId]: {
        //       ...column,
        //       tasks: copiedTasks,
        //     },
        //   });
        // }
    };

    return (
        <DndContext onDragEnd={onDragEnd}>
            <h1 className="text-center mt-8 mb-3 font-bold text-[25px] ">Drag and Drop Application</h1>
            <div className="w-full grid grid-cols-4">

                <Droppable key={"todo"} droppableId={`droppable_todo`}>
                    {
                        (provided) => (
                            <div className="p-5 w-full bg-white  border-gray-400 border border-dashed"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                <h2 className="text-center font-bold mb-6 text-black">To Do</h2>
                                {
                                    todoList.map((component, index) => (
                                        <Draggable key={component.task_id} draggableId={component.task_id} index={index}>
                                            {
                                                (provided) => (
                                                    <div 
                                                        {...provided.dragHandleProps}
                                                        {...provided.draggableProps}
                                                        ref={provided.innerRef}
                                                    >
                                                        <Card task={component} />
                                                    </div>
                                                )
                                            }
                                        </Draggable>
                                    ))
                                }
                                {provided.placeholder}
                            </div>
                        )
                    }

                </Droppable>
                <Droppable key={"inProgress"} droppableId={`droppable_inProgress`}>
                    {
                        (provided) => (
                            <div className="p-5 w-full bg-white  border-gray-400 border border-dashed"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                <h2 className="text-center font-bold mb-6 text-black">In Progress</h2>
                                {
                                    inProgressList.map((component, index) => (
                                        <Draggable key={index} draggableId={component.task_id} index={index}>
                                            {
                                                (provided) => (
                                                    <div
                                                        {...provided.dragHandleProps}
                                                        {...provided.draggableProps}
                                                        ref={provided.innerRef}
                                                    >
                                                        <Card task={component} />
                                                    </div>
                                                )
                                            }
                                        </Draggable>
                                    ))
                                }
                                {provided.placeholder}
                            </div>
                        )
                    }

                </Droppable>
                <Droppable key={"completed"} droppableId={`droppable_completed`}>
                    {
                        (provided) => (
                            <div className="p-5 w-full bg-white  border-gray-400 border border-dashed"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                <h2 className="text-center font-bold mb-6 text-black">Completed</h2>
                                {
                                    doneList.map((component, index) => (
                                        <Draggable key={component.task_id} draggableId={component.task_id} index={index}>
                                            {
                                                (provided) => (
                                                    <div 
                                                        {...provided.dragHandleProps}
                                                        {...provided.draggableProps}
                                                        ref={provided.innerRef}
                                                    >
                                                        <Card task={component} />
                                                    </div>
                                                )
                                            }
                                        </Draggable>
                                    ))
                                }
                                {provided.placeholder}
                            </div>
                        )
                    }

                </Droppable>
                <Droppable key={"underReview"} droppableId={`droppable_underReview`}>
                    {
                        (provided) => (
                            <div className="p-5 w-full bg-white  border-gray-400 border border-dashed"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                <h2 className="text-center font-bold mb-6 text-black">Under Review</h2>
                                {
                                    underReviewList.map((component, index) => (
                                        <Draggable key={index} draggableId={component.task_id} index={index}>
                                            {
                                                (provided) => (
                                                    <div
                                                        {...provided.dragHandleProps}
                                                        {...provided.draggableProps}
                                                        ref={provided.innerRef}
                                                    >
                                                        <Card task={component} />
                                                    </div>
                                                )
                                            }
                                        </Draggable>
                                    ))
                                }
                                {provided.placeholder}
                            </div>
                        )
                    }

                </Droppable>


            </div>
        </DndContext>
    );
};

export default TaskBoard;