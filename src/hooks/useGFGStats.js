import { useState, useEffect } from 'react';
import gfgService from '../services/gfgService';

export const useGFGStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStats = async () => {
    try {
      setLoading(true);
      setError(null);
      const statsData = await gfgService.fetchGFGStats();
      setStats(statsData);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching GFG stats:', err);
    } finally {
      setLoading(false);
    }
  };

  const refreshStats = () => {
    fetchStats();
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return {
    stats,
    loading,
    error,
    refreshStats
  };
};
