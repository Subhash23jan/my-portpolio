import { useState, useEffect } from 'react';
import leetcodeService from '../services/leetcodeService';

export const useLeetCodeStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await leetcodeService.fetchUserStats();
        setStats(data);
      } catch (err) {
        console.error('Failed to fetch LeetCode stats:', err);
        setError(err.message);
        
        // Use fallback data on error
        const fallbackData = leetcodeService.getFallbackStats();
        setStats(fallbackData);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const refreshStats = async () => {
    setLoading(true);
    try {
      const data = await leetcodeService.fetchUserStats();
      setStats(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    stats,
    loading,
    error,
    refreshStats,
  };
};
