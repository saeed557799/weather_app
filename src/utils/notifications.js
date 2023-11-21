import { toast } from 'react-toastify';

export const success = (value, option = {}) => toast.success(value, option);
export const error = (value, option = {}) => toast.error(value, option);
export const info = (value, option = {}) => toast.info(value, option);
export const war = (value, option = {}) => toast.warn(value, option);
export const promise = (value, option = {}) => toast.promise(value, option);
