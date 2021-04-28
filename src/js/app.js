export default function healthStatus(playerStats) {
  if (playerStats.health > 100 || playerStats.health < 0) {
    throw new Error('Неверное значение здоровья!');
  }

  let status = '';

  if (playerStats.health > 50) {
    status = 'healthy';
  } else if (playerStats.health <= 50 && playerStats.health >= 15) {
    status = 'wounded';
  } else {
    status = 'critical';
  }
  return status;
}
