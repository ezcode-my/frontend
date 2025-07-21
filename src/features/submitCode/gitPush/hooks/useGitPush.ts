import {
  useGetGitHubRepo,
  useGitPushAutoToggleMutation,
  useGitRepoChoice,
} from '@/entities/submitCode';
import { useEffect, useState } from 'react';

export default function useGitPush() {
  const [currentRepo, setCurrentRepo] = useState('');

  const { mutateAsync: pushAutoToggle } = useGitPushAutoToggleMutation();
  const { mutateAsync: choiceRepo } = useGitRepoChoice();
  const { data: userRepos } = useGetGitHubRepo();

  useEffect(() => {
    if (userRepos) {
      setCurrentRepo(userRepos[0].repoName);
    }
  }, [userRepos]);
  return {
    pushAutoToggle,
    choiceRepo,
    userRepos,
    currentRepo,
    setCurrentRepo,
  };
}
