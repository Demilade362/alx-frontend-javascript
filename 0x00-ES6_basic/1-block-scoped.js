#!/usr/bin/env node

/* Task Block Function */

export default function taskBlock(trueOrFalse) {
    const task = false;
    const task2 = true;

    if (trueOrFalse) {
       return [task, task2]
    }

    return [task, task2];
}
