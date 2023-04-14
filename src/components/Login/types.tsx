export type LoginError = {
    error: { [key: string]: string };
    message: string;
};

export type FormErrors = {
    email: string|undefined,
    password: string|undefined,
}
