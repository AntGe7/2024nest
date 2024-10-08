import { ArgumentsHost } from "./arguments-host.interface";
export interface ExecutionContext extends ArgumentsHost {
    getClass<T = any>(): T;
    getHandler(): Function;
}
