export const user = {
    name: 'Маг', health: 60
}

export function defineHealth(user) {
    if (user.health > 50) {
        console.log('healthy');
    } if (user.health <= 50 && user.health > 15) {
        console.log("wounded");
    } if (user.health <= 15) {
        console.log("critical")
    }
}

defineHealth(user);