const AUTH_USER_NOT_FOUND = "auth/user-not-found";
const AUTH_TOO_MANY_REQUESTS = "auth/too-many-requests";
const AUTH_WRONG_PASSWORD = "auth/wrong-password";
const AUTH_EMAIL_ALREADY_IN_USE = "auth/email-already-in-use"

export const getErrorMessage = (errorCode: string) => {
    switch (errorCode) {
        case AUTH_USER_NOT_FOUND:
            return 'errors.auth.user-not-found'

        case AUTH_TOO_MANY_REQUESTS:
            return 'errors.auth.too-many-requests'

        case AUTH_WRONG_PASSWORD:
            return 'errors.auth.wrong-password'
        
        case AUTH_EMAIL_ALREADY_IN_USE:
            return 'errors.auth.email-already-in-use'

        default:
            return ''
    }
}