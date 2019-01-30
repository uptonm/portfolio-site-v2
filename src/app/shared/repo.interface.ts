import { RepoUpdate } from "./repoUpdate.interface";
export interface Repo {
  id: string;
  repo_name: string;
  description: string;
  url: string;
  language: string;
  last_update: RepoUpdate;
}
