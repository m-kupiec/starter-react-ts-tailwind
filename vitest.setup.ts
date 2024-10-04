import { server } from "./src/tests/mocks/server.ts";
import { afterEach, beforeAll, afterAll } from "vitest";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
