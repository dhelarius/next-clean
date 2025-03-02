interface Env {
  apiURL: string;
  timeout: string;
}

const env: Env = {
  apiURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: process.env.NEXT_PUBLIC_TIMEOUT
};

export default env;
