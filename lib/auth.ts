// Placeholder auth utilities — swap for Clerk hooks in production
// These let portal pages compile and render a gated UI without a real auth provider yet.

export interface PortalUser {
  id: string;
  name: string;
  email: string;
  fundName: string;
  fundSlug: string;
}

export const MOCK_USER: PortalUser = {
  id: "user_demo",
  name: "Demo Client",
  email: "demo@example.com",
  fundName: "Demo Impact Fund",
  fundSlug: "demo-impact-fund",
};
