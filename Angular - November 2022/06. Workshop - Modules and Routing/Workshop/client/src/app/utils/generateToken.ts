export function generateUniqueId(): string {
    const timestamp: number = Date.now();
    const randomNum: number = Math.floor(Math.random() * 10000);
    const uniqueId: string = `${timestamp}${randomNum}`;
    return uniqueId;
}