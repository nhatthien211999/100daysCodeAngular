export interface Author {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    ipAddress: string;
  }

export const authors = [
    {
        id: 1,
        firstName: 'Thien',
        lastName: 'Le',
        email: 'thien123@gmail.com',
        gender: 'male',
        ipAddress: 'hcm'
    },
    {
        id: 2,
        firstName: 'Cuong',
        lastName: 'Nguyen',
        email: 'Cuong@gmail.com',
        gender: 'male',
        ipAddress: 'hcm'
    },
    {
        id: 3,
        firstName: 'Thuan',
        lastName: 'Nguyen',
        email: 'thuan@gmail.com',
        gender: 'male',
        ipAddress: 'hcm'
    }
]