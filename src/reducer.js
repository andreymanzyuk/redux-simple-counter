const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

export default function reducer(oldState, action) {
    if (action.type === INCREMENT_COUNTER) {
        return {
            counter: oldState.counter + 1
        }
    }

    return oldState;
}

export function incrementCounter() {
    return {
        type: INCREMENT_COUNTER
    }
}