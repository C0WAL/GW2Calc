export const WvwTick = {
    durationMs: 5 * 60 * 1000,
    get durationSeconds() {
        return this.durationMs / 1000;
    },
    get durationMinutes() {
        return this.durationMs / (60 * 1000);
    },
    toString() {
        return `${this.durationMinutes} minutes`;
    }
}