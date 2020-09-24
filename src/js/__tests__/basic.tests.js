import showHealthStatus from '../app';

test('should health status', () => {
  const healthStatus = showHealthStatus({ name: 'Маг', health: 90 });
  const expexted = 'healthy';

  expect(healthStatus).toBe(expexted);
});

test('should health status', () => {
  const healthStatus = showHealthStatus({ name: 'Маг', health: 51 });
  const expexted = 'healthy';

  expect(healthStatus).toBe(expexted);
});

test('should health status', () => {
  const healthStatus = showHealthStatus({ name: 'Маг', health: 50 });
  const expexted = 'wounded';

  expect(healthStatus).toBe(expexted);
});

test('should health status', () => {
  const healthStatus = showHealthStatus({ name: 'Маг', health: 15 });
  const expexted = 'wounded';

  expect(healthStatus).toBe(expexted);
});

test('should health status', () => {
  const healthStatus = showHealthStatus({ name: 'Маг', health: 14 });
  const expexted = 'critical';

  expect(healthStatus).toBe(expexted);
});
