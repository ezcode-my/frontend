'use server';

import ApiHelper from '@/api/client/api';
import { IProblemResult, ProblemId } from '../types/problem.type';
import { API_URL } from '@/api/constants/api.constants';
// import { IProblemRequestData } from '../types/request.data.type';
// import { IProblemResponseData, ITestCase } from '../types/problem.response.data.type';
// import useConnectProblemWebSocket from '../hooks/useConnectProblemWebSocket';

//문제 불러오기
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

// //테스트 케이스 불러오기
// export const getTestCase = async (problemId: ProblemId, accessToken: string) => {
//   try {
//     const response = await ApiHelper.get<ITestCase[]>(
//       `${API_URL.PROBLEM.GET_TEST_CASE}/${problemId}/testcases`,
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );
//     if (response.data.status !== 200) {
//       throw new Error(`테스트 케이스 불러오기 실패: ${response.data.message}`);
//     }

//     return response.data.result;
//   } catch (error) {
//     console.error(error);
//   }
// };
