// LeetCode API Service
class LeetCodeService {
  constructor() {
    this.apiURL = 'https://leetcode-api-faisalshohag.vercel.app';
    this.username = 'subhash613d'; // Your LeetCode username
  }

  // Fetch user data from the working API
  async fetchFromAPI() {
    const response = await fetch(`${this.apiURL}/${this.username}`);
    
    if (!response.ok) {
      throw new Error(`API error! status: ${response.status}`);
    }

    return await response.json();
  }

  // Fetch user statistics
  async fetchUserStats() {
    try {
      console.log('🔄 Attempting to fetch LeetCode stats from API...');
      const data = await this.fetchFromAPI();

      console.log('✅ Successfully fetched live LeetCode data');
      return this.processAPIData(data);
    } catch (error) {
      console.warn('⚠️ Failed to fetch live LeetCode data:', error.message);
      console.log('📊 Using cached LeetCode statistics');
      return this.getFallbackStats();
    }
  }

  // Process data from the new API
  processAPIData(data) {
    // Calculate top percentage based on ranking
    const topPercentage = data.ranking ? ((data.ranking / 3000000) * 100).toFixed(1) + '%' : '8.5%';

    return {
      problems: {
        totalSolved: data.totalSolved || 1190,
        easy: data.easySolved || 326,
        medium: data.mediumSolved || 674,
        hard: data.hardSolved || 190,
      },
      contests: {
        rating: 2000, // This API doesn't provide contest rating, using static value
        attendedContests: 60, // Static value
        globalRanking: data.ranking || 11961,
        topPercentage: topPercentage,
      },
      profile: {
        ranking: data.ranking || 11961,
        contributionPoint: data.contributionPoint || 1800,
        reputation: data.reputation || 31
      },
      submissions: {
        totalSubmissions: data.matchedUserStats?.acSubmissionNum?.find(s => s.difficulty === 'All')?.submissions || 1736,
        easySubmissions: data.matchedUserStats?.acSubmissionNum?.find(s => s.difficulty === 'Easy')?.submissions || 439,
        mediumSubmissions: data.matchedUserStats?.acSubmissionNum?.find(s => s.difficulty === 'Medium')?.submissions || 1010,
        hardSubmissions: data.matchedUserStats?.acSubmissionNum?.find(s => s.difficulty === 'Hard')?.submissions || 287
      },
      lastUpdated: new Date().toISOString(),
      isFallback: false,
      dataSource: 'Live from LeetCode API'
    };
  }



  // Fallback stats in case API fails - using real LeetCode data
  getFallbackStats() {
    return {
      problems: {
        totalSolved: 1190,
        easy: 326,
        medium: 674,
        hard: 190,
      },
      contests: {
        rating: 2000,
        attendedContests: 60,
        globalRanking: 11961,
        topPercentage: '8.5%',
      },
      profile: {
        ranking: 11961
      },
      submissions: {
        totalSubmissions: 3060,
        easySubmissions: 597,
        mediumSubmissions: 1727,
        hardSubmissions: 736
      },
      lastUpdated: new Date().toISOString(),
      isFallback: true,
      dataSource: 'Cached from LeetCode profile'
    };
  }

  // Get badge based on rating
  getBadge(rating) {
    if (rating >= 2100) return { name: 'Guardian', color: 'from-purple-500 to-purple-700' };
    if (rating >= 1900) return { name: 'Knight', color: 'from-blue-500 to-blue-700' };
    if (rating >= 1600) return { name: 'Specialist', color: 'from-green-500 to-green-700' };
    if (rating >= 1400) return { name: 'Expert', color: 'from-cyan-500 to-cyan-700' };
    if (rating >= 1200) return { name: 'Pupil', color: 'from-gray-500 to-gray-700' };
    return { name: 'Newbie', color: 'from-gray-400 to-gray-600' };
  }

  // Format numbers for display
  formatNumber(num) {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  }
}

// Export singleton instance
export const leetcodeService = new LeetCodeService();
export default leetcodeService;
