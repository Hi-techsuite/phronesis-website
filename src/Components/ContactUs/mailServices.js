import axios from "axios";
import { CustomResponse } from "./CustomResponse";

export const COMPOSE_EMAIL = async (payload) => {
  const { to, from, message, subject } = payload;

  try {
    const response = await axios.post(
      `https://www.smtp.scaftechservices.com//mailing/compose`,
      payload
    );

    console.log(response);
    return CustomResponse({
      data: response.data,
      message: response.data.message,
      code: 201,
    });
  } catch (error) {
    return CustomResponse({
      message: error.response || error.message,
      error,
      code: 400,
    });
  }
};
