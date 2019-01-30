import { RepoUpdate } from './repoUpdate.interface';
export interface Repo {
  id: string;
  name: string;
  description: string;
  url: string;
  last_update: RepoUpdate;
}
