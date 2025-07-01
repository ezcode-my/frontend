'use server';

import ApiHelper from '@/api/client/api';
import { IProblemResult, ProblemId } from '../types/problem.type';
import { API_URL } from '@/api/constants/api.constants';

const reqType = 'server';

//문제 불러오기
export const getProblem = async (problemId: ProblemId) => {
  try {
    const response = await ApiHelper.get<IProblemResult>(
      `${API_URL.PROBLEM.GET_PROBLEMS}/${problemId}`,
      { reqType: reqType }
    );
    return response.data.result;
  } catch (error) {
    console.error(error);
  }
};
