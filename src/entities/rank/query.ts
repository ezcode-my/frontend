import ApiHelper from '@/api/client/api';
import { API_URL } from '@/api/constants/api.constants';
import { useQuery } from '@tanstack/react-query';
import { TRankings } from '../rankings/actions/getRankings.actions.types';

export const getRankAlltime = () => {
  return useQuery({
    queryKey: ['rank'],
    queryFn: async () => {
      const response = await ApiHelper.get<TRankings>(API_URL.RANK.ALL_TIME);
      return response.data.result;
    },
    staleTime: 1000 * 60 * 5,
  });
};

export const getRankThisWeek = () => {
  return useQuery({
    queryKey: ['rank-thisWeek'],
    queryFn: async () => {
      const response = await ApiHelper.get<TRankings>(API_URL.RANK.WEEKLY);
      return response.data.result;
    },
    staleTime: 1000 * 60 * 5,
  });
};

export const getRankLastWeek = () => {
  return useQuery({
    queryKey: ['rank-lastWeek'],
    queryFn: async () => {
      const response = await ApiHelper.get<TRankings>(API_URL.RANK.LASTWEEK);
      return response.data.result;
    },
    staleTime: 1000 * 60 * 5,
  });
};

export const getRankAroundMe = (period: 'all-time' | 'weekly' | 'last-week') => {
  return useQuery({
    queryKey: ['rank-me-around', period],
    queryFn: async () => {
      const response = await ApiHelper.get<TRankings>(API_URL.RANK.AROUNDEME, {
        params: {
          period: period,
        },
      });
      return response.data.result;
    },
    staleTime: 1000 * 60 * 5,
  });
};
