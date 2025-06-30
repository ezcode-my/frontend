import ApiHelper from '@/api/client/api';
import { IProblemResult, ProblemId } from '../types/problem.type';
import { API_URL } from '@/api/constants/api.constants';

export const getProblem = async (problemId: ProblemId, accessToken: string) => {
  try {
    const response = await ApiHelper.get<IProblemResult>(
      `${API_URL.PROBLEM.GET_PROBLEMS}/${problemId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data.result;
  } catch (error) {
    console.error(error);
  }
};
