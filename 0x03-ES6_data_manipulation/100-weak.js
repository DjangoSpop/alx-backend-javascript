export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  const { protocol, name } = endpoint;
  weakMap.set(endpoint, 1 + (weakMap.get(endpoint) || 0));
  if (weakMap.get(endpoint) >= 5){
    throw Error('Endpoint load is high');
  }
  // You can use the protocol and name variables here to make your API request
}
