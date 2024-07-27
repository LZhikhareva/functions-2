import { user, defineHealth } from "../src/js/app.js";
describe("defineHealth", () => {
  it("should log 'healthy' if health is greater than 50", () => {
    const mockUser = { ...user, health: 60 };
    console.log = jest.fn();
    defineHealth(mockUser);
    expect(console.log).toHaveBeenCalledWith("healthy");
  });
});