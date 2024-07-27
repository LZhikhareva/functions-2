import { user, defineHealth } from "../src/js/app.js";
describe("defineHealth", () => {
  it("should log 'critical' if health is less than or equal to 15", () => {
    const mockUser = { ...user, health: 10 };
    console.log = jest.fn();
    defineHealth(mockUser);
    expect(console.log).toHaveBeenCalledWith("critical");
  });
});