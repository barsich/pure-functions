import healthStatus from '../app';

test.each([
  ['healthy', { health: 51 }],
  ['wounded', { health: 15 }],
  ['critical', { health: 0 }],
])('should determine health status depending on the value of HP', (status, playerHp) => {
  const result = healthStatus(playerHp);
  expect(result).toBe(status);
});

test.each([
  { health: -1 },
  { health: 101 },
])('should throw error if HP value is not correct', (playerHp) => {
  expect(() => healthStatus(playerHp)).toThrow();
});
