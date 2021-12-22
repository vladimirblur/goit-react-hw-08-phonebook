import { createAction } from "@reduxjs/toolkit";

export const filterChange = createAction("contacts/changeFilter", (filter) => ({
  payload: { filter },
}));
