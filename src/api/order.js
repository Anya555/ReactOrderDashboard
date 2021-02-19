import { orders } from "./data";

const formatError = (message) => ({
  status: 400,
  body: {
    error: message
  }
});

const formatResponse = (order) => ({
  status: 200,
  body: {
    data: {
      order
    }
  }
});

export const fetchOrder = (orderId) => {
  return new Promise((resolve, reject) => {
    const order = orders[orderId];
    setTimeout(() => {
      if (!!order) {
        resolve(formatResponse(orders[orderId]));
      } else {
        reject(formatError(`Order of id:  ${orderId} does not exist`));
      }
    }, 300);
  });
};
