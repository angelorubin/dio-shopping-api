import { AppDataSource } from "../../database";
import { Message } from "../../entities/Message";
import { validate } from "class-validator";
import { fullname } from "../../utils";

interface IUsers {
  firstname: string;
  lastname: string;
  uuid: string;
  data: [];
}

const createUserService = async ({ data }: IUsers) => {};

const retrieveUserByUuidService = async ({ uuid }: IUsers) => {};

const updateUserByUuidService = async ({ uuid, data }: IUsers) => {};

const deleteUserByUuidService = async ({ uuid }: IUsers) => {};

export {
  createUserService,
  retrieveUserByUuidService,
  updateUserByUuidService,
  deleteUserByUuidService,
};

// CRUD
