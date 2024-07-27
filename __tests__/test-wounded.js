import { user, defineHealth } from "../src/js/app.js";
describe("defineHealth", () => {
  it("should log 'wounded' if health is between 15 and 50", () => {
    const mockUser = { ...user, health: 30 };
    console.log = jest.fn();
    defineHealth(mockUser);
    expect(console.log).toHaveBeenCalledWith("wounded");
  });
});