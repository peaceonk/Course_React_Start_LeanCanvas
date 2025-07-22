import axios, { CreateAxiosDefaults } from 'axios';

type axiosOption = Omit<CreateAxiosDefaults, 'baseURL'>;

const createInstance = (baseURL?: string, options?: axiosOption) => {
  console.log('createInstance > baseURL : ', baseURL);
  console.trace();

  return axios.create(
    Object.assign(
      { baseURL: baseURL ? baseURL : import.meta.env.VITE_API_BASE_URL },
      options,
    ),
  );
};

export const baseInstance = createInstance();

// export const testInstance = createInstance(import.meta.env.VITE_API_TEST_URL);

// export const canvases = createInstance('http://localhost:8000/canvases/');
// export const canvases = axios.create({
//   baseURL: 'http://localhost:8000',
// });
