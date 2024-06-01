type eventNoArg = () => void;
type eventArg<T> = (e: T) => void;

export type { eventNoArg, eventArg };
