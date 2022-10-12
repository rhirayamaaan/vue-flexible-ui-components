export type ValueOf<T> = T[keyof T]

export type PropsWithType<T, V> = { [P in keyof T]: V }
