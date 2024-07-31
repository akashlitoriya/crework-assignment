// store/exampleSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
    title: string,
    description: string | null,
    dueDate: string | null,
    status: string,
    task_id: string,
    user_id: string,
}

interface ExampleState {
    todo: Task[],
    inProgress: Task[],
    done: Task[],
    underReview: Task[],
}

const initialState: ExampleState = {
    todo: [],
    inProgress: [],
    done: [],
    underReview: [],
};

const taskSlice = createSlice({
    name: 'example',
    initialState,
    reducers: {
        setTodoList(state, action: PayloadAction<Task[]>) {
            state.todo = action.payload;
        },
        setInProgressList(state, action: PayloadAction<Task[]>) {
            state.inProgress = action.payload;
        }
        ,
        setDoneList(state, action: PayloadAction<Task[]>) {
            state.done = action.payload;
        }
        ,
        setUnderReviewList(state, action: PayloadAction<Task[]>) {
            state.underReview = action.payload;
        }


    },
});

export const { setTodoList, setDoneList, setInProgressList, setUnderReviewList } = taskSlice.actions;

export default taskSlice.reducer;