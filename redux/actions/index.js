import * as types from '../Constants'

export function filterDetails(value) {
    return {
        type: types.FILTER_DETAILS,
        value
    }
}

export function filterGrid(value) {
    return {
        type: types.FILTER,
        value
    }
}

export function toggleActive(value) {
    return {
        type: types.TOGGLE_ACTIVE,
        value
    }
}
