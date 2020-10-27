export const updateCounterSize = size => {
    return {
        type: 'UPDATE_COUNTER_SIZE', payload: size
    }
}

export const increaseSum = () => {
    return {
        type: 'INCREASE_SUM'
    }
}