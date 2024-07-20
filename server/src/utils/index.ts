import dotenv from "dotenv";

dotenv.config();

const getEnvVar = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Environment variable ${name} is not defined`);
  }
  return value;
};

export default {
  getEnvVar,
};
