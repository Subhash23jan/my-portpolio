// GeeksforGeeks API Service
class GFGService {
  constructor() {
    this.apiURL = 'https://gfg-stats.tashif.codes';
    this.username = 'subhashbmsce';
  }

  // Fetch GFG statistics from API
  async fetchGFGStats() {
    try {
      console.log('🔄 Fetching GeeksforGeeks statistics...');
      
      const response = await fetch(`${this.apiURL}/${this.username}`);
      
      if (!response.ok) {
        throw new Error(`GFG API error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('✅ Successfully fetched live GFG data');
      
      return this.processGFGData(data);
    } catch (error) {
      console.warn('⚠️ Failed to fetch live GFG data:', error.message);
      console.log('📊 Using cached GFG statistics');
      
      return this.getFallbackStats();
    }
  }

  // Process GFG API data
  processGFGData(data) {
    return {
      stats: {
        totalSolved: data.totalProblemsSolved?.toString() || '699',
        school: data.School?.toString() || '1',
        basic: data.Basic?.toString() || '25',
        easy: data.Easy?.toString() || '220',
        medium: data.Medium?.toString() || '410',
        hard: data.Hard?.toString() || '43',
        globalRating: '1805',
        overallScore: '2245',
        stars: '4⭐'
      },
      achievements: [
        `${data.totalProblemsSolved || 699} Problems Solved`,
        '4 Star Rating',
        'Global Rating: 1805',
        'Overall Score: 2245',
        `${data.Medium || 410} Medium Problems Solved`,
        `${data.Hard || 43} Hard Problems Solved`
      ],
      lastUpdated: new Date().toISOString(),
      isFallback: false,
      dataSource: 'Live from GeeksforGeeks API'
    };
  }

  // Fallback stats if API fails
  getFallbackStats() {
    return {
      stats: {
        totalSolved: '699',
        school: '1',
        basic: '25',
        easy: '220',
        medium: '410',
        hard: '43',
        globalRating: '1805',
        overallScore: '2245',
        stars: '4⭐'
      },
      achievements: [
        '699 Problems Solved',
        '4 Star Rating',
        'Global Rating: 1805',
        'Overall Score: 2245',
        '410 Medium Problems Solved',
        '43 Hard Problems Solved'
      ],
      lastUpdated: new Date().toISOString(),
      isFallback: true,
      dataSource: 'Cached from GFG profile'
    };
  }

  // Get badge based on star rating
  getBadge(stars) {
    if (stars >= 5) return { name: 'Expert', color: 'red' };
    if (stars >= 4) return { name: '4 Star Coder', color: 'purple' };
    if (stars >= 3) return { name: '3 Star Coder', color: 'blue' };
    if (stars >= 2) return { name: '2 Star Coder', color: 'green' };
    if (stars >= 1) return { name: '1 Star Coder', color: 'orange' };
    return { name: 'Beginner', color: 'gray' };
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
const gfgService = new GFGService();
export default gfgService;
