export function isAuth(): boolean {
    const userItem = localStorage.getItem('user');
    let user = null;

    if (userItem !== null) {
        try {
            user = JSON.parse(userItem);
        } catch (error) {
            user = {};
        }
    }

    if (user?._id) {
        return true;
    } else {
        return false;
    }
}

export function getToken(): string {
    const userItem = localStorage.getItem('user');
    let user = null;

    if (userItem !== null) {
        try {
            user = JSON.parse(userItem);
        } catch (error) {
            user = {};
        }
    }

    if (user?._id) {
        return user.accessToken;
    } else {
        return '';
    }
}