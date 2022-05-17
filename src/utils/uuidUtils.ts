
interface UUIDUtils {
    generateUUID(): string;
}

const generateUUID = () => new Date().getMilliseconds().toString();

export const uuidUtils: UUIDUtils = {
    generateUUID,
};
