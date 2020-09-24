export default function showHealthStatus(data) {
  const { health } = data;

  if (health > 50) {
    return 'healthy';
  }

  if (health < 15) {
    return 'critical';
  }

  return 'wounded';
}
