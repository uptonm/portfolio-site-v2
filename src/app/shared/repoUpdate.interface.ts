export interface RepoUpdate {
  id: string;
  timestamp: string;
  message: string;
  url: string;
  author: {
    name: string;
    email: string;
    username: string;
    avatar_url: string;
  };
  changes: {
    added: [];
    modified: [];
    removed: [];
  };
}
