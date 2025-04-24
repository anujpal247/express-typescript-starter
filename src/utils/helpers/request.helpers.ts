import { AsyncLocalStorage } from "async_hooks";

type AsyncLocalStorageType = {
  correlationId: string;
};

export const asyncLocalStorage = new AsyncLocalStorage<AsyncLocalStorageType>();

export const getCorrelationId = () => {
  const async_store = asyncLocalStorage.getStore();
  return (
    async_store?.correlationId || "unknown-error-while-creating-correlation-id"
  );
};
