export function formatTime(time) {
    return time.split(":").length > 2 
        ? time.slice(0, -3) 
        : time
}