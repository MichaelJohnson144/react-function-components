import userEvent from '@testing-library/user-event';

export interface TestMocks {
  fn: ReturnType<typeof vi.fn>;
  state: boolean;
  onChange: ReturnType<typeof vi.fn>;
  onClick: ReturnType<typeof vi.fn>;
  user: ReturnType<typeof userEvent.setup>;
}

export const createTestMocks = ({ state = false }: { state?: boolean } = {}): TestMocks => ({
  fn: vi.fn(),
  state,
  onChange: vi.fn(),
  onClick: vi.fn(),
  user: userEvent.setup(),
});
