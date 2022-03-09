export class ApiError extends Error {
    status;
    errors;

    constructor(status, message, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static AdminAuthError() {
        return new ApiError(401, 'Пользователь не является админом')
    }

}