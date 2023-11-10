let isEven: boolean = false;

type User = {
    name: string,
    age: number
}

interface Iuser {
    firstName: string,
    id: number
};

const usersList: Iuser[] = [{ firstName: 'Ivan', id: 1 }];

usersList.forEach(x => console.log(x));

const user: User = {
    name: 'Pesho',
    age: 21
};